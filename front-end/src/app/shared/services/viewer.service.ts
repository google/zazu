import { UserService } from './user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ReportViewModel from '../view-models/report.viewmodel';
import { ReportService } from './report.service';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  constructor(private http: HttpClient, private reportService: ReportService, private authService: AuthService, private userService: UserService) {}
  userID: string;
  reports;
  currentOrganization;
  organizations;
  user;
  status;

  setUserID(id) {
    this.userID = id;
  }

  async getReports() {
    if (!this.reports) {
      try {
        this.reports = await this.reportService.getReportByUser(this.userID);
      } catch (error) {
        console.log(error);
      }
    }
    return this.reports;
  }

  async getReport(reportID): Promise<ReportViewModel.Report> {
    return this.reportService.getReportNoMetaData(reportID, 'temp');
  }

  async reportsCount() {
    if (!this.reports) {
      await this.getReports();
    }
    return await this.reports.length;
  }

  getOrganizations() {
    return this.organizations;
  }

  getOrganization(id) {
    return this.organizations.find( x => x._id === id);
  }

  getReportsByOrganization(orgID) {
    return this.reports.filter(report => report.organization._id === orgID);
  }

  chooseOrganization(orgID) {
    this.currentOrganization = this.organizations.find(org => org._id === orgID);
  }

  public reportsCountByOrg(orgID) {
    return this.getReportsByOrganization(orgID).length;
  }

  public async initializeGhost(org) {
    return await this.http.post('/api' + '/initGhost', org).toPromise();
  }

  async initialSet() {
    try {
      const status = await this.authService.isLoggedIn();
      console.log(status);
      this.user = await this.userService.getUser(status.user);
      console.log(this.user);
      this.reports = await this.reportService.getReportByUser(status.user);
      console.log(this.reports);
      const orgs = [];
      for (const rep of this.reports) {
        console.log(rep);
        if (orgs.findIndex(x => x._id === rep.organization._id) === -1) {
          const temp = {
            _id: rep.organization._id,
            name: rep.organization.name,
            reportsCount: null
          };
          orgs.push(temp);
        }
      }
      this.organizations = orgs;
      for (const org of this.organizations) {
        org.reportsCount =  this.reportsCountByOrg(org._id);
      }
      console.log(this.organizations);
    } catch (error) {}
  }
}

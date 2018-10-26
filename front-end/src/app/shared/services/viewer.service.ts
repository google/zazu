import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ReportViewModel from '../view-models/report.viewmodel';
import { ReportService } from './report.service';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private http: HttpClient, private reportService: ReportService) { }
  userID: string;
  reports: ReportViewModel.SimpleReport[];

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
      return this.reportService.getReportNoMetaData(reportID);
  }

  async reportsCount() {
    if (!this.reports) {
      await this.getReports();
    }
    return await this.reports.length;
  }

}

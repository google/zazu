import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import * as ReportViewModel from '../view-models/report.viewmodel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService, public snackBar: MatSnackBar) {}
  URL = '../../../assets/example-data/';

  private reports = [];

  /**
   * Gets all the reports for all organizations
   */
  public async getAllReports(): Promise<ReportViewModel.SimpleReport[]> {
    try {
      // const raw = await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getAllReports').toPromise();
      // const raw = await this.http.get<ReportViewModel.SimpleRawReport[]>('../../../assets/example-data/reports.mockdata.json').toPromise();
      /*
      const status =  await <any>this.http.get('/api' + '/getAllReports').toPromise();
      let raw = [];
      if (status.status === '200') {
        raw =  status.reports;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    */
      let raw = [];
      const status = await (<any>this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getAllReports').toPromise());
      if (status.status) {
        if (status.status === '200') {
          raw = status.reports;
        } else if (status.status === '500') {
          throw new Error(status.message);
        }
      } else {
        raw = status;
      }
      this.reports = raw;
      const reports = await this.cleanSimpleRawReport(raw);
      return await reports;
    } catch (error) {
      this.snackBar.open(error.message, 'Dismiss', {
        duration: 5000
      });
      throw new Error(error.message);
    }
  }

  /**
   * Should be the same call as getAllReports()
   * but this one keeps the org[]
   */
  public async getAllRawReports(): Promise<ReportViewModel.SimpleRawReport[]> {
    // return await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getAllReports').toPromise();

    try {
      const status = await (<any>this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getAllReports').toPromise());
      if (status.status) {
        if (status.status === '200') {
          return await status.reports;
        } else if (status.status === '500') {
          throw new Error(status.message);
        }
      } else {
        return status;
      }
    } catch (error) {
      this.snackBar.open(error.message, 'Dismiss', {
        duration: 5000
      });
      throw new Error(error.message);
    }
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllReports').toPromise();
      if (status.status === '200') {
        return await status.reports;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
  }

  /**
   * Seperates a report if it has more than one organization tied to it
   * @param rawReports reports from server that has organization array
   */
  private async cleanSimpleRawReport(rawReports: ReportViewModel.SimpleRawReport[]): Promise<ReportViewModel.SimpleReport[]> {
    const reports: ReportViewModel.SimpleReport[] = [];
    for (const report of rawReports) {
      console.log(report);
      if (report.organizations.length > 1) {
        for (const org of report.organizations) {
          const temp1 = {
            name: report.name,
            _id: report._id,
            created_at: report.created_at,
            organization: org
          };
          reports.push(temp1);
        }
      } else {
        const temp2 = {
          name: report.name,
          _id: report._id,
          created_at: report.created_at,
          organization: report.organizations[0]
        };
        reports.push(temp2);
      }
    }
    console.log(reports);
    return await reports;
  }

  /**
   *  Gets the reports for a specific organization.
   * @param orgID ID of a specific organization
   * Used for Organization Details view
   */
  public async getReportsByOrganization(orgID: string): Promise<ReportViewModel.SimpleReport[]> {
    try {
      // const raw = await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByOrganization/' + orgID).toPromise();
      // const raw = await this.http.get<ReportViewModel.SimpleRawReport[]>('../../../assets/example-data/reports.mockdata.json').toPromise();
      /*
      const status =  await <any>this.http.get('/api' + '/getReportByOrganization/' + orgID).toPromise();
      let raw = [];
      if (status.status === '200') {
        raw =  status.reports;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    */

      let raw = [];
      const status = await (<any>this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByOrganization/' + orgID).toPromise());
      if (status.status) {
        if (status.status === '200') {
          raw = status.reports;
        } else if (status.status === '500') {
          throw new Error(status.message);
        }
      } else {
        raw = status;
      }
      this.reports = raw;
      console.log(this.reports);
      const reports = (await this.cleanSimpleRawReport(raw)).filter(report => {
        return report.organization._id === orgID;
      });
      return reports;
    } catch (error) {
      this.snackBar.open(error, 'Dismiss', {
        duration: 5000
      });
    }
  }

  /**
   * Get all reports for this user
   */
  public async getReportByUser(userID: string): Promise<ReportViewModel.SimpleReport[]> {
    try {
      console.log('Get Report By User called');
      // const allReports = await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByUser/' + userID).toPromise();

      let raw = [];
      const status = <any> await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByUser/' + userID).toPromise();
      if (status.status) {
        if (status.status === '200') {
          raw = status.reports;
          this.reports = raw;
        } else if (status.status === '500') {
          throw new Error(status.message);
        }
      } else {
        raw = status;
      }
      /*
      const status =  await <any>this.http.get('/api' + '/getReportByOrganization/' + orgID).toPromise();
      let allReports = [];
      if (status.status === '200') {
        allReports =  status.reports;
        this.reports = allReports;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
      */
      /*
      const user = await this.userService.getUser(userID);
      const allReports = [];
      for (const org of user.organizations) {
        const tempReports = await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByOrganization/' + org._id).toPromise();
        for ( const rep of tempReports) {
          if (allReports.findIndex(x => x._id === rep._id) === -1) {
            allReports.push(rep);
          }
        }
      */
      const reports = await this.cleanSimpleRawReport(raw);
      return reports;
    } catch (error) {
      console.log(error);
    }
  }

  /** Get All raw reports by user */
  public async getRawReportsByUser(userID: string): Promise<ReportViewModel.SimpleRawReport[]> {
    try {
      console.log('Get Report By User called');
      // const allReports = await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByUser/' + userID).toPromise();
      let raw = [];
      const status = <any> await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByUser/' + userID).toPromise();
      if (status.status) {
        if (status.status === '200') {
          raw = status.reports;
          this.reports = raw;
          return raw;
        } else if (status.status === '500') {
          throw new Error(status.message);
        }
      } else {
        raw = status;
        return raw;
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Gets all the details(with meta data) for a specific report and specific organization view
   * @param reportId - ID of the specific report
   * @param orgID - ID of the organization whose report POV you want to show
   */
  public async getReport(reportID, orgID) {
    /*
    if ( this.reports.length === 0) {
      console.log('Taken from API report');
      const raw = await this.http.get<ReportViewModel.ReportWithMetaData[]>('/api' + '/getAllReports').toPromise();
      console.log(raw);
      const report = raw.find(element => {
        return element._id === reportID;
      });
      return <ReportViewModel.ReportWithMetaData>report;
    } else {
      console.log('Taken from LOCAL REPORT');
      const report = this.reports.find(element => {
        return element._id === reportID;
      });
      return await <ReportViewModel.ReportWithMetaData>report;
    }*/
    try {
      const status = <any> await this.http.get<ReportViewModel.ReportWithMetaData>('/api' + '/getAllReports/' + reportID).toPromise();
      if (status.status) {
        if (status.status === '200') {
          return await status.report;
        } else if (status.status === '500' ) {
          throw new Error(status.message);
        }
      } else {
        return status;
      }
    } catch (error) {
      this.snackBar.open( error.message , 'Dismiss', {
        duration: 5000,
      });
      throw new Error(error.message);
    }
    // return await this.http.get<ReportViewModel.ReportWithMetaData>('/api' + '/getAllReports/' + reportID).toPromise();
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllReports/' + reportID).toPromise();
      if (status.status === '200') {
        return await status.report;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */


  }

  /**
   * Gets all report details for editing report
   * @param reportId - ID of the specific report
   */
  public async getReportDetails(reportID): Promise<ReportViewModel.ReportDetails> {
    try {
      const status = <any> await this.http.get<ReportViewModel.ReportDetails>('/api' + '/getAllReports/' + reportID).toPromise();
      if (status.status) {
        if (status.status === '200') {
          return await status.report;
        } else if (status.status === '500' ) {
          throw new Error(status.message);
        }
      } else {
        return status;
      }
    } catch (error) {
      this.snackBar.open( error.message , 'Dismiss', {
        duration: 5000,
      });
      throw new Error(error.message);
    }
    // return await this.http.get<ReportViewModel.ReportDetails>('/api' + '/getAllReports/' + reportID).toPromise();
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllReports/' + reportID).toPromise();
      if (status.status === '200') {
        return await status.report;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
  }

  /**
   * Gets a specific report with no metadata for a specific report and specific organization view
   * @param reportId - ID of the specific report
   * @param orgID - ID of the organization whose report POV you want to show
   */
  public async getReportNoMetaData(reportID, orgID): Promise<ReportViewModel.Report> {
    return await this.http.get<ReportViewModel.Report>('/api' + '/getAllReports/' + reportID).toPromise();
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllReports/' + reportID).toPromise();
      if (status.status === '200') {
        return await status.report;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
  }

  /**
   * Create new Report
   * @param report - report object
   */
  public async createNewReport(report: ReportViewModel.CreateNewReport) {
    console.log('Report Created: ' + report);
    if (await this.authService.canSend()) {
      return await this.http.post('/api' + '/createReport/', report).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Share report by giving an organization access to it
   * @param report - the report object you want to share
   * @param org - organization object you want to share the report with
   */
  public async shareReport(report, org) {
    console.log('Share Access');
    const param = {
      report: report,
      organization: org
    };
    console.log(param);
    if (await this.authService.canSend()) {
      return await this.http.post('/api' + '/shareReport/', param).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Editing Report
   * @param report - report object
   */
  public async editReport(oldReport, newReport) {
    const params = {
      oldReport: oldReport,
      newReport: newReport
    };
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'editReport/', params).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Delete Organization Acccess for this report
   * @param report - the report object you want to revoke access too
   * @param org - organization object you want to unshare the report to
   */
  public async deleteOrgAccess(report, permissions, org) {
    const params = {
      report: report,
      permissions: permissions,
      organization: org
    };
    console.log('Delete Access');
    console.log(params);
    if (await this.authService.canSend()) {
      return await this.http.post('/api' + '/unshareReport/', params).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Delete Report.
   * Calls the permissions API  then sends it to delete API along with the report object
   * @param report - report object you want to delete
   */
  public async deleteReport(report: ReportViewModel.ReportWithMetaData, permissions) {
    console.log('report deleted: ' + JSON.stringify(report));
    if (await this.authService.canSend()) {
      const parameter = {
        report: report,
        permissions: permissions
      };
      console.log(parameter);
      return await this.http.post('/api/' + 'deleteReport/', parameter).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Helper used in delete report.
   * To retrieve the list of file permissions to be revoked
   */
  public async getPermissionsToRevoke(report, users) {
    if (await this.authService.canSend()) {
      console.log('Getting permissions called...');
      // for unsharing report  organizaiton
      if (users != null) {
        const params = {
          report: report,
          users: users
        };
        console.log(params);
        return await this.http.post('/api/' + 'getPermissionsToRevoke/', params).toPromise();
      } else {
        // for delete report
        const params = {
          report: report,
          users: null
        };
        return await this.http.post('/api/' + 'getPermissionsToRevoke/', params).toPromise();
      }
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }



  public async getReportMock() {
    return await this.http.get('../../../assets/example-data/report-mock.mockdata.json').toPromise();
  }
}

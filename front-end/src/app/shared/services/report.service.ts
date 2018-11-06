import { Injectable } from '@angular/core';
import * as ReportViewModel from '../view-models/report.viewmodel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) {}
  URL = '../../../assets/example-data/';

  /**
   * Gets all the reports for all organizations
   */
  public async getAllReports(): Promise<ReportViewModel.SimpleReport[]> {
    try {
      const raw = await this.http
        .get<ReportViewModel.SimpleRawReport[]>(
          '/api' + '/getAllReports'
        )
        .toPromise();
      console.log(raw);
      const reports = await this.cleanSimpleRawReport(raw);
      return await reports;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Should be the same call as getAllReports()
   * but this one keeps the org[]
   */
  public async getAllRawReports(): Promise<ReportViewModel.SimpleRawReport[]> {
    return await this.http
      .get<ReportViewModel.SimpleRawReport[]>(
        '/api' + '/getAllReports'
      )
      .toPromise();
  }

  /**
   * Seperates a report if it has more than one organization tied to it
   * @param rawReports reports from server that has organization array
   */
  private async cleanSimpleRawReport(
    rawReports: ReportViewModel.SimpleRawReport[]
  ): Promise<ReportViewModel.SimpleReport[]> {
    const reports: ReportViewModel.SimpleReport[] = [];
    for (const report of rawReports) {
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
    return await reports;
  }

  /**
   *  Gets the reports for a specific organization.
   * @param orgID ID of a specific organization
   * Used for Organization Details view
   */
  public async getReportsByOrganization(
    orgID: string
  ): Promise<ReportViewModel.SimpleReport[]> {
    try {
      const raw = await this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByOrganization/' + orgID).toPromise();
      console.log(raw);
      console.log(this.http.get<ReportViewModel.SimpleRawReport[]>('/api' + '/getReportByOrganization/' + orgID).toPromise());
      const reports = (await this.cleanSimpleRawReport(raw)).filter(report => {
        return report.organization._id === orgID;
      });
      return reports;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Get all reports for this user
   */
  public async getReportByUser(
    userID: string
  ): Promise<ReportViewModel.SimpleReport[]> {
    try {
      const raw = await this.http
        .get<ReportViewModel.SimpleRawReport[]>(
          '/api' + '/getReportByUser/' + userID
        )
        .toPromise();
      const reports = await this.cleanSimpleRawReport(raw);
      return reports;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Gets all the details(with meta data) for a specific report and specific organization view
   * @param reportId - ID of the specific report
   * @param orgID - ID of the organization whose report POV you want to show
   */
  public async getReport(
    reportID,
    orgID
  )  {

    const raw = await this.http
        .get<ReportViewModel.SimpleRawReport[]>(
          '/api' + '/getAllReports'
        )
        .toPromise();

    const report = raw.find( element => {
      return element._id === reportID;
    });

    return  <ReportViewModel.ReportWithMetaData>report;
    /*
    return await this.http
      .get<ReportViewModel.ReportWithMetaData>(
        '/api' + 'single-report-with-meta.mockdata.json',
        {
          params: {
            reportID: reportID,
            orgID: orgID
          }
        }
      )
      .toPromise();
      */
  }

  /**
   * Gets all report details for editing report
   * @param reportId - ID of the specific report
   */
  public async getReportDetails(
    reportID
  ): Promise<ReportViewModel.ReportDetails> {
    return await this.http
      .get<ReportViewModel.ReportDetails>(
        '/api' + '/getAllReports/' + reportID
      )
      .toPromise();
  }

  /**
   * Gets a specific report with no metadata for a specific report and specific organization view
   * @param reportId - ID of the specific report
   * @param orgID - ID of the organization whose report POV you want to show
   */
  public async getReportNoMetaData(
    reportID,
    orgID
  ): Promise<ReportViewModel.Report> {
    return await this.http
      .get<ReportViewModel.Report>(
        '/api' + '/getAllReports',
        {
          params: {
            reportID: reportID,
            orgID: orgID
          }
        }
      )

      .toPromise();
  }

  /**
   * Create new Report
   * @param report - report object
   */
  public async createNewReport(report: ReportViewModel.CreateNewReport) {
    console.log('Report Created: ' + report);
    return await this.http.post('/api' + '/createReport/', report).toPromise();
  }

  /**
   * Share report by giving an organization access to it
   * @param report - the updated report object with new organization
   */
  public async shareReport(report) {

    console.log('Share Access for ' + JSON.stringify(report));
    return await this.http
      .post(this.URL + 'shareReport/', report)
      .toPromise();
  }

  /**
   * Editing Report
   * @param report - report object
   */
  public async editReport(report: ReportViewModel.EditReport) {
    return await this.http.post('/api/' + 'editReport/', report).toPromise();
  }

  /**
   * Delete Organization Acccess for this report
   * @param reportID - Report ID
   * @param orgID - Organization ID of the organization in which should have their access revoked for this report
   */
  public async deleteOrgAccess(reportID, orgID) {
    const params = {
      reportID: reportID,
      orgID: orgID
    };
    console.log('Delete Access for ' + JSON.stringify(params));
    return await this.http
      .post(this.URL + 'deleteOrgAccess/', params)
      .toPromise();
  }

  /**
   * Delete Report
   * @param reportID - ID of the report you want to delete
   */
  public async deleteReport(report: ReportViewModel.ReportWithMetaData) {
    console.log('report deleted: ' + JSON.stringify(report));
    return await this.http.post('/api/' + 'deleteReport/', report).toPromise();
  }
}

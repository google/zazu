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
          this.URL + 'reports.mockdata.json'
        )
        .toPromise();
      const reports = await this.cleanSimpleRawReport(raw);
      return await reports;
    } catch (error) {
      console.log(error);
    }
  }

  /** */
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
            date: report.date,
            organization: org
          };
          reports.push(temp1);
        }
      } else {
        const temp2 = {
          name: report.name,
          _id: report._id,
          date: report.date,
          organization: report.organizations[0]
        };
        reports.push(temp2);
      }
    }
    return await reports;
  }

  /**
   * Gets all the details(with meta data) for a specific report
   * @param reportId - ID of the specific report
   * @param orgID - ID of the organization whose report POV you want to show
   */
  public async getReport(
    reportID,
    orgID
  ): Promise<ReportViewModel.ReportWithMetaData> {
    return await this.http
      .get<ReportViewModel.ReportWithMetaData>(
        this.URL + 'single-report-with-meta.mockdata.json'
      )
      .toPromise();
  }

  /**
   * Gets a specific report with no metadata
   * @param reportId - ID of the specific report
   * @param orgID - ID of the organization whose report POV you want to show
   */
  public async getReportNoMetaData(
    reportID,
    orgID
  ): Promise<ReportViewModel.Report> {
    return await this.http
      .get<ReportViewModel.Report>(
        this.URL + 'single-report-with-meta.mockdata.json'
      )
      .toPromise();
  }

  /**
   *  Gets the reports for a specific organization.
   * @param orgID ID of a specific organization
   * Used for Organization Details view
   */
  public async getReportByOrganization(
    orgID: string
  ): Promise<ReportViewModel.SimpleReport[]> {
    try {
      const raw = await this.http
        .get<ReportViewModel.SimpleRawReport[]>(
          this.URL + 'reports.mockdata.json'
        )
        .toPromise();
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
    return await this.http
      .get<ReportViewModel.SimpleReport[]>(this.URL + 'reports.mockdata.json')
      .toPromise();
  }

  /**
   *  Gets the reports for organization(s). Can be more than one
   * @param orgIDs Array of the Organization IDs
   */
  public async getReportByOrganizations(
    orgIDs: string[]
  ): Promise<ReportViewModel.SimpleReport[]> {
    return await this.http
      .get<ReportViewModel.SimpleReport[]>(this.URL + 'reports.mockdata.json')
      .toPromise();
  }

  /**
   * Create new Report
   * @param report - report object
   */
  public async createNewReport(report: ReportViewModel.CreateNewReport) {
    return await this.http.post(this.URL + 'createReport/', report).toPromise();
  }

  /**
   * Editing Report
   * @param report - report object
   */
  public async editReport(report: ReportViewModel.EditReport) {
    return await this.http.post(this.URL + 'editReport/', report).toPromise();
  }

  /**
   * Delete Report
   * @param reportID - ID of the report you want to delete
   */
  public async deleteReport(reportID: string) {
    return await this.http
      .post(this.URL + 'deleteReport/', reportID)
      .toPromise();
  }
}

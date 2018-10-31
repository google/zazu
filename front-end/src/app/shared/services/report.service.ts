import { Injectable } from '@angular/core';
import * as ReportViewModel from '../view-models/report.viewmodel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  URL = '../../../assets/example-data/';

  /**
   * Gets all the reports for all organizations
   */
  public async getAllReports(): Promise<ReportViewModel.SimpleReport[]> {
  return await (this.http.get<ReportViewModel.SimpleReport[]>( this.URL + 'reports.mockdata.json')).toPromise();
  }

  /**
   * Gets all the details(with meta data) for a specific report
   * @param id - ID of the specific reprot
   */
  public async getReport(id): Promise<ReportViewModel.ReportWithMetaData> {
    return await (this.http.get<ReportViewModel.ReportWithMetaData>( this.URL + 'single-report-with-meta.mockdata.json')).toPromise();
  }


  /**
   * Gets a specific report with no metadata
   * @param id - ID of the specific reprot
   */
  public async getReportNoMetaData(id): Promise<ReportViewModel.ReportWithMetaData> {
    return await (this.http.get<ReportViewModel.ReportWithMetaData>( this.URL + 'single-report-with-meta.mockdata.json')).toPromise();
  }

 /**
   *  Gets the reports for a specific organization. Can be more than one
   * @param orgIDs ID of a specific organization
   */
  public async getReportByOrganization(orgIDs: string): Promise<ReportViewModel.SimpleReport[]> {
    return await (this.http.get<ReportViewModel.SimpleReport[]>( this.URL + 'reports.mockdata.json')).toPromise();
  }



  /**
   * Get all reports for this user
   */
  public async getReportByUser(userID: string): Promise<ReportViewModel.SimpleReport[]> {
    return await (this.http.get<ReportViewModel.SimpleReport[]>( this.URL + 'reports.mockdata.json')).toPromise();
  }


  /**
   *  Gets the reports for organization(s). Can be more than one
   * @param orgIDs Array of the Organization IDs
   */
  public async getReportByOrganizations(orgIDs: string[]): Promise<ReportViewModel.SimpleReport[]> {
    return await (this.http.get<ReportViewModel.SimpleReport[]>( this.URL + 'reports.mockdata.json')).toPromise();
  }

  /**
   * Create new Report
   * @param report - report object
   */
  public async createNewReport(report: ReportViewModel.CreateNewReport) {
    return await ((this.http.post(this.URL + 'createReport/', report)).toPromise());
  }

  /**
   * Editing Report
   * @param report - report object
   */
  public async editReport(report: ReportViewModel.EditReport) {
    return await ((this.http.post(this.URL + 'editReport/', report)).toPromise());
  }

  /**
   * Delete Report
   * @param reportID - ID of the report you want to delete
   */
  public async deleteReport(reportID: string) {
    return await ((this.http.post(this.URL + 'deleteReport/', reportID)).toPromise());
  }
}

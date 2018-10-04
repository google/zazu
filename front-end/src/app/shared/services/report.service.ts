import { ReportWithMetaData } from './../view-models/report.viewmodel';
import { Injectable } from '@angular/core';
import * as ReportViewModel from '../view-models/report.viewmodel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }


  /**
   * Gets all the reports for all organizations
   */
  public async getAllReports(): Promise<ReportViewModel.SimpleReport[]> {
  return await (this.http.get<ReportViewModel.SimpleReport[]>('../../../assets/example-data/reports.mockdata.json')).toPromise();
  }

  /**
   * Gets all the details(with meta data) for a specific report
   * @param id - ID of the specific reprot
   */
  public async getReport(id): Promise<ReportViewModel.ReportWithMetaData> {
    return await (this.http.get<ReportViewModel.ReportWithMetaData>('../../../assets/example-data/single-report-with-meta.mockdata.json')).toPromise();
  }

 /**
   *  Gets the reports for a specific organization. Can be more than one
   * @param orgIDs ID of a specific organization
   */
  public async getReportByOrganization(orgIDs: string): Promise<ReportViewModel.SimpleReport[]> {
    return await (this.http.get<ReportViewModel.SimpleReport[]>('../../../assets/example-data/reports.mockdata.json')).toPromise();
  }


  /**
   *  Gets the reports for organization(s). Can be more than one
   * @param orgIDs Array of the Organization IDs
   */
  public async getReportByOrganizations(orgIDs: string[]): Promise<ReportViewModel.SimpleReport[]> {
    return await (this.http.get<ReportViewModel.SimpleReport[]>('../../../assets/example-data/reports.mockdata.json')).toPromise();
  }

}

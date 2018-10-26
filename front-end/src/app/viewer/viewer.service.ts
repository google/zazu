import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ReportViewModel from '../shared/view-models/report.viewmodel';
import { ReportService } from '../shared/services/report.service';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private http: HttpClient, private reportService: ReportService) { }
  userID: string;

  setUserID(id) {
    this.userID = id;
  }

  async getReports(): Promise<ReportViewModel.SimpleReport[]> {
      return this.reportService.getReportByUser(this.userID);
  }

  async getReport(reportID): Promise<ReportViewModel.Report> {
      return this.reportService.getReportNoMetaData(reportID);
  }

}

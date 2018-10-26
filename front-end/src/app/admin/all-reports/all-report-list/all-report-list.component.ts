import { ReportService } from './../../../shared/services/report.service';
import { Component, OnInit } from '@angular/core';
import * as Filter from '../../../shared/view-models/filter.viewmodel';
import { Router, ActivatedRoute } from '@angular/router';
import * as ReportViewModel from '../../../shared/view-models/report.viewmodel';
@Component({
  selector: 'app-all-report-list',
  templateUrl: './all-report-list.component.html',
  styleUrls: ['./all-report-list.component.scss']
})
export class AllReportListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private reportService: ReportService) {}
  reports: ReportViewModel.SimpleReport[];
  viewInitialized = false;
  async ngOnInit() {
    try {
      this.reports = await this.reportService.getReportByOrganization('orgID');
      this.viewInitialized = await true;
    } catch (error) {
      console.log(error);
    }
  }

  goToReport(reportID) {
    this.router.navigate(['/admin/reports/r', reportID], { relativeTo: this.route });
  }
}

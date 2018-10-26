import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';
import { ActivatedRoute } from '@angular/router';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';

@Component({
  selector: 'app-viewer-report',
  templateUrl: './viewer-report.component.html',
  styleUrls: ['./viewer-report.component.scss']
})
export class ViewerReportComponent implements OnInit, OnDestroy {
  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute
  ) {}

  sub: any;
  reportID;
  report: ReportViewModel.Report;
  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reportID = params['reportID'];
    });
    this.report = await this.reportService.getReport('reportID');

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

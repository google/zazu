import { ViewerService } from '../../services/viewer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as ReportViewModel from '../../view-models/report.viewmodel';

@Component({
  selector: 'app-viewer-report',
  templateUrl: './viewer-report.component.html',
  styleUrls: ['./viewer-report.component.scss']
})
export class ViewerReportComponent implements OnInit, OnDestroy {
  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private viewerService: ViewerService,
    private router: Router
  ) {}

  sub: any;
  reportID;
  report: ReportViewModel.Report;
  reportsCount;
  initialized = false;

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reportID = params['reportID'];
    });
    this.report = await this.reportService.getReport('reportID');
    this.reportsCount = await this.viewerService.reportsCount();
    this.initialized = await true;
  }

  goBack() {
    console.log('go Back');
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

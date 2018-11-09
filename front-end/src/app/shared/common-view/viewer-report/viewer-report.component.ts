import { ViewerService } from '../../services/viewer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as ReportViewModel from '../../view-models/report.viewmodel';
import { DomSanitizer } from '@angular/platform-browser';

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
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  sub: any;
  reportID;
  report: ReportViewModel.ReportWithMetaData;
  reportsCount;
  initialized = false;
  selectedOrgID;
  embedLink;
  selectedOrg;


  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.reportID = params['reportID'];
    });
    this.selectedOrgID = this.route.snapshot.queryParamMap.get('selectedOrg');
    this.report = await this.reportService.getReport(this.reportID, this.selectedOrgID);
    this.selectedOrg = this.report.organizations.find(org => {
      return org._id === this.selectedOrgID;
    });
    this.reportsCount = await this.viewerService.reportsCount();
    const patt = new RegExp('\/c\/(.)+\/reporting');
    const replaceLink = this.report.link.replace(patt, '/embed/reporting');
    console.log(replaceLink);
    this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl(replaceLink);
    this.initialized = await true;
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { ViewerService } from '../../services/viewer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as ReportViewModel from '../../view-models/report.viewmodel';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

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
  viewerInitSubscription: Subscription;
  oneReport;
  error = false;
  errorMessage = '';
  async ngOnInit() {
    this.viewerInitSubscription = this.viewerService.getInitialized().subscribe(async init => {
      if (init) {
        try {
        this.oneReport = this.viewerService.reports.length === 1;
        this.sub = this.route.params.subscribe(params => {
          this.reportID = params['reportID'];
        });
        this.selectedOrgID = this.route.snapshot.queryParamMap.get('selectedOrg');
        this.report = await this.reportService.getReport(this.reportID, this.selectedOrgID);
        this.selectedOrg = this.report.organizations.find(org => {
          return org._id === this.selectedOrgID;
        });
        /*
        this.reportsCount = await this.viewerService.reportsCount();
        const patt = new RegExp('/c/(.)+/reporting');
        const replaceLink = this.report.link.replace(patt, '/embed/reporting');
        this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl(replaceLink);
        */
        const patt = new RegExp('google\.com(.)*\/reporting');
        const replaceLink = this.report.link.replace(patt, 'google.com/embed/reporting');
        this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl(replaceLink);

        if (!this.viewerService.currentOrganization) {
          const org = this.viewerService.getOrganization(this.selectedOrgID);
          let status;
          if (this.viewerService.adminUser) {
            status = await (<any>this.viewerService.initializeGhost(org, this.viewerService.adminUser));
          } else {
            status = await (<any>this.viewerService.initializeGhost(org, this.viewerService.getUser()));
          }
          // delete this after
          this.initialized = true;
          if (status.status === '200') {
            this.initialized = true;
          }
        } else {
          this.initialized = true;
        }
      } catch (e) {
        this.error = true;
        this.errorMessage = e.message;
      }
      }
    });
  }

  reInitialize() {
    this.error = false;
    this.ngOnInit();
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToList() {
    this.router.navigate(['../../../'], { relativeTo: this.route });
  }

  goToReportList() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}

import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { ActivatedRoute } from '@angular/router';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { OrganizationService } from '../../shared/services/organization.service';

@Component({
  selector: 'app-admin-report-details',
  templateUrl: './admin-report-details.component.html',
  styleUrls: ['./admin-report-details.component.scss']
})
export class AdminReportDetailsComponent implements OnInit, OnDestroy {

  constructor(private reportService: ReportService, private route: ActivatedRoute, private userService: UserService, private organizationService: OrganizationService) { }

  sub: any;
  organizationID;
  userID;
  reportID;
  organization: OrganizationViewModel.SimpleOrganization = null;
  user: UserViewModel.SimpleUserView = undefined;
  report: ReportViewModel.ReportWithMetaData = null;
  userView: boolean;

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.organizationID = params['id'];
      this.userID = params['userID'];
      this.reportID = params['reportID'];
    });

    this.report = await this.reportService.getReport('reportID');
    if (this.userID !== undefined) {
      this.userView = true;
      this.user = await this.userService.getUser('userID');
    } else {
      this.userView = false;
    }
    this.organization = await this.organizationService.getOrganizationById('orgID');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

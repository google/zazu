import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import { UserService } from '../../shared/services/user.service';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import { ReportService } from '../../shared/services/report.service';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,
    private userService: UserService,
    private reportService: ReportService
  ) {}
  // Organization Object
  organization: OrganizationViewModel.OrganizationDetails;
  // List of users in this organization
  users: UserViewModel.SimpleUserView[];
  reports: ReportViewModel.SimpleReport[];
  async ngOnInit() {
    try {
      this.organization = await this.organizationService.getOrganizationById('id');
      this.users = await this.userService.getUsersByOrganization('orgID');
      this.reports = await this.reportService.getReportByOrganization('orgID');
    } catch (error) {
      console.log(error);
    }
  }



  ngOnDestroy() {
  }

  goToUser(userId) {
    this.router.navigate(['./u', userId], { relativeTo: this.route });
  }

  goToReport(reportID) {
    this.router.navigate(['./r', reportID], { relativeTo: this.route });
  }
}

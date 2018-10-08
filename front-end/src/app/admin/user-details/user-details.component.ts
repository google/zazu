import { ReportService } from './../../shared/services/report.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private organizationService: OrganizationService,
    private reportService: ReportService,
  ) {}

  sub: any;
  userID: string;
  orgID: string;

  organization: OrganizationViewModel.SimpleOrganization; // Name of the org from previous view for breadcrumbs purposes
  user: UserViewModel.User;
  reports: ReportViewModel.SimpleReport[];

 async ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.orgID = params['id'];
      this.userID =  params['userID'];
      console.log(params['id']);
    });
    this.organization = await this.organizationService.getOrganizationById(this.orgID);
    this.user = await this.userService.getUser(this.userID);
    this.reports = await this.reportService.getReportByOrganizations([]);
  }

  // Gets the name of the organization for breadcrumbs & user acceses
  private getOrganization(id) {
    return this.organizationService.getOrganizationById(id);
  }

   // Gets the user details
  private getUserDetails(id) {
    return this.userService.getUser(id);
  }


  public goToReport(reportID) {
    this.router.navigate(['./r', reportID], { relativeTo: this.route });
  }


}

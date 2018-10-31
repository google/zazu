import { GhostService } from './../../shared/services/ghost.service';
import { ReportService } from './../../shared/services/report.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    public dialog: MatDialog,
    private ghostsService: GhostService
  ) {}

  sub: any;
  userID: string;
  orgID: string;
  reports: ReportViewModel.SimpleReport[];

  organization; // Name of the org from previous view for breadcrumbs purposes
  user: UserViewModel.User;
  viewInitialized = false;

  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.orgID = params['id'];
        this.userID = params['userID'];
      });
      if (this.orgID) {
        this.organization = await this.organizationService.getLocalOrganization(this.orgID);
      } else {
        this.organization = false;
      }
      this.user = await this.userService.getUser(this.userID);
      const orgs = [];
      for ( const org of this.user.organizations) {
        orgs.push(org._id);
      }
      console.log(this.user);
      this.reports = await this.reportService.getReportByOrganizations(orgs);
      this.viewInitialized = true;
    } catch (error) {
      console.log(error);
    }
  }

  ghostView() {
    const userName = this.user.firstName + ' ' + this.user.lastName;
    this.ghostsService.activatedGhost();
    this.router.navigate(['./ghost', userName], { relativeTo: this.route });
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

  openDialog() {
    const user = this.user.firstName + ' ' + this.user.lastName;
    const dialogRef = this.dialog.open(DeleteUserConfirmation, {
      data: { user: user }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(this.userID);
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    });
  }
}

@Component({
  selector: 'delete-user-confirmation',
  templateUrl: 'delete-user-confirmation.html'
})
export class DeleteUserConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

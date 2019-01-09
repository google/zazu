import { ViewerService } from './../../shared/services/viewer.service';
import { GhostService } from './../../shared/services/ghost.service';
import { ReportService } from './../../shared/services/report.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

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
    private ghostsService: GhostService,
    private viewerService: ViewerService,
    public snackBar: MatSnackBar
  ) {}

  sub: any;
  userID: string;
  orgID: string;
  reports: ReportViewModel.SimpleReport[];

  organization; // Name of the org from previous view for breadcrumbs purposes
  user: UserViewModel.User;
  viewInitialized = false;
  new = false;
  edited = false;
  sending = false;
  permissions;
  error = false;
  errorMessage = '';
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
      /*
      const orgs = [];
      for ( const org of this.user.organizations) {
        orgs.push(org._id);
      }
      */
      this.reports = await this.reportService.getReportByUser(this.userID);
      this.reports = this.reports.filter(report => {
        let temp = false;
        for (const org of this.user.organizations) {
          temp = temp || report.organization._id === org._id;
        }
        return temp;
      });
      this.new = (await this.route.snapshot.queryParamMap.get('new')) === 'new';
      this.edited = (await this.route.snapshot.queryParamMap.get('edited')) === 'true';
      this.ghostsService.disableGhost();
      this.viewInitialized = true;
    } catch (e) {
      this.error = true;
      this.errorMessage = e.message;
    }
  }

  reInitialize() {
    this.error = false;
    this.ngOnInit();
  }

  ghostView() {
    const userName = this.user.firstName + ' ' + this.user.lastName;
    // this.ghostsService.activatedGhost();
    // this.viewerService.setUserID(this.user._id);
    this.router.navigate(['./ghost', userName], { relativeTo: this.route });
  }

  closeNewBar() {
    this.new = false;
    this.edited = false;
  }

  // Gets the name of the organization for breadcrumbs & user acceses
  private getOrganization(id) {
    return this.organizationService.getOrganizationById(id);
  }

  // Gets the user details
  private getUserDetails(id) {
    return this.userService.getUser(id);
  }

  public goToReport(report) {
    this.router.navigate(['./r', report.reportID], { relativeTo: this.route, queryParams: { selectedOrg: report.orgID } });
  }

  async openDialog() {
    try {
      const user = this.user.firstName + ' ' + this.user.lastName;
      const dialogRef = this.dialog.open(DeleteUserConfirmation, {
        data: { user: user }
      });
      this.permissions = await this.userService.getPermissionsToRevokeUser(this.user);
      dialogRef.afterClosed().subscribe(async result => {
        if (result) {
          this.sending = true;
          const status = await (<any>this.userService.deleteUser(this.user, this.permissions.permissions));
          if (status.status === '200') {
            this.sending = false;
            this.router.navigate(['../../'], { relativeTo: this.route, queryParams: { deletedUser: this.user.firstName } });
            this.snackBar.open('User Deleted: ' + this.user.firstName + ' ' + this.user.lastName, 'Dismiss', {
              duration: 30000
            });
          } else {
            this.snackBar.open('Derror ' + status.message, 'Dismiss', {
              duration: 30000
            });
          }
        }
      });
    } catch (error) {
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 30000,
      });
    }
  }
}

@Component({
  selector: 'delete-user-confirmation',
  templateUrl: 'delete-user-confirmation.html'
})
export class DeleteUserConfirmation {
  constructor(public dialogRef: MatDialogRef<DeleteUserConfirmation>, @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

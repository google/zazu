import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { OrganizationService } from '../../shared/services/organization.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-admin-report-details',
  templateUrl: './admin-report-details.component.html',
  styleUrls: ['./admin-report-details.component.scss']
})
export class AdminReportDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private userService: UserService,
    private organizationService: OrganizationService,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  sub: any;
  organizationID;
  userID;
  reportID;
  organization = null;
  user = undefined;
  report: ReportViewModel.ReportWithMetaData = null;
  userView: boolean;
  viewInitialized = false;

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.organizationID = params['id'];
      this.userID = params['userID'];
      this.reportID = params['reportID'];
    });

    this.report = await this.reportService.getReport(this.reportID);
    if (this.userID !== undefined) {
      this.userView = true;
      this.user = await this.userService.getLocalUser(this.userID);
    } else {
      this.userView = false;
      this.user = false;
    }
    if (this.organizationID) {
      this.organization = await this.organizationService.getLocalOrganization(this.organizationID);
    } else {
      this.organization = false;
    }
    this.viewInitialized = true;
  }

  openDialog( ) {
    const dialogRef = this.dialog.open(DeleteReportConfirmation, {
      data: { report: this.report.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reportService.deleteReport(this.reportID);
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


@Component({
  selector: 'delete-report-confirmation',
  templateUrl: 'delete-report-confirmation.html'
})
export class DeleteReportConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DeleteReportConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


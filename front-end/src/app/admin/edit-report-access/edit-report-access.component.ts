import { UserService } from './../../shared/services/user.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ReportService } from 'src/app/shared/services/report.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-report-access',
  templateUrl: './edit-report-access.component.html',
  styleUrls: ['./edit-report-access.component.scss']
})
export class EditReportAccessComponent implements OnInit {
  constructor(
    private organizatinonService: OrganizationService,
    private _fb: FormBuilder,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  filteredOptions: Observable<string[]>;

  accessForm: FormGroup;
  report: ReportViewModel.ReportDetails;
  organizations: OrganizationViewModel.SimpleOrganization[];
  sub: any;
  reportID;
  sending = false;
  organizationID;
  permissions;
  selectedOrgID;
  async ngOnInit() {
    try {
      this.sub = await this.route.params.subscribe(params => {
        this.reportID = params['reportID'];
        this.organizationID = params['id'];
      });
      this.report = await this.reportService.getReportDetails(this.reportID);
      this.organizations = this.report.organizations;
      this.accessForm = await this._fb.group({
        selectedOrganization: ['', Validators.required]
      });
      this.selectedOrgID = await this.route.snapshot.queryParamMap.get('selectedOrg');
    } catch (error) {
      console.log(error);
    }
  }

  get controls() {
    return this.accessForm.controls;
  }

  async openDialog() {
    const temp = this.accessForm.value;
    const org = this.organizations.find(x => {
      return x._id === temp.selectedOrganization;
    });
    try {
      // gets all users that have access to the selected org
      // let users = await <any>this.userService.getUsersByOrganization(org._id);
      let users = await <any>this.userService.getAllUsers();
      users = users.filter(user => {
        return user.role === 'viewer';
      });
      users = users.filter(user => {
        let y = false;
        for (const x of user.organizations) {
          y = y || x._id === org._id;
        }
        return y;
      });
      users = users.filter(user => {
        if (user.organizations.length === 1) {
          return true ;
        } else {
          let checker = true;
          for ( const orgInReport of this.report.organizations) {
            for (const orgInUser of user.organizations) {
              if (orgInUser._id !== org._id) {
                checker = checker && (orgInReport._id !== orgInUser._id );
              }
            }
          }
          return checker;
        }
      });
      const googleIDs = [];
      for (const user of users ) {
        googleIDs.push(<any>user.googleID);
      }
      this.permissions = await this.reportService.getPermissionsToRevoke(this.report, googleIDs);
    } catch (error) {}
    const dialogRef = this.dialog.open(RevokeAccessConfirmation, {
      data: { organization: org.name, report: this.report.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onSubmit();
      }
    });
  }

  async onSubmit() {
    this.sending = true;
    try {
      const temp = this.accessForm.value;
      const org = this.organizations.find(x => {
        return x._id === temp.selectedOrganization;
      });
      const reports = [];
      reports.push(this.report);
      const status = <any>await this.reportService.deleteOrgAccess(reports, this.permissions, org, null);
      if (status.status === '200') {
        if (this.organizationID) {
          await this.router.navigate(['../../../'], {
            relativeTo: this.route});
            this.snackBar.open('Removed access to \"' + this.report.name + '\" for \"' + org.name + '\"', 'Dismiss', {
              duration: 5000
            });
        } else {
          await this.router.navigate(['../../../list'], {
            relativeTo: this.route});
            this.snackBar.open('Removed access to \"' + this.report.name + '\" for \"' + org.name + '\"', 'Dismiss', {
              duration: 5000
            });
        }
      } else {
        this.sending = false;
         this.snackBar.open('Error: ' + status.message, 'Dismiss', {
         duration: 5000
       });
       }

    } catch (error) {
      this.sending = false;
      this.snackBar.open('Error occured', 'Dismiss', {
        duration: 5000
      });
      console.log(error);
    }
  }

  public getForm() {
    return this.accessForm;
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route, queryParams: { selectedOrg: this.selectedOrgID}} );
  }
}

@Component({
  selector: 'revoke-access-confirmation',
  templateUrl: 'revoke-access-confirmation.html'
})
export class RevokeAccessConfirmation {
  constructor(public dialogRef: MatDialogRef<RevokeAccessConfirmation>, @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { NewUserOrganizationConfirmation } from './../create-new-user/create-new-user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatStepper, MatSnackBar } from '@angular/material';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import { UserService } from 'src/app/shared/services/user.service';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  constructor(
    private organizationService: OrganizationService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar,
    public reportService: ReportService
  ) {}
  sub: any;
  roleSelected;
  organizations: OrganizationViewModel.SimpleOrganization[];
  selectedOrganizationIds: string[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedOrganizationNames: OrganizationViewModel.SimpleOrganization[];
  organizationID;
  userID: string;
  user: UserViewModel.User;
  userRole;
  sending = false;

  tooltip = {
    role:
      'Viewer access provides users the ability to view reports that are shared with them. Warning! Admin access provides the user with full access to create, update and edit reports.Admin access should only be provided to users who have full access to the data.',
    organization: 'Select one or many organizations this user is permitted to access',
    first: "Enter the user's first name",
    last: "Enter the user's last name",
    gmail: 'Specify the user’s Google Account.  A Google account is required to allow the user to log in as well as view the reports.',
    secondary: "(Optional) Add another email address for this user. Doesn't have to be a Google Account"
  };

  async ngOnInit() {
    try {
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
        this.userID = params['userID'];
      });
      this.user = await this.userService.getUser(this.userID);
      for await (const org of this.user.organizations) {
        this.selectedOrganizationIds.push(org._id);
      }
      this.firstFormGroup = await this.formBuilder.group({
        firstName: [this.user.firstName, [Validators.required, this.noWhitespaceValidator]],
        lastName: [this.user.lastName, [Validators.required, this.noWhitespaceValidator]],
        secondaryEmail: [this.user.secondaryEmail, Validators.email]
      });
      this.userRole = this.user.role;
      if (this.user.role === 'admin') {
        this.firstFormGroup.removeControl('organizations');
      }
      if (this.user.role === 'viewer') {
        this.firstFormGroup.addControl('organizations', new FormControl('', Validators.required));
      }
    } catch (error) {
      console.log(error);
    }
  }
  /*
  checkRole() {
    if (this.roleSelected === 'admin') {
      this.firstFormGroup.removeControl('organizations');
    }
    if (this.roleSelected === 'viewer') {
      this.firstFormGroup.addControl(
        'organizations',
        new FormControl('', Validators.required)
      );
    }
  }

  adminRolePressed() {
    if (this.userRole === 'viewer') {
      this.firstFormGroup.removeControl('organizations');
    }
    this.userRole = 'admin';
  }

  viewerCalled() {
    if (this.userRole === 'admin') {
      this.firstFormGroup.addControl(
        'organizations',
        new FormControl('', Validators.required)
      );
    }
    this.userRole = 'viewer';
  }
  */

  /**
   * ON SUBMIT FOR CREATING NEW USER
   */
  async onSubmit() {
    try {
      this.sending = true;
      const firstForm = this.firstFormGroup.value;
      const orgs = [];
      let newUser: UserViewModel.EditUser;
      if (this.user.role === 'viewer') {
        for (const orgID of firstForm.organizations) {
          orgs.push(
            this.organizations.find(org => {
              return org._id === orgID;
            })
          );
        }
        const oldOrgs = this.user.organizations;
        const newOrgs = orgs;
        const removedOrgs = oldOrgs.filter(org => {
          const tempx = newOrgs.findIndex(x => {
            return x._id === org._id;
          });
          return tempx === -1;
        });
        const addedOrgs = newOrgs.filter(org => {
          const tempx = oldOrgs.findIndex(x => {
            return x._id === org._id;
          });
          return tempx === -1;
        });
        const stayingOrgs = newOrgs.filter(org => {
          const tempx = oldOrgs.findIndex(x => {
            return x._id === org._id;
          });
          return tempx > -1;
        });
        // console.log(stayingOrgs);
        const currentReports = await this.reportService.getRawReportsByUser(this.userID);
        // Removing Orgs
        if (removedOrgs.length > 0) {
          const revokedReports = currentReports.filter(report => {
            let checker = true;
            for (const org of report.organizations) {
              for (const newOrg of newOrgs) {
                if (org._id === newOrg._id) {
                  checker = false;
                }
              }
            }
            return checker;
          });
          if (revokedReports.length > 0) {
            const revokePermissions = await (<any>this.userService.getPermissionsToRevokeOrg(revokedReports, this.user));
            if (revokePermissions.status !== '200') {
              throw new Error(revokePermissions.message);
            }
            const unshareReport = await (<any>this.reportService.deleteOrgAccess(revokedReports, revokePermissions, null, removedOrgs));
            if (unshareReport.status !== '200') {
              throw new Error(unshareReport.message);
            }
          }
        }
        // Adding Orgs
        if (addedOrgs.length > 0) {
          const allReports = await this.reportService.getAllRawReports();
          let newReports = allReports.filter(report => {
            for (const org of report.organizations) {
              for (const addedOrg of addedOrgs) {
                if (org._id === addedOrg._id) {
                  return true;
                }
              }
            }
          });
           newReports = newReports.filter(report => {
            for (const org of report.organizations) {
              for (const stayingOrg of stayingOrgs) {
                if (org._id === stayingOrg._id) {
                  return false;
                }
              }
            }
            return true;
          });
          if (newReports.length > 0) {
            // DO SHARE API CALL HERE
            // const sharingReport = await
            const sharingReport = await <any>this.reportService.shareReport(newReports, null, this.user, addedOrgs);
            if (sharingReport.status !== '200') {
              throw new Error(sharingReport.message);
            }
          }
        }
        newUser = {
          _id: this.userID,
          firstName: firstForm.firstName,
          lastName: firstForm.lastName,
          googleID: this.user.googleID,
          secondaryEmail: firstForm.secondaryEmail,
          organizations: orgs,
          role: this.user.role
        };
      }
      if (this.user.role === 'admin') {
        newUser = {
          _id: this.userID,
          firstName: firstForm.firstName,
          lastName: firstForm.lastName,
          googleID: firstForm.email,
          secondaryEmail: firstForm.secondaryEmail,
          organizations: this.user.organizations,
          role: this.user.role
        };
      }
      const oldUser = this.user;
      const status = await (<any>this.userService.editUser(oldUser, newUser));
      if (status.status === '200') {
        await this.router.navigate(['../'], { relativeTo: this.route, queryParams: { edited: 'true' } });
      } else {
        this.sending = false;
        this.snackBar.open('Error: ' + status.message, 'Dismiss', {
          duration: 5000
        });
      }
    } catch (error) {
      this.sending = false;
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 5000
      });
    }
  }
  /*
  openDialog() {
    const dialogRef = this.dialog.open(NewUserOrganizationConfirmation, {
      data: { orgs: '', role: 'admin' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adminRolePressed();
      } else {
        this.firstFormGroup.controls['role'].setValue('Viewer');
        this.viewerCalled();
      }
    });
  }
  */

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}

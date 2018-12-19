import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatStepper, MatSnackBar } from '@angular/material';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent implements OnInit {
  @ViewChild('stepper')
  stepper;

  constructor(
    private organizationService: OrganizationService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  tooltip = {
    role:
      'Viewer access provides users the ability to view reports that are shared with them. Warning! Admin access provides the user with full access to create, update and edit reports.Admin access should only be provided to users who have full access to the data.',
    organization: 'Select one or many organizations this user is permitted to access',
    first: "Enter the user's first name",
    last: "Enter the user's last name",
    gmail: 'Specify the user’s Google Account.  A Google account is required to allow the user to log in as well as view the reports.',
    secondary: "(Optional) Add another email address for this user. Doesn't have to be a Google Account"
  };
  sub: any;
  roleSelected;
  organizations: OrganizationViewModel.SimpleOrganization[];
  selectedOrganizationIds: string[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedOrganizationNames: OrganizationViewModel.SimpleOrganization[];
  allowSecondaryEmail = false;
  organizationID;
  sending = false;
  selectedOrg: OrganizationViewModel.SimpleOrganization;
  async ngOnInit() {
    try {
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.secondFormGroup = this.formBuilder.group({
        firstName: ['', [Validators.required, this.noWhitespaceValidator]],
        lastName: ['', [Validators.required, this.noWhitespaceValidator]],
        email: ['', [Validators.required, Validators.email, this.noWhitespaceValidator]],
        secondaryEmail: ['', [Validators.email]]
      });
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
      if (!this.organizationID) {
        this.firstFormGroup = this.formBuilder.group({
          role: ['', Validators.required]
        });
      } else {
        this.selectedOrg = this.organizations.find(org => org._id === this.organizationID);
      }
    } catch (error) {
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 5000,
      });
    }
  }

  checkRole() {
    if (this.roleSelected === 'admin') {
      this.firstFormGroup.removeControl('organizations');
    }
    if (this.roleSelected === 'viewer') {
      this.firstFormGroup.addControl('organizations', new FormControl('', Validators.required));
    }
  }

  /**
   * ON SUBMIT FOR CREATING NEW USER
   */
  async onSubmit() {
    this.sending = true;

    const secondForm = this.secondFormGroup.value;
    const orgs = [];
    let role;
    if (!this.organizationID) {
      const firstForm = this.firstFormGroup.value;
      role = firstForm.role;
      if (firstForm.role === 'viewer') {
        for (const orgID of firstForm.organizations) {
          orgs.push(
            this.organizations.find(org => {
              return org._id === orgID;
            })
          );
        }
      }
    } else if (this.organizationID) {
      role = 'viewer';
      orgs.push(this.selectedOrg);
    }
    const newUser: UserViewModel.CreateNewUser = {
      firstName: secondForm.firstName,
      lastName: secondForm.lastName,
      googleID: secondForm.email,
      secondaryEmail: secondForm.secondaryEmail,
      organizations: orgs,
      role: role
    };
    try {
      const userStatus = await this.userService.createNewUser(newUser);
      if (userStatus.status === '200') {
          this.router.navigate(['../u', userStatus.userID], { relativeTo: this.route, queryParams: { new: 'new' } });
      } else {
        this.sending = false;
        this.snackBar.open('Error: ' + userStatus.message, 'Dismiss', {
          duration: 5000
        });
      }
    } catch (error) {
      this.sending = false;
    }
  }

  openDialog(stepper: MatStepper) {
    if (this.roleSelected === 'viewer') {
      this.selectedOrganizationNames = this.organizations.filter(org => {
        return this.selectedOrganizationIds.includes(org._id);
      });
    }
    const dialogRef = this.dialog.open(NewUserOrganizationConfirmation, {
      data: { orgs: this.selectedOrganizationNames, role: this.roleSelected }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stepper.next();
      }
    });
  }

  addSecondaryEmail() {
    this.allowSecondaryEmail = true;
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}

@Component({
  selector: 'new-user-organization-confirmation',
  templateUrl: 'new-user-organization-confirmation.html'
})
export class NewUserOrganizationConfirmation {
  constructor(public dialogRef: MatDialogRef<NewUserOrganizationConfirmation>, @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { NewUserOrganizationConfirmation } from './../create-new-user/create-new-user.component';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatStepper
} from '@angular/material';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import { UserService } from 'src/app/shared/services/user.service';

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
    private userService: UserService
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
        role: [this.user.role, Validators.required],
        organizations: ['', Validators.required],
        firstName: [
          this.user.firstName,
          [Validators.required, this.noWhitespaceValidator]
        ],
        lastName: [
          this.user.lastName,
          [Validators.required, this.noWhitespaceValidator]
        ],
        email: [
          this.user.googleID,
          [Validators.required, Validators.email, this.noWhitespaceValidator]
        ],
        secondaryEmail: [this.user.secondaryEmail, Validators.email]
      });
      await console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  }

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

  /**
   * ON SUBMIT FOR CREATING NEW USER
   */
  onSubmit() {
    const firstForm = this.firstFormGroup.value;
    let orgs = [];

    if (firstForm.role === 'Viewer') {
      orgs = firstForm.organizations;
      const newUser: UserViewModel.EditUser = {
        _id: this.userID,
        firstName: firstForm.firstName,
        lastName: firstForm.lastName,
        googleID: firstForm.email,
        secondaryEmail: firstForm.secondaryEmail,
        organizations: orgs,
        role: firstForm.role
      };
      this.userService.editUser(newUser);
      console.log(newUser);
    }
    if (firstForm.role === 'Admin') {
      const newUser: UserViewModel.EditUser = {
        _id: this.userID,
        firstName: firstForm.firstName,
        lastName: firstForm.lastName,
        googleID: firstForm.email,
        secondaryEmail: firstForm.secondaryEmail,
        organizations: [],
        role: firstForm.role
      };
      this.userService.editUser(newUser);
      console.log(newUser);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewUserOrganizationConfirmation, {
      data: { orgs: '', role: 'admin' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(true);
      if (!result) {
        this.firstFormGroup.controls['role'].setValue('Viewer');
      }
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}

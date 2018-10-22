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
    private route: ActivatedRoute
  ) {}
  sub: any;
  roleSelected;
  organizations: OrganizationViewModel.SimpleOrganization[];
  selectedOrganizationIds: string[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedOrganizationNames: OrganizationViewModel.SimpleOrganization[];
  allowSecondaryEmail = false;
  organizationID;
  async ngOnInit() {
    try {
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.firstFormGroup = this.formBuilder.group({
        role: ['', Validators.required]
      });
      this.secondFormGroup = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        secondaryEmail: ['', Validators.email]
      });
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
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
    const secondForm = this.secondFormGroup.value;
    let orgs = [];
    if (firstForm.role === 'viewer') {
      orgs = firstForm.organizations;
    }
    const newUser: UserViewModel.CreateNewUser = {
      firstName : secondForm.firstName,
      lastName : secondForm.lastName,
      googleId : secondForm.email,
      secondaryEmail: secondForm.secondaryEmail,
      organizations : orgs,
      role: firstForm.role
    };
    console.log(newUser);
  }

  openDialog(stepper: MatStepper) {
    if (this.roleSelected === 'viewer') {
      this.selectedOrganizationNames = this.organizations.filter(org => {
        return this.selectedOrganizationIds.includes(org.id);
      });
    }
    const dialogRef = this.dialog.open(NewUserOrganizationConfirmation, {
      data: { orgs: this.selectedOrganizationNames, role: this.roleSelected }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(true);
      if (result) {
        this.stepper.next();
      }
    });
  }

  addSecondaryEmail() {
    this.allowSecondaryEmail = true;
  }
}

@Component({
  selector: 'new-user-organization-confirmation',
  templateUrl: 'new-user-organization-confirmation.html'
})
export class NewUserOrganizationConfirmation {
  constructor(
    public dialogRef: MatDialogRef<NewUserOrganizationConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

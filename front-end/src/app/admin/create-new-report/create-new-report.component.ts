import { Component, OnInit, ViewChild } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { ReportService } from 'src/app/shared/services/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/shared/services/organization.service';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { DatarulesService } from 'src/app/shared/services/datarules.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-create-new-report',
  templateUrl: './create-new-report.component.html',
  styleUrls: ['./create-new-report.component.scss']
})
export class CreateNewReportComponent implements OnInit {
  @ViewChild('stepper')
  stepper: MatStepper;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,
    private formBuilder: FormBuilder,
    private datarulesService: DatarulesService
  ) {}
  reports: ReportViewModel.SimpleReport[];
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  reportInfoForm: FormGroup;
  datasources: DataViewModel.DataSource[];
  selectedOrg;
  organizationID;
  sub: any;

  async ngOnInit() {
    try {
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.datasources = await this.datarulesService.getAllDataSourceForOrganization(
        'id'
      );
      this.orgForm = this.formBuilder.group({
        organization: ['', Validators.required]
      });
      this.reportInfoForm = this.formBuilder.group({
        name: ['', [Validators.required,  this.noWhitespaceValidator] ],
        datastudioLink: ['', [Validators.required,  this.noWhitespaceValidator] ],
        datastudioId: ['', [Validators.required,  this.noWhitespaceValidator] ],
        datasources: ['', [Validators.required] ]
      });
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
        if (this.organizationID) {
          this.selectedOrg = this.organizations.find(org => {
            return org.id === this.organizationID;
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }


  selectStep(id) {
    this.stepper.selectedIndex = id;
  }

  selectOrg() {
   this.selectedOrg = this.organizations.find(org => {
     return org.id === this.orgForm.value.organization;
   });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onSubmit() {
    let organization;
    if (this.organizationID) {
      organization = this.organizationID;
    } else {
      organization = this.orgForm.value.organization;
    }
    const rForm = this.reportInfoForm.value;
    const report = {
      name: rForm.name,
      datastudioLink: rForm.datastudioLink,
      datastudioId: rForm.datastudioId,
      datasources:  rForm.datasources,
      organization: organization
    };

    console.log(report);

  }
}

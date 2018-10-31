import { Component, OnInit, ViewChild } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { ReportService } from 'src/app/shared/services/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/shared/services/organization.service';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
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
    private datarulesService: DatarulesService,
    private reportService: ReportService
  ) {}
  reports: ReportViewModel.SimpleReport[];
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  reportInfoForm: FormGroup;
  datasources: DataViewModel.DataSource[];
  selectedOrg;
  rules;
  organizationID;
  sub: any;

  async ngOnInit() {
    try {
      this.datasources = await this.datarulesService.getAllDataSourceForOrganization(
        'id'
      );
      this.orgForm = this.formBuilder.group({
        organization: ['', Validators.required]
      });
      this.reportInfoForm = this.formBuilder.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]],
        datastudioLink: ['', [Validators.required, this.noWhitespaceValidator]],
        datasourceRows: this.formBuilder.array(
          [this.initItemRows()],
          this.noDuplicate
        )
      });
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });

      if (this.organizationID) {
        this.selectedOrg = await this.organizationService.getLocalOrganization(
          this.organizationID
        );
        this.rules = await this.datarulesService.getDataRules(this.organizationID);
        console.log(this.selectedOrg);
      } else {
        this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      }
      console.log(this.reportInfoForm.controls.datasourceRows);
    } catch (error) {
      console.log(error);
    }
  }

  selectStep(id) {
    this.stepper.selectedIndex = id;
  }

  initItemRows() {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      _id: ['', [Validators.required, this.noWhitespaceValidator]]
    });
  }

  addNewRow() {
    const control = <FormArray>this.reportInfoForm.controls['datasourceRows'];
    control.push(this.initItemRows());
  }

  deleteRow(index: number) {
    const control = <FormArray>this.reportInfoForm.controls['datasourceRows'];
    control.removeAt(index);
  }

  async selectOrg() {
    try {
      this.selectedOrg = this.organizations.find(org => {
        return org._id === this.orgForm.value.organization;
      });
      this.rules = await this.datarulesService.getDataRules(this.selectedOrg._id);
    } catch (error) {
      console.log(error);
    }

  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public noDuplicate(array): Validators {
    if (array.errors) {
      console.log(array.errors.duplicate);
    }
    if (array.value) {
      const temp = [];
      for (const datasource of array.value) {
        if (!temp.includes(datasource.name)) {
          if (datasource.name !== '') {
            temp.push(datasource.name);
          }
        } else {
          return { duplicate: true };
        }
      }
      return null;
    }
  }

  public noDataRuleValidator(control: FormControl) {

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
      datasources: rForm.datasourceRows,
      organizationID: organization
    };
    this.reportService.createNewReport(report);
    console.log(report);
  }
}

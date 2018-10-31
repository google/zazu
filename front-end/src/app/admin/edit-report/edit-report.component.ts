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
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})
export class EditReportComponent implements OnInit {
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
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  reportInfoForm: FormGroup;
  datasources: DataViewModel.DataSource[];
  selectedOrg;
  organizationID;
  sub: any;
  report: ReportViewModel.Report;
  reportID: string;

  async ngOnInit() {
    try {
      this.sub = await this.route.params.subscribe(params => {
        this.reportID = params['reportID'];
      });
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.datasources = await this.datarulesService.getAllDataSourceForOrganization(
        this.reportID);
      this.report = await this.reportService.getReport(this.reportID, 'temp');
      this.organizationID = this.report.organization._id;
      if (this.organizationID) {
        this.selectedOrg = this.organizations.find(org => {
          return org._id === this.organizationID;
        });
      }
      this.reportInfoForm = this.formBuilder.group({
        organization: [ this.report.organization._id, Validators.required],
        name: [this.report.name, [Validators.required, this.noWhitespaceValidator]],
        datastudioLink: [this.report.link, [Validators.required, this.noWhitespaceValidator]],
        datasourceRows: this.formBuilder.array(
          [this.initItemRows('', '')],
          this.noDuplicate
        )
      });
      const control = <FormArray>this.reportInfoForm.controls['datasourceRows'];
      control.removeAt(0);
      for ( const datasource of this.report.datasources) {
        this.addNewRow(datasource.name, datasource._id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  initItemRows(name, id) {
    return this.formBuilder.group({
      name: [name, [Validators.required]],
      datastudioId: [id, [Validators.required, this.noWhitespaceValidator]]
    });
  }

  addNewRow(name, id) {
    const control = <FormArray>this.reportInfoForm.controls['datasourceRows'];
    control.push(this.initItemRows(name, id));
  }

  deleteRow(index: number) {
    const control = <FormArray>this.reportInfoForm.controls['datasourceRows'];
    control.removeAt(index);
  }

  selectOrg() {
    this.selectedOrg = this.organizations.find(org => {
      return org._id === this.orgForm.value.organization;
    });
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

  onSubmit() {
    const rForm = this.reportInfoForm.value;
    const report = {
      _id: this.reportID,
      organizationID: this.organizationID,
      name: rForm.name,
      datastudioLink: rForm.datastudioLink,
      datasources: rForm.datasourceRows,
    };
    this.reportService.editReport(report);
    console.log(report);
  }
}

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
  report: ReportViewModel.ReportDetails;
  reportID: string;

  async ngOnInit() {
    try {
      this.sub = await this.route.params.subscribe(params => {
        this.reportID = params['reportID'];
      });
      this.datasources = await this.datarulesService.getDataSources();
      this.report = await this.reportService.getReportDetails(this.reportID);
      this.organizations = this.report.organizations;
      this.reportInfoForm = this.formBuilder.group({
        name: [this.report.name, [Validators.required, this.noWhitespaceValidator]],
        link: [this.report.link, [Validators.required, this.noWhitespaceValidator]],
        datasources: [this.report.datasources, [Validators.required]],
        dataStudioSourceIDs: this.formBuilder.array([this.initItemRows('')], this.noDuplicate)
      });
      console.log(this.report);
      console.log(this.report.datasources);
      this.reportInfoForm.controls['datasources'].setValue(this.report.datasources);
      const control = <FormArray>this.reportInfoForm.controls['dataStudioSourceIDs'];
      control.removeAt(0);
      console.log( this.report.dataStudioSourceIDs);
      for ( const id of this.report.dataStudioSourceIDs) {
        this.addNewRow(id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  initItemRows(id) {
    return this.formBuilder.group({
      id: [id, [Validators.required]],
    });
  }

  addNewRow(id) {
    const control = <FormArray>this.reportInfoForm.controls['dataStudioSourceIDs'];
    control.push(this.initItemRows(id));
  }

  deleteRow(index: number) {
    const control = <FormArray>this.reportInfoForm.controls['dataStudioSourceIDs'];
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
      for (const id of array.value) {
        if (!temp.includes(id.id)) {
          if (id.id !== '') {
            temp.push(id.id);
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
    const ids = [];
    for (const id of rForm.dataStudioSourceIDs) {
      ids.push(id.id);

    }
    const report = {
      _id: this.reportID,
      name: rForm.name,
      link: rForm.link,
      datasources: rForm.datasources,
      organizations: this.report.organizations,
      dataStudioSourceIDs: ids

    };
    this.reportService.editReport(report);
    console.log(report);
  }
}

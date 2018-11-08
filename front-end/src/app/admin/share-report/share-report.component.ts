import { Component, OnInit, ViewChild } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { ReportService } from 'src/app/shared/services/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/shared/services/organization.service';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { DatarulesService } from 'src/app/shared/services/datarules.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-share-report',
  templateUrl: './share-report.component.html',
  styleUrls: ['./share-report.component.scss']
})
export class ShareReportComponent implements OnInit {
  @ViewChild('stepper')
  stepper: MatStepper;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService,
    private organizationService: OrganizationService,
    private formBuilder: FormBuilder,
    private datarulesService: DatarulesService
  ) {}
  reports: ReportViewModel.SimpleRawReport[];
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  selectTypeForm: FormGroup;

  datasources: DataViewModel.DataSource[];
  selectedReport: ReportViewModel.SimpleRawReport;
  selectedOrg;
  organizationID;
  allReports;
  sub: any;

  tooltip = {
    organization: 'Please select the organizations that should access this report.  Not: A report can be accessed by many organizations, the data rules applied to each organization filter the data seen in the report',
  };

  async ngOnInit() {
    try {
      this.reports = await this.reportService.getAllRawReports();
      this.allReports = this.reports ;
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.datasources = await this.datarulesService.getDataSources();
      this.orgForm = this.formBuilder.group({
        organization: ['', Validators.required]
      });
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
      if (this.organizationID) {
        this.selectedOrg = this.organizations.find(org => {
          return org._id === this.organizationID;
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async selectReport(param) {
    this.selectedReport = await this.reports.find(report => {
      return report._id === param.reportID;
    });
    if (this.organizationID) {
      await this.selectStep(1);
    } else {
      await this.selectStep(2);
    }
  }

  resetReports() {
    this.reports = this.allReports;
  }

  selectStep(id) {
    this.stepper.selectedIndex = id;
  }

  async orgSelected() {
    this.resetReports();
    this.selectedOrg = await this.organizations.find(org => {
      return org._id === this.orgForm.value.organization;
    });

    this.reports = this.reports.filter(report => {
      return (
        report.organizations.find(org => {
          return org._id === this.orgForm.value.organization;
        }) === undefined
      );
    });
    await this.selectStep(1);
  }

  onSubmit() {
    const org = this.organizations.find(x => {
      return x._id === this.selectedOrg._id;
    });
    const report = this.selectedReport;
    report.organizations.push(org);
    this.reportService.shareReport(report);
  }
}

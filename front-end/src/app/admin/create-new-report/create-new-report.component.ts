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
    private reportService: ReportService,
    private organizationService: OrganizationService,
    private formBuilder: FormBuilder,
    private datarulesService: DatarulesService
  ) {}
  reports: ReportViewModel.SimpleReport[];
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  selectTypeForm: FormGroup;
  reportInfoForm: FormGroup;
  datasources: DataViewModel.DataSource[];
  selectedReport: ReportViewModel.SimpleReport;
  selectedOrg;

  async ngOnInit() {
    try {
      this.reports = await this.reportService.getReportByOrganization('orgID');
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.datasources = await this.datarulesService.getAllDataSourceForOrganization(
        'id'
      );
      this.orgForm = this.formBuilder.group({
        organization: ['', Validators.required]
      });
      this.reportInfoForm = this.formBuilder.group({
        name: ['', Validators.required],
        datastudioLink: ['', Validators.required],
        datastudioId: ['', Validators.required],
        datasources: ['', Validators.required]
      });
    } catch (error) {
      console.log(error);
    }
  }

  selectReport(id) {
    this.selectedReport = this.reports.find(report => {
      return report.id === id;
    });
  }

  selectStep(id) {
    this.stepper.selectedIndex = id;
  }

  selectOrg() {
   this.selectedOrg = this.organizations.find(org => {
     return org.id === this.orgForm.value.organization;
   });
  }
}

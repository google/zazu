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
export class ShareReportComponent  implements OnInit {
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

  datasources: DataViewModel.DataSource[];
  selectedReport: ReportViewModel.SimpleReport;
  selectedOrg;
  organizationID;

  sub: any;

  async ngOnInit() {
    try {
      this.reports = await this.reportService.getAllReports();
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
      this.datasources = await this.datarulesService.getAllDataSourceForOrganization(
        'id'
      );
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
    console.log(param);
     this.selectedReport = await this.reports.find(report => {
      return report._id === param.reportID;
    });
    if (this.organizationID) {
      await this.selectStep(1);
    } else {
      await this.selectStep(2);
    }
  }

  selectStep(id) {
    this.stepper.selectedIndex = id;
  }

  async orgSelected() {
       this.selectedOrg = await this.organizations.find(org => {
        return org._id === this.orgForm.value.organization;
      });
      await this.selectStep(1);
  }

  onSubmit() {
    this.reportService.shareReport(this.selectedReport._id, this.selectedOrg._id);
  }

}

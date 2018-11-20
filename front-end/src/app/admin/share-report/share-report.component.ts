import { DataRule } from './../../shared/view-models/data.viewmodel';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { ReportService } from 'src/app/shared/services/report.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/shared/services/organization.service';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { DatarulesService } from 'src/app/shared/services/datarules.service';
import { MatStepper, MatSnackBar } from '@angular/material';

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
    private datarulesService: DatarulesService,
    public snackBar: MatSnackBar
  ) {}
  reports: ReportViewModel.SimpleRawReport[];
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  selectTypeForm: FormGroup;

  datasources: DataViewModel.DataSource[];
  selectedReport;
  selectedOrg;
  organizationID;
  allReports;
  sub: any;
  missingRules = [];
  rules: DataViewModel.DataRule[];
  sending = false;
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
        this.reports = this.reports.filter(report => {
          return (
            report.organizations.find(org => {
              return org._id === this.organizationID;
            }) === undefined
          );
        });
        this.rules = await this.datarulesService.getDataRules(
          this.organizationID
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async selectReport(param) {
    this.missingRules = [];
    this.selectedReport = await this.reports.find(report => {
      return report._id === param.reportID;
    });
     for ( const datasource of await this.selectedReport.datasources) {
       const temp = this.rules.filter(rule => {
         console.log(rule.datasource);
         console.log(datasource);
          return rule.datasource === datasource.bigquery;
       });
       if (temp.length === 0) {
          this.missingRules.push(datasource.bigquery);
       }
    }
    console.log(this.missingRules);
    if (this.organizationID) {
      await this.selectStep(1);
    } else {
      await this.selectStep(2);
    }
  }

  newRule() {
    this.router.navigate(['admin/o', this.selectedOrg._id]);
  }


  private checkDataRules() {

  }

  public noDataRuleValidator(control: FormControl): Validators {
    this.missingRules = [];
    if (control.value) {
      console.log(control.value);
      console.log(this.rules);
      for (const datasource of control.value) {
        const temp = this.rules.filter(rule => {
          return rule.datasource === datasource;
        });
        if (temp.length === 0) {
          this.missingRules.push(datasource);
        }
      }
      if (this.missingRules.length > 0) {
        return { missingRules: true };
      } else {
        return null;
      }
    }
    return null;
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
    this.rules = await this.datarulesService.getDataRules(
      this.selectedOrg._id
    );
    console.log(this.rules);
    await this.selectStep(1);
  }

  async  onSubmit() {
    console.log('submit');
    this.sending = true;
    try {
      const org = this.organizations.find(x => {
        return x._id === this.selectedOrg._id;
      });
      const report = this.selectedReport;
      console.log(report);
      const status = await <any>this.reportService.shareReport(report, org);
      console.log(status);
      if (status.status === '200') {
        if (this.organizationID) {
          console.log('coming from org details');
          await this.router.navigate(['../r', report._id], {
            relativeTo: this.route,
            queryParams: { shared: 'true', selectedOrg: this.organizationID }
          });
        } else {
          console.log('coming from report list');
          await this.router.navigate(['../../r', report._id], {
            relativeTo: this.route,
            queryParams: { shared: 'true', selectedOrg: this.selectedOrg._id }
          });
        }
      } else {
        console.log(status);
        this.sending = false;
        this.snackBar.open('Error: ' + status.message, 'Dismiss', {
          duration: 5000
        });
      }
    } catch (error) {
      this.sending = false;
      this.snackBar.open('Error occured', 'Dismiss', {
        duration: 5000
      });
      console.log(error);
    }
  }
}

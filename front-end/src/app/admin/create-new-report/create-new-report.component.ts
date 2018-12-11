import { DataRule } from './../../shared/view-models/data.viewmodel';
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
  FormArray,
  FormGroupDirective
} from '@angular/forms';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { DatarulesService } from 'src/app/shared/services/datarules.service';
import { MatStepper, MatSnackBar } from '@angular/material';

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
    private reportService: ReportService,
    public snackBar: MatSnackBar
  ) {}
  reports: ReportViewModel.SimpleReport[];
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  reportInfoForm: FormGroup;
  datasources: DataViewModel.DataSource[];
  selectedOrg;
  rules: DataViewModel.DataRule[] = [];
  organizationID;
  sub: any;
  sending = false;
  missingRules = [];
  duplicated = [];
  tooltip = {
    organization:
      'A report must be linked to one an organizations.  Note you can always update permissions later for which organizations can access the report.',
    name:
      'A general name for the report that users from each organization will see when accessing reports.',
    datastudioLink:
      'The link to the datastudio url for this report. (eg. https://datastudio.google.com/c/u/0/reporting/0B_U5RNpwhcE6QXg4SXFBVGUwMjg/page/6zXD/preview)',
    datastudioSource:
      'The link to the datastudio source for this report. (eg. https://datastudio.google.com/c/u/0/reporting/0B_U5RNpwhcE6QXg4SXFBVGUwMjg/page/6zXD/preview)',
    datasource:
      'Select the data sources used from within BigQuery for this report.  These data sources should match the data sources used in data studio to generate this report.'
  };

  async ngOnInit() {
    try {
      this.datasources = await this.datarulesService.getDataSources();
      this.orgForm = this.formBuilder.group({
        organization: ['', Validators.required]
      });
      this.reportInfoForm = this.formBuilder.group({
        name: ['', [Validators.required, this.noWhitespaceValidator]],
        link: ['', [Validators.required, this.noWhitespaceValidator]],

        datasources: this.formBuilder.array(
          [this.initItemRows()],
          [this.noDuplicate.bind(this)]
        )
      });
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });

      if (this.organizationID) {
        this.selectedOrg = await this.organizationService.getLocalOrganization(
          this.organizationID
        );
        this.rules = await this.datarulesService.getDataRules(
          this.organizationID
        );
      }
      this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
    } catch (error) {
    }
  }

  selectStep(id) {
    this.stepper.selectedIndex = id;
  }

  initItemRows() {
    return this.formBuilder.group({
      datastudio: ['', [Validators.required, this.noWhitespaceValidator]],
      bigquery: ['', [Validators.required, this.missing.bind(this)]]
    });
  }

  addNewRow() {
    const control = <FormArray>this.reportInfoForm.controls['datasources'];
    control.push(this.initItemRows());
  }
  resetForm(formDirective: FormGroupDirective) {
    this.reportInfoForm.reset();
    this.reportInfoForm.markAsPristine();
    this.reportInfoForm.markAsUntouched();
  }

  deleteRow(index: number) {
    const control = <FormArray>this.reportInfoForm.controls['datasources'];
    control.removeAt(index);
  }

  newRule() {
    this.router.navigate(['admin/o', this.selectedOrg._id]);
  }

  async selectOrg() {
    try {
      this.selectedOrg = this.organizations.find(org => {
        return org._id === this.orgForm.value.organization;
      });
      this.rules = await this.datarulesService.getDataRules(
        this.selectedOrg._id
      );
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
    if (array.value) {
      this.duplicated = [];
      const temp = [];
      for (const datasource of array.value) {
        if (! temp.includes(datasource.bigquery)) {
          if (datasource.bigquery !== '') {
            temp.push(datasource.bigquery);
          }
        } else {
          if (!this.duplicated.includes(datasource.bigquery)) {
            if (datasource.bigquery !== '') {
              this.duplicated.push(datasource.bigquery);
            }
          }
        }
      }
      if (this.duplicated.length > 0) {
        return { duplicate: true };
      }
      return null;
    }
  }

  public missing(control: FormControl): Validators {
    if (control.value) {
        const temp = this.rules.filter(rule => {
          return rule.datasource === control.value;
        });
        if (temp.length === 0) {
          return  { missing: true };
        } else {
          return null;
        }
    }
    return null;
  }

  public noDataRuleValidator(control: FormControl): Validators {
    if (control.value) {
      this.missingRules = [];
      for (const datasource of control.value) {
        const temp = this.rules.filter(rule => {
          return rule.datasource === datasource.bigquery;
        });
        if (temp.length === 0) {
          this.missingRules.push(datasource.bigquery);
        }
      }
      if (this.missingRules.length > 0) {
        return { missingRules: true };
      }
    } else {
      return null;
    }
    return null;
  }

  async onSubmit() {
    this.sending = true;
    let organization;
    if (this.organizationID) {
      organization = this.organizations.find(element => {
        return element._id === this.organizationID;
      });
    } else {
      organization = organization = this.organizations.find(element => {
        return element._id === this.orgForm.value.organization;
      });
    }
    const rForm = this.reportInfoForm.value;
    const org = [];
    org.push(organization);
    const report: ReportViewModel.CreateNewReport = {
      name: rForm.name,
      link: rForm.link,
      datasources: rForm.datasources,
      organizations: org
    };
    try {
      const status = await <any>this.reportService.createNewReport(report);
      if (status.status === '200') {
        if (this.organizationID) {
          await this.router.navigate(['../r', status.results], {
            relativeTo: this.route,
            queryParams: { new: 'new', selectedOrg: organization._id }
          });
        } else {
          await this.router.navigate(['../../r', status.results], {
            relativeTo: this.route,
            queryParams: { new: 'new', selectedOrg: organization._id }
          });
        }
      } else {
        this.sending = false;
        this.snackBar.open('Error: ' + status.message, 'Dismiss', {
          duration: 5000
        });
      }
    } catch (error) {
      console.log(error);
      this.sending = false;
    }
  }
}

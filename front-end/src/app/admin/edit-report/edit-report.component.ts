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
import { MatStepper, MatSnackBar } from '@angular/material';

interface OrganizationWithRules {
  _id: string;
  name: string;
  rules: DataViewModel.DataRule[];
}
interface MissingRules {
  _id: string;
  name: string;
  missingRules: string[];
}

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
    private reportService: ReportService,
    public snackBar: MatSnackBar
  ) {}
  organizations: OrganizationViewModel.SimpleOrganization[];
  orgForm: FormGroup;
  reportInfoForm: FormGroup;
  datasources: DataViewModel.DataSource[];
  selectedOrg;
  organizationID;
  sub: any;
  report;
  reportID: string;
  sending = false;
  selectedOrgID;
  rules: DataViewModel.DataRule[] = [];
  missingRules = [];
  organizationRules: OrganizationWithRules[] = [];
  duplicated = [];
  tooltip = {
    name: 'A general name for the report that users from each organization will see when accessing reports.',
    datastudioLink: 'The link to the datastudio url for this report. (eg. https://datastudio.google.com/c/u/0/reporting/0B_U5RNpwhcE6QXg4SXFBVGUwMjg/page/6zXD/preview)',
    datastudioSource: 'The link to the datastudio source for this report. (eg. https://datastudio.google.com/c/u/0/reporting/0B_U5RNpwhcE6QXg4SXFBVGUwMjg/page/6zXD/preview)',
    datasource: 'Select the data sources used from within BigQuery for this report.  These data sources should match the data sources used in data studio to generate this report.'
  };



  async ngOnInit() {
    try {
      this.sub = await this.route.params.subscribe(params => {
        this.reportID = params['reportID'];
      });
      this.datasources = await this.datarulesService.getDataSources();
      this.report = await this.reportService.getReportDetails(this.reportID);
      this.organizations = this.report.organizations;
      this.selectedOrgID = await this.route.snapshot.queryParamMap.get('selectedOrg');
      for (const org of this.organizations) {
        const temp = {
          _id: org._id,
          name: org.name,
          rules: await await this.datarulesService.getDataRules(org._id)
        };
        const temp2 = {
          _id: org._id,
          name: org.name,
          missingRules: [],
        };
        this.organizationRules.push(temp);
        this.missingRules.push(temp2);
      }

      this.reportInfoForm = this.formBuilder.group({
        name: [
          this.report.name,
          [Validators.required, this.noWhitespaceValidator]
        ],
        link: [
          this.report.link,
          [Validators.required, this.noWhitespaceValidator]
        ],
        datasources: this.formBuilder.array(
          [this.initItemRows('', '')],
          [this.noDuplicate.bind(this)]
        ),

      });
      const control = <FormArray>(
        this.reportInfoForm.controls['datasources']
      );
      control.removeAt(0);
      for (const datasource of this.report.datasources) {
        this.addNewRow(datasource.datastudio, datasource.bigquery);
      }
    } catch (error) {
      console.log(error);
    }
  }

  initItemRows(datastudio, bigquery) {
    return this.formBuilder.group({
      datastudio: [datastudio, [Validators.required, this.noWhitespaceValidator]],
      bigquery: [bigquery, [Validators.required, this.missing.bind(this)]]
    });
  }

  addNewRow(datastudio, bigquery) {
    const control = <FormArray>(
      this.reportInfoForm.controls['datasources']
    );
    control.push(this.initItemRows(datastudio, bigquery));
  }

  deleteRow(index: number) {
    const control = <FormArray>(
      this.reportInfoForm.controls['datasources']
    );
    control.removeAt(index);
  }

  selectOrg() {
    this.selectedOrg = this.organizations.find(org => {
      return org._id === this.orgForm.value.organization;
    });
  }

  newRule(id) {
    this.router.navigate(['admin/o', id]);
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
      for (const org of this.organizationRules) {
        const temp = org.rules.filter(rule => {
          return rule.datasource === control.value;
        });
        if (temp.length === 0) {
          return  { missing: true };
        } else {
          return null;
        }
      }
    }
    return null;
  }

  public checkMissingRules(value) {
    const missingOrgs = [];
    for (const org of this.organizationRules) {
      const temp = org.rules.filter(rule => {
        return rule.datasource === value;
      });
      if (temp.length === 0) {
        const x = missingOrgs.filter( y => {
          return y._id === org._id;
        });
        if (x.length === 0) {
          missingOrgs.push(org);
        }
      }
    }
    return missingOrgs;
  }

  public noDataRuleValidator(control: FormControl): Validators {
    for (const item of this.missingRules) {
      item.missingRules = [];
    }
    if (control.value) {
      for (const datasource of control.value.bigquery) {
        for ( const org of this.organizationRules) {
            const temp = org.rules.filter( rule => {
              return rule.datasource === datasource;
            });
            if (temp.length === 0) {
              const temp2 = this.missingRules.find(item => {
                return item._id === org._id;
              });
              temp2.missingRules.push(datasource);
            }
        }
      }
      let count = 0;
      for (const x of this.missingRules) {
        count = count + x.missingRules.length ;
      }
      if (count > 0) {
        return { missingRules: true };
      } else {
        return null;
      }
    }
    return null;
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route, queryParams: { selectedOrg: this.selectedOrgID}} );
  }

  async onSubmit() {
    this.sending = true;
    try {
      const rForm = this.reportInfoForm.value;
      const newReport: ReportViewModel.EditReport = {
        _id: this.reportID,
        name: rForm.name,
        link: rForm.link,
        datasources: rForm.datasources,
        organizations: this.report.organizations,
        created_at: this.report.created_at,
        createdBy: this.report.createdBy,
        updatedBy: this.report.updatedBy
      };
      const status =  await <any>this.reportService.editReport(this.report, newReport);
      if (status.status === '200') {
        await this.router.navigate(['../'], { relativeTo: this.route, queryParams: { edited: 'true', selectedOrg: this.selectedOrgID}} );
      } else {
        this.sending = false;
        this.snackBar.open('Error: ' + status.message, 'Dismiss', {
          duration: 5000,
        });
      }
    } catch (error) {
      this.sending = false;
      console.log(error);
    }
  }
}

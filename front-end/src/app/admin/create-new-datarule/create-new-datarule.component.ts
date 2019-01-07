import { OrganizationService } from 'src/app/shared/services/organization.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DatarulesService } from './../../shared/services/datarules.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { MatSnackBar } from '@angular/material';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-create-new-datarule',
  templateUrl: './create-new-datarule.component.html',
  styleUrls: ['./create-new-datarule.component.scss']
})


export class CreateNewDataruleComponent implements OnInit, OnDestroy {
  dataruleFormGroup: FormGroup;
  datasourceGroup: FormGroup;
  datasources: DataViewModel.DataSource[];
  constructor(
    private formBuilder: FormBuilder,
    private datarulesService: DatarulesService,
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}
  identifiers: DataViewModel.Identifier[];
  organizationId;
  sub: Subscription;
  organization;
  selectedDataSource;
  secondFormInitialized = false;
  sending = false;

  tooltip = {
    name: 'Give this data rule a name.  This is helpful later if you choose to edit or delete data rules.',
    identifier: 'Select the column name for this data rule.',
    condition: 'Select the comparative logic for this data rule',
    token: 'Select the comparison value for this data rule.',
    datasource: 'Select a data source for this rule, each rule can only be applied to a single data source.  If you’d like to apply the rule to many data sources, you must create multiple rules.'
  };

  error = false;
  errorMessage = '';
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationId = params['id'];
      });
      this.datasources = await this.datarulesService.getDataSources();

      this.datasourceGroup = this.formBuilder.group({
        datasource: ['', Validators.required],
      });
      this.dataruleFormGroup = this.formBuilder.group({
        name: ['', [Validators.required,  this.noWhitespaceValidator]],
        condition: ['', Validators.required],
        token: ['', [Validators.required,  this.noWhitespaceValidator]]
      });
      this.organization = await this.organizationService.getLocalOrganization(this.organizationId);
    } catch (error) {}
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  disableSecondForm() {
    this.secondFormInitialized = false;
    this.dataruleFormGroup.removeControl('identifier');
    this.dataruleFormGroup.reset();
  }

  async sourceSelected() {
    try {

      this.selectedDataSource = await this.datasourceGroup.value.datasource;
      this.identifiers = await this.datarulesService.getIdentifiers(this.selectedDataSource);
      await this.dataruleFormGroup.addControl( 'identifier', new FormControl('', Validators.required));
      this.secondFormInitialized = true;
      this.dataruleFormGroup.reset();
    } catch (error) {
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 5000,
      });

    }

  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }


  async onSubmit() {
    this.sending = true;
    const form = this.dataruleFormGroup.value;
    const datasource = this.datasourceGroup.value.datasource;
    const org = {
      name: this.organization.name,
      _id: this.organization._id
    };
    const selectedIdentifier = this.identifiers.find( identifier => {
      return identifier.name === form.identifier;
    });
    const datarule = {
      name: form.name,
      datasource: datasource,
      identifier: selectedIdentifier,
      condition: form.condition,
      token: form.token,
      organization: org
    };
    const ruleStatus = <any>await this.datarulesService.createNewDataRule(datarule);
    if ( ruleStatus.status === '200') {
      await this.router.navigate(['../'], { relativeTo: this.route, queryParams: { newRule: 'new'}} );
    } else {
      this.sending = false;
      this.snackBar.open('Error: ' + ruleStatus.message, 'Dismiss', {
        duration: 5000,
      });
    }
  }
}

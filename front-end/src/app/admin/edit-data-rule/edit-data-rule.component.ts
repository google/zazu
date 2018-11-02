import { OrganizationService } from 'src/app/shared/services/organization.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatarulesService } from './../../shared/services/datarules.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';



@Component({
  selector: 'app-edit-data-rule',
  templateUrl: './edit-data-rule.component.html',
  styleUrls: ['./edit-data-rule.component.scss']
})
export class EditDataRuleComponent implements OnInit, OnDestroy {
  dataruleFormGroup: FormGroup;
  datasources: DataViewModel.DataSource[];
  constructor(
    private formBuilder: FormBuilder,
    private datarulesService: DatarulesService,
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private dataruleService: DatarulesService
  ) {}
  identifiers: string[];
  organizationId;
  sub: Subscription;
  dataRules: DataViewModel.DataRule[];
  dataRule: DataViewModel.DataRule;
  dataRuleId;
  organization;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationId = params['id'];
        this.dataRuleId = params['ruleID'];
      });
      this.dataRules = await this.datarulesService.getDataRules('orgID');
      this.dataRule = this.dataRules.find( element => {
        return element._id === this.dataRuleId;
      });
      this.datasources = await this.datarulesService.getDataSources();

      this.identifiers = [
        'Identifier 1',
        'Identifier 2',
        'Identifier 3',
        'Identifier 4'
      ];
      this.identifiers = await this.dataruleService.getIdentifiers('datarule.datasource');
      this.dataruleFormGroup = this.formBuilder.group({
        name: [this.dataRule.name, [Validators.required,  this.noWhitespaceValidator]],
        identifier: [this.dataRule.identifier, Validators.required],
        condition: [this.dataRule.condition, Validators.required],
        token: [this.dataRule.token, [Validators.required,  this.noWhitespaceValidator]]
      });
      this.organization = await this.organizationService.getLocalOrganization(this.organizationId);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  onSubmit() {
    const form = this.dataruleFormGroup.value;
    const datarule = {
      _id: this.dataRuleId,
      name: form.name,
      datasource: String(this.dataRule.datasource),
      identifier: form.identifier,
      condition: form.condition,
      token: form.token,
      organization: this.dataRule.organization
    };
    this.dataruleService.editDataRule(datarule);
    console.log(datarule);
  }

}

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
  ) {}
  identifiers: string[];
  organizationId;
  sub: Subscription;
  dataRules: DataViewModel.DataRule[];
  dataRule: DataViewModel.DataRule;
  dataRuleId;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationId = params['id'];
        this.dataRuleId = params['ruleID'];
      });
      // ****** Remember to do change this to only get the item without using the list
      console.log(this.dataRuleId);
      this.dataRules = await this.datarulesService.getDataRules('orgID');
      this.dataRule = this.dataRules.find( element => {
        return element.id === this.dataRuleId;
      });
      console.log(this.dataRule);
      this.datasources = await this.datarulesService.getAllDataSourceForOrganization(
        'id'
      );

      this.identifiers = [
        'Identifier 1',
        'Identifier 2',
        'Identifier 3',
        'Identifier 4'
      ];
      this.dataruleFormGroup = this.formBuilder.group({
        name: [this.dataRule.name, [Validators.required,  this.noWhitespaceValidator]],
        datasource: [this.dataRule.datasource, Validators.required],
        identifier: [this.dataRule.identifier, Validators.required],
        condition: [this.dataRule.condition, Validators.required],
        token: [this.dataRule.token, [Validators.required,  this.noWhitespaceValidator]]
      });
      console.log('Initialized');
    } catch (error) {}
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
      id: this.dataRuleId,
      name: form.name,
      datasource: form.datasource,
      identifier: form.identifier,
      condition: form.condition,
      token: form.token,
      organization: this.organizationId
    };
    console.log(datarule);
  }

}

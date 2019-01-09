import { MatSnackBar } from '@angular/material';
import { OrganizationService } from 'src/app/shared/services/organization.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
    private dataruleService: DatarulesService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}
  identifiers: DataViewModel.Identifier[];
  organizationId;
  sub: Subscription;
  dataRules: DataViewModel.DataRule[];
  dataRule: DataViewModel.DataRule;
  dataRuleId;
  organization;
  sending = false;
  oldRule;
  initiated = false;

  tooltip = {
    name: 'Give this data rule a name.  This is helpful later if you choose to edit or delete data rules.',
    identifier: 'Select the column name for this data rule.',
    condition: 'Select the comparative logic for this data rule',
    token: 'Select the comparison value for this data rule.',
    datasource:
      'Select a data source for this rule, each rule can only be applied to a single data source.  If you’d like to apply the rule to many data sources, you must create multiple rules.'
  };

  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationId = params['id'];
        this.dataRuleId = params['ruleID'];
      });
      this.dataRules = await this.datarulesService.getDataRules(this.organizationId);
      this.dataRule = this.dataRules.find(element => {
        return element._id === this.dataRuleId;
      });
      this.oldRule = this.dataRule;
      this.datasources = await this.datarulesService.getDataSources();
      this.identifiers = await this.dataruleService.getIdentifiers(this.dataRule.datasource);
      this.dataruleFormGroup = this.formBuilder.group({
        name: [this.dataRule.name, [Validators.required, this.noWhitespaceValidator]],
        identifier: [this.dataRule.identifier.name, Validators.required],
        condition: [this.dataRule.condition, Validators.required],
        token: [this.dataRule.token, [Validators.required, this.noWhitespaceValidator]]
      });

      this.initiated = true;
    } catch (error) {
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 30000
      });
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

  async onSubmit() {
    try {
      this.sending = true;
      const form = this.dataruleFormGroup.value;
      const selectedIdentifier = this.identifiers.find(identifier => {
        return identifier.name === form.identifier;
      });
      const newIdentifier = {
        name: selectedIdentifier.name,
        identifierType: selectedIdentifier.type,
        mode: selectedIdentifier.mode,
      };
      const newRule = {
        _id: this.dataRuleId,
        name: form.name,
        datasource: String(this.dataRule.datasource),
        identifier: newIdentifier,
        condition: form.condition,
        token: form.token,
        organization: this.dataRule.organization
      };

      const status = await (<any>this.dataruleService.editDataRule(newRule, this.oldRule));
      if (status.status === '200') {
        await this.router.navigate(['../../'], {
          relativeTo: this.route,
          queryParams: { ruleEdited: 'true'}
        });
      } else {
        this.sending = false;
        this.snackBar.open('Error: ' + status.message, 'Dismiss', {
          duration: 30000
        });
      }

    } catch (error) {
      this.sending = false;
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 30000
      });
    }
  }
}

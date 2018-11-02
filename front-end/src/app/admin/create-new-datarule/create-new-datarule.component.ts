import { OrganizationService } from 'src/app/shared/services/organization.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatarulesService } from './../../shared/services/datarules.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';

@Component({
  selector: 'app-create-new-datarule',
  templateUrl: './create-new-datarule.component.html',
  styleUrls: ['./create-new-datarule.component.scss']
})
export class CreateNewDataruleComponent implements OnInit, OnDestroy {
  dataruleFormGroup: FormGroup;
  datasources: DataViewModel.DataSource[];
  constructor(
    private formBuilder: FormBuilder,
    private datarulesService: DatarulesService,
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
  ) {}
  identifiers: string[];
  organizationId;
  sub: Subscription;
  organization;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationId = params['id'];
      });
      this.datasources = await this.datarulesService.getDataSources();
      this.identifiers = await this.datarulesService.getIdentifiers();
      this.dataruleFormGroup = this.formBuilder.group({
        name: ['', [Validators.required,  this.noWhitespaceValidator]],
        datasource: ['', Validators.required],
        identifier: ['', Validators.required],
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

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }


  onSubmit() {
    const form = this.dataruleFormGroup.value;
    const org = {
      name: this.organization.name,
      _id: this.organization._id
    };
    const datarule = {
      name: form.name,
      datasource: form.datasource,
      identifier: form.identifier,
      condition: form.condition,
      token: form.token,
      organization: org
    };
    console.log(datarule);
    this.datarulesService.createNewDataRule(datarule);
  }
}

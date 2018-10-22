import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DatarulesService } from './../../shared/services/datarules.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private route: ActivatedRoute
  ) {}
  identifiers: string[];
  organizationId;
  sub: Subscription;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationId = params['id'];
      });
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
        name: ['', Validators.required],
        datasource: ['', Validators.required],
        identifier: ['', Validators.required],
        condition: ['', Validators.required],
        token: ['', Validators.required]
      });
    } catch (error) {}
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit() {
    const form = this.dataruleFormGroup.value;
    const datarule = {
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

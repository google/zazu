import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent implements OnInit {
  constructor(
    private organizatinonService: OrganizationService,
    private _fb: FormBuilder,
    private route: ActivatedRoute
  ) {}
  options = [];

  orgNameTooltip =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria. Restinguet citius, si ardentem acceperit. ';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  selectedCategories = [''];
  organizationID;
  sub: any;
  orgs: OrganizationViewModel.OrganizationDetails[];
  org: OrganizationViewModel.OrganizationDetails;
  orgForm: FormGroup;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
      this.org = await this.organizatinonService.getLocalOrganization(this.organizationID);
      this.options = await this.organizatinonService.getAllCategories();
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.orgForm = this._fb.group({
        orgName: new FormControl(this.org.name, [
          Validators.required,
          this.noWhitespaceValidator
        ]),
        itemRows: this._fb.array([this.initItemRows('')], this.noDuplicate)
      });
      const control = <FormArray>this.orgForm.controls['itemRows'];
      control.removeAt(0);
      for (const category of this.org.categories) {
        this.addNewRow(category);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      option => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  addAnotherCategory() {
    this.selectedCategories.push('');
  }

  initItemRows(name) {
    return this._fb.group({
      itemname: [name, [Validators.required, this.noWhitespaceValidator]]
    });
  }

  addNewRow(name) {
    const control = <FormArray>this.orgForm.controls['itemRows'];
    control.push(this.initItemRows(name));
  }

  deleteRow(index: number) {
    const control = <FormArray>this.orgForm.controls['itemRows'];
    control.removeAt(index);
  }

  get controls() {
    return this.orgForm.controls;
  }

  onSubmit() {
    const temp = [];

    for (const itemname of this.orgForm.value.itemRows) {
      temp.push(itemname.itemname);
    }
    const org = {
      _id: this.organizationID,
      name: this.orgForm.value.orgName,
      categories: temp
    };
    this.organizatinonService.editOrganization(org);
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public getForm() {
    return this.orgForm;
  }

  public noDuplicate(array): Validators {
    if (array.errors) {
      console.log(array.errors.duplicate);
    }
    if (array.value) {
      const temp = [];
      for (const itemname of array.value) {
        if (!temp.includes(itemname.itemname)) {
          temp.push(itemname.itemname);
        } else {
          return { duplicate: true };
        }
      }
    }
    return null;
  }
}

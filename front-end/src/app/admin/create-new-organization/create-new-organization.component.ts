import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-new-organization',
  templateUrl: './create-new-organization.component.html',
  styleUrls: ['./create-new-organization.component.scss']
})
export class CreateNewOrganizationComponent implements OnInit {
  constructor(
    private organizatinonService: OrganizationService,
    private _fb: FormBuilder
  ) {}
  options = [];

  orgNameTooltip =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria. Restinguet citius, si ardentem acceperit. Sed quid sentiat, non videtis. Vide, quantum, inquam, fallare, Torquate. Age, inquies, ista parva sunt.';

  filteredOptions: Observable<string[]>;
  selectedCategories = [''];

  orgForm: FormGroup;

  async ngOnInit() {
    try {
      this.options = await this.organizatinonService.getAllCategories();
      this.orgForm = await this._fb.group({
        orgName: new FormControl('', [
          Validators.required,
          this.noWhitespaceValidator
        ]),
        itemRows: this._fb.array([this.initItemRows()], this.noDuplicate)
      });

    } catch (error) {
      console.log(error);
    }
  }



  addAnotherCategory() {
    this.selectedCategories.push('');
  }

  initItemRows() {
    return this._fb.group({
      itemname: ['', [Validators.required, this.noWhitespaceValidator]]
    });
  }

  addNewRow() {
    const control = <FormArray>this.orgForm.controls['itemRows'];
    control.push(this.initItemRows());
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
      name: this.orgForm.value.orgName,
      categories: temp
    };
    console.log(org);
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

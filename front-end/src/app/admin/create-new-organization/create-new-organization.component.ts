import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-new-organization',
  templateUrl: './create-new-organization.component.html',
  styleUrls: ['./create-new-organization.component.scss']
})
export class CreateNewOrganizationComponent implements OnInit {
  constructor(
    private organizatinonService: OrganizationService,
    private fb: FormBuilder,
    private _fb: FormBuilder
  ) {}
  options = [];

  orgNameTooltip =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Peccata paria. Restinguet citius, si ardentem acceperit. Sed quid sentiat, non videtis. Vide, quantum, inquam, fallare, Torquate. Age, inquies, ista parva sunt.';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  selectedCategories = [''];

  orgForm: FormGroup;

  async ngOnInit() {
    try {
      this.options = await this.organizatinonService.getAllCategories();
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.orgForm = this._fb.group({
        orgName: new FormControl('', [ Validators.required, this.noWhitespaceValidator]),
        itemRows: this._fb.array([this.initItemRows()])
      });
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

  print() {
    console.log(this.orgForm.value);
    console.log(this.orgForm.controls.orgName);
    console.log(this.orgForm.valid);
  }

  initItemRows() {
    return this._fb.group({
      itemname: ['', [ Validators.required, this.noWhitespaceValidator]]
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
    const categories = [];
    console.log(this.orgForm.value);
    for (const itemname of this.orgForm.value.itemRows) {
      categories.push(itemname.itemname);
    }
    console.log(categories);


  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}

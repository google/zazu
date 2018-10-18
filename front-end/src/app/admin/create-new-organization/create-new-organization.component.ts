import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-new-organization',
  templateUrl: './create-new-organization.component.html',
  styleUrls: ['./create-new-organization.component.scss']
})
export class CreateNewOrganizationComponent implements OnInit {

  constructor(private organizatinonService: OrganizationService) { }
  options = [];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  async ngOnInit() {
    try {
      this.options = await this.organizatinonService.getAllCategories();
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    } catch (error) {
      console.log(error);
    }


  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}

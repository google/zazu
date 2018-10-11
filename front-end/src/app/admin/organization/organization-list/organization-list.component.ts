import { OrganizationService } from './../../../shared/services/organization.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as OrganizationViewModel from '../../../shared/view-models/organization.viewmodel';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private organizationService: OrganizationService
  ) {}
  sorts = [
    'Alphabetical',
    'Most Reports',
    'Most Users',
    'Most Data Rules'
  ];
  // Array of all organizations
  organizations: OrganizationViewModel.OrganizationDetails[];
  searchValue = '';
  // All categories
  sortValue = this.sorts[0];
  categories: string[] = [];
  search = '';
  selectedCategories: string[] = [];



  // form group for filter
  filterForm = new FormGroup({
    name: new FormControl(''),
  });



  async ngOnInit() {
    // Gets all organizations OnInit
    try {
      this.organizations = await this.organizationService.getAllOrganizations();
      await this.getAllCategories(this.organizations);
      for (const category of this.categories) {
        this.filterForm.addControl(category , new FormControl(''));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Go to organization details
  goToDetails(id) {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

  // Get all categories with no repetition
  getAllCategories(orgs: OrganizationViewModel.OrganizationDetails[]) {
    orgs.forEach( (org) => {
      org.categories.forEach ((category) => {
        if (!this.categories.includes(category) ) {
          this.categories.push(category);
        }
      });
    });
  }


  // changes sort preferences
  changeSort(sort) {
    this.sortValue = sort;
    console.log(this.sortValue);
  }

  // currently done in pipes
  /*
  public sortOrganization(prop) {
    if (prop === 'Alphabetical') {
      const sorted = this.organizations.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
      if (prop.charAt(0) === '-') { sorted.reverse(); }
      this.organizations = sorted;
    }
    if (prop === 'Most Reports') {
      const sorted = this.organizations.sort((a, b) => Number(a.reportsCount) < Number(b.reportsCount) ? 1 : Number(a.reportsCount) === Number(b.reportsCount) ? 0 : -1);
      this.organizations = sorted;
    }

    if (prop === 'Most Users') {
      const sorted = this.organizations.sort((a, b) => Number(a.usersCount) < Number(b.usersCount) ? 1 : Number(a.usersCount) === Number(b.usersCount) ? 0 : -1);
      this.organizations = sorted;
    }

    if (prop === 'Most Data Rules') {
      const sorted = this.organizations.sort((a, b) => Number(a.datarulesCount) < Number(b.datarulesCount) ? 1 : Number(a.datarulesCount) === Number(b.datarulesCount) ? 0 : -1);
      this.organizations = sorted;
    }

  }

  */

  // On Search, will search stuff
  onSearch() {
    this.selectedCategories = [];
    console.log(this.filterForm.value);
    const temp = this.filterForm.value;
    for (const category of this.categories) {
        if (category in temp) {
          if (temp[category]) {
            this.selectedCategories.push(category);
          }
        }
    }
    this.search = temp.name;
    console.log(this.selectedCategories);
  }

  searchFormReset() {
    this.filterForm.reset();
  }
}

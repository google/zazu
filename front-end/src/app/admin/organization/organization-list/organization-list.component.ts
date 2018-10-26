import { PaginationService } from './../../../shared/services/pagination.service';
import { OrganizationService } from './../../../shared/services/organization.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as OrganizationViewModel from '../../../shared/view-models/organization.viewmodel';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private paginationService: PaginationService
  ) {}
  sorts = ['Alphabetical', 'Most Reports', 'Most Users', 'Most Data Rules'];
  // Array of all organizations
  organizations: OrganizationViewModel.OrganizationDetails[];
  searchValue = '';
  // All categories
  sortValue = this.sorts[0];
  categories: string[] = [];
  search = '';
  selectedCategories: string[] = [];
  viewChange = false;

  pagination;
  pageSubscription: Subscription;

  // form group for filter
  filterForm = new FormGroup({
    name: new FormControl('')
  });
  initialized = false;
  async ngOnInit() {
    // Gets all organizations OnInit
    try {
      this.organizations = await this.organizationService.getAllOrganizations();
      await this.getAllCategories(this.organizations);
      for (const category of this.categories) {
        this.filterForm.addControl(category, new FormControl(''));
      }
      this.pageSubscription = this.paginationService.paginationChanged.subscribe((pagination) => {
        this.pagination = pagination;
      });
      this.paginationService.getPagination();
      this.paginationService.changePage(1);
      this.initialized = true;
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
    orgs.forEach(org => {
      org.categories.forEach(category => {
        if (!this.categories.includes(category)) {
          this.categories.push(category);
        }
      });
    });
  }

  // changes sort preferences
  changeSort(sort) {
    this.sortValue = sort;
    this.paginationService.changePage(1);
  }

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
    this.paginationService.changePage(1);
  }

  searchFormReset() {
    this.filterForm.reset();
  }

  // Pagination Methods
  nextPage() {
    if (this.pagination.currentPage < this.pagination.totalPages) {
      this.paginationService.changePage(this.pagination.currentPage + 1);
    }
  }

  previousPage() {
    if (this.pagination.currentPage > 1) {
      this.paginationService.changePage(this.pagination.currentPage - 1);
    }
  }

  ngOnDestroy(): void {
    if (this.pageSubscription) {
      this.pageSubscription.unsubscribe();

    }
  }
}

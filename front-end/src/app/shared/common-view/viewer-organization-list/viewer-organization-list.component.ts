import { ViewerService } from 'src/app/shared/services/viewer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { OrganizationService } from '../../services/organization.service';
import { PaginationService } from '../../services/pagination.service';
import { MatSnackBar } from '@angular/material';
import * as OrganizationViewModel from '../../view-models/organization.viewmodel';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewer-organization-list',
  templateUrl: './viewer-organization-list.component.html',
  styleUrls: ['./viewer-organization-list.component.scss']
})
export class ViewerOrganizationListComponent implements OnInit, OnDestroy,  AfterViewChecked  {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private paginationService: PaginationService,
    public snackBar: MatSnackBar,
    private viewerService: ViewerService,
    private cdRef: ChangeDetectorRef
  ) {}
  sorts = ['Alphabetical', 'Most Reports'];
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
  viewerInitSubscription: Subscription;
  reports;
  error = false;
  errorMessage = '';
  async ngOnInit() {
    // Gets all organizations OnInit
    try {
      this.viewerInitSubscription = this.viewerService.getInitialized().subscribe(async init => {
        if (init) {
          try {
            // await this.viewerService.initialSet();
            this.reports = await this.viewerService.getReportByUser(this.viewerService.getUser()._id);
            this.organizations = await this.viewerService.getOrganizations();
            // await this.getAllCategories(this.organizations);
            /*
            for (const category of this.categories) {
              this.filterForm.addControl(category, new FormControl(''));
            }
            if (this.reports.length === 1) {
              console.log(this.reports);
              if (this.reports[0].organizations.length === 1) {
                console.log('one report - one org');
                this.router.navigate(['./r/', this.reports[0]._id], {
                  relativeTo: this.route,
                  queryParams: { selectedOrg: this.reports[0].organizations[0]._id }
                });
              }
            }
            */
            this.pageSubscription = this.paginationService.paginationChanged.subscribe(pagination => {
              this.pagination = pagination;
            });
            this.paginationService.getPagination();
            this.paginationService.changePage(1);
            this.initialized = true;
          } catch (e) {
            this.error = true;
            this.errorMessage = e.message;
          }
        }
      });
    } catch (e) {
      this.error = true;
      this.errorMessage = e.message;
    }
  }


  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    if (this.pagination) {
      this.cdRef.detectChanges();
    }

  }

  // Go to organization details
  async goToList(id) {
    try {
      const org = this.organizations.find(x => x._id === id);
      this.router.navigate(['./', id], { relativeTo: this.route });

      let status;
      if (this.viewerService.adminUser) {
        status = await (<any>this.viewerService.initializeGhost(org, this.viewerService.adminUser));
      } else {
        status = await (<any>this.viewerService.initializeGhost(org, this.viewerService.getUser()));
      }
      if (status.status === '200') {
        this.viewerService.chooseOrganization(id);
        this.router.navigate(['./', id], { relativeTo: this.route });
      }
    } catch (error) {
      this.snackBar.open('Error: ' + error.message, 'Dismiss', {
        duration: 30000,
      });
    }
  }

  reInitialize() {
    this.error = false;
    this.ngOnInit();
  }

  /*
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
  */

  // changes sort preferences
  changeSort(sort) {
    this.sortValue = sort;
    this.paginationService.changePage(1);
  }

  // On Search, will search stuff
  onSearch() {
    this.selectedCategories = [];
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

  getReportsCountByOrg(orgID) {
    return this.viewerService.reportsCountByOrg(orgID);
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
    if (this.viewerInitSubscription) {
      this.pageSubscription.unsubscribe();
    }
  }
}

import { OrganizationService } from './../../services/organization.service';
import { Component, OnInit, EventEmitter, Input, Output, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import * as UserViewModel from '../../view-models/user.viewmodel';
import * as OrganizationViewModel from '../../view-models/organization.viewmodel';
import { PaginationService } from '../../services/pagination.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewChecked {
  constructor(
    private organizationService: OrganizationService,
    private paginationService: PaginationService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  @Input()
  users: UserViewModel.SimpleUserView[];
  @Output()
  userID = new EventEmitter<string>();
  sub: any;
  pageSubscription: Subscription;
  selectedOrganization = '';
  selectedRole = '';
  organizations: OrganizationViewModel.SimpleOrganization[];
  sorts = ['First Name', 'Last Name'];
  sortValue = this.sorts[0];
  organizationID;
  searchName;
  filterForm = new FormGroup({
    name: new FormControl(''),
    selectedRole: new FormControl('All')
  });
  pagination;
  formInitialize = false;


  async ngOnInit() {
    try {
      this.paginationService.resetPage();
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
      this.pageSubscription = this.paginationService.paginationChanged.subscribe(
        pagination => {
          this.pagination = pagination;
        }
      );
      this.paginationService.getPagination();
      if (!this.organizationID) {
        this.organizations = await this.organizationService.getAllOrganizationsWithNoDetails();
        this.filterForm.addControl(
          'selectedOrganization',
          new FormControl('All')
        );
      }
      this.formInitialize = true;
    } catch (error) {
      console.log(error);
    }
  }



  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    if (this.pagination) {
      this.cdRef.detectChanges();
    }

  }


  userClicked(id: string) {
    this.userID.emit(id);
  }

  changeSort(sort) {
    this.paginationService.resetPage();
    this.sortValue = sort;
  }

  onSearch() {
    this.paginationService.resetPage();
    const temp = this.filterForm.value;
    this.searchName = temp.name;
    this.selectedOrganization = temp.selectedOrganization;
    this.selectedRole = temp.selectedRole;
  }

  searchFormReset() {
    this.filterForm.reset();
    this.filterForm.patchValue({ selectedRole: 'All' });
    this.filterForm.patchValue({ selectedOrganization: 'All' });
    this.paginationService.resetPage();
  }


  // Pagination Methods
  nextPage() {
    if (this.pagination.currentPage < this.pagination.totalPages) {
      this.paginationService.changePage(this.pagination.currentPage + 1);
    }
  }
  // Pagination Methods
  previousPage() {
    if (this.pagination.currentPage > 1) {
      this.paginationService.changePage(this.pagination.currentPage - 1);
    }
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }
}


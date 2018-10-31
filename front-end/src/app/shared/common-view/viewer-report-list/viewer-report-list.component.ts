import { Component, OnInit, OnDestroy } from '@angular/core';
import * as ReportViewModel from '../../view-models/report.viewmodel';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as OrganizationViewModel from '../../view-models/organization.viewmodel';
import { ViewerService } from 'src/app/shared/services/viewer.service';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-viewer-report-list',
  templateUrl: './viewer-report-list.component.html',
  styleUrls: ['./viewer-report-list.component.scss']
})
export class ViewerReportListComponent implements OnInit, OnDestroy {
  constructor(private viewerService: ViewerService, private router: Router,  private paginationService: PaginationService, private route: ActivatedRoute) {}
  reports: ReportViewModel.SimpleReport[];
  organizations = [];
  initialized = false;
  filterForm = new FormGroup({
    name: new FormControl('')
  });
  sub: any;
  pageSubscription: Subscription;
  selectedOrganization = 'All';
  sorts = ['Latest', 'Alphabetical'];
  sortValue = this.sorts[0];
  organizationID;
  searchName;
  pagination;
  selectedOrgName;
  async ngOnInit() {
    try {
      this.paginationService.resetPage();
      this.pageSubscription = this.paginationService.paginationChanged.subscribe(
        pagination => {
          this.pagination = pagination;
        }
      );
      this.paginationService.getPagination();
      this.reports = await this.viewerService.getReports();
      if (this.reports.length === 1) {
        this.router.navigate(['../', this.reports[0]._id], { relativeTo: this.route });
      }
      const temp = [];
      for (const report of this.reports) {
        if (this.organizations.filter(e => e._id === report.organization._id).length === 0) {
          this.organizations.push(report.organization);
        }
      }
      if (this.organizations.length !== 1) {
        this.filterForm.addControl(
          'selectedOrganization',
          new FormControl('All')
        );
      }
      this.initialized = true;

    } catch (error) {
      console.log(error);
    }
  }

  initializeOrg() {

  }

  reportClicked(reportID, orgID) {
      this.router.navigate(['../', reportID], { relativeTo: this.route, queryParams: { selectedOrg: orgID} } );
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
    this.selectedOrgName = this.organizations.find(org => {
      return org._id === temp.selectedOrganization;
    });
  }

  searchFormReset() {
    this.filterForm.reset();
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
    if (this.pageSubscription) {
      this.pageSubscription.unsubscribe();

    }
  }
}

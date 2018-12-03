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
  constructor(
    private viewerService: ViewerService,
    private router: Router,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) {}
  reports: ReportViewModel.SimpleReport[] = [];
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
  viewerInitSubscription: Subscription;
  orgID;
  async ngOnInit() {
    console.log('viewer report list init called');
    try {
      this.sub = this.route.params.subscribe(params => {
        this.orgID = params['reportID'];
      });
      this.viewerInitSubscription = this.viewerService.getInitialized().subscribe(async init => {
        console.log(init);
        if (init) {
          this.sub = this.route.params.subscribe(params => {
            this.organizationID = params['orgID'];
          });
          if (this.organizationID) {
            console.log('passed by checked');
            this.paginationService.resetPage();
            this.pageSubscription = this.paginationService.paginationChanged.subscribe(pagination => {
              this.pagination = pagination;
            });
            this.paginationService.getPagination();

            this.reports = await this.viewerService.getReportsByOrganization(this.organizationID);
            if (this.reports.length === 1) {
              // this.router.navigate(['../', this.reports[0]._id], { relativeTo: this.route });
            }
            const temp = [];
            for (const report of this.reports) {
              if (this.organizations.filter(e => e._id === report.organization._id).length === 0) {
                this.organizations.push(report.organization);
              }
            }
            if (this.organizations.length !== 1) {
              this.filterForm.addControl('selectedOrganization', new FormControl('All'));
            }
            /*
            if (!this.viewerService.currentOrganization) {
              const org = this.organizations.find(x => x._id === this.organizationID);
              console.log(org);
              console.log(this.viewerService.user);
              const status = this.viewerService.initializeGhost(org, this.viewerService.user);
              console.log(status);
            }
            */
            this.initialized = true;
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  initializeOrg() {}

  reportClicked(reportID, orgID) {
    console.log('report clicked');
    this.router.navigate(['./r/', reportID], { relativeTo: this.route, queryParams: { selectedOrg: orgID } });
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
    if (this.viewerInitSubscription) {
      this.pageSubscription.unsubscribe();
    }
  }

  goToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

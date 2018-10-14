import { DatarulesService } from './../../shared/services/datarules.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import * as Filter from '../../shared/view-models/filter.viewmodel';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { ReportService } from '../../shared/services/report.service';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { UserService } from '../../shared/services/user.service';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import { PaginationService } from '../../shared/services/pagination.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,
    private dataruleService: DatarulesService,
    private reportService: ReportService,
    private userService: UserService,
    private paginationService: PaginationService
  ) {}
  // Subscription for route
  sub: any;
  // Organization Object
  organization: OrganizationViewModel.OrganizationDetails;
  // Organization ID
  organizationID: string;
  // reports
  reports: ReportViewModel.SimpleReport[];
  // rules array
  rules: DataViewModel.DataRule[];
  // users array
  users: UserViewModel.SimpleUserView[];
  selectedTab = 0;
  dataSources: DataViewModel.DataSource[];
  filterForm = new FormGroup({
    name: new FormControl(''),
    selectedDataSource: new FormControl('All')
  });
  formInitialize = false;
  sorts = ['Latest', 'Alphabetical'];
  sortValue = this.sorts[0];
  searchName;
  pageSubscription: Subscription;
  pagination;
  selectedDataSource = 'All';

  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
      // gets organization info
      this.organization = await this.organizationService.getOrganizationById(
        this.organizationID
      );
      // gets reports for this organization
      this.reports = await this.reportService.getReportByOrganization('orgID');
      // gets data rules for this organization
      this.rules = await this.dataruleService.getDataRules(this.organizationID);
      // gets users for this organization
      this.users = await this.userService.getUsersByOrganization('orgID');
      // get all data sources for this organization
      this.dataSources = await this.dataruleService.getAllDataSourceForOrganization(
        'orgID'
      );
      this.pageSubscription = this.paginationService.paginationChanged.subscribe(
        pagination => {
          this.pagination = pagination;
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  selected(event) {
    this.selectedTab = event;
    if (event === 2) {
      this.paginationService.resetPage();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.pageSubscription) {
      this.pageSubscription.unsubscribe();

    }
  }

  goToUser(userId) {
    this.router.navigate(['./u', userId], { relativeTo: this.route });
  }

  goToReport(reportID) {
    this.router.navigate(['./r', reportID], { relativeTo: this.route });
  }

  changeSort(sort) {
    this.paginationService.resetPage();
    this.sortValue = sort;
  }

  onSearch() {
    console.log(this.filterForm.value);
    this.paginationService.resetPage();
    const temp = this.filterForm.value;
    this.searchName = temp.name;
    this.selectedDataSource = temp.selectedDataSource;
  }

  searchFormReset() {
    this.filterForm.reset();
    this.paginationService.resetPage();
    this.filterForm.patchValue({ selectedDataSource: 'All' });
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

}

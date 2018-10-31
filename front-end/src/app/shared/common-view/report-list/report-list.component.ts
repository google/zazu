import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from './../../services/organization.service';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges
} from '@angular/core';
import * as ReportViewModel from '../../view-models/report.viewmodel';
import { PaginationService } from '../../services/pagination.service';
import * as OrganizationViewModel from '../../view-models/organization.viewmodel';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit, OnDestroy, OnChanges {
  constructor(
    private paginationService: PaginationService,
    private organizationService: OrganizationService,
    private route: ActivatedRoute
  ) {}
  @Input()
  reports: ReportViewModel.SimpleReport[];
  @Input()
  allowAdd: boolean;
  @Output()
  report = new EventEmitter<any>();
  sub: any;
  pageSubscription: Subscription;
  organizations: OrganizationViewModel.SimpleOrganization[] = [];
  pagination;
  sorts = ['Latest', 'Alphabetical'];
  selectedOrganization = '';
  sortValue = this.sorts[0];
  organizationID;
  searchName;
  filterForm = new FormGroup({
    name: new FormControl('')
  });
  formInitialize = false;
  userID;

  async ngOnInit() {
    try {
      console.log(this.reports);
      this.paginationService.resetPage();
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
        this.userID = params['userID'];
      });
      this.pageSubscription = this.paginationService.paginationChanged.subscribe(
        pagination => {
          this.pagination = pagination;
        }
      );
      this.paginationService.getPagination();
    } catch (error) {
      console.log(error);
    }
  }

  async ngOnChanges() {
    if (this.reports != null && this.organizations != null) {
      for (const report of this.reports) {
        if (!this.organizations.includes(report.organization)) {
          this.organizations.push(report.organization);
        }
      }
      if (this.organizations.length > 1) {
        this.filterForm.addControl(
          'selectedOrganization',
          new FormControl('All')
        );
      }
      console.log(this.organizations);
      this.formInitialize = true;
    }
  }

  reportClicked(reportID, orgID) {
    const report = {
      reportID: reportID,
      orgID: orgID
    };
    this.report.emit(report);
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
    this.pageSubscription.unsubscribe();
  }
}

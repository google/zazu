import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from './../../services/organization.service';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
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
export class ReportListComponent implements OnInit, OnDestroy {
  constructor(
    private paginationService: PaginationService,
    private organizationService: OrganizationService,
    private route: ActivatedRoute
  ) {}
  @Input()
  reports: ReportViewModel.SimpleReport[];
  @Output()
  reportID = new EventEmitter<string>();
  sub: any;
  pageSubscription: Subscription;
  organizations: OrganizationViewModel.SimpleOrganization[];
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

  reportClicked(id: string) {
    this.reportID.emit(id);
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

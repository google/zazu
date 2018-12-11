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
  OnChanges,
  Inject,
  ViewChild
} from '@angular/core';
import * as ReportViewModel from '../../view-models/report.viewmodel';
import { PaginationService } from '../../services/pagination.service';
import * as OrganizationViewModel from '../../view-models/organization.viewmodel';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit, OnDestroy, OnChanges {
  constructor(
    private paginationService: PaginationService,
    private organizationService: OrganizationService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {}
  @Input() reports: ReportViewModel.SimpleReport[];
  @Input() allowAdd: boolean;
  @Input() rawReports: ReportViewModel.SimpleRawReport[];
  @Output()
  report = new EventEmitter<any>();
  @ViewChild('t') trigger: MatMenuTrigger;
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
  menuOpen: boolean;
  overlay;

  async ngOnInit() {
    try {
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
        const temp = this.organizations.filter( x => {
          return x._id === report.organization._id;
        });

        if (temp.length === 0) {
          this.organizations.push(report.organization);
        }

      }
      if (this.organizations.length > 1) {
        this.filterForm.addControl(
          'selectedOrganization',
          new FormControl('All')
        );
      }
      this.formInitialize = true;
    }

    if (this.rawReports != null && this.organizations != null) {
      for (const report of this.rawReports) {
        for (const org of report.organizations) {
          const temp = this.organizations.filter( x => {
            return x._id === org._id;
          });
          if (temp.length === 0) {
            this.organizations.push(org);
          }
        }
      }
      if (this.organizations.length > 1) {
        this.filterForm.addControl(
          'selectedOrganization',
          new FormControl('All')
        );
      }
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


  openDialog( ) {
    const dialogRef = this.dialog.open(NewReportChoice, {

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openOverlay() {
    this.overlay = true;
  }

  closeOverlay() {
    this.overlay = false;
  }
}

@Component({
  selector: 'new-report-choice',
  templateUrl: 'new-report-choice.html'
})
export class NewReportChoice {
  constructor(
    public dialogRef: MatDialogRef<NewReportChoice>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



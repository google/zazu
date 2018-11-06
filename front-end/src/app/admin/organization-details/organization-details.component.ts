import { DatarulesService } from './../../shared/services/datarules.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import * as DataViewModel from '../../shared/view-models/data.viewmodel';
import { ReportService } from '../../shared/services/report.service';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { UserService } from '../../shared/services/user.service';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import { PaginationService } from '../../shared/services/pagination.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    private paginationService: PaginationService,
    public dialog: MatDialog
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
  dataSources: string[];
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
  reportsInitialized = false;
  usersInitialized = false;
  datarulesInitialized = false;
  viewInitialized = false;
  new;
  newRule = false;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
      });
      // gets organization info
      this.organization = await this.organizationService.getOrganizationById(
        this.organizationID
      );
      console.log(this.organization);
      // gets reports for this organization
      this.reports = await this.reportService.getReportsByOrganization(this.organizationID);

      this.pageSubscription = this.paginationService.paginationChanged.subscribe(
        pagination => {
          this.pagination = pagination;
        }
      );
      this.new = (await this.route.snapshot.queryParamMap.get('new')) === 'new';
      this.newRule = (await this.route.snapshot.queryParamMap.get('newRule')) === 'new';
      this.reportsInitialized = true;
      if (this.newRule) {
        this.selectedTab = 2;
        this.selected(2);
      } else {
        this.selectedTab = 0;
      }
      this.viewInitialized = true;
    } catch (error) {
      console.log(error);
    }
  }
  async selected(event) {
    this.selectedTab = event;
    if (event === 1) {
      if (!this.users) {
        await this.getUsers();
        await this.userService.setLocalUsers(this.users);
        this.usersInitialized = await true;
      }
    }
    if (event === 2) {
      if (!this.rules) {
        await this.getRules();
        this.datarulesInitialized = await true;
      }
      this.paginationService.resetPage();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.pageSubscription) {
      this.pageSubscription.unsubscribe();
    }
  }

  closeNewBar() {
    this.new = false;
    this.newRule = false;
  }

  // gets users for this organization
  async getUsers() {
   // this.users = await this.userService.getUsersByOrganization(this.organizationID);
    this.users = await this.userService.getAllUsers();
    this.users = this.users.filter (user => {
      for (const org of user.organizations) {
        return org._id === this.organizationID;
      }
    });
    await this.userService.setLocalUsers(this.users);
  }

  // gets data rules for this organization
  async getRules() {
    this.rules = await this.dataruleService.getDataRules(this.organizationID);
    console.log(this.rules);
    this.dataSources = [];
    for (const rule of this.rules) {
      if (((this.dataSources.filter(datasource => {
        return datasource === rule.datasource;
      })).length === 0)) {
        this.dataSources.push(rule.datasource);
      }
    }
    console.log(this.dataSources);
  }

  goToUser(userId) {
    this.router.navigate(['./u', userId], { relativeTo: this.route });
  }

  goToReport(report) {
    this.router.navigate(['./r', report.reportID], { relativeTo: this.route, queryParams: { selectedOrg: report.orgID} } );
  }

  editRule(ruleID) {
    this.router.navigate(['./edit-rule', ruleID], { relativeTo: this.route });
  }

  changeSort(sort) {
    this.paginationService.resetPage();
    this.sortValue = sort;
  }

  onSearch() {
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

  async deleteOrg() {
    if (!this.users) {
      await this.getUsers();
    }
    await console.log(this.users.length);
    if ( await this.users.length  > 1 ) {
      await this.orgDeleteWarning();
    } else {
      await this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeleteOrganizationConfirmation, {
      data: { organization: this.organization.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.organizationService.deleteOrganization(this.organization);
        this.router.navigate(['../list'], { relativeTo: this.route });
      }
    });
  }

  deleteRule(datarule: DataViewModel.DataRule) {
    const dialogRef = this.dialog.open(DeleteDataruleConfirmation, {
      data: { datarule: datarule.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataruleService.deleteDataRule(datarule);
      }
    });
  }


  async orgDeleteWarning() {

    const dialogRef = this.dialog.open(DeleteOrganizationWarning, {
      data: { users: this.users.length, organization: this.organization.name }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}

@Component({
  selector: 'delete-organization-confirmation',
  templateUrl: 'delete-organization-confirmation.html'
})
export class DeleteOrganizationConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DeleteOrganizationConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'delete-datarule-confirmation',
  templateUrl: 'delete-datarule-confirmation.html'
})
export class DeleteDataruleConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DeleteDataruleConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'delete-organization-warning',
  templateUrl: 'delete-organization-warning.html'
})
export class DeleteOrganizationWarning {
  constructor(
    public dialogRef: MatDialogRef<DeleteOrganizationWarning>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

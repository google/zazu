import { CategoryPipe } from './../shared/pipes/category.pipe';
import { ReportListPipe } from './../shared/pipes/report-list.pipe';
import { SearchNamePipe } from './../shared/pipes/search-name.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import {
  OrganizationDetailsComponent,
  DeleteOrganizationConfirmation,
  DeleteDataruleConfirmation
} from './organization-details/organization-details.component';
import { OrganizationComponent } from './organization/organization.component';
import {
  UserDetailsComponent,
  DeleteUserConfirmation
} from './user-details/user-details.component';
import {
  AdminReportDetailsComponent,
  DeleteReportConfirmation
} from './admin-report-details/admin-report-details.component';
import { UserListComponent } from '../shared/common-view/user-list/user-list.component';
import { ReportListComponent } from '../shared/common-view/report-list/report-list.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { AllUserListComponent } from './all-users/all-user-list/all-user-list.component';
import { AllReportListComponent } from './all-reports/all-report-list/all-report-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationPipe } from '../shared/pipes/pagination.pipe';
import { OrgListPipe } from '../shared/pipes/org-list.pipe';
import { UserListPipe } from '../shared/pipes/user-list.pipe';
import { DataRulesListPipe } from '../shared/pipes/datarules-list.pipe';
import { CreateNewOrganizationComponent } from './create-new-organization/create-new-organization.component';
import { CreateNewReportComponent } from './create-new-report/create-new-report.component';
import { CreateNewDataruleComponent } from './create-new-datarule/create-new-datarule.component';
import {
  CreateNewUserComponent,
  NewUserOrganizationConfirmation
} from './create-new-user/create-new-user.component';
import { ShareReportComponent } from './share-report/share-report.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { EditDataRuleComponent } from './edit-data-rule/edit-data-rule.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditReportComponent } from './edit-report/edit-report.component';
import { SharedModule } from '../shared/shared.module';
import { GhostComponent } from './ghost/ghost.component';

@NgModule({
  declarations: [
    AdminComponent,
    OrganizationListComponent,
    OrganizationDetailsComponent,
    OrganizationComponent,
    UserDetailsComponent,
    AdminReportDetailsComponent,
    UserListComponent,
    ReportListComponent,
    AllUsersComponent,
    AllReportsComponent,
    AllUserListComponent,
    AllReportListComponent,
    SearchNamePipe,
    PaginationPipe,
    OrgListPipe,
    UserListPipe,
    DataRulesListPipe,
    CreateNewOrganizationComponent,
    CreateNewReportComponent,
    CreateNewDataruleComponent,
    CreateNewUserComponent,
    NewUserOrganizationConfirmation,
    ShareReportComponent,
    EditOrganizationComponent,
    EditDataRuleComponent,
    EditUserComponent,
    CategoryPipe,
    EditReportComponent,
    DeleteOrganizationConfirmation,
    DeleteUserConfirmation,
    DeleteReportConfirmation,
    DeleteDataruleConfirmation,
    GhostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    NewUserOrganizationConfirmation,
    DeleteOrganizationConfirmation,
    DeleteUserConfirmation,
    DeleteReportConfirmation,
    DeleteDataruleConfirmation
  ]
})
export class AdminModule {}

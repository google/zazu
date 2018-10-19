import { CreateNewDataruleComponent } from './create-new-datarule/create-new-datarule.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { AllReportListComponent } from './all-reports/all-report-list/all-report-list.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';
import { AllUserListComponent } from './all-users/all-user-list/all-user-list.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AdminGuard } from './../auth/admin-guard.service';
import { AdminReportDetailsComponent } from './admin-report-details/admin-report-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrganizationComponent } from './organization/organization.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { CreateNewOrganizationComponent } from './create-new-organization/create-new-organization.component';
import { CreateNewReportComponent } from './create-new-report/create-new-report.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'o',
        component: OrganizationComponent,
        children: [
          { path: '', redirectTo: 'new-organization' },
          { path: 'list', component: OrganizationListComponent },
          { path: 'new-organization', component: CreateNewOrganizationComponent},
          { path: 'new-user', component: CreateNewUserComponent},
          { path: 'new-data-rule', component: CreateNewDataruleComponent},
          { path: 'new-report', component: CreateNewReportComponent},
          { path: ':id', component: OrganizationDetailsComponent },
          { path: ':id/u/:userID', component: UserDetailsComponent },
          { path: ':id/r/:reportID', component: AdminReportDetailsComponent },
          {
            path: ':id/u/:userID/r/:reportID',
            component: AdminReportDetailsComponent
          },
        ]
      },
      {
        path: 'users',
        component: AllUsersComponent,
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: AllUserListComponent },
          {
            path: 'u/:userID',
            component: UserDetailsComponent
          },
          {
            path: 'u/:userID/r/:reportID',
            component: AdminReportDetailsComponent
          }
        ]
      },
      {
        path: 'reports',
        component: AllReportsComponent,
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: AllReportListComponent },
          { path: 'r/:reportID', component: AdminReportDetailsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

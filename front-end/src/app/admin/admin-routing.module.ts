import { ViewerReportComponent } from './../shared/common-view/viewer-report/viewer-report.component';
import { ViewerReportListComponent } from './../shared/common-view/viewer-report-list/viewer-report-list.component';
import { GhostComponent } from './ghost/ghost.component';
import { EditReportComponent } from './edit-report/edit-report.component';
import { ShareReportComponent } from './share-report/share-report.component';
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
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { EditDataRuleComponent } from './edit-data-rule/edit-data-rule.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'o',
        component: OrganizationComponent,
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: OrganizationListComponent },
          { path: 'new-organization', component: CreateNewOrganizationComponent},
          { path: 'share-report', component: ShareReportComponent},
          { path: ':id', component: OrganizationDetailsComponent },
          { path: ':id/new-user', component: CreateNewUserComponent},
          { path: ':id/new-report', component: CreateNewReportComponent},
          { path: ':id/share-report', component: ShareReportComponent},
          { path: ':id/edit-organization', component: EditOrganizationComponent},
          { path: ':id/new-rule', component: CreateNewDataruleComponent},
          { path: ':id/edit-rule/:ruleID', component: EditDataRuleComponent},
          { path: ':id/u/:userID', component: UserDetailsComponent },
          { path: ':id/u/:userID/ghost/:userName', component: GhostComponent, children: [
            { path: '', redirectTo: 'list'},
            { path: 'list', component: ViewerReportListComponent},
            { path: ':reportID', component: ViewerReportComponent}
          ]},
          { path: ':id/u/:userID/edit-user', component: EditUserComponent },
          { path: ':id/r/:reportID', component: AdminReportDetailsComponent },
          { path: ':id/r/:reportID/edit-report', component: EditReportComponent},
          {
            path: ':id/u/:userID/r/:reportID',
            component: AdminReportDetailsComponent
          },
          {
            path: ':id/u/:userID/r/:reportID/edit-report',
            component: EditReportComponent
          }
        ]
      },
      {
        path: 'users',
        component: AllUsersComponent,
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: AllUserListComponent },
          { path: 'new-user', component: CreateNewUserComponent},
          { path: 'u/:userID', component: UserDetailsComponent },
          { path: 'u/:userID/ghost/:userName', component: GhostComponent, children: [
            { path: '', redirectTo: 'list'},
            { path: 'list', component: ViewerReportListComponent},
            { path: ':reportID', component: ViewerReportComponent}
          ]},
          { path: 'u/:userID/edit-user', component: EditUserComponent },
          { path: 'u/:userID/r/:reportID', component: AdminReportDetailsComponent}
        ]
      },
      {
        path: 'reports',
        component: AllReportsComponent,
        children: [
          { path: '', redirectTo: 'list' },
          { path: 'list', component: AllReportListComponent },
          { path: 'new-report', component: CreateNewReportComponent},
          { path: 'r/:reportID', component: AdminReportDetailsComponent },
          { path: 'r/:reportID/edit-report', component: EditReportComponent}
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

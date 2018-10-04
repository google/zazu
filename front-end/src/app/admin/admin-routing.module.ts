import { AdminReportDetailsComponent } from './admin-report-details/admin-report-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrganizationComponent } from './organization/organization.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'o',
        component: OrganizationComponent,
        children: [
          { path: '', redirectTo: 'list'},
          { path: 'list', component: OrganizationListComponent },
          { path: ':id', component: OrganizationDetailsComponent },
          { path: ':id/u/:userID', component: UserDetailsComponent  },
          { path: ':id/r/:reportID', component: AdminReportDetailsComponent},
          { path: ':id/u/:userID/r/:reportID', component: AdminReportDetailsComponent}
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

import { ViewerOrganizationListComponent } from './shared/common-view/viewer-organization-list/viewer-organization-list.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { AdminGuard } from './auth/admin-guard.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerReportListComponent } from './shared/common-view/viewer-report-list/viewer-report-list.component';
import { ViewerReportComponent } from './shared/common-view/viewer-report/viewer-report.component';
import { AuthGuard } from './auth/auth-guard.service';
import { RedirectComponent } from './auth/redirect/redirect.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'redirect',
        pathMatch: 'full'
      },
      {
        path: 'redirect',
        component: RedirectComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate:  [AdminGuard, AuthGuard]
      },
      {
        path: 'user',
        component: ViewerComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'org', pathMatch: 'full' },
          { path: 'org', component: ViewerOrganizationListComponent},
          { path: 'org/:orgID', component: ViewerReportListComponent},
          { path: 'org/:id/r/:reportID', component: ViewerReportComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

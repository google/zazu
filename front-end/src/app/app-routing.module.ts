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

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
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
      },
      {
        path: 'user',
        component: ViewerComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ViewerReportListComponent },
          { path: ':reportID', component: ViewerReportComponent }
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

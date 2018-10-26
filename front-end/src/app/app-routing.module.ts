import { AdminGuard } from './auth/admin-guard.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ViewerComponent } from './viewer/viewer.component';
import { listener } from '@angular/core/src/render3/instructions';
import { ViewerReportListComponent } from './viewer/viewer-report-list/viewer-report-list.component';
import { ViewerReportComponent } from './viewer/viewer-report/viewer-report.component';

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
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AdminGuard]
      },
      {
        path: 'user',
        component: ViewerComponent,
        children: [
          { path: 'list', component: ViewerReportListComponent},
          { path: ':reportID', component: ViewerReportComponent}
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

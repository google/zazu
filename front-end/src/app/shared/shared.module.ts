import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { ViewerReportListComponent } from './common-view/viewer-report-list/viewer-report-list.component';
import { ReportListPipe } from './pipes/report-list.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerReportComponent } from './common-view/viewer-report/viewer-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RawReportListPipe } from './pipes/raw-report-list.pipe';
import { LogoutConfirmation } from '../admin/admin.component';
import { ViewerOrganizationListComponent } from './common-view/viewer-organization-list/viewer-organization-list.component';
import { OrgListPipe } from './pipes/org-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReportListPipe,
    RawReportListPipe,
    OrgListPipe,
    ViewerReportComponent,
    ViewerReportListComponent,
    LogoutConfirmation,
    ViewerOrganizationListComponent
  ],
  exports: [
    ReportListPipe,
    RawReportListPipe,
    ViewerReportComponent,
    ViewerReportListComponent,
    AngularMaterialModule,
    LogoutConfirmation,
    ViewerOrganizationListComponent,
    OrgListPipe,
  ],
  entryComponents: [
    LogoutConfirmation
  ]
})
export class SharedModule {}

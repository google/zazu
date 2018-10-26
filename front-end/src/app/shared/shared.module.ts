import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { ViewerReportListComponent } from './common-view/viewer-report-list/viewer-report-list.component';
import { ReportListPipe } from './pipes/report-list.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerReportComponent } from './common-view/viewer-report/viewer-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReportListPipe,
    ViewerReportComponent,
    ViewerReportListComponent
  ],
  exports: [
    ReportListPipe,
    ViewerReportComponent,
    ViewerReportListComponent,
    AngularMaterialModule
  ]
})
export class SharedModule {}

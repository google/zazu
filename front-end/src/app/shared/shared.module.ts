import { ReportListPipe } from './pipes/report-list.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ReportListPipe],
  exports: [
    ReportListPipe
  ]
})

export class SharedModule {}

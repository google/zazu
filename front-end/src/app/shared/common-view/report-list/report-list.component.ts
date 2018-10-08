import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Filter from '../../view-models/filter.viewmodel';
import * as ReportViewModel from '../../view-models/report.viewmodel';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  constructor(private reportService: ReportService) {}
  @Input()
  filters: Filter.ReportFilter;
  @Output()
  reportID = new EventEmitter<string>();

  reports: ReportViewModel.SimpleReport[];

  async ngOnInit() {
    try {
      this.reports = await this.reportService.getReportByOrganization('orgID');
    } catch (error) {
      console.log(error);
    }
  }

  reportClicked(id: string) {
    this.reportID.emit(id);
  }
}

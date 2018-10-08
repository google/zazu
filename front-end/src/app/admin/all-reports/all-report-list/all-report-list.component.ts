import { Component, OnInit } from '@angular/core';
import * as Filter from '../../../shared/view-models/filter.viewmodel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-report-list',
  templateUrl: './all-report-list.component.html',
  styleUrls: ['./all-report-list.component.scss']
})
export class AllReportListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Filter for Report
  reportListFilter: Filter.ReportFilter = {
    name: '',
    organizationID: '',
    sort: ''
  };

  ngOnInit() {
    this.reportListFilter = {
      name: '',
      organizationID: 'ALL',
      sort: ''
    };
  }

  goToReport(reportID) {
    this.router.navigate(['/admin/reports/r', reportID], { relativeTo: this.route });
  }
}

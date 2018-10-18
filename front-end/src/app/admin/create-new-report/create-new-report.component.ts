import { Component, OnInit } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import { ReportService } from 'src/app/shared/services/report.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new-report',
  templateUrl: './create-new-report.component.html',
  styleUrls: ['./create-new-report.component.scss']
})
export class CreateNewReportComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private reportService: ReportService) {}
  reports: ReportViewModel.SimpleReport[];

  async ngOnInit() {
    try {
      this.reports = await this.reportService.getReportByOrganization('orgID');
    } catch (error) {
      console.log(error);
    }
  }
}

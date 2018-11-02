import { ReportService } from 'src/app/shared/services/report.service';
import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import * as ReportViewModel from '../../shared/view-models/report.viewmodel';
import * as OrganizationViewModel from './../../shared/view-models/organization.viewmodel';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-report-access',
  templateUrl: './edit-report-access.component.html',
  styleUrls: ['./edit-report-access.component.scss']
})
export class EditReportAccessComponent implements OnInit {
  constructor(
    private organizatinonService: OrganizationService,
    private _fb: FormBuilder,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  filteredOptions: Observable<string[]>;

  accessForm: FormGroup;
  report: ReportViewModel.ReportDetails;
  organizations: OrganizationViewModel.SimpleOrganization[];
  sub: any;
  reportID;
  async ngOnInit() {
    try {
      this.sub = await this.route.params.subscribe(params => {
        this.reportID = params['reportID'];
      });
      this.report = await this.reportService.getReportDetails(this.reportID);
      this.organizations = this.report.organizations;
      this.accessForm = await this._fb.group({
        selectedOrganization: ['', Validators.required]
      });

    } catch (error) {
      console.log(error);
    }
  }

  get controls() {
    return this.accessForm.controls;
  }


  onSubmit() {
    const temp = this.accessForm.value;
    const org = this.organizations.find( x => {
      return x._id === temp.selectedOrganization;
    });
    this.reportService.deleteOrgAccess(this.reportID, org);
  }

  public getForm() {
    return this.accessForm;
  }
}

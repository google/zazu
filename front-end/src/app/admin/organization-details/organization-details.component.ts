import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import * as Filter from '../../shared/view-models/filter.viewmodel';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,
  ) {}
  // Subscription for route
  sub: any;
  // Organization Object
  organization: OrganizationViewModel.OrganizationDetails;
  // Filter for  Users
  userListFilter: Filter.UserFilter = {
    name: '',
    organizationID: '',
    role: 'VIEWER',
    sort: ''
  };
  // Filter for Report
  reportListFilter: Filter.ReportFilter = {
    name: '',
    organizationID: '',
    sort: ''
  };
  // Organization ID
  organizationID: string;
  async ngOnInit() {
    try {
      this.sub = this.route.params.subscribe(params => {
        this.organizationID = params['id'];
        console.log(params['id']);
        // Initiate User filter
        this.userListFilter.organizationID = params['id'];
        // Initiate Report Filter
        this.reportListFilter = params['id'];

      });
      // gets organization info
      this.organization = await this.organizationService.getOrganizationById(
        this.organizationID
      );

    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToUser(userId) {
    this.router.navigate(['./u', userId], { relativeTo: this.route });
  }

  goToReport(reportID) {
    this.router.navigate(['./r', reportID], { relativeTo: this.route });
  }
}

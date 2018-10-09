import { OrganizationDetails } from './../../../shared/view-models/organization.viewmodel';
import { OrganizationService } from './../../../shared/services/organization.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as OrganizationViewModel from '../../../shared/view-models/organization.viewmodel';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private organizationService: OrganizationService
  ) {}

  // Array of all organizations
  organizations: OrganizationViewModel.OrganizationDetails[];



  async ngOnInit() {
    // Gets all organizations OnInit
    try {
      this.organizations = await this.organizationService.getAllOrganizations();
    } catch (error) {
      console.log(error);
    }

  }

  goToDetails(id) {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }
}

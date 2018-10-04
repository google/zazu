import { OrganizationService } from './../../shared/services/organization.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';
import { UserService } from '../../shared/services/user.service';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  // Organization Object
  organization: OrganizationViewModel.Organization;

  // List of users in this organization
  users: UserViewModel.User[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.sub = await this.route.params.subscribe(params => {
      // Gets the Information for this specific organization
      this.organization = this.organizationService.getOrganizationById(
        params['id']
      );
      // Gets all the user for this organization
      this.users = this.userService.getUsersByOrganization(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToUser(userId) {
    this.router.navigate(['./u', userId], { relativeTo: this.route });
  }
}

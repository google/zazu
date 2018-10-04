import { OrganizationService } from './../../shared/services/organization.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as UserViewModel from '../../shared/view-models/user.viewmodel';
import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private organizationService: OrganizationService
  ) {}

  sub: any;

  organization: OrganizationViewModel.Organization; // Name of the org from previous view for breadcrumbs purposes
  user: UserViewModel.User;

 ngOnInit() {
    console.log(this.route);
    this.sub =  this.route.params.subscribe(params => {
      this.organization = this.getOrganization(params['id']);
      this.user =  this.userService.getUser(params['userID']);
    });
  }

  // Gets the name of the organization for breadcrumbs & user acceses
  private getOrganization(id) {
    return this.organizationService.getOrganizationById(id);
  }

   // Gets the user details
  private getUserDetails(id) {
    return this.userService.getUser(id);
  }


}

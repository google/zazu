import { Component, OnInit } from '@angular/core';
import * as Filters from '../../shared/view-models/filter.viewmodel';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  filters: Filters.UserFilter;

  ngOnInit() {
    this.filters = {
      name: '',
      organizationID: 'ALL',
      role: '',
      sort: ''
    };
  }

  goToUser(userId) {
    this.router.navigate(['./u', userId], { relativeTo: this.route });
  }
}

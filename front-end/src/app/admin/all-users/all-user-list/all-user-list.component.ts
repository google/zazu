import { Component, OnInit } from '@angular/core';
import * as Filters from '../../../shared/view-models/filter.viewmodel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent implements OnInit {

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
    this.router.navigate(['/admin/users/u', userId], { relativeTo: this.route });
  }

}

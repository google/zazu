import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import * as UserViewModel from '../../../shared/view-models/user.viewmodel';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  users: UserViewModel.SimpleUserView[];
  async ngOnInit() {
    try {
      this.users = await this.userService.getUsersByOrganization('All');
    } catch (error) {
      console.log('error');
    }
  }

  goToUser(userId) {
    this.router.navigate(['/admin/users/u', userId], {
      relativeTo: this.route
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import * as UserViewModel from '../../../shared/view-models/user.viewmodel';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    public snackBar: MatSnackBar
  ) {}
  viewInitialized = false;
  users: any;
  deletedUser;
  async ngOnInit() {
    try {
      this.users = await  this.userService.getAllUsers();
      this.userService.setLocalUsers(this.users);
      this.deletedUser = await this.route.snapshot.queryParamMap.get('deletedUser');
      if (this.deletedUser) {
        this.snackBar.open( 'User "' +  this.deletedUser + '" Successfully Deleted' , 'Dismiss', {
          duration: 5000,
        });
      }
      this.viewInitialized = true;
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

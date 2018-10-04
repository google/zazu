import { Component, OnInit, Input } from '@angular/core';
import * as UserViewModel from '../../view-models/user.viewmodel';
import { UserService } from '../../services/user.service';
import * as Filter from '../../view-models/filter.viewmodel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input('filters') filters: Filter.UserFilter;

  ngOnInit() {
  }

}

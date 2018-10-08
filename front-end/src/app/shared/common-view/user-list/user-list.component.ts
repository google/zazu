import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import * as UserViewModel from '../../view-models/user.viewmodel';
import { UserService } from '../../services/user.service';
import * as Filter from '../../view-models/filter.viewmodel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Input() filters: Filter.UserFilter;
  @Output() userID = new EventEmitter<string>();

  users: UserViewModel.SimpleUserView[];

  async ngOnInit() {
    try {
      this.users = await this.userService.getUsersByOrganization(
        this.filters.organizationID
      );
    } catch (error) {
      console.log(error);
    }
  }

  userClicked(id: string) {
   this.userID.emit(id);
  }
}

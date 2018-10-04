import { HttpClient } from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import * as UserViewModel from '../view-models/user.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  VIEWACCESS = 'VIEWACCESS';
  ADMIN = 'ADMIN';

  // Method for getting all users
  public async getAllUsers(): Promise<UserViewModel.SimpleUserView[]> {
    return await ((this.http.get<UserViewModel.SimpleUserView[]>('../../../assets/example-data/user-list.mockdata.json')).toPromise());
  }

  // Getting user with Id
  public async getUser(id): Promise<UserViewModel.User> {
    return await ((this.http.get<UserViewModel.User>('../../../assets/example-data/single-user.mockdata.json')).toPromise());
  }

  // Filtering users by organization
  public getUsersByOrganization(orgId): UserViewModel.User[] {
   // return this.mockUsers.filter(u => {
   //   return u.organizations.map(o => o.id).includes(orgId);
   // });
   return null;
  }


}

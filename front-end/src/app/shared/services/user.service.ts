import { HttpClient  } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {
  Injectable
} from '@angular/core';
import * as UserViewModel from '../view-models/user.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  VIEWACCESS = 'viewer';
  ADMIN = 'admin';
  URL = '../../../assets/example-data/';
  users = [];

  temp;
  /**
   *  Method for getting all users for all organizations
   */
  public async getAllUsers(): Promise<UserViewModel.SimpleUserView[]> {
    return await ((this.http.get<UserViewModel.SimpleUserView[]>( this.URL + 'user-list.mockdata.json')).toPromise());
  }

  /**
   * Getting specific user using user ID
   * @param id - id of the user you want to get information
   */
  public async getUser(id): Promise<UserViewModel.User> {
    console.log(id);
    return await ((this.http.get<UserViewModel.User>( '/api' +  '/getAllUsers/' + id)).toPromise());
  }

  /**
   * Getting all user for specific organization
   * @param orgId -  ID of the organization you want to get all users
   */
  public async getUsersByOrganization(orgId) {
    return await ((this.http.get<UserViewModel.SimpleUserView[]>(this.URL + 'user-list.mockdata.json')).toPromise());
  }
  //  await ((this.http.get<UserViewModel.SimpleUserView[]>(this.URL + 'user-list.mockdata.json')).toPromise());

  public async timeout() {
    const promise = new Promise( (resolve, reject) => {
       setTimeout( () => {
        resolve(this.getAllUsers());
      }, 2000);
    });
    return promise;
  }

  /**
   * Create new user
   * @param user - user object for creating new user
   */
  public async createNewUser(user: UserViewModel.CreateNewUser) {
    return await ((this.http.post(this.URL + 'createNewUser/', user)).toPromise());
  }

  /**
   * Edit user
   * @param user - user object for editing user
   */
  public async editUser(user: UserViewModel.EditUser) {
    return await ((this.http.post(this.URL + 'editUser/', user)).toPromise());
  }


  /**
   * Delete user
   * @param userID - ID of the user you want to delete
   */
  public async deleteUser(userID: string) {
    return await ((this.http.post(this.URL + 'deleteUser/',  userID)).toPromise());
  }


  /********** LOCAL USER FOR OPTIMIZATION  **************/

  public async getLocalUser(userID: string) {
    const user = this.users.find(usr => {
      return usr._id === userID;
    });
    if (!user) {
      try {
        this.users = await this.getAllUsers();
        this.getLocalUser(userID);
      } catch (error) {
        console.log(error);
      }
    }
    return user;
  }


  public setLocalUsers(users) {
    this.users = users;
  }
}

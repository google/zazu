import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import * as UserViewModel from '../view-models/user.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  VIEWACCESS = 'viewer';
  ADMIN = 'admin';
  URL = '../../../assets/example-data/';
  users = [];

  temp;
  /**
   *  Method for getting all users for all organizations
   */
  public async getAllUsers(): Promise<UserViewModel.SimpleUserView[]> {
    const users = await this.http.get<UserViewModel.SimpleUserView[]>('/api' + '/getAllUsers').toPromise();
    this.users = users;
    return users;
     /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllUsers').toPromise();
      if (status.status === '200') {
        this.users = status.users;
        return await status.users;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
  }

  /**
   * Getting specific user using user ID
   * @param id - id of the user you want to get information
   */
  public async getUser(id): Promise<UserViewModel.User> {
    console.log(id);
    return await this.http.get<UserViewModel.User>('/api' + '/getAllUsers/' + id).toPromise();
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllUsers/' + id).toPromise();
      if (status.status === '200') {
        return await status.users;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
  }

  /**
   * Getting all user for specific organization
   * @param orgId -  ID of the organization you want to get all users
   */
  public async getUsersByOrganization(orgId) {
    const users = await this.http.get<UserViewModel.SimpleUserView[]>('/api' + '/getUsersByOrganization/' + orgId).toPromise();
    this.users = users;
    return users;
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getAllUsers/' + id).toPromise();
      if (status.status === '200') {
        return await status.users;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */

  }
  //  await ((this.http.get<UserViewModel.SimpleUserView[]>(this.URL + 'user-list.mockdata.json')).toPromise());

  public async timeout() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.getAllUsers());
      }, 2000);
    });
    return promise;
  }

  /**
   * Create new user
   * @param user - user object for creating new user
   */
  public async createNewUser(user: UserViewModel.CreateNewUser): Promise<any> {
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'createNewUser/', user).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Edit user
   * @param user - user object for editing user
   */
  public async editUser(user: UserViewModel.EditUser) {
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'editUser/', user).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Delete user
   * @param user - user object you want to delete
   * @param permissions - permissions needed to revoke the user
   */
  public async deleteUser(user, permissions) {
    const params = {
      user: user,
      permissions: permissions
    };
    console.log(params);
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'deleteUser/', params).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  public async getPermissionsToRevokeUser(user) {
    if (await this.authService.canSend()) {
      console.log('Getting permissions called...');
      // for revoking user
      return await this.http.post('/api/' + 'getPermissionsToRevokeUser/', user).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /********** LOCAL USER FOR OPTIMIZATION  **************/

  public async getLocalUser(userID: string) {
    if (this.users.length === 0) {
      try {
        this.users = await this.getAllUsers();
        this.getLocalUser(userID);
      } catch (error) {
        console.log(error);
      }
    }
    const user = this.users.find(usr => {
      return usr._id === userID;
    });
    return user;
  }

  public setLocalUsers(users) {
    this.users = users;
  }
}

import { AuthService } from './../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as UserViewModel from '../view-models/user.viewmodel';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService, public snackBar: MatSnackBar) {}
  VIEWACCESS = 'viewer';
  ADMIN = 'admin';
  URL = '../../../assets/example-data/';
  users = [];

  temp;
  /**
   *  Method for getting all users for all organizations
   */
  public async getAllUsers(): Promise<UserViewModel.SimpleUserView[]> {
    try {
      const status = await <any>this.http.get<UserViewModel.SimpleUserView[]>('/api' + '/getAllUsers').toPromise();
      if (status.status) {
        if (status.status === '200') {
          return await status.users;
        } else if (status.status === '500' ) {
          throw new Error(status.message);
        }
      } else {
        return status;
      }
    } catch (error) {
      this.snackBar.open( error.message , 'Dismiss', {
        duration: 5000,
      });
      throw new Error(error.message);
    }
    // const users = await this.http.get<UserViewModel.SimpleUserView[]>('/api' + '/getAllUsers').toPromise();
    // this.users = users;
    // return users;
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
    // return await this.http.get<UserViewModel.User>('/api' + '/getAllUsers/' + id).toPromise();
    try {
      const status = await <any>this.http.get<UserViewModel.User>('/api' + '/getAllUsers/' + id).toPromise();
      if (status.status) {
        if (status.status === '200') {
          return await status.user;
        } else if (status.status === '500' ) {
          throw new Error(status.message);
        }
      } else {
        return status;
      }
    } catch (error) {
      this.snackBar.open( error.message , 'Dismiss', {
        duration: 5000,
      });
      throw new Error(error.message);
    }
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
   * @param oldUser - pre-edit user object
   * @param newUser - post-edit user object
   */
  public async editUser(oldUser: UserViewModel.EditUser, newUser: UserViewModel.EditUser) {
    const params = {
      oldUser: oldUser,
      newUser: newUser
    };
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'editUser/', params).toPromise();
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
      // for revoking user
      return await this.http.post('/api/' + 'getPermissionsToRevokeUser/', user).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }



  /**
   * pass in the list of reports only associated with the orgs that are removed from the user's access list. it'll give you back all permissions to revoke
   * @param reports
   */
  public async getPermissionsToRevokeOrg(reports, user) {
    const params = {
      reports: reports,
      users: user
    };
    console.log(params);
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'getPermissionsToRevokeOrg/', params).toPromise();
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

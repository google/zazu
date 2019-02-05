import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../shared/services/user.service';

declare const gapi: any;

interface IsLoggedIn {
  status: string;
  message: string;
  isLoggedIn: boolean;
  role: string;
  user: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  ADMIN = 'admin';
  VIEWER = 'viewer';
  userID;
  user;

  /**
   * API call to check if user is logged in or not.
   */
  public async isLoggedIn(): Promise<IsLoggedIn> {
    const status = await this.http.get<IsLoggedIn>('/api' + '/isLoggedIn').toPromise();
    if ( status.status === '200') {
      if (!this.userID) {
        this.setUserID(status.user);
      }
      return await status ;
    } else {
      return status;
    }
  }

  public async login(id_token, access_token): Promise<IsLoggedIn> {
    const params = {
      id_token: id_token,
      access_token: access_token
    };
    const status = await this.http.post<IsLoggedIn>('/api' + '/login', params).toPromise();
    if ( status.status === '200') {
      if (!this.userID) {
        this.setUserID(status.user);
      }
      return await status ;
    } else {
      return status;
    }
  }

  /**
   * Method for checking the user's role
   */
  public async isAdmin() {
    try {
      const roleStatus = await this.isLoggedIn();
      return roleStatus.role === this.ADMIN;
    } catch (error) {
      console.log(error);
    }
  }

  public async canSend(): Promise<boolean> {
    try {
      const status = await this.isLoggedIn();
      return await (status.isLoggedIn && status.role === 'admin');
    } catch (error) {
      console.log(error);
    }
  }

  public setUserID(id) {
    this.userID = id;
  }

  public async isViewer() {
    try {
      const roleStatus = await this.isLoggedIn();
      return roleStatus.role === this.VIEWER;
    } catch (error) {
      console.log(error);
    }
  }

  public async logout() {
    const status = await (<any>this.http.get('/api' + '/logout').toPromise());

    if (status.status === '200') {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
      this.router.navigate(['/logout']);
    }
  }
}

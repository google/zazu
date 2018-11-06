import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IsLoggedIn {
  status: string;
  message: string;
  isLoggedIn: boolean;
  role: string;
}


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  ADMIN = 'admin';
  VIEWER = 'viewer';

  /**
   * API call to check if user is logged in or not.
   */
  public async isLoggedIn(): Promise<IsLoggedIn> {
    return await this.http.get<IsLoggedIn>('/api' + '/isLoggedIn').toPromise();
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

  public async isViewer() {
    try {
      const roleStatus = await this.isLoggedIn();
      return roleStatus.role === this.VIEWER;
    } catch (error) {
      console.log(error);
    }
  }

  public async logout() {
    return await this.http.get<IsLoggedIn>('/api' + '/logout').toPromise();
  }
}

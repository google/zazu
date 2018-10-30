import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IsLoggedIn {
  isLoggedIn: boolean;
}

interface Role {
  role: string;
}


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  ADMIN = 'admin';
  VIEWACCESS = 'viewer';
  URL = ' URL GOES HERE ';
  role: Role;

  public async isAuthenticated() {
    // const isAuthenticated = await this.isLoggedIn();
    // return isAuthenticated.isLoggedIn;
    return await true;
  }

  /**
   * API call to check if user is logged in or not.
   */
  private async isLoggedIn(): Promise<IsLoggedIn> {
    return await this.http.get<IsLoggedIn>(this.URL + 'API CALL').toPromise();
  }


  /**
   * API Call to check user role
   */
  private async getUserRole(): Promise<Role> {
    this.role = await this.http.get<Role>(this.URL + 'API CALL').toPromise();
    return this.role;
  }

  /**
   * Method for checking the user's role
   */
  public isAdmin() {
    // return this.role.role === this.ADMIN;
    return true;
  }

  public isViewer() {
    // return this.role.role === this.VIEWER;
    return false;
  }


  public logOut() {
    // DO LOGOUT STUFF HERE;
  }
}

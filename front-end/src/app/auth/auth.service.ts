import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IsLoggedIn {
  status: string;
  message: string;
  isLoggedIn: boolean;
}

interface Role {
  role: string;
  status: string;
  message: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  ADMIN = 'admin';
  VIEWACCESS = 'viewer';
  URL = ' URL GOES HERE ';
  role: Role;

  /**
   * API call to check if user is logged in or not.
   */
  public async isLoggedIn(): Promise<IsLoggedIn> {
    return await this.http.get<IsLoggedIn>('/api' + '/isLoggedIn').toPromise();
  }

  /**
   * API Call to check user role
   */
  public async getUserRole(): Promise<Role> {
    this.role = await this.http.get<Role>('/api' + '/getRole').toPromise();
    return this.role;
  }

  /**
   * Method for checking the user's role
   */
  public isAdmin() {
    this.getUserRole();
    return this.role.role === this.ADMIN;
  }

  public isViewer() {
    // return this.role.role === this.VIEWER;
    return false;
  }

  public logOut() {
    // DO LOGOUT STUFF HERE;
  }
}

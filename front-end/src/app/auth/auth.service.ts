import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  ADMIN = 'ADMIN';
  VIEWACCESS = 'VIEWACCESS';

  user = {
    name: 'John Doe',
    role: this.ADMIN
  };

  constructor() {}

  public isAuthenticated(): boolean {
    return true;
  }

  public isAdmin() {
    return this.ADMIN === this.user.role;
  }
}

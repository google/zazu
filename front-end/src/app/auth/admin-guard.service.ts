import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isAdmin()) {
      console.log('Welcome Admin');
      return true;
    } else {
      console.log('Unauthorized');
      this.route.navigate(['unauthorized']);
      return false;
    }
  }
}

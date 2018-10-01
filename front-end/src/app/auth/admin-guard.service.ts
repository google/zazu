import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      console.log('You are admin, go through!');
      return true;
    }

    // If Not admin, redirect to another page
    /*
    this.router.navigate([' Maybe Log in? 404? Access not found ? ']);
    */
   console.log('Not an Admin! Begoneeeee');
    return false;
  }
}

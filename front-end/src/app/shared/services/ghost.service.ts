import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import * as UserViewModel from '../view-models/user.viewmodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GhostService {

  ghostStatus  = false;

  ghostStatusObservable = new Subject<boolean>();

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) { }

  user: UserViewModel.User;

  getStatus() {
    this.ghostStatusObservable.next(this.ghostStatus);
  }

  activatedGhost() {
    this.ghostStatus = true;
    this.ghostStatusObservable.next(true);
  }

  disableGhost() {
    this.ghostStatus = false;
    this.ghostStatusObservable.next(this.ghostStatus);
  }

  async setUser(userID) {
    try {
      this.user = await this.userService.getUser(userID);
    } catch {

    }
  }

  async getViewerAccess(userID) {
    await this.setUser(userID);
    return await this.http
        .post('/api/' + 'createRule/', this.user)
        .toPromise();
  }
}

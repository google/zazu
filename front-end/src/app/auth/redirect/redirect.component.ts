import { AuthService } from './../auth.service';
import { ViewerService } from './../../shared/services/viewer.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {}
  status;
  async ngOnInit() {

    try {
      this.status = await <any>this.authService.isLoggedIn();
      console.log(this.status);
      if (this.status.isLoggedIn) {
        console.log(this.status.role);
        if (this.status.status === '200') {
          // Checks the user's role and re reroutes
          if (this.status.role === 'admin') {
            this.router.navigate(['../admin/o/list'], {relativeTo: this.route});
          } else if (this.status.role === 'viewer') {
            this.viewerService.setUserID(this.status.user);
            this.router.navigate(['../user/list'], {relativeTo: this.route});
          } else {
            console.log('Invalid Role: ' + this.status.role);
          }
        }
        // if user is not logged in, re route to login page
      } else {
        this.router.navigate(['../login'], {relativeTo: this.route});
      }

    } catch (error) {
      console.log(error);
    }

  }
}

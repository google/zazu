import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
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
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    try {
      // Checks the status of the log in
      const status = await this.authService.isLoggedIn();
      if (status.isLoggedIn) {
        const role = await this.authService.getUserRole();
        // Checks if the role status is '200' meaning right
        if (role.status === '200') {
          // Checks the user's role and re reroutes
          if (role.role === 'admin') {
            this.router.navigate(['../admin'], {relativeTo: this.route});
          } else if (role.role === 'viewer') {
            this.router.navigate(['../viewer'], {relativeTo: this.route});
          } else {
            console.log('Invalid Role: ' + role.role);
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

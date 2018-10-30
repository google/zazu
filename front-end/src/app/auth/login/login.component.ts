import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    try {
      // If the user is authenticated
      if (await this.authService.isAuthenticated()) {
        console.log(await this.authService.isAuthenticated());
        console.log('checking');
        if (this.authService.isAdmin()) {
          this.router.navigate(['../admin'], {relativeTo: this.route});
        } else {
          this.router.navigate(['../user'], {relativeTo: this.route});
        }

      }

    } catch (error) {

    }

  }

}

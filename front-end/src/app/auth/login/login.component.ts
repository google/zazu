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
      const status  = await this.authService.isLoggedIn();
      if (status.isLoggedIn) {
        this.router.navigate(['../redirect'], {relativeTo: this.route});
      }
    } catch (error) {
      console.log(error);
    }

  }

}

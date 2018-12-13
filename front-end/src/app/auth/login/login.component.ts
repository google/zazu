import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  companyName;


  async ngOnInit() {
    try {
      const status  = await this.authService.isLoggedIn();
      const call = await <any> this.http.get('../../assets/main-variables.json').toPromise();
      this.companyName = call.companyName;
      if (status.isLoggedIn) {
        this.router.navigate(['../redirect'], {relativeTo: this.route});
      }
    } catch (error) {
      console.log(error);
    }

  }

}

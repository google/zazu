import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  companyName;

  public auth2: any;

  public signIn(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        const status  = this.authService.login(googleUser.getAuthResponse().id_token);
        // const status  = await this.authService.isLoggedIn();
        // const call = await <any> this.http.get('../../assets/main-variables.json').toPromise();
        // this.companyName = call.companyName;
        // if (status.isLoggedIn) {
        //   this.router.navigate(['../redirect'], {relativeTo: this.route});
        // }

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  async ngOnInit() {
    try {

      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '********',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/cloud-platform'
        });
        this.signIn(document.getElementById('google-signin'));
      });
    } catch (error) {
      console.log(error);
    }

  }

}

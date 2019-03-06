import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.prod'

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private ngZone: NgZone, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  companyName;

  public auth2: any;

  public signIn(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
           this.login(googleUser);

      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  async login(googleUser) {
    const loginuser  = await <any>this.authService.login(googleUser.getAuthResponse().id_token, googleUser.getAuthResponse().access_token);
    const call = <any> this.http.get('../../assets/main-variables.json').toPromise();
    this.companyName = call.companyName;
    if (loginuser.role == 'admin') {
      var options = new gapi.auth2.SigninOptionsBuilder(
              {'scope': 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/cloud-platform'});

      googleUser = this.auth2.currentUser.get();
      googleUser.grant(options).then(
        function(success){
          console.log(JSON.stringify({message: "success", value: success}));
        },
        function(fail){
          alert(JSON.stringify({message: "fail", value: fail}));
        });
    }
    this.ngZone.run(() => this.router.navigate(['../redirect'], {relativeTo: this.route})).then();
  }

  async ngOnInit() {
    try {

      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: environment.google_client_id,
          cookiepolicy: 'single_host_origin',
          scope: 'profile email https://www.googleapis.com/auth/bigquery'
        });
        this.signIn(document.getElementById('google-signin'));
      });

    } catch (error) {
      console.log(error);
    }

  }

}

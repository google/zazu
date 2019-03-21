import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit, NgZone} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private ngZone: NgZone, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  companyName;

  public returnToLogin() {
    var _this = this;
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
            console.log('User signed out.');
            auth2.disconnect();
            _this.ngZone.run(() => _this.router.navigate(['../login'], {relativeTo: _this.route})).then();
    });
  }

  async ngOnInit() {
    const call = await <any> this.http.get('../../assets/main-variables.json').toPromise();
    this.companyName = call.companyName;
  }

}

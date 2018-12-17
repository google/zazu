import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) { }

  companyName;

  async ngOnInit() {
    const call = await <any> this.http.get('../../assets/main-variables.json').toPromise();
    this.companyName = call.companyName;
  }

}

/* Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */ 

import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string;
  login_logo: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    var source = require('environments/environment');

    if (source.environment.app_mode == "boring") {
      this.title = 'Retailer';
      this.login_logo = "person.png"
    }
    else {
      this.title = 'Zazu';
      this.login_logo = 'zazu.png';
    }
  }

}

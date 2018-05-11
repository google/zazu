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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-checkbox-dropdown/angular2-multiselect-dropdown';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { RulesComponent } from './rules/rules.component';
import { RulesService } from './rules.service';
import { ReportsComponent } from './reports/reports.component';
import { ReportsService } from './reports.service';
import { AuthGuard } from './auth-guard.service';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportDetailsService } from './report-details.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rules',
    component: RulesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'report-details/:id',
    component: ReportDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    RulesComponent,
    ReportsComponent,
    ReportDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularMultiSelectModule
  ],
  providers: [LoginService, UsersService, RulesService, ReportsService, AuthGuard, ReportDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

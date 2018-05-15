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

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  private baseUrl = '/api';
  private userListUrl = '/listUsers';
  private addUserUrl = '/addUser';
  private deleteUserUrl = '/deleteUser';
  private editUserUrl = '/editUser';
  private checkAccessUrl = '/getRole';
  private orgListUrl = '/listOrgs';

  checkAccess(): Observable<string> {
    return this.http.get(this.baseUrl + this.checkAccessUrl)
             .pipe(
                 map((res:Response) => res.json().role)
             );
  }

  getUsers(): Observable<User[]> {

    return this.http.get(this.baseUrl + this.userListUrl)
             .pipe(
                 map((res:Response) => res.json().users)
             );

  }

  getOrgs(): Observable<string[]> {

    return this.http.get(this.baseUrl + this.orgListUrl)
             .pipe(
                 map((res:Response) => res.json().orgs)
             );
  }

  addUser(body: Object): Observable<User[]> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.addUserUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().users)
             );
  }

  deleteUser(body: Object): Observable<User[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.deleteUserUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().users)
             );
  }

  editUser(body: Object): Observable<User[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.editUserUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().users)
             );
  }
}

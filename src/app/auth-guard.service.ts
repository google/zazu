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
import { CanActivate, CanActivateChild } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  private baseUrl = '/api';

  constructor(private http: Http) { }

  canActivate() {

    return this.http.get(this.baseUrl + '/isLoggedIn')
             .pipe(
                map((res:Response) => res.json().isLoggedIn)
              );
  }

  canActivateChild() {

    return this.http.get(this.baseUrl + '/isLoggedIn')
              .pipe(
                 map((res:Response) => res.json().isLoggedIn)
               );
  }

}

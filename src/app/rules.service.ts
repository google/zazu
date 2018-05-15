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
import { Rule } from './rule';
import { Datasource } from './datasource';
import { map } from 'rxjs/operators';

@Injectable()
export class RulesService {

  constructor(private http: Http) { }

  private baseUrl = '/api';
  private ruleListUrl = '/listRules';
  private addRuleUrl = '/addRule';
  private deleteRuleUrl = '/deleteRule';
  private editRuleUrl = '/editRule';
  private checkAccessUrl = '/getRole';
  private orgListUrl = '/listOrgs';
  private datasourceListUrl = '/listDatasources';
  private identifierListUrl = '/listIdentifiers';
  //private refreshPermissionsUrl = '/refreshPermissionsTable';

  checkAccess(): Observable<string> {
    return this.http.get(this.baseUrl + this.checkAccessUrl)
             .pipe(
                 map((res:Response) => res.json().role)
             );
  }

  getOrgs(): Observable<string[]> {

    return this.http.get(this.baseUrl + this.orgListUrl)
             .pipe(
                 map((res:Response) => res.json().orgs)
             );
  }

  getDatasources(): Observable<string[]> {

    return this.http.get(this.baseUrl + this.datasourceListUrl)
             .pipe(
                 map((res:Response) => res.json().tables)
             );
  }

  getRules(): Observable<Rule[]> {

    return this.http.get(this.baseUrl + this.ruleListUrl)
             .pipe(
                 map((res:Response) => res.json().rules)
             );

  }

  getIdentifiers(body: Object): Observable<Datasource[]> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.identifierListUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().identifiers)
             );

  }

  addRule(body: Object): Observable<Rule[]> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.addRuleUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().rules)
             );
  }

  deleteRule(body: Object): Observable<Rule[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.deleteRuleUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().rules)
             );
  }

  editRule(body: Object): Observable<Rule[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.editRuleUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().rules)
             );
  }
  //
  // refreshPermissions(): Observable<string[]> {
  //
  //   return this.http.get(this.baseUrl + this.refreshPermissionsUrl)
  //            .pipe(
  //                map((res:Response) => res.json().schema)
  //            );
  // }
}

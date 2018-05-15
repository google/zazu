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
import { Report } from './report';
import { map } from 'rxjs/operators';

@Injectable()
export class ReportsService {

  constructor(private http: Http) { }

  private baseUrl = '/api';
  private reportListUrl = '/listReports';
  private orgListUrl = '/listOrgs';
  private datasourceListUrl = '/listDatasources';
  private addReportUrl = '/addReport';
  private deleteReportUrl = '/deleteReport';
  private editReportUrl = '/editReport';
  private checkAccessUrl = '/getRole';

  checkAccess(): Observable<string> {
    return this.http.get(this.baseUrl + this.checkAccessUrl)
             .pipe(
                 map((res:Response) => res.json().role)
             );
  }

  getReports(body: Object): Observable<Report[]> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.reportListUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().reports)
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

  addReport(body: Object): Observable<Report[]> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.addReportUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().reports)
             );
  }

  deleteReport(body: Object): Observable<Report[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.deleteReportUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().reports)
             );
  }

  editReport(body: Object): Observable<Report[]> {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.editReportUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().reports)
             );
  }

}

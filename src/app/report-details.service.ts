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
export class ReportDetailsService {

  constructor(private http: Http) { }

  private baseUrl = '/api';
  private getReportUrl = '/getReport';
  private checkAccessUrl = '/getRole';
  private reportUserAccessUrl = '/isReportUserAuthed';

  checkAccess(): Observable<string> {
    return this.http.get(this.baseUrl + this.checkAccessUrl)
             .pipe(
                 map((res:Response) => res.json().role)
             );
  }

  getReport(body: Object): Observable<Report> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.getReportUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().report)
             );

  }

  reportUserAccess(body: Object): Observable<boolean> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + this.reportUserAccessUrl, body, options)
             .pipe(
                 map((res:Response) => res.json().isAuthed)
             );

  }
}

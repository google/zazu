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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ReportDetailsService } from '../report-details.service';
import { Report } from '../report';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  constructor(private reportDetailsService: ReportDetailsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  report_id: String;
  viewEmbed: boolean;
  authError: boolean;
  role: boolean;
  embedLink: SafeResourceUrl;
  view_report: Report;
  title: string;

  ngOnInit() {

    var source = require('environments/environment');

    if (source.environment.app_mode == "boring") {
      this.title = 'Retailer';
    }
    else {
      this.title = 'Zazu';
    }

    this.embedLink = "";
    this.viewEmbed = false;
    this.authError = false;

    this.route.params.subscribe(params => {
      this.report_id = params['id'];
    });

    this.reportDetailsService.checkAccess()
        .subscribe(
                role => {
                            if (role === "retailer") {
                                this.role = true;}
                            else {
                              this.role = false;
                            }

                            this.loadReport({ "report_id": this.report_id });
                         }, //Bind to view
                 err => {
                     // Log errors if any
                     console.log(err);
                 });
  }

  loadReport(reportIdJson) {

    this.reportDetailsService.reportUserAccess(reportIdJson)
        .subscribe(
            isAuthed => {
              if (isAuthed === true) {
                this.reportDetailsService.getReport(reportIdJson)
                    .subscribe(
                        report => {
                              this.view_report = report;
                              this.viewEmbed = true;
                              this.authError = false;

                              var patt = new RegExp("\/c\/(.)+\/reporting");
                              var replaceLink = this.view_report.link.replace(patt, "/embed/reporting");
                              this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl(replaceLink);
                        }, //Bind to view
                        err => {
                             // Log errors if any
                             console.log(err);
                        });
              }
              else {
                  this.viewEmbed = false;
                  this.authError = true;
              }

            },
            err => {
              // Log errors if any
              console.log(err);
            });
  }

}

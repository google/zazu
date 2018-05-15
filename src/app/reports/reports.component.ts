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
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { ReportsService } from '../reports.service';
import { Report } from '../report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  selectedItemsEdit = [];
  datasourceList = [];
  dropdownSettings = {};

  constructor(private reportsService: ReportsService, private router: Router) { }

  reports: Report[];
  selectedReport: Report;
  role: boolean;
  allorgs: string[];
  reportView: string;
  spinner: boolean;
  title: string;
  edit_icon: string;
  add_icon: string;
  delete_icon: string;
  loader_icon: string;
  @Input() newReport: Report;
  @Input() editedReport: Report;

  ngOnInit() {

    this.spinner = true;
    var source = require('environments/environment');

    if (source.environment.app_mode == "boring") {
      this.title = 'Retailer';
      this.edit_icon = "edit_icon_vanilla.png";
      this.add_icon = "add_icon_vanilla.png";
      this.delete_icon = "delete_icon_vanilla.png";
      this.loader_icon = "loading.gif";
    }
    else {
      this.title = 'Zazu';
      this.edit_icon = "edit_icon.png";
      this.add_icon = "add_icon.png";
      this.delete_icon = "delete_icon.png";
      this.loader_icon = "lg.fidget-spinner.gif";
    }

    this.newReport = { name: "", link: "", datasource: "", organization: [], created_at: new Date(), updated_at: new Date() };

    this.dropdownSettings = {
                               singleSelection: false,
                               text:"Select Vendors",
                               selectAllText:'Select All',
                               unSelectAllText:'UnSelect All',
                               enableSearchFilter: true,
                               classes:"myclass custom-class"
                            };

    this.getAllOrgs();
    this.getAllDatasources();

    this.reportsService.checkAccess()
      .subscribe(
              role => {
                          if (role === "retailer") {
                              this.role = true;}
                          else {
                            this.role = false;
                          }
                          this.getReports("");
                          this.spinner = true;

                       }, //Bind to view
               err => {
                   // Log errors if any
                   console.log(err);
               });
  }

  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }

  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }

  onSelectAll(items: any){
      console.log(items);
  }

  onDeSelectAll(items: any){
      console.log(items);
  }

  onSelect(report: Report): void {
      this.selectedReport = report;
      this.editedReport = Object.assign({}, this.selectedReport);
  }

  onItemSelectEdit(item:any){
      console.log(item);
      console.log(this.selectedItemsEdit);
  }

  OnItemDeSelectEdit(item:any){
      console.log(item);
      console.log(this.selectedItemsEdit);
  }

  onSelectAllEdit(items: any){
      console.log(items);
  }

  onDeSelectAllEdit(items: any){
      console.log(items);
  }

  onViewChange(): void {

    this.getReports(this.reportView);
  }

  viewReport(report): void {

    this.router.navigate(['/report-details', report._id]);
  }

  getAllOrgs() {

    this.spinner = true;

    this.reportsService.getOrgs()
              .subscribe(
                      allorgs => {
                                  this.allorgs = allorgs;

                                  if (allorgs.length > 0) {
                                    this.reportView = allorgs[0];
                                    this.getReports(this.reportView);
                                  }

                                  for (var i = 0; i < this.allorgs.length; i++) {

                                    this.dropdownList.push({ "id": i+1, "itemName": this.allorgs[i] });
                                  }
                              }, //Bind to view
                       err => {
                           // Log errors if any
                           console.log(err);
                       });
  }

  getAllDatasources() {

    this.reportsService.getDatasources()
               .subscribe(
                      alldatasources => {
                                  this.datasourceList = alldatasources;

                                  },
                      err => {
                          console.log(err);
                      });
  }

  getReports(vendor: string) {

    this.spinner = true;
    var vendorJson = { "vendor": vendor };

    this.reportsService.getReports(vendorJson)
              .subscribe(
                      reports => {
                                this.reports = reports;
                                this.spinner = false;
                                }, //Bind to view
                       err => {
                           // Log errors if any
                           console.log(err);
                       });
  }

  addReport() {

    this.spinner = true;
    var orgList = [];
    for (var i = 0; i < this.selectedItems.length; i++) {
      orgList.push(this.selectedItems[i].itemName);
    }

    this.newReport.organization = orgList;

    this.reportsService.addReport(this.newReport)
              .subscribe(
                      reports => {
                                    this.reports = reports;
                                    this.spinner = false;
                                 },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

  deleteReport() {

    this.spinner = true;
    this.reportsService.deleteReport(this.selectedReport)
              .subscribe(
                      reports => {
                                    this.reports = reports;
                                    this.spinner = false;
                                 },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

  editReport() {

    this.spinner = true;
    var orgList = [];
    for (var i = 0; i < this.selectedItemsEdit.length; i++) {
      orgList.push(this.selectedItemsEdit[i].itemName);
    }

    this.editedReport.organization = orgList;

    this.reportsService.editReport({ selectedReport: this.selectedReport, editedReport: this.editedReport })
              .subscribe(
                      reports => {
                                    this.reports = reports;
                                    this.spinner = false;
                                 },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

}

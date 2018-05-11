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
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';

import { RulesService } from '../rules.service';
import { Rule } from '../rule';
import { Datasource } from '../datasource';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  selectedItemsEdit = [];
  datasourceList = [];
  dropdownSettings = {};
  identifiers = [];
  identifierList = [];

  constructor(private rulesService: RulesService) { }
  rules: Rule[];
  selectedRule: Rule;
  allorgs: string[];
  role: boolean;
  spinner: boolean;
  title: string;
  edit_icon: string;
  add_icon: string;
  delete_icon: string;
  loader_icon: string;
  @Input() newRule: Rule;
  @Input() editedRule: Rule;

  ngOnInit() {

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

    this.spinner = true;
    this.newRule = { name: "", identifier: "", identifierType: "", condition: "", token: "", datasource: "", organization: [], created_at: new Date(), updated_at: new Date() };

    this.rulesService.checkAccess()
      .subscribe(
              role => {
                          if (role === "retailer") {
                              this.role = true;
                              this.getRules();
                              setTimeout(() => console.log(this.rules), 20000); }
                          else {
                            this.role = false;
                          }
                       }, //Bind to view
               err => {
                   // Log errors if any
                   console.log(err);
               });

  this.getAllOrgs();
  this.getAllDatasources();

  this.dropdownSettings = {
                             singleSelection: false,
                             text:"Select Vendors",
                             selectAllText:'Select All',
                             unSelectAllText:'UnSelect All',
                             enableSearchFilter: true,
                             classes:"myclass custom-class"
                          };


                                                    this.rulesService.refreshPermissions()
                                                      .subscribe(
                                                              schema => {
                                                                          console.log(schema);

                                                                       }, //Bind to view
                                                               err => {
                                                                   // Log errors if any
                                                                   console.log(err);
                                                               });
 }

 getAllOrgs() {
   this.rulesService.getOrgs()
             .subscribe(
                     allorgs => {
                                 this.allorgs = allorgs;
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

   this.rulesService.getDatasources()
              .subscribe(
                     alldatasources => {
                                 this.datasourceList = alldatasources;

                                 },
                     err => {
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


  onSelect(rule: Rule): void {
      this.selectedRule = rule;
      this.editedRule = Object.assign({}, this.selectedRule);
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

  refreshIdentifiers() {

    if ((this.identifiers.length === 0)||((this.newRule.condition === "contains")&&(this.newRule.identifierType !== "STRING"))) {

      this.identifierList = [];
      var dsJson = { "datasource": this.newRule.datasource };

      this.rulesService.getIdentifiers(dsJson)
                .subscribe(
                        identifiers => {
                                    this.identifiers = identifiers;

                                    for (var i = 0; i < identifiers.length; i++) {

                                      if ((this.newRule.condition !== "contains")||(identifiers[i].type === "STRING")) {

                                        if (identifiers[i].name !== "Permissions") {
                                          this.identifierList.push(identifiers[i].name);
                                        }
                                      }
                                    }
                                  }, //Bind to view
                         err => {
                             // Log errors if any
                             console.log(err);
                         });
    }
  }

  refreshIdentifierType() {

    for (var i = 0; i < this.identifiers.length; i++) {

      if (this.identifiers[i].name === this.newRule.identifier) {
          this.newRule.identifierType = this.identifiers[i].type;
      }
    }
  }

  getRules() {
    this.spinner = true;

    this.rulesService.getRules()
              .subscribe(
                      rules => {
                                  this.rules = rules;
                                  this.spinner = false;
                                }, //Bind to view
                       err => {
                           // Log errors if any
                           console.log(err);
                       });
  }

  addRule() {

    this.spinner = true;

    var orgList = [];
    for (var i = 0; i < this.selectedItems.length; i++) {
      orgList.push(this.selectedItems[i].itemName);
    }

    this.newRule.organization = orgList;

    for (var i = 0; i < this.identifiers.length; i++) {

      if (this.identifiers[i].name === this.newRule.identifier) {
          this.newRule.identifierType = this.identifiers[i].type;
      }
    }

    this.rulesService.addRule(this.newRule)
              .subscribe(
                      rules => {
                                  this.rules = rules;
                                  this.spinner = false;
                               },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

  deleteRule() {

    this.spinner = true;

    this.rulesService.deleteRule(this.selectedRule)
              .subscribe(
                      rules => {
                                  this.rules = rules;
                                  this.spinner = false;
                               },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

  editRule() {

    this.spinner = true;

    var orgList = [];
    for (var i = 0; i < this.selectedItemsEdit.length; i++) {
      orgList.push(this.selectedItemsEdit[i].itemName);
    }

    this.editedRule.organization = orgList;

    this.rulesService.editRule({ selectedRule: this.selectedRule, editedRule: this.editedRule })
              .subscribe(
                      rules => {
                                  this.rules = rules;
                                  this.spinner = false;
                               },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

}

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

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  selectedItemsEdit = [];
  dropdownSettings = {};

  constructor(private usersService: UsersService) { }
  users: User[];
  selectedUser: User;
  role: boolean;
  allorgs: string[];
  spinner: boolean;
  title: string;
  edit_icon: string;
  add_icon: string;
  delete_icon: string;
  loader_icon: string;
  @Input() newUser: User;
  @Input() editedUser: User;

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
    this.newUser = { name: "", email: "", google_email: "", organization: "", role: "", accesses: [], created_at: new Date(), updated_at: new Date() };

    this.usersService.checkAccess()
      .subscribe(
              role => {
                          if (role === "retailer") {
                              this.role = true;
                              this.getUsers();
                          }
                          else {
                            this.role = false;
                          }
                       }, //Bind to view
               err => {
                   // Log errors if any
                   console.log(err);
               });

   this.getAllOrgs();

   this.dropdownSettings = {
                              singleSelection: false,
                              text:"Select Vendors",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class"
                           };
  }

  getAllOrgs() {
    this.usersService.getOrgs()
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

  onSelect(user: User): void {
      this.selectedUser = user;
      this.editedUser = Object.assign({}, this.selectedUser);
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

  getUsers() {
    this.spinner = true;

    this.usersService.getUsers()
              .subscribe(
                      users => {
                                  this.users = users;
                                  this.spinner = false;
                                }, //Bind to view
                       err => {
                           // Log errors if any
                           console.log(err);
                       });
  }

  addUser() {

    this.spinner = true;

    var orgList = [];
    for (var i = 0; i < this.selectedItems.length; i++) {
      orgList.push(this.selectedItems[i].itemName);
    }

    this.newUser.accesses = orgList;

    this.usersService.addUser(this.newUser)
              .subscribe(
                      users => {
                                  this.users = users;
                                  this.spinner = false;
                               },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });

  }

  deleteUser() {

    this.spinner = true;

    this.usersService.deleteUser(this.selectedUser)
              .subscribe(
                      users => {
                                  this.users = users;
                                  this.spinner = false;
                               },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }

  editUser() {

    this.spinner = true;

    var orgList = [];
    for (var i = 0; i < this.selectedItemsEdit.length; i++) {
      orgList.push(this.selectedItemsEdit[i].itemName);
    }

    this.editedUser.accesses = orgList;

    this.usersService.editUser({ selectedUser: this.selectedUser, editedUser: this.editedUser })
              .subscribe(
                      users => {
                                  this.users = users;
                                  this.spinner = false;
                               },
                      err => {
                          // Log errors if any
                          console.log(err);
                      });
  }
}

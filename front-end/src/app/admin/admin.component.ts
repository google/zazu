import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  minimized = false;
  constructor() { }

  ngOnInit() {
  }


  toggleMenu() {
    this.minimized = !this.minimized;
    console.log('toggled');
  }

}

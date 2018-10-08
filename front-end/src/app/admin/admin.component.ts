import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  minimized = false;
  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate(['admin/o']);
  }


  toggleMenu() {
    this.minimized = !this.minimized;
    console.log('toggled');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  constructor(  private router: Router) {  }

  ngOnInit() {
  }

  goToDetails(id) {
    this.router.navigate(['/admin', id]);
  }


}

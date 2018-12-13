import { PaginationService } from './shared/services/pagination.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  panelOpenState = false;
  constructor(private http: HttpClient, private pagination: PaginationService) { }

  async ngOnInit() {
    const call = await <any> this.http.get('../../../assets/main-variables.json').toPromise();
    this.pagination.changeItemsPerPage(call.numberOfItemsPerPage);
  }
}

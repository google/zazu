import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Pagination {
  currentPage: number;
  itemsPerPage:  number;
  totalPages: number;
}


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  paginationChanged = new Subject <Pagination>();

 pagination: Pagination = {
    currentPage: 1,
    itemsPerPage: 3,
    totalPages: 1
  };

  public getPagination() {
    this.paginationChanged.next(this.pagination);
  }

  public changePage(currentPage: number) {
    this.pagination.currentPage = currentPage;
    this.paginationChanged.next(this.pagination);
  }

  public changeTotalPages(totalPages: number) {
    this.pagination.totalPages = totalPages;
    this.paginationChanged.next(this.pagination);
  }

  public resetPage() {
    this.pagination.currentPage = 1;
    this.paginationChanged.next(this.pagination);
  }





}

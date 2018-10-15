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

/**
 * This is a service used for paginating the list
 */
export class PaginationService {

  constructor() { }

  paginationChanged = new Subject <Pagination>();

  // Max number of items in list per page
  // Edit this to show more items in list
  ITEMS_PER_PAGE = 5;

  pagination: Pagination = {
    currentPage: 1,
    itemsPerPage: this.ITEMS_PER_PAGE,
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

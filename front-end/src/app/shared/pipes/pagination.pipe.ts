import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  constructor(private paginationService: PaginationService) {}

  transform(currentList: object[], page: number): any {

    console.log('pagination called');

    this.paginationService.changeTotalPages(
      Math.ceil(
        currentList.length / this.paginationService.pagination.itemsPerPage
      )
    );

    return currentList.slice(
      this.paginationService.pagination.currentPage *
        this.paginationService.pagination.itemsPerPage -
        this.paginationService.pagination.itemsPerPage,
      this.paginationService.pagination.itemsPerPage *
        this.paginationService.pagination.currentPage
    );
  }
}

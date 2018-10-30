import { Pipe, PipeTransform, OnInit, OnDestroy } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
@Pipe({
  name: 'datarulesList'
})
export class DataRulesListPipe implements PipeTransform {

  constructor(private paginationService: PaginationService) {}

  transform(
    rules: any,
    searchName: string,
    datasource: string,
    sort: string,
    page: number,
  ): any {
    if (rules) {
      let currentList = rules;

      // If there's a search
      if (searchName) {
        searchName = searchName.toLowerCase();
        currentList = currentList.filter(
          (el: any) => el.name.toLowerCase().indexOf(searchName) > -1
        );
      }

      // if there's a organization
      if (datasource) {
        if (datasource !== 'All') {
          currentList = currentList.filter(
            element => element.datasource._id === datasource
          );
        }
      }
     // if there's a sort
     if (sort) {
      if (sort === 'Alphabetical') {
        const sorted = currentList.sort(
          (a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1)
        );
        if (sort.charAt(0) === '-') {
          sorted.reverse();
        }
        currentList = sorted;
      }
      if (sort === 'Latest') {
        const sorted = currentList.sort(
          (a, b) =>
            new Date(a.date) < new Date(b.date)
              ? 1
              : new Date(a.date) === new Date(b.date)
                ? 0
                : -1
        );
        currentList = sorted;
      }
    }
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
    return rules;
  }
}

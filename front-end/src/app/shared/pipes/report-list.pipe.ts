import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
@Pipe({
  name: 'reportList'
})
export class ReportListPipe implements PipeTransform {
  constructor(private paginationService: PaginationService) {}
  transform(
    reportList: any[],
    searchName: string,
    organization: string,
    sort: string,
    page: number
  ): any {
    let currentList = reportList;
    // If there's a reportList
    if (reportList) {
      // If there's a search
      if (searchName) {
        searchName = searchName.toLowerCase();
        currentList = currentList.filter(
          (el: any) => el.name.toLowerCase().indexOf(searchName) > -1
        );
      }

      // if there's a organization
      if (organization) {
        if (organization !== 'All') {
          currentList = currentList.filter(
            element => element.organization.id === organization
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

    return currentList;
  }
}

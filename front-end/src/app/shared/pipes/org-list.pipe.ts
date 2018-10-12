import { Pipe, PipeTransform, OnInit, OnDestroy } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
@Pipe({
  name: 'orgList'
})
export class OrgListPipe implements PipeTransform {
  constructor(private paginationService: PaginationService) {}

  transform(
    organization: any,
    categories: string[],
    sort: string,
  ): any {
    if (organization != null) {
      let currentList = organization;
      // If There's a search name


      // If there's a category
      if (categories.length > 0) {
        currentList = currentList.filter(element =>
          categories.every(temp => element.categories.indexOf(temp) >= 0)
        );
      }
      // If there's a sort
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
        if (sort === 'Most Reports') {
          const sorted = currentList.sort(
            (a, b) =>
              Number(a.reportsCount) < Number(b.reportsCount)
                ? 1
                : Number(a.reportsCount) === Number(b.reportsCount)
                  ? 0
                  : -1
          );
          currentList = sorted;
        }
        if (sort === 'Most Users') {
          const sorted = currentList.sort(
            (a, b) =>
              Number(a.usersCount) < Number(b.usersCount)
                ? 1
                : Number(a.usersCount) === Number(b.usersCount)
                  ? 0
                  : -1
          );
          currentList = sorted;
        }
        if (sort === 'Most Data Rules') {
          const sorted = currentList.sort(
            (a, b) =>
              Number(a.datarulesCount) < Number(b.datarulesCount)
                ? 1
                : Number(a.datarulesCount) === Number(b.datarulesCount)
                  ? 0
                  : -1
          );
          currentList = sorted;
        }
      }
      return currentList;
    }
  }
}

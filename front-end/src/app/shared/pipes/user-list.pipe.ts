import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
@Pipe({
  name: 'userList'
})
export class UserListPipe implements PipeTransform {
  constructor(private paginationService: PaginationService) {}
  transform(
    userList: any[],
    searchName: string,
    role: string,
    organization: string,
    sort: string,
    page: number
  ): any {
    let currentList = userList;
    // If there's a reportList
    if (userList) {
      // If there's a search
      if (searchName) {
        searchName = searchName.toLowerCase();
        currentList = currentList.filter(
          (el: any) =>
            (el.firstName + ' ' + el.lastName)
              .toLowerCase()
              .indexOf(searchName) > -1
        );
      }

      // if there's a organization
      if (organization) {
        if (organization !== 'All') {
          currentList = currentList.filter(function(element) {
            return element.organizations.filter(function(org) {
                console.log(org);
                return org.id === organization;
              }).length > 0;
          });
        }
      }

      // checks for role
      if (role !== 'All' && role) {
        currentList = currentList.filter(element => element.role === role);
      }


      // if there's a sort
      if (sort) {
        if (sort === 'First Name') {
          const sorted = currentList.sort(
            (a, b) =>
              a.firstName > b.firstName
                ? 1
                : a.firstName === b.firstName
                  ? 0
                  : -1
          );
          currentList = sorted;
        }
        if (sort === 'Last Name') {
          const sorted = currentList.sort(
            (a, b) =>
              a.lastName > b.lastName ? 1 : a.lastName === b.lastName ? 0 : -1
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

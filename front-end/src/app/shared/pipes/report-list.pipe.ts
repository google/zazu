import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'reportList'
})
export class ReportListPipe implements PipeTransform {

  transform(
    reportList: any[],
    organization: string,
    sort: string,
  ): any {
    let currentList = reportList;
    // If there's a reportList
    if (reportList) {

      // if there's a organization
      if (organization) {
        if (organization !== 'All') {
          console.log(currentList);
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

    }

    return currentList;
  }
}

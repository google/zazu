import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orgSort'
})
export class OrgSortPipe implements PipeTransform {

  transform(value: any, input: string): any {
    if (value != null) {
    if (input === 'Alphabetical') {
      const sorted = value.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
      if (input.charAt(0) === '-') { sorted.reverse(); }
      return sorted;
    }
    if (input === 'Most Reports') {
      const sorted = value.sort((a, b) => Number(a.reportsCount) < Number(b.reportsCount) ? 1 : Number(a.reportsCount) === Number(b.reportsCount) ? 0 : -1);
      return sorted;
    }
    if (input === 'Most Users') {
      const sorted = value.sort((a, b) => Number(a.usersCount) < Number(b.usersCount) ? 1 : Number(a.usersCount) === Number(b.usersCount) ? 0 : -1);
      return sorted;
    }
    if (input === 'Most Data Rules') {
      const sorted = value.sort((a, b) => Number(a.datarulesCount) < Number(b.datarulesCount) ? 1 : Number(a.datarulesCount) === Number(b.datarulesCount) ? 0 : -1);
      return sorted;
    }
  }
}


}

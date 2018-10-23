import { Pipe, PipeTransform, OnInit, OnDestroy } from '@angular/core';
@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  constructor() {}

  transform(categories: any, searchName: string): any {
    let currentList = categories;
    if (searchName && searchName !== '') {
      // If there's a search
      if (searchName) {
        currentList = currentList.filter(
          (el: any) => el.toLowerCase().indexOf(searchName.toLowerCase()) > -1
        );
       }
    }
    return currentList;
  }
}

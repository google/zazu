import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  transform(value: any, input: string) {
    if (value) {
      if (input) {
        input = input.toLowerCase();
        return value.filter(
          (el: any) => el.name.toLowerCase().indexOf(input) > -1
        );
      }
    }
    return value;
  }
}

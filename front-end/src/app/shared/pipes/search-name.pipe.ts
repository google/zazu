import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {
  transform(value: any[], input: string) {
    console.log('searchName');

    if (value) {
      if (input) {
        input = input.toLowerCase();
        const temp = value.filter(
          (el: any) => el.name.toLowerCase().indexOf(input) > -1
        );
        return temp;
      }
      return value;
    }
    return value;
  }
}

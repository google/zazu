import { Pipe, PipeTransform } from '@angular/core';
import * as OrganizationViewModel from '../view-models/organization.viewmodel';
@Pipe({
  name: 'orgCategory'
})
export class OrgCategoryPipe implements PipeTransform {

  transform(value: any, input: string[]): any {
    if (input.length > 0 && value != null) {
      return value.filter( function(element) {
        console.log(element);
        return input.every( function(temp) {
          return element.categories.indexOf(temp) >= 0;
        });
      });
  }
  return value;
  }

}

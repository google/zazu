import { Injectable } from '@angular/core';
import * as OrganizationViewModel from '../view-models/organization.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor() {}

  // Mocking Organizations Object
  private mockOrganizations: OrganizationViewModel.Organization[] = [
    {
      id: '1',
      name: 'Hasbro Inc.',
      categories: ['Toy Company']
    },
    {
      id: '2',
      name: 'Mattel Inc.',
      categories: ['Toy Company']
    },
    {
      id: '3',
      name: 'The Lego Company',
      categories: ['Toy Company']
    },
    {
      id: '4',
      name: 'Something',
      categories: ['Toy Company', 'Electronics']
    }
  ];




  /**
   * Method for getting all of the organizations
   */
  public getAllOrganizations(): OrganizationViewModel.Organization[] {
    return this.mockOrganizations.slice();
  }

  /**
   *  Method for getting organization with filters
   *  ********** MUST CONSULT HOW TO DO THIS *******
   */
  public getOrganizationsWithFilter(filter): OrganizationViewModel.Organization[] {
    return null;
  }

  /**
   *  Method for getting Organization object with ID
   */

  public getOrganizationById(id): OrganizationViewModel.Organization {
    return this.mockOrganizations.filter(x => x.id === id)[0];
  }


}

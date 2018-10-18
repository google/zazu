import { OrganizationDetails } from './../view-models/organization.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as OrganizationViewModel from '../view-models/organization.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {}

  URL = '../../../assets/example-data/';

  /**
   *  Method for getting all organizations with just name and ID
   *  Primarily used in filters and breadcrumbs
   */
  public async getAllOrganizationsWithNoDetails(): Promise<OrganizationViewModel.SimpleOrganization[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>( this.URL + 'organizations.mockdata.json')).toPromise());
  }


  /**
   * Method for getting all of the organizations with all the details
   */
  public async getAllOrganizations(): Promise<OrganizationViewModel.OrganizationDetails[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>( this.URL + 'organizations.mockdata.json')).toPromise());
  }

 /**
  * Method for getting details of a specific organization
  * @param id - ID of the organization
  */
  public async getOrganizationById(id): Promise<OrganizationViewModel.OrganizationDetails> {
    return await  await ((this.http.get<OrganizationViewModel.OrganizationDetails>( this.URL + 'single-organization.mockup.json')).toPromise());
  }

  /**
   * Method for getting all current directory
   */
  public async getAllCategories(): Promise<string[]> {
    const categories = [];
    const orgs = await this.getAllOrganizations();
    orgs.forEach(org => {
      org.categories.forEach(category => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });
    return categories;
  }

  /**
   * Method for creating new orgnization
   * @param organization - organization object
   */
  public async CreateNewOrganization(organization: OrganizationViewModel.CreateNewOrganization) {
    return await null;
  }

  /**
   * Method for editing organization
   * @param organization - organiztion object
   */
  public async EditOrganization(organization: OrganizationViewModel.EditOrganization) {
    return await null;
  }

  /**
   * Method for deleting organization
   * @param organizationID - ID of the organization you want to delete
   */
  public async DeleteOrganization(organizationID: string) {
    return await null;
  }

}

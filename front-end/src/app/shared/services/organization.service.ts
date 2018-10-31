import { OrganizationDetails } from './../view-models/organization.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as OrganizationViewModel from '../view-models/organization.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {}

  organizations = [];

  URL = '../../../assets/example-data/';

  /**
   *  Method for getting all organizations with just name and ID
   *  Primarily used in filters and breadcrumbs
   */
  public async getAllOrganizationsWithNoDetails(): Promise<OrganizationViewModel.SimpleOrganization[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>( '/api' + '/getAllOrganizationsWithNoDetails')).toPromise());
  }


  /**
   * Method for getting all of the organizations with all the details
   */
  public async getAllOrganizations(): Promise<OrganizationViewModel.OrganizationDetails[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>( '/api' + '/getAllOrganizations')).toPromise());
  }

 /**
  * Method for getting details of a specific organization
  * @param id - ID of the organization
  */
  public async getOrganizationById(id): Promise<OrganizationViewModel.OrganizationDetails> {
    return await  await ((this.http.get<OrganizationViewModel.OrganizationDetails>( '/api' + '/getOrganizationById/' + id)).toPromise());
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
  public async createNewOrganization(organization: OrganizationViewModel.CreateNewOrganization) {
    console.log('Organization Created');
    return await ((this.http.post('/api/' + 'createOrganization', organization)).toPromise());
  }

  /**
   * Method for editing organization
   * @param organization - organiztion object
   */
  public async editOrganization(organization: OrganizationViewModel.EditOrganization) {
    console.log('Organization Edit: ');
    return await ((this.http.post(this.URL + 'editOrganization/', organization)).toPromise());
  }

  /**
   * Method for deleting organization
   * @param organizationID - ID of the organization you want to delete
   */
  public async deleteOrganization(organizationID: string) {
    console.log('Organization Delete: ' + organizationID);
    return await ((this.http.post('/api/' + 'deleteOrganization', {'orgID': organizationID })).toPromise());
  }

  /********** LOCAL ORGANIZATION METHODS FOR OPTIMIZATION AND LESS API CALLS  **********/

  /**
   * Gets the organization based on local variable.
   * This is created for breadcrumbs mostly
   * @param id organization ID
   */
  public async getLocalOrganization(id) {
    console.log('local org called');
    const organization = this.organizations.find(org => {
      return org._id === id;
    });
    if (!organization) {
      try {
        this.organizations = await this.getAllOrganizations();
        this.getLocalOrganization(id);
      } catch (error) {
        console.log(error);
      }
    }
    return organization;
  }

  /**
   * Set Local Org
   */
  public setLocalOrg(org) {
    this.organizations = org;
  }
}

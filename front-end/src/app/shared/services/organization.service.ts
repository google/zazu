import { AuthService } from './../../auth/auth.service';
import { OrganizationDetails } from './../view-models/organization.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as OrganizationViewModel from '../view-models/organization.viewmodel';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient, private authService: AuthService, public snackBar: MatSnackBar) {}

  organizations = [];

  URL = '../../../assets/example-data/';

  /**
   *  Method for getting all organizations with just name and ID
   *  Primarily used in filters and breadcrumbs
   */
  public async getAllOrganizationsWithNoDetails(): Promise<OrganizationViewModel.SimpleOrganization[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>( '/api' + '/getAllOrganizationsWithNoDetails')).toPromise());
    /*
    try {
      const status = await <any>(this.http.get( '/api' + '/getAllOrganizationsWithNoDetails')).toPromise();
      if (status.status === '200') {
        return await status.organization;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */

  }


  /**
   * Method for getting all of the organizations with all the details
   */
  public async getAllOrganizations(): Promise<OrganizationViewModel.OrganizationDetails[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>( '/api' + '/getAllOrganizations')).toPromise());

    /*
    try {
      const status = await <any>(this.http.get( '/api' + '/getAllOrganizationsWithNoDetails')).toPromise();
      if (status.status === '200') {
        return await status.organization;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
  }

 /**
  * Method for getting details of a specific organization
  * @param id - ID of the organization
  */
  public async getOrganizationById(id): Promise<OrganizationViewModel.OrganizationDetails> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails>( '/api' + '/getOrganizationById/' + id)).toPromise());
    /*
    try {
      const status = await <any>((this.http.get( '/api' + '/getOrganizationById/' + id)).toPromise());
      if (status.status === '200') {
        return await status.organization;
      } else if (status.status === '400' ) {
        this.snackBar.open( 'Something went wrong, please try again' , 'Dismiss', {
          duration: 5000,
        });
        throw new Error('Something went wrong, please try again');
      }
    } catch (error) {
      this.snackBar.open( error , 'Dismiss', {
        duration: 5000,
      });
      throw error;
    }
    */
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
    if (await this.authService.canSend()) {
      return await ((this.http.post<OrganizationViewModel.CreateOrganizationReturn>('/api/' + 'createOrganization', organization)).toPromise());
    } else {
      return await {status: '403', message: 'You do not have permission to perform this action' };
    }
  }

  /**
   * Method for editing organization
   * @param organization - organiztion object
   */
  public async editOrganization(organization: OrganizationViewModel.EditOrganization) {
    if (await this.authService.canSend()) {
      return await ((this.http.post('/api' + '/editOrganization/', organization)).toPromise());
    } else {
      return await {status: '403', message: 'You do not have permission to perform this action'};
    }
  }

  /**
   * Method for deleting organization
   * @param organizationID - ID of the organization you want to delete
   */
  public async deleteOrganization(organization) {
    if (await this.authService.canSend()) {
    return await ((this.http.post('/api/' + 'deleteOrganization', organization)).toPromise());
    } else {
      return await {status: '403', message: 'You do not have permission to perform this action'};
    }
  }

  /********** LOCAL ORGANIZATION METHODS FOR OPTIMIZATION AND LESS API CALLS  **********/

  /**
   * Gets the organization based on local variable.
   * This is created for breadcrumbs mostly
   * @param id organization ID
   */
  public async getLocalOrganization(id) {
    if (this.organizations.length === 0) {

      try {
        this.organizations = await this.getAllOrganizations();
        const orga = await this.organizations.find(org => {
          return org._id === id;
        });
        return orga;
      } catch (error) {
        console.log(error);
      }
    }
    const organization = await this.organizations.find(org => {
      return org._id === id;
    });
    return organization;
  }

  /**
   * Set Local Org
   */
  public setLocalOrg(org) {
    this.organizations = org;
  }
}

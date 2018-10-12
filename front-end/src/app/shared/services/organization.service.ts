import { OrganizationDetails } from './../view-models/organization.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as OrganizationViewModel from '../view-models/organization.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {}


  public async getAllOrganizationsWithNoDetails(): Promise<OrganizationViewModel.SimpleOrganization[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>('../../../assets/example-data/organizations.mockdata.json')).toPromise());
  }


  /**
   * Method for getting all of the organizations
   */
  public async getAllOrganizations(): Promise<OrganizationViewModel.OrganizationDetails[]> {
    return await ((this.http.get<OrganizationViewModel.OrganizationDetails[]>('../../../assets/example-data/organizations.mockdata.json')).toPromise());
  }

  /**
   *  Method for getting Organization object with ID
   */
  public async getOrganizationById(id): Promise<OrganizationViewModel.OrganizationDetails> {
    return await  await ((this.http.get<OrganizationViewModel.OrganizationDetails>('../../../assets/example-data/single-organization.mockup.json')).toPromise());
  }


}

import { CreateNewDataRule } from './../view-models/data.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as DataViewModel from '../view-models/data.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class DatarulesService {
  constructor(private http: HttpClient) {}

  dataRules: DataViewModel.DataRule[];
  URL = '../../../assets/example-data/';

  /**
   * Gets all the data source for a specific organization
   * @param organizationID - ID of the organization you want to get the data source for
   */
  public async getDataRules(
    organizationID: string
  ): Promise<DataViewModel.DataRule[]> {
    return await this.http
      .get<DataViewModel.DataRule[]>( URL +
        'datarules.mockdata.json'
      )
      .toPromise();
  }

  /**
   * Getting the list of all Datasource for specific organization
   * @param orgID - ID of organization you want to get all available data source for it
   */
  public async getAllDataSourceForOrganization(
    orgID: string
  ): Promise<DataViewModel.DataSource[]> {
    return await this.http
      .get<DataViewModel.DataSource[]>(URL +
        'datasources.mockdata.json'
      )
      .toPromise();
  }

  /**
   * Create new data rule
   * @param datarule - datarule object
   */
  public async CreateNewDataRule(datarule: DataViewModel.CreateNewDataRule) {
    return await null;
  }

  /**
   * Edit data rule
   * @param datarule - datarule object
   */
  public async EditDataRule(datarule: DataViewModel.EditDataRule) {
    return await null;
  }

  /**
   * Delete Data rule
   * @param dataruleID - id of the data rule you want to delete
   */
  public async DeleteDataRule(dataruleID: string) {
    return await null;
  }
}

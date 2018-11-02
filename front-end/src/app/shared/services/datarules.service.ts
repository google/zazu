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
      .get<DataViewModel.DataRule[]>( '/api' +
        '/getDataRules/' + organizationID
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
      .get<DataViewModel.DataSource[]>('/api' +
        '/listDatasources'
      )
      .toPromise();
  }

  /**
   * Create new data rule
   * @param datarule - datarule object
   */
  public async createNewDataRule(datarule: DataViewModel.CreateNewDataRule) {
    return await ((this.http.post(this.URL + 'createRule/', datarule)).toPromise());
  }

  /**
   * Edit data rule
   * @param datarule - datarule object
   */
  public async editDataRule(datarule: DataViewModel.EditDataRule) {
    return await ((this.http.post(this.URL + 'editRule/', datarule)).toPromise());
  }

  /**
   * Delete Data rule
   * @param dataruleID - id of the data rule you want to delete
   */
  public async deleteDataRule(dataruleID: string) {
    return await ((this.http.post(this.URL + 'deleteRule/', dataruleID)).toPromise());
  }
}

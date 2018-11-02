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
    return await this.http.get<DataViewModel.DataRule[]>( '/api' + '/getDataRules/' + organizationID).toPromise();
    // return await this.http.get<DataViewModel.DataRule[]>(this.URL + '/datarules.mockdata.json').toPromise();
  }

  /**
   * Getting the list of all Datasources
   */
  public async getDataSources(): Promise<DataViewModel.DataSource[]> {
    return await this.http.get<DataViewModel.DataSource[]>('/api' + '/listDatasources').toPromise();
    // return await this.http.get<DataViewModel.DataSource[]>(this.URL + 'datasources.mockdata.json').toPromise();
  }

 public async getIdentifiers(datasource): Promise<string[]> {
   return await this.http.get<string[]>('/api' + '/listIdentifiers/' + datasource).toPromise();
   // return await this.http.get<string[]>(this.URL + 'identifiers.mockdata.json').toPromise();
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
  public async deleteDataRule(datarule) {
    console.log('Data rule delete');
    console.log(datarule);
    return await ((this.http.post(this.URL + 'deleteRule/', datarule)).toPromise());
  }
}

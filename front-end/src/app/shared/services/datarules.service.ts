import { AuthService } from './../../auth/auth.service';
import { CreateNewDataRule } from './../view-models/data.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as DataViewModel from '../view-models/data.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class DatarulesService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  dataRules: DataViewModel.DataRule[];
  URL = '../../../assets/example-data/';

  /**
   * Gets all the data source for a specific organization
   * @param organizationID - ID of the organization you want to get the data source for
   */
  public async getDataRules(
    organizationID: string
  ): Promise<DataViewModel.DataRule[]> {
    console.log('getting data rules');
    return await this.http
      .get<DataViewModel.DataRule[]>('/api' + '/getDataRules/' + organizationID)
      .toPromise();
    // return await this.http.get<DataViewModel.DataRule[]>(this.URL + '/datarules.mockdata.json').toPromise();
  }

  /**
   * Getting the list of all Datasources
   */
  public async getDataSources(): Promise<DataViewModel.DataSource[]> {
    return await this.http
      .get<DataViewModel.DataSource[]>('/api' + '/listDatasources')
      .toPromise();
    // return await this.http.get<DataViewModel.DataSource[]>(this.URL + 'datasources.mockdata.json').toPromise();
  }

  public async getIdentifiers(datasource): Promise<DataViewModel.Identifier[]> {
    return await this.http
      .get<DataViewModel.Identifier[]>(
        '/api' + '/listIdentifiers/' + datasource
      )
      .toPromise();
    // return await this.http.get<string[]>(this.URL + 'identifiers.mockdata.json').toPromise();
  }

  /**
   * Create new data rule
   * @param datarule - datarule object
   */
  public async createNewDataRule(datarule: DataViewModel.CreateNewDataRule) {
    if (await this.authService.canSend()) {
      return await this.http
        .post('/api/' + 'createRule/', datarule)
        .toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Edit data rule
   * @param datarule - datarule object
   */
  public async editDataRule(datarule: DataViewModel.EditDataRule) {
    if (await this.authService.canSend()) {
      return await this.http.post(this.URL + 'editRule/', datarule).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }

  /**
   * Delete Data rule
   * @param dataruleID - id of the data rule you want to delete
   */
  public async deleteDataRule(datarule) {
    if (await this.authService.canSend()) {
      return await this.http
        .post('/api/' + 'deleteRule/', datarule)
        .toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }
}

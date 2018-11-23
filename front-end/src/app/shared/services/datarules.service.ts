import { AuthService } from './../../auth/auth.service';
import { CreateNewDataRule } from './../view-models/data.viewmodel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as DataViewModel from '../view-models/data.viewmodel';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DatarulesService {
  constructor(private http: HttpClient, private authService: AuthService, public snackBar: MatSnackBar) {}

  dataRules: DataViewModel.DataRule[];
  URL = '../../../assets/example-data/';

  /**
   * Gets all the data source for a specific organization
   * @param organizationID - ID of the organization you want to get the data source for
   */
  public async getDataRules(organizationID: string): Promise<DataViewModel.DataRule[]> {
    console.log('getting data rules');
    return await this.http.get<DataViewModel.DataRule[]>('/api' + '/getDataRules/' + organizationID).toPromise();
    /*
    try {
      const status = await <any>this.http.get('/api' + '/getDataRules/' + organizationID).toPromise();
      if (status.status === '200') {
        return await status.rules;
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
   * Getting the list of all Datasources
   */
  public async getDataSources(): Promise<DataViewModel.DataSource[]> {
    return await this.http.get<DataViewModel.DataSource[]>('/api' + '/listDatasources').toPromise();
    /*
    try {
      const status = await <any>this.http.get('/api' + '/listDatasources').toPromise();
      if (status.status === '200') {
        return await status.datasources;
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

  public async getIdentifiers(datasource): Promise<DataViewModel.Identifier[]> {
    return await this.http.get<DataViewModel.Identifier[]>('/api' + '/listIdentifiers/' + datasource).toPromise();
    /*
    try {
      const status = await this.http.get('/api' + '/listIdentifiers/' + datasource).toPromise();
      if (status.status === '200') {
        return await status.identifiers;
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
   * Create new data rule
   * @param datarule - datarule object
   */
  public async createNewDataRule(datarule: DataViewModel.CreateNewDataRule) {
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'createRule/', datarule).toPromise();
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
  public async editDataRule(newRule: DataViewModel.EditDataRule, oldRule: DataViewModel.DataRule) {
    const parameter = {
      newRule: newRule,
      oldRule: oldRule
    };
    console.log(parameter);
    if (await this.authService.canSend()) {
      return await this.http.post('/api/' + 'editRule/', parameter).toPromise();
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
      return await this.http.post('/api/' + 'deleteRule/', datarule).toPromise();
    } else {
      return await {
        status: '403',
        message: 'You do not have permission to perform this action'
      };
    }
  }
}

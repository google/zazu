import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as DataViewModel from '../view-models/data.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class DatarulesService {

  constructor(private http: HttpClient) { }

  dataRules: DataViewModel.DataRule[];

  /**
   * Gets all the data source for a specific organization
   * @param organizationID - ID of the organization you want to get the data source for
   */
  public async getDataRules(organizationID: string): Promise<DataViewModel.DataRule[]> {
    return await ((this.http.get<DataViewModel.DataRule[]>('../../../assets/example-data/datarules.mockdata.json')).toPromise());
  }
}

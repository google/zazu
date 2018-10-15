import * as OrganizationViewModel from '../view-models/organization.viewmodel';
import * as UserViewModel from '../view-models/user.viewmodel';


  // What I expect to get back for Viewer Report Details
  export interface Report {
    id: string;
    name: string;
    link: string;
    organization: OrganizationViewModel.SimpleOrganization;
    datasource: string;
    date: Date;
  }

  // What I expect to get back for the report list
  // Also used for searching & filtering
  export interface SimpleReport {
    id: string;
    name: string;
    organization: OrganizationViewModel.SimpleOrganization;
    date: Date;
  }

  // What I expect to get back when getting the report with meta data in Admin Report Details
  export interface ReportWithMetaData {
    id: string;
    name: string;
    link: string;
    organization: OrganizationViewModel.SimpleOrganization;
    datasource: string;
    date: Date;
    createdBy: string;
    updatedBy: string;
    accessedBy: UserViewModel.SimpleUserView[];
  }

  // View Model for creating new report
  export interface CreateNewReport {
    name: string;
    link: string;
    organizationID: string;
    datasource: string;
  }

  // View Model for editing report
  export interface EditReport {
    id: string;
    name: string;
    link: string;
    organizationID: string;
    datasource: string;
  }

  // View Model for deleteing report
  export interface DeleteReport {
    id: string;
}

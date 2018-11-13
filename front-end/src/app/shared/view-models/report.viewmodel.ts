import * as OrganizationViewModel from './organization.viewmodel';
import * as UserViewModel from './user.viewmodel';
import * as DataViewModel from './data.viewmodel';

// What I expect to get back for Viewer Report Details
export interface Report {
  _id: string;
  name: string;
  link: string;
  organization: OrganizationViewModel.SimpleOrganization;
  datasources:  ReportDataSource[];
  created_at: Date;
}

// What I expect to get back for the report list
// Also used for searching & filtering

export interface SimpleRawReport {
  _id: string;
  name: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  created_at: Date;
  datasources: string[];
}

export interface SimpleReport {
  _id: string;
  name: string;
  organization: OrganizationViewModel.SimpleOrganization;
  created_at: Date;
}

// What I expect to get back when getting the report with meta data in Admin Report Details
export interface ReportWithMetaData {
  _id: string;
  name: string;
  link: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  datasources:  ReportDataSource[];
  created_at: Date;
  createdBy: string;
  updatedBy: string;
}

export interface ReportDetails {
  _id: string;
  name: string;
  link: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  datasources:  ReportDataSource[];
  dataStudioSourceIDs: string[];
}

// View Model for creating new report
export interface CreateNewReport {
  name: string;
  link: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  datasources: ReportDataSource[];
}

export interface ShareReport {
  _id: string;
  organizationID: OrganizationViewModel.SimpleOrganization[];
}

// View Model for editing report
export interface EditReport {
  _id: string;
  name: string;
  link: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  datasources: ReportDataSource[];
  created_at: Date;
  createdBy: string;
  updatedBy: string;
}

// View Model for deleteing report
export interface DeleteReport {
  _id: string;
}

export interface ReportDataSource {
  bigquery: string;
  datastudio: string;
}

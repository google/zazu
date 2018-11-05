import * as OrganizationViewModel from './organization.viewmodel';

/**
 * Data Source
 */
export interface DataSource {
  _id: string;
  name: string;
}

export interface Identifier {
  name: string;
}

/**
 * View model that i used for listing data rule
 */
export interface DataRule {
  _id: string;
  name: string;
  organization: OrganizationViewModel.SimpleOrganization;
  datasource: string;
  identifier: string;
  condition: string;
  token: string;
  created_at: Date;
}

// View Model for creating new DataRule
export interface CreateNewDataRule {
  name: string;
  organization: OrganizationViewModel.SimpleOrganization;
  datasource: string;
  identifier: string;
  condition: string;
  token: string;
}

// View Model for Editing Data Rule
// ????????????? Do we need to specify the organization ID for this? Since we already know its for a specific organization anyway.
// ????????????? I think all we need is the data rule id?
export interface EditDataRule {
  _id: string;
  name: string;
  organization: OrganizationViewModel.SimpleOrganization;
  datasource: string;
  identifier: string;
  condition: string;
  token: string;
}

// View Model for deleting data rule
export interface DeleteDataRule {
  _id: string;
}

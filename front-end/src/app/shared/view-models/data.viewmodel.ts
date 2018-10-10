import * as OrganizationViewModel from './organization.viewmodel';

/**
 * Data Source
 */
export interface DataSource {
  id: string;
  name: string;
}

/**
 * Data Rule
 */
export interface DataRule {
  id: string;
  name: string;
  organization: OrganizationViewModel.SimpleOrganization;
  datasource: DataSource;
  identifier: string;
  condition: string;
  token: string;
}

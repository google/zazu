
// How is it stored in the backend probably?
export interface Organization {
  id: string;
  name: string;
  categories: String[];
}


// This is used for users & reports
export interface SimpleOrganization {
  id: string;
  name: string;
}


// Complete Details of the organization
export interface OrganizationDetails {
  id: string;
  name: string;
  categories: String[];
  reportsCount: string;
  usersCount: string;
  datasourceCount: string;
}


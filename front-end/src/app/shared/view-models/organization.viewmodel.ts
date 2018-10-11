
// How is it stored in the backend probably?
export interface Organization {
  id: string;
  name: string;
  categories: string[];
}


// This is used for users , reports & data rules
export interface SimpleOrganization {
  id: string;
  name: string;
}


// Complete Details of the organization
export interface OrganizationDetails {
  id: string;
  name: string;
  categories: string[];
  reportsCount: string;
  usersCount: string;
  datarulesCount: string;
}


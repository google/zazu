
// This is used for users , reports, datarules and filtering
export interface SimpleOrganization {
  id: string;
  name: string;
}


// Complete Details of the organization used in listing
export interface OrganizationDetails {
  id: string;
  name: string;
  categories: string[];
  reportsCount: string;
  usersCount: string;
  datarulesCount: string;
}

// View  Model for creating new Organization
export interface CreateNewOrganization {
  name: string;
  categories: string[];
}

// View Model for editing organization
export interface EditOrganization {
  id: string;
  name: string;
  categories: string[];
}

// View Model for deleting organization
export interface DeleteOrganization {
  id: string;
}


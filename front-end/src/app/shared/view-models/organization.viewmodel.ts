
// This is used for users , reports, datarules and filtering
export interface SimpleOrganization {
  _id: string;
  name: string;
}


// Complete Details of the organization used in listing
export interface OrganizationDetails {
  _id: string;
  name: string;
  categories: string[];
  reportsCount: number;
  usersCount: number;
  datarulesCount: number;
}

// View  Model for creating new Organization
export interface CreateNewOrganization {
  name: string;
  categories: string[];
}

// View Model for editing organization
export interface EditOrganization {
  _id: string;
  name: string;
  categories: string[];
}

// View Model for deleting organization
export interface DeleteOrganization {
  _id: string;
}

export interface CreateOrganizationReturn {
  orgID: string;
  status: string;
}

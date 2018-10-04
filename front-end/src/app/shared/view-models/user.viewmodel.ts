import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';


// Will be used on User Details View
export interface User {
  id: string;
  name: string;
  googleId: string;
  secondaryEmail: string;
  /* Organizations is just a string of organizations ID that the user have access to */
  /* If the user is an admin, ogranizations is null */
  organizations: OrganizationViewModel.SimpleOrganization[];
  role: string;
}

// Will be used on the User List Cards
export interface SimpleUserView {
  id: string;
  name: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  role: string;
}


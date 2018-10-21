import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';


// Will be used on User Details View
export interface User {
  id: string;
  firstName: string;
  lastName: string;
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
  firstName: string;
  lastName: string;
  organizations: OrganizationViewModel.SimpleOrganization[];
  role: string;
}

// View Model for creating new user
export interface CreateNewUser {
  firstName: string;
  lastName: string;
  googleId: string;
  secondaryEmail: string;
  organizations: string[];
  role: string;
}

// View model for editing a user
export interface EditUser {
  id: string;
  firstName: string;
  lastName: string;
  googleId: string;
  secondaryEmail: string;
  organization: OrganizationViewModel.SimpleOrganization[];
  role: string;
}

// View Model for deleting a user
export interface DeleteUser {
  id: string;
}

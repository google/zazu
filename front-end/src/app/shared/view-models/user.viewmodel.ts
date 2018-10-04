import * as OrganizationViewModel from '../../shared/view-models/organization.viewmodel';

export interface User {
  id: string;
  name: string;
  googleId: string;
  secondaryEmail: string;
  /* Organizations is just a string of organizations ID that the user have access to */
  /* If the user is an admin, ogranizations is null */
  organizations: OrganizationViewModel.Organization[];
  role: string;
}


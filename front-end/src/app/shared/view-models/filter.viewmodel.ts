
/**
 * If OrganizationID === ALL, will show all users,
 * role is a query parameter, same with sort
 *
 */
export interface UserFilter {
  name: string;
  organizationID: string;
  role: string;
  sort: string;
}

export interface ReportFilter {
  name: string;
  organizationID: string;
  sort: string;
}



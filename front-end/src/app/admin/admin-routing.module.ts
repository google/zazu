import { OrganizationDetailsComponent } from './organization-details/organization-details.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', redirectTo: 'organizations'},
    { path: 'organizations', component: OrganizationListComponent },
    { path: ':id', component: OrganizationDetailsComponent}
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],

})
export class AdminRoutingModule {}

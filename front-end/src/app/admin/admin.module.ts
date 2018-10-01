import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { OrganizationDetailsComponent } from './organization-details/organization-details.component';

@NgModule({
  declarations: [AdminComponent, OrganizationListComponent, OrganizationDetailsComponent],

  imports: [CommonModule, AdminRoutingModule, AngularMaterialModule]
})
export class AdminModule {}

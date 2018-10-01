import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,


  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule {}

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
  MatTabsModule
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
    MatTabsModule
  ]
})
export class AngularMaterialModule {}

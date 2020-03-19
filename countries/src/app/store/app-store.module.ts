import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EffectsModule } from '@ngrx/effects';
import { Country } from '@app/models/country'

export interface Appstate {
  countries: Country[];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class AppStoreModule { }

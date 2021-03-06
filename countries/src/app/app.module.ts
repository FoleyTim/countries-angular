import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/components/home/home.component';
import { DropdownComponent } from '@app/components/dropdown/dropdown.component';
import { CountryDetailsComponent } from '@app/components/country-details/country-details.component';
import { countryReducer } from '@app/store/reducers/country.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      countries: countryReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

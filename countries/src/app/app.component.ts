import { Component } from '@angular/core';
import {Store } from '@ngrx/store';

import * as CountryActions from '@app/store/actions/country.action';
import { CountriesService } from './services/countries.service';
import { Country } from './models/country';
import { Appstate } from '@app/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './components/home/home.component.html',
  styleUrls: ['./components/home/home.component.scss']
})

export class AppComponent {
  title = 'countries';
  regions: any[] = [{ name: 'Asia' }, { name: 'Europe' }];
  countries: Country[];
  selectedCountry: Country;
  constructor(
    private countriesService: CountriesService,
    private store: Store<Appstate>
  ) {
    store.select('countries').subscribe((state) => {
      if (state) {
        this.countries = state.countries;
        this.selectedCountry = state.selectedCountry;
      }
    });
  }

  ngOnInit(): void { }


  getCountries(regionIndex) {
    this.countriesService.getCountries(this.regions[regionIndex].name).subscribe((countries: Country[]) => {
      this.store.dispatch(new CountryActions.SetCountries(countries));
      this.store.dispatch(new CountryActions.SelectCountry(null));
    },
      () => (alert('Failed to retrieve countries data'))
    );
  }

  setCountry(countryIndex) {
    this.store.dispatch(new CountryActions.SelectCountry(this.countries[countryIndex]));
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';

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
    store.select('countries').subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnInit(): void { }


  getCountries(regionIndex) {
    this.countriesService.getCountries(this.regions[regionIndex].name).subscribe((countries: Country[]) => {
      this.store.dispatch(new CountryActions.SetCountries(countries));
    },
      () => (alert('API call failed'))
    );
  }

  setCountry(countryIndex) {
    this.selectedCountry = this.countries[countryIndex];
  }
}

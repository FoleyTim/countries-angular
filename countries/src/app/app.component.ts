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
  regionsArray: any[] = [{ name: 'Asia' }, { name: 'Europe' }];
  regions: Observable<any[]> = new Observable(subscriber => {
    subscriber.next(this.regionsArray);
  });
  countries: Observable<Country[]>;
  selectedCountry: Country;
  constructor(
    private countriesService: CountriesService,
    private store: Store<Appstate>
  ) {
    this.countries = store.select('countries');
    console.log('Countries !! ', this.countries)
    store.pipe(select('countries')).subscribe(values => {
      console.log('values ', values);
    });
  }

  ngOnInit(): void {
  }


  getCountries(regionIndex) {
    this.countriesService.getCountries(this.regionsArray[regionIndex].name).subscribe((countries: Country[]) => {
      this.store.dispatch(new CountryActions.SetCountries(countries));
      this.store.pipe(select('countries')).subscribe(values => {
        console.log('values ', values);
      });
      // this.countries = [];
      // for (const country of countries) {
      //   this.countries.push(country);
      // }
    });
  }
  setCountry(countryIndex) {
    this.selectedCountry = this.countries[countryIndex];
  }
}

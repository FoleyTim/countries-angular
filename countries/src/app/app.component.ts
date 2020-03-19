import { Component } from '@angular/core';

import { CountriesService } from './services/countries.service';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  templateUrl: './components/home/home.component.html',
  styleUrls: ['./components/home/home.component.scss']
})
export class AppComponent {
  title = 'countries';
  regions: any[] = [{ name: 'Asia' }, { name: 'Europe' }];
  countries: Country[] = [];
  selectedCountry: Country;
  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void { }


  getCountries(regionIndex) {
    this.countriesService.getCountries(this.regions[regionIndex].name).subscribe((countries: Country[]) => {
      console.log(countries);
      this.countries = [];
      for (const country of countries) {
        this.countries.push(country);
      }
    });
  }
  setCountry(countryIndex) {
    this.selectedCountry = this.countries[countryIndex];
  }
}

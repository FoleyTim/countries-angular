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
    regions: string[] = ['Asia', 'Europe'];
    countries: string[] = ['example'];
    constructor(
      private countriesService: CountriesService
    ) { }
  
    ngOnInit(): void {}
  
  
    getCountries(region) {
      console.log(region)
      this.countriesService.getCountries(region).subscribe((countries: Country[]) => {
        this.countries = [];
        for (const country of countries) {
          this.countries.push(country.name);
        }
      });
    }
  
  }

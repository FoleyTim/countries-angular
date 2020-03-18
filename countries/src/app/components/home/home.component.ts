import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regions: any[] = [{ name: 'Asia' }, { name: 'Europe' }];
  countries: string[] = ['example'];
  selectedCountry: string;
  constructor(
  ) { }

  ngOnInit(): void { }
  getCountries(region) { }
  setCountry(country) {
    console.log('country is ', country)
    this.selectedCountry = country;
  }
}
//
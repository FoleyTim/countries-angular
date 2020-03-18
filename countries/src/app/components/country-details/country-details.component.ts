import { Component, OnInit, Input } from '@angular/core';

import { Country } from '../../models/country';
import { Currency } from 'src/app/models/currency';
@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country: Country;
  constructor() { }

  ngOnInit(): void {
  }

}

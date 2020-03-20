import { Country } from '@app/models/country';

export interface Appstate {
  countries: Country[];
  selectedCountry: Country;
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCountries(region): Observable<Country[]> {
    const url = `https://restcountries.eu/rest/v2/region/${region}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        const countries: Country[] = []
        data.forEach((countryData) => {
          const country: Country = countryData;
          countries.push(country);
        })
        return countries;
      })
      , catchError(error => {
        console.error('failed to retrieve countries in country service ', error);
        throw throwError(error);
      })
    );
  }
}

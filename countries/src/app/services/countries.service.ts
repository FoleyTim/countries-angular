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
    let url: string = 'https://restcountries.eu/rest/v2/region/'
    return this.http.get(`${url}${region}`).pipe(
      map((data: any) => {
        const countries: Country[] = []
        data.forEach((countryData) => {
          const country = new Country(countryData);
          countries.push(country);
        })
        return countries;
      }), catchError(error => {
        return throwError('failed to add countries in country service ', error);
      })
    );
  }
}
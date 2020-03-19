import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Country } from '../../models/country';

export const ADD_COUNTRIES = '[COUNTRY] Add';
export const SELECT_COUNTRY = '[COUNTRY] SELECT';

export class AddCountries implements Action {
    readonly type = ADD_COUNTRIES;
    constructor(public payload: Country[]) {

    }
}

export class SelectCountry implements Action {
    readonly type = SELECT_COUNTRY;
    constructor(public payload: Country) {

    }
}

export type Actions = AddCountries | SelectCountry;

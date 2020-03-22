import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Country } from '../../models/country';

export const SET_COUNTRIES = '[COUNTRY] Add';
export const SELECT_COUNTRY = '[COUNTRY] Select';

export class SetCountries implements Action {
    readonly type = SET_COUNTRIES;
    constructor(public payload: Country[]) { }
}

export class SelectCountry implements Action {
    readonly type = SELECT_COUNTRY;
    constructor(public payload: Country) {

    }
}

export type Actions = SetCountries | SelectCountry;

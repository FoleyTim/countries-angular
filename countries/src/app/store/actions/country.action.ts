import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Country } from '../../models/country';

export const SET_COUNTRIES = '[COUNTRY] Add';
export const SELECT_COUNTRY = '[COUNTRY] SELECT';

export class SetCountries implements Action {
    readonly type = SET_COUNTRIES;
    constructor(public payload: Country[]) {
        console.log('action: ', payload);
    }
}

export class SelectCountry implements Action { //not in use
    readonly type = SELECT_COUNTRY;
    constructor(public payload: Country) {

    }
}

export type Actions = SetCountries | SelectCountry;

import { Action } from '@ngrx/store';
import { Country } from '@app/models/country';
import { Currency } from '@app/models/currency';
import * as CountryActions from '@app/store/actions/country.action';
import {Appstate} from '@app/store/app.state'

export function countryReducer(state: Appstate, action: CountryActions.Actions) {
    switch (action.type) {
        case CountryActions.SET_COUNTRIES:
            return { ...state, countries: action.payload };
        case CountryActions.SELECT_COUNTRY:
            return { ...state, selectedCountry: action.payload };
        default:
            return state;
    }
}

// import { Action } from '@ngrx/store';
import * as CountryActions from '@app/store/actions/country.action';
import {CountryState} from '@app/store/app.state';

export function countryReducer(state: CountryState, action: CountryActions.Actions) {
    switch (action.type) {
        case CountryActions.SET_COUNTRIES:
            return { ...state, countries: action.payload };
        case CountryActions.SELECT_COUNTRY:
            return { ...state, selectedCountry: action.payload };
        default:
            return state;
    }
}

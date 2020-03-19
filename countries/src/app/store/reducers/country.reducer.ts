import { Action } from '@ngrx/store';
import { Country } from '@app/models/country';
import * as CountryActions from '@app/store/actions/country.action';

export function countryReducer(state: Country[], action: CountryActions.Actions) {
    switch (action.type) {
        case CountryActions.ADD_COUNTRIES:
            return [...state, action.payload];
        default:
            return state;
    }
}

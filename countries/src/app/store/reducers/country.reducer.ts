import { Action } from '@ngrx/store';
import { Country } from '@app/models/country';
import { Currency } from '@app/models/currency';
import * as CountryActions from '@app/store/actions/country.action';

export function countryReducer(state: Country[] , action: CountryActions.Actions) {
    switch (action.type) {
        case CountryActions.SET_COUNTRIES:
            return action.payload;
        default:
            return state;
    }
}

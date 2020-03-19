import { Action } from '@ngrx/store';
import { Country } from '@app/models/country';
import { Currency } from '@app/models/currency';
import * as CountryActions from '@app/store/actions/country.action';

const initCurrency = new Currency({
    code: '',
    symbol: '',
    name: ''
})
const initialState: Country[] = [new Country({
    name: '',
    population: '',
    flag: '',
    currencies: [initCurrency]
})];

export function countryReducer(state: Country[] = initialState, action: CountryActions.Actions) {
    switch (action.type) {
        case CountryActions.SET_COUNTRIES:
            console.log('REDUCER')
            console.log('state:', state);
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

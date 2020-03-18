import { Currency } from './currency'
export class Country {
    name: string;
    capital: string;
    currencies: Currency[];
    population: string;
    flag: string;

    constructor(data: any) {
        this.name = data.name;
        this.capital = data.capital;
        const currencies: Currency[] = []
        data.currencies.forEach(currency => {
            currencies.push(new Currency(currency));
        });
        this.currencies = currencies;
        this.population = data.population;
        this.flag = data.flag;
    }
}

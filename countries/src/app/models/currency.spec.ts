import { Currency } from './currency';

describe('Currencies', () => {
  it('should create an instance', () => {
    expect(new Currency({})).toBeTruthy();
  });
});

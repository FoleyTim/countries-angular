import { browser, by, element, WebElement, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .toolbar span')).getText() as Promise<string>;
  }

  getRegionsDropDownLabel(): Promise<string> {
    return element(by.css('app-root .content .dropdown-bar app-dropdown .drop-down-container label')).getText() as Promise<string>;
  }

  getRegionsOption() {
    return element(by.css('app-root .content .dropdown-bar #region-drop-down  div  select  option:nth-child(2)'));
  }
  getRegionsCountriesLabel(): Promise<string> {
    return element(by.css('app-root .content .dropdown-bar #countries-drop-down .drop-down-container label')).getText() as Promise<string>;
  }
  getCountriesOption() {
    return element(by.css('app-root .content .dropdown-bar  #countries-drop-down div  select  option:nth-child(2)'));
  }

  getCountryDetailsTableCountryName(): Promise<string>{
    return element(by.css('app-root .content  app-country-details table  tr:nth-child(2)  td:nth-child(1)')).getText() as Promise<string>;
  }

}

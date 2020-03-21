import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Countries');
  });

  it('should display region dropdown', () => {
    page.navigateTo();
    expect(page.getRegionsDropDownLabel()).toEqual('Region:');
  });

  it('should display countries dropdown', () => {
    page.navigateTo();
    page.getRegionsOption().click();
    expect(page.getRegionsCountriesLabel()).toEqual('Country:');
  });

  it('should display country details table', () => {
    page.navigateTo();
    page.getRegionsOption().click();
    page.getCountriesOption().click();
    expect(page.getCountryDetailsTableCountryName()).toEqual('Afghanistan');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

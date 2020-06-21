import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Homepage country list', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show all countries', function () {
    browser.get('http://localhost:4200/');

    const countryList = element.all(by.css('#country-name'));
    expect(countryList.count()).toEqual(250);
    expect(countryList.get(0).getText()).toEqual('Afghanistan');
    expect(countryList.get(1).getText()).toEqual('Åland Islands');

    const countryCapital = element.all(by.css('#country-capital'));
    expect(countryCapital.get(0).getText()).toEqual('Kabul,');
    expect(countryCapital.get(1).getText()).toEqual('Mariehamn,');

    const countrySubregion = element.all(by.css('#country-subregion'));
    expect(countrySubregion.get(0).getText()).toEqual('Southern Asia');
    expect(countrySubregion.get(1).getText()).toEqual('Northern Europe');

    const countryPopulation = element.all(by.css('#country-population'));
    expect(countryPopulation.get(0).getText()).toEqual('27,657,145');
    expect(countryPopulation.get(1).getText()).toEqual('28,875');
  });

  it('should search country by keypress', function () {
    browser.get('http://localhost:4200/');

    element(by.css('#search-textbox')).sendKeys('India');

    const countryList = element.all(by.css('#country-name'));
    expect(countryList.count()).toEqual(2);
    expect(countryList.get(0).getText()).toEqual('British Indian Ocean Territory');
    expect(countryList.get(1).getText()).toEqual('India');

    const countryCapital = element.all(by.css('#country-capital'));
    expect(countryCapital.get(0).getText()).toEqual('Diego Garcia,');
    expect(countryCapital.get(1).getText()).toEqual('New Delhi,');

    const countrySubregion = element.all(by.css('#country-subregion'));
    expect(countrySubregion.get(0).getText()).toEqual('Eastern Africa');
    expect(countrySubregion.get(1).getText()).toEqual('Southern Asia');

    const countryPopulation = element.all(by.css('#country-population'));
    expect(countryPopulation.get(0).getText()).toEqual('3,000');
    expect(countryPopulation.get(1).getText()).toEqual('1,295,210,000');

  });

  it('should search all countries starts with "Al"', function () {
    browser.get('http://localhost:4200/');

    element(by.css('#search-textbox')).sendKeys('Al');

    const countryList = element.all(by.css('#country-name'));
    expect(countryList.count()).toEqual(30);
    expect(countryList.get(0).getText()).toEqual('Albania');
    expect(countryList.get(1).getText()).toEqual('Algeria');

    const countryCapital = element.all(by.css('#country-capital'));
    expect(countryCapital.get(0).getText()).toEqual('Tirana,');
    expect(countryCapital.get(1).getText()).toEqual('Algiers,');

    const countrySubregion = element.all(by.css('#country-subregion'));
    expect(countrySubregion.get(0).getText()).toEqual('Southern Europe');
    expect(countrySubregion.get(1).getText()).toEqual('Northern Africa');

    const countryPopulation = element.all(by.css('#country-population'));
    expect(countryPopulation.get(0).getText()).toEqual('2,886,026');
    expect(countryPopulation.get(1).getText()).toEqual('40,400,000');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

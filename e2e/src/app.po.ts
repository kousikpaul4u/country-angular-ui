import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getSearchText(): Promise<string> {
    return element(by.css('#search-textbox')).getText() as Promise<string>;
  }
}

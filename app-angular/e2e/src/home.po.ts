import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl) as Promise<void>;
  }

  getWelcomeText(): Promise<string> {
    // return element(by.css('app-root app-home p:first-child')).getText() as Promise<string>;
    return element(by.css('app-home')).getText() as Promise<string>;
  }

  clickOnSelectItem(index: number): Promise<void> {
    return element.all(by.css('app-select > div')).get(index).click() as Promise<void>;
  }

  getSelectedStatement(): Promise<string> {
    // return element(by.css('app-root app-home p:first-child')).getText() as Promise<string>;
    return element(by.css('app-home app-select + p')).getText() as Promise<string>;
  }
}

import { browser, element, by } from 'protractor';

export class Demo2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nl-root h1')).getText();
  }
}

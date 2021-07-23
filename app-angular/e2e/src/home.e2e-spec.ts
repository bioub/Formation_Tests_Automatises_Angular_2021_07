import { browser, logging } from 'protractor';

import { HomePage } from './home.po';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should show Welcome', async () => {
    await page.navigateTo();
    const welcomeText = await page.getWelcomeText();
    expect(welcomeText).toContain('Welcome');
  });

  it('should select value clicked', async () => {
    await page.navigateTo();
    await page.clickOnSelectItem(2);
    const selectedText = await page.getSelectedStatement();
    expect(selectedText).toContain('Vous avez sélectionné : C');
  });
});

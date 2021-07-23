import { browser, logging } from 'protractor';

import { TodosPage } from './todos.po';

describe('Todos Page', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should show show 200 todos', async () => {
    await page.navigateTo();
    // écrire le tests qui vérifie qu'il y ait 200 todos
  });

  it('should add todo at the begining', async () => {
    await page.navigateTo();
    // saisir dans le champs
    // vérifier qu'il y ait 201 todos
    // vérifier que la première contienne le texte saisi dans le champs
  });
});

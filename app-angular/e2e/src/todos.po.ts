import { browser, by, element } from 'protractor';

export class TodosPage {
  navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl + '/todos') as Promise<void>;
  }

  getTodosCount(): Promise<number> {
    return element.all(by.css('app-todo-item')).count() as Promise<number>;
  }

  fillTodoInput(text: string): Promise<void> {
    return element(by.css('app-todo-form input[name="todo"]')).sendKeys(text) as Promise<void>;
  }

  getFirstTodoText(): Promise<string> {
    return element.all(by.css('app-todo-item')).first().text() as Promise<string>;
  }
}

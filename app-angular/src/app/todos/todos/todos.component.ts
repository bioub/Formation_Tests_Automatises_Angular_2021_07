import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  public todos = ['Item 1', 'Item 2', 'Item 3'];

  public handleNewTodo(todo) {
    this.todos = [todo, ...this.todos];
  }

}

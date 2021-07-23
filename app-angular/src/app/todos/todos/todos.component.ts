import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos = ['Item 1', 'Item 2', 'Item 3'];

  public handleNewTodo(todo) {
    this.todos = [todo, ...this.todos];
  }

  constructor(private todoService: TodoService) {}

 ngOnInit(): void {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos.map((t) => t.title);
    });
  }



}

import { Component, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements DoCheck {

  @Output()
  public onAddTodo = new EventEmitter<string>();
  public todo: string;

  public addTodo() {
    this.onAddTodo.emit(this.todo);
  }

  ngDoCheck(): void {
    console.log('FormComponent checked');
  }

}

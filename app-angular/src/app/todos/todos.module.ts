import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodosListComponent,
    TodoItemComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }

import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements DoCheck {

  @Input()
  public todos: string[];

  constructor() { }

  ngDoCheck(): void {
    console.log('ListComponent checked');
  }

}

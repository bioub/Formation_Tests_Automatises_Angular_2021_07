import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';
import { TodosListComponent } from '../todos-list/todos-list.component';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodosComponent,
        TodoFormComponent,
        TodosListComponent,
        TodoItemComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain 2 todos', () => {
    fixture.detectChanges(); //-> ngOnInit()
    const httpTestingController = TestBed.inject(HttpTestingController);

    const request = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/todos'
    );

    request.flush([
      {
        id: 1,
        title: 'ABC',
      },
      {
        id: 2,
        title: 'DEF',
      },
    ]);

    fixture.detectChanges();
    const nativeElement: Element = fixture.nativeElement;
    expect(nativeElement.querySelectorAll('app-todo-item').length).toBe(2);

    httpTestingController.verify();
  });
});

// UTILISE LES DOUBLES ET L'INJECTEUR ANGULAR

// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { of } from 'rxjs';
// import { TodoFormComponent } from '../todo-form/todo-form.component';
// import { TodoItemComponent } from '../todo-item/todo-item.component';
// import { TodoService } from '../todo.service';
// import { TodosListComponent } from '../todos-list/todos-list.component';

// import { TodosComponent } from './todos.component';

// describe('TodosComponent', () => {
//   let component: TodosComponent;
//   let fixture: ComponentFixture<TodosComponent>;
//   let originalConsoleError!: any;

//   beforeAll(() => {
//     originalConsoleError = console.error;
//     console.error = function (message?: any, ...optionalParams: any[]): void {
//       const params = optionalParams ? `\nParams: ${optionalParams}` : '';
//       fail(`Test contained console error:\n${message}${params}`);
//     };
//   });

//   afterAll(() => {
//     console.error = originalConsoleError;
//   });

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         TodosComponent,
//         TodoFormComponent,
//         TodosListComponent,
//         TodoItemComponent,
//       ],
//       imports: [FormsModule],
//       providers: [
//         {
//           provide: TodoService,
//           useValue: {
//             // getAll() {
//             //   return of([
//             //     {
//             //       id: 1,
//             //       title: 'ABC',
//             //     },
//             //     {
//             //       id: 2,
//             //       title: 'DEF',
//             //     },
//             //   ]);
//             // },
//             getAll: jasmine.createSpy().and.returnValue(
//               of([
//                 {
//                   id: 1,
//                   title: 'ABC',
//                 },
//                 {
//                   id: 2,
//                   title: 'DEF',
//                 },
//               ])
//             ),
//           },
//           // useExisting: FakeTodoService,
//         },
//       ],
//     }).compileComponents();
//   });

//   // beforeEach(async () => {
//   //   fixture = TestBed.createComponent(TodosComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   //   await fixture.whenStable();
//   //   fixture.detectChanges();
//   // });

//   beforeEach(
//     waitForAsync(() => {
//       fixture = TestBed.createComponent(TodosComponent);
//       component = fixture.componentInstance;
//       fixture.autoDetectChanges();
//     })
//   );

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should contain 2 todos', () => {
//     const nativeElement: Element = fixture.nativeElement;
//     expect(nativeElement.querySelectorAll('app-todo-item').length).toBe(2);
//     const todoService = TestBed.inject(TodoService);
//     expect(todoService.getAll).toHaveBeenCalledTimes(1);
//   });
// });

// EXECUTE LES REQUETES HTTP

// import { HttpClientModule } from '@angular/common/http';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { TodoFormComponent } from '../todo-form/todo-form.component';
// import { TodoItemComponent } from '../todo-item/todo-item.component';
// import { TodosListComponent } from '../todos-list/todos-list.component';

// import { TodosComponent } from './todos.component';

// describe('TodosComponent', () => {
//   let component: TodosComponent;
//   let fixture: ComponentFixture<TodosComponent>;
//   let originalConsoleError!: any;

//   beforeAll(() => {
//     originalConsoleError = console.error;
//     console.error = function (message?: any, ...optionalParams: any[]): void {
//       const params = optionalParams ? `\nParams: ${optionalParams}` : '';
//       fail(`Test contained console error:\n${message}${params}`);
//     };
//   });

//   afterAll(() => {
//     console.error = originalConsoleError;
//   });

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         TodosComponent,
//         TodoFormComponent,
//         TodosListComponent,
//         TodoItemComponent,
//       ],
//       imports: [
//         FormsModule,
//         HttpClientModule
//       ],
//     }).compileComponents();
//   });

//   // beforeEach(async () => {
//   //   fixture = TestBed.createComponent(TodosComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   //   await fixture.whenStable();
//   //   fixture.detectChanges();
//   // });

//   beforeEach(waitForAsync(() => {
//     fixture = TestBed.createComponent(TodosComponent);
//     component = fixture.componentInstance;
//     fixture.autoDetectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should contain 200 todos', () => {
//     const nativeElement: Element = fixture.nativeElement;
//     expect(nativeElement.querySelectorAll('app-todo-item').length).toBe(200);
//   });
// });

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{
  path: 'users',
  component: UsersListComponent,
  data: {
    title: 'users',
  },
  children: [{
    path: 'add',
    component: UserAddComponent,
  }, {
    path: ':id',
    component: UserShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

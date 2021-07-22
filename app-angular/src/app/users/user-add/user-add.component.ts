import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {

  public user: User = {
    name: '',
  };

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
  }

  public adduser() {
    this.userService.create$(this.user)
      .subscribe((user: User) => {
        this.router.navigate(['users', user.id]);
        this.userService.events.emit('user.write');
      });
  }
}

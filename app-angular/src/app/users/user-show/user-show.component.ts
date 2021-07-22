import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../../shared/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss'],
})
export class UserShowComponent implements OnInit {
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => Number(params.id)),
        switchMap((id: number) => this.userService.getById$(id)),
      )
      .subscribe((user: User) => {
        this.user = user;
      });
  }

}

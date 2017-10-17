import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model'

@Component({
  selector: 'user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoComponent {

  @Input('user') user: User;
  @Input('isMenu') isMenu: boolean = false;

  constructor() {}

}

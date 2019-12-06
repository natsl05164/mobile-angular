import { Component, OnInit } from '@angular/core';
import { ChangePasswordBase } from './change-password.base';
import { UserStore } from '../../../../core/user/services/user.store';

@Component({
  selector: 'app-change-password.view',
  templateUrl: './change-password.view.html',
  styleUrls: ['./change-password.view.scss']
})
export class ChangePasswordView extends ChangePasswordBase implements OnInit {

  constructor(userStore: UserStore) {
    super(userStore);
  }

  ngOnInit() {
  }

}

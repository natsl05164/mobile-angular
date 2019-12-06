import { Component, OnInit } from '@angular/core';
import { ChangePasswordBase } from './change-password.base';
import { UserStore } from '../../../../core/user/services/user.store';

@Component({
  selector: 'app-change-password.mobile.view',
  templateUrl: './change-password.mobile.view.html',
  styleUrls: ['./change-password.mobile.view.scss']
})
export class ChangePasswordMobileView extends ChangePasswordBase implements OnInit {

  constructor(userStore: UserStore) {
    super(userStore);
  }

  ngOnInit() {
  }

}

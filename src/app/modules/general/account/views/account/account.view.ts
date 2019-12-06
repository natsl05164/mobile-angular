import { Component } from '@angular/core';
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';
import { AccountEndpoint } from '../../services/account.endpoint';

import { AccountBase } from './account.base';

@Component({
  //selector: 'app-account',
  templateUrl: './account.view.html',
  styleUrls: ['./account.view.scss'],
  providers: [BalanceStore, AccountStore, AccountEndpoint]
})
export class AccountView extends AccountBase {

  constructor(balanceStore: BalanceStore, accountStore: AccountStore) {
    super(balanceStore, accountStore);
  }


}

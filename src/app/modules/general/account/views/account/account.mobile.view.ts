import { Component    } from '@angular/core';
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';
import { AccountEndpoint } from '../../services/account.endpoint';

import { AccountBase } from './account.base';

@Component({
  //selector: 'app-account',
  templateUrl: './account.mobile.view.html',
  styleUrls: ['./account.mobile.view.scss'],
  providers: [BalanceStore, AccountStore, AccountEndpoint]
})
export class AccountMobileView extends AccountBase  {

  constructor( balanceStore: BalanceStore,  accountStore: AccountStore) {
    super(balanceStore, accountStore);
  }

  
}

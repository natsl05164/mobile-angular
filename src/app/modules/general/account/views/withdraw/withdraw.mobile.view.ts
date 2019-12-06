import { Component } from '@angular/core';
import { WithdrawBase } from './withdraw.base';
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.mobile.view.html',
  styleUrls: ['./withdraw.mobile.view.scss']
})
export class WithdrawMobileView extends WithdrawBase {

  constructor(balanceStore: BalanceStore, accountStore: AccountStore) {

    super(balanceStore, accountStore);
  }

   

}

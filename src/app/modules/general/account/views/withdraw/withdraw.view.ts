import { Component    } from '@angular/core';
import {WithdrawBase} from './withdraw.base';
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.view.html',
  styleUrls: ['./withdraw.view.scss']
})
export class WithdrawView extends WithdrawBase {

  constructor(balanceStore: BalanceStore, accountStore: AccountStore) {
    super(balanceStore, accountStore);
  }
   

}

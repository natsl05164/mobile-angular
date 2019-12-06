import { Component, OnInit } from '@angular/core';
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';

import { TransferBase} from './transfer.base'
@Component({
  //selector: 'app-transfer',
  templateUrl: './transfer.mobile.view.html',
  styleUrls: ['./transfer.mobile.view.scss']
})
export class TransferMobileView extends TransferBase{

  constructor(  balanceStore: BalanceStore,   accountStore: AccountStore) {
    super(balanceStore, accountStore);
  }
 

}

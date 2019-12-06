import { Component   } from '@angular/core';
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';
import { TransferBase } from './transfer.base';
@Component({
  //selector: 'app-transfer',
  templateUrl: './transfer.view.html',
  styleUrls: ['./transfer.view.scss']
})
export class TransferView extends TransferBase {

  constructor(  balanceStore: BalanceStore,   accountStore: AccountStore) {
    super(balanceStore, accountStore);
  }
   

}

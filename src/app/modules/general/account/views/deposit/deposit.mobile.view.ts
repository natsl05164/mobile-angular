import { Component } from '@angular/core';
import { PromotionStore } from '../../services/promotion.store';
import { AccountStore } from '../../services/account.store';
import { BalanceStore } from '../../services/balance.store';
import { DepositBase } from './deposit.base';
@Component({
  //selector: 'app-deposit',
  templateUrl: './deposit.mobile.view.html',
  styleUrls: ['./deposit.mobile.view.scss'],
  providers: [PromotionStore]
})
export class DepositMobileView extends DepositBase{

  constructor(promoStore: PromotionStore, balanceStore: BalanceStore, accountStore: AccountStore) {
    super(promoStore, balanceStore, accountStore);
  }

   
}

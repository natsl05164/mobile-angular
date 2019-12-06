import { Component  } from '@angular/core';
import { PromotionStore } from '../../services/promotion.store';
import { AccountStore } from '../../services/account.store';
import {BalanceStore } from '../../services/balance.store';
 
export abstract class DepositBase   {

  constructor(public promoStore: PromotionStore, public balanceStore: BalanceStore, public accountStore: AccountStore) {
    this.balanceStore.init();
    this.promoStore.init();
    this.accountStore.init();
    this.balanceStore.reloadBalanceInfo();
    this.accountStore.reloadAccountInfo();
    this.promoStore.reloadPromoInfo();
  }
   

}

 
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store'; 

 
export abstract class AccountBase {

  constructor(public balanceStore: BalanceStore, public accountStore: AccountStore) {
    this.balanceStore.init();
    this.accountStore.init();
    this.balanceStore.reloadBalanceInfo();
    this.accountStore.reloadAccountInfo();
  }
   

}

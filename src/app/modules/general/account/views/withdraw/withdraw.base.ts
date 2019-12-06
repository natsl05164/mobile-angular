 
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';

 
export class WithdrawBase {

  constructor(public balanceStore: BalanceStore, public accountStore: AccountStore) { }

  ngOnInit() {
  }

}

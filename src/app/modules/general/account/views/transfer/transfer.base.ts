 
import { BalanceStore } from '../../services/balance.store';
import { AccountStore } from '../../services/account.store';

 
export abstract class TransferBase  {

  constructor(public balanceStore: BalanceStore, public accountStore: AccountStore) { }

 
}

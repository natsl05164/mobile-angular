import { Requests } from '../types/requests';
import { Bank } from '../types/bank-info';
import { AccountView } from '../types/account-view';
export class AccountStoreState { 
  accountView: AccountView = null;
  payTrust88BankLst: Bank[] = null;
  eeziePayBankLst: Bank[] = null;
  requests: Requests = { 
    getAllGameBalances: {},
    getAccountView: {},
    //getTransactionHistoryByTypeDate: {}, 
    directDeposit: {}, 
    transfer: {}  
  };
}

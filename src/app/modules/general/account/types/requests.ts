import { RequestState } from '../../../../shared/types/request-state';

export interface Requests { 
  getAllGameBalances?: RequestState;
  getAccountView?: {},
  getDepositPromoListByUser?: RequestState;
  getTransactionHistoryByTypeDate?: RequestState;
  directDeposit?: RequestState;
  onlineDeposit?: RequestState;
  transfer?: RequestState;
  withdraw?: RequestState;
}

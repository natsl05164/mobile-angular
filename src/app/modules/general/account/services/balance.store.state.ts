
import { Requests } from '../types/requests';
import { AllBalance } from '../types/game-balance';
export class BalanceStoreState {
  allBalanceList: AllBalance = null;
  requests: Requests = {
    transfer: {},
    getAllGameBalances: {},
    onlineDeposit: {},
    directDeposit: {},
    withdraw: {}
  };
}

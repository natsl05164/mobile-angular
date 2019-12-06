import { Requests } from '../types/requests';

import { History } from '../types/history';
export class HistoryStoreState {
  history: History = null;
  historyDetailsModal: any;
  requests: Requests = {
    getTransactionHistoryByTypeDate: {},

  };
}

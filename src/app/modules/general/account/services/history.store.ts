import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { AccountEndpoint } from './account.endpoint';
import { HistoryStoreState } from './history.store.state';

import { History } from '../types/history';
import { HistorySearch } from '../types/history-search';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../../shared/helpers/endpoint.helpers';
import { UserAction } from '../account.constants';


import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Injectable()
export class HistoryStore extends Store<HistoryStoreState>  {
  history$: Observable<History>;
  //userBankInfo$: Observable<BankInfo>;
  //siteBankList$: Observable<Bank[]>;
  //payTrust88BankLst$: Observable<Bank[]>;
  //isEnablePayTrust88: Observable<boolean>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private detailsModal: DialogComponent;


  constructor(private endpoint: AccountEndpoint) {
    super(new HistoryStoreState());

    this.history$ = this.state$.pipe(map(state => state.history));
    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );

  }

  get history(): History {
    return this.state.history;
  }




  submitUserAction(d: any, action: UserAction): void {
    let request$: Observable<any[]>;
    if (action == UserAction.GetHistory) {
      const historySearch = <HistorySearch>d;
      request$ = this.endpoint.getTransactionHistoryByTypeDate(d, this.storeRequestStateUpdater)

      request$.pipe(
        tap((historyList: any[]) => {
          let temp: History = { transactionType: historySearch.transaction_type, historyLst: historyList, displayedColumns: null, resultsLength: 0 }
          if (historyList && historyList.length > 0) {
            temp.displayedColumns = Object.keys(historyList[0]);

            temp.resultsLength = historyList.length;

          }
          this.handleGetUserResponse(temp);
        })
      ).subscribe();
    }
  }

  private handleGetUserResponse(history: History): void {
    this.setState({
      ...this.state,
      history: history,
    });
  }



  setDetailsModal(detailsModal: DialogComponent): void {
    this.detailsModal = detailsModal;
  }

  openDetailsModal(historyDetail: any): void {
    this.setDetailsModalState(historyDetail);
    this.detailsModal.open();
  }

  closeDetailsModal(): void {
    this.setDetailsModalState(null);
    this.detailsModal.close();
  }

  setDetailsModalState(historyDetail: any): void {
    this.setState({
      ...this.state,
      historyDetailsModal: historyDetail,
    });
  }

}

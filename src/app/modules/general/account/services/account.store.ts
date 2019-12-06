import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { AccountEndpoint } from './account.endpoint';
import { AccountStoreState } from './account.store.state';
 
import { AccountView } from '../types/account-view';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../../shared/helpers/endpoint.helpers';
import { CustomRequestStateUpdater} from '../../../../shared/types/custom-request-state-updater';
//import { UserAction } from '../../../core/user/user.constants';

import { Bank } from '../types/bank-info';

@Injectable()
export class AccountStore extends Store<AccountStoreState> implements OnDestroy {
  accountView$: Observable<AccountView>;
  //userBankInfo$: Observable<BankInfo>;
  //siteBankList$: Observable<Bank[]>;
  //payTrust88BankLst$: Observable<Bank[]>;
  //isEnablePayTrust88: Observable<boolean>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadAccountInfo$: Subject<undefined> = new Subject();


  constructor(private endpoint: AccountEndpoint) {
    super(new AccountStoreState());

    //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));

  }


  init(): void {
    this.initAccountInfo$();

    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }


  reloadAccountInfo(): void {
    this.reloadAccountInfo$.next();

   
  }

  //getTransactionHistoryByTypeDate(d:any): any {
  //  return this.endpoint.getTransactionHistoryByTypeDate(d, this.storeRequestStateUpdater);
  //}

  private initAccountInfo$( ): void {
    this.reloadAccountInfo$
      .pipe(
        switchMap(() => {
          return this.endpoint.getAccountView( 
            this.storeRequestStateUpdater
          );
        }),
        tap((accountView: AccountView) => {
          this.setAccountViewState(accountView);
        }),
        retry(),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe();
  }
 

  initPayGateWayForm(payGatewayTypeID: number): void {

      this.endpoint.getPayGatewayBankLst(payGatewayTypeID, this.storeRequestStateUpdater).pipe(
      tap((bankLst: Bank[]) => {
        //TODO
        this.setEeziePayBankLstState(bankLst);
       
      })
      ).subscribe();
  }

  //getAllGamesViewByCategory(d: string) {
  //  return this.endpoint.getAllGamesViewByCategory(d, this.storeRequestStateUpdater).pipe(

  //    tap((gamesView: GamesView) => {
  //      this.handleGetUserResponse(gamesView);
  //    })
  //  ); 
  //}

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  private setAccountViewState(accountView: AccountView): void {
    this.setState({
      ...this.state,
      accountView: accountView,

    });
  }


  private setPaytrustBankLstState(bankLst: Bank[]): void {
    this.setState({
      ...this.state,
      payTrust88BankLst: bankLst,

    });
  }

  private setEeziePayBankLstState(bankLst: Bank[]): void {
    this.setState({
      ...this.state,
      eeziePayBankLst: bankLst,

    });
  }


}

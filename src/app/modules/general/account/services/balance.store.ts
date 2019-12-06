import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { AccountEndpoint } from './account.endpoint';
import { BalanceStoreState } from './balance.store.state';

import { AllBalance } from '../types/game-balance' 
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';
import { UserAction } from '../account.constants';


@Injectable()
export class BalanceStore extends Store<BalanceStoreState> implements OnDestroy {
  allBalanceList$: Observable<AllBalance>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadBalanceInfo$: Subject<undefined> = new Subject();


  constructor(private endpoint: AccountEndpoint) {
    super(new BalanceStoreState());

    //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));

  }


  init(): void {
    this.initBalanceInfo$();

    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }


  submitUserAction(d: any, action: UserAction): void {
    let request$: Observable<void>;
    if (action == UserAction.RefreshBalance) {
      this.reloadBalanceInfo$.next();
    }
    else if (action == UserAction.TransferFromMainWallet || action == UserAction.TransferToMainWallet || action == UserAction.Transfer) {
      this.transfer(d);
    }
    else if (action == UserAction.DirectDeposit) {
      this.endpoint.directDeposit(d, this.storeRequestStateUpdater);
    }
    else if (action == UserAction.OnlineDeposit) {
      this.endpoint.directDeposit(d, this.storeRequestStateUpdater);
    }

    else if (action == UserAction.Withdraw) {
      this.endpoint.withdraw(d, this.storeRequestStateUpdater).pipe(
        tap((allBalanceList: AllBalance) => {
          allBalanceList.TotalBalance = this.getTotalBalance(allBalanceList);
          this.handleGetUserResponse(allBalanceList);
        })
      );
    }
  }


  reloadBalanceInfo(): void {
    this.reloadBalanceInfo$.next();
  }


  //getTotalBalance(): number {
  //  return this.state.AllBalanceList.WalletAmt + this.state.AllBalanceList.FailedAmt + this.state.AllBalanceList.GameBalList.map(t => t.Balance).reduce((acc, value) => acc + value, 0);
  //}

  private getTotalBalance(allBalanceList: AllBalance): number {
    return allBalanceList.WalletAmt + allBalanceList.FailedAmt + allBalanceList.GameBalList.map(t => t.Balance).reduce((acc, value) => acc + value, 0);
  }

  getRewardPoints(): number {
    return this.state.allBalanceList.RewardPoints; 
  }

  transfer(d: any): void {
    this.endpoint.transfer(d, this.storeRequestStateUpdater).pipe(
      tap((allBalanceList: AllBalance) => {
        allBalanceList.TotalBalance = this.getTotalBalance(allBalanceList);
        this.handleGetUserResponse(allBalanceList);
      })
    );
  }

  getNewWalletAmt(): Observable<number> {
   return this.endpoint.getAllGameBalances( this.storeRequestStateUpdater).pipe(
      map((allBalanceList: AllBalance) => {
        allBalanceList.TotalBalance = this.getTotalBalance(allBalanceList);
        this.handleGetUserResponse(allBalanceList);
        return allBalanceList.WalletAmt;
      })
    );
  }
   
  

  private initBalanceInfo$(): void {
    this.reloadBalanceInfo$
      .pipe(
        switchMap(() => {
          return this.endpoint.getAllGameBalances(
            this.storeRequestStateUpdater
          );
        }),
        tap((allBalanceList: AllBalance) => {
          allBalanceList.TotalBalance = this.getTotalBalance(allBalanceList);
          this.handleGetUserResponse(allBalanceList);
        }),
        retry(),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe();
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

  private handleGetUserResponse(allBalanceList: AllBalance): void {
    this.setState({
      ...this.state,
      allBalanceList: allBalanceList,
    });
  }


}

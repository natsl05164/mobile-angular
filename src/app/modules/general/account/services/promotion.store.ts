import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { AccountEndpoint } from './account.endpoint';
import { PromotionStoreState } from './promotion.store.state';

import { PromotionInfo } from '../types/promotion-view'
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';
import { UserAction } from '../account.constants';


@Injectable()
export class PromotionStore extends Store<PromotionStoreState> implements OnDestroy {
  promoInfo$: Observable<PromotionInfo>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadPromoInfo$: Subject<undefined> = new Subject();


  constructor(private endpoint: AccountEndpoint) {
    super(new PromotionStoreState());

    //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));

  }


  init(): void {
    this.initPromoInfo$();

    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }


  //submitUserAction(d: any, action: UserAction): void {
  //  let request$: Observable<void>;
  //  if (action == UserAction.RefreshBalance) {
  //    this.reloadPromoInfo$.next();
  //  }
  //  else if (action == UserAction.TransferFromMainWallet || action == UserAction.TransferToMainWallet || action == UserAction.Transfer) {
  //    this.transfer(d);
  //  }
  //}


  reloadPromoInfo(): void {
    this.reloadPromoInfo$.next();
  }
 

  //transfer(d: any): void {
  //  this.endpoint.transfer(d, this.storeRequestStateUpdater).pipe(
  //    tap((allBalanceList: AllBalance) => {
  //      allBalanceList.TotalBalance = this.getTotalBalance(allBalanceList);
  //      this.handleGetUserResponse(allBalanceList);
  //    })
  //  );
  //}

  private initPromoInfo$(): void {
    this.reloadPromoInfo$
      .pipe(
        switchMap(() => {
          return this.endpoint.getDepositPromoListByUser(
            this.storeRequestStateUpdater
          );
        }),
        tap((promoInfo: PromotionInfo) => {
        
          this.handleGetUserResponse(promoInfo);
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

  private handleGetUserResponse(promoInfo: PromotionInfo): void {
    this.setState({
      ...this.state,
      promoInfo: promoInfo,
    });
  }


}

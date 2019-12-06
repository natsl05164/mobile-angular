import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil} from 'rxjs/operators';

import { GamesEndpoint } from './games.endpoint';
import { GamesStoreState } from './games.store.state';

import { GamesView } from '../types/games-view';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';



@Injectable()
export class GamesStore extends Store<GamesStoreState> implements OnDestroy {
  gamesView$: Observable<GamesView>;
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadGamesView$: Subject<undefined> = new Subject();


  constructor(private endpoint: GamesEndpoint) {
    super(new GamesStoreState());

    //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));
 
  }


  init(strGameCategory: string):void {
    this.initReloadGamesView$(strGameCategory);

    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }

  reloadGamesView(): void {
    this.reloadGamesView$.next();
  }

  private initReloadGamesView$(strGameCategory: string): void {
    this.reloadGamesView$
      .pipe(
        switchMap(() => {
          return this.endpoint.getAllGamesViewByCategory(
            strGameCategory,
            this.storeRequestStateUpdater
          );
        }),
        tap((gamesView: GamesView) => {
          this.handleGetUserResponse(gamesView);
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
    
  private handleGetUserResponse(gamesView: GamesView): void {
    this.setState({
      ...this.state,
      gamesView: gamesView,
    });
  }

   
}

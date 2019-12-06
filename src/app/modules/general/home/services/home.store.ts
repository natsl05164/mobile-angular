import { Injectable, OnDestroy} from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil} from 'rxjs/operators';

import { HomeEndpoint } from './home.endpoint';
import { HomeStoreState } from './home.store.state';

import { NewGames } from '../types/new-games';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';



@Injectable()
export class HomeStore extends Store<HomeStoreState> implements OnDestroy {
 
  private storeRequestStateUpdater: StoreRequestStateUpdater;
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadGamesView$: Subject<undefined> = new Subject();


  constructor(private endpoint: HomeEndpoint) {
    super(new HomeStoreState());

     
 
  }

 


  init():void {
    
    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }

  public loadNewGames$(): Observable<NewGames> {
    return this.endpoint.getAllNewGames(this.storeRequestStateUpdater).pipe(
      tap((newGames: NewGames) => {
        this.handleGetUserResponse(newGames);
      }),
      takeUntil(this.ngUnsubscribe$)
    ); 
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
    
  private handleGetUserResponse(newGames: NewGames): void {
    this.setState({
      ...this.state,
      newGames: newGames,
    });
  }

   
}

import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { GamesEndpoint } from './games.endpoint';
import { GameStoreState } from './game.store.state';

import { GameView } from '../types/games-view';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
//import { UserAction } from '../../../core/user/user.constants';



@Injectable()
export class GameStore extends Store<GameStoreState> implements OnDestroy {
   
    private storeRequestStateUpdater: StoreRequestStateUpdater;
    private ngUnsubscribe$: Subject<undefined> = new Subject();
    private reloadGamesView$: Subject<undefined> = new Subject();


    constructor(private endpoint: GamesEndpoint) {
        super(new GameStoreState());

        //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));

    }


    init(gameID: string): void {
        this.initReloadGameView$(gameID);

        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
    }

    reloadGamesView(): void {
        this.reloadGamesView$.next();
    }

    private initReloadGameView$(gameID: string): void {
        this.reloadGamesView$
            .pipe(
                switchMap(() => {
                    return this.endpoint.getGameViewByID(
                        gameID,
                        this.storeRequestStateUpdater
                    );
                }),
                tap((gameView: GameView) => {
                    this.handleGetGameViewResponse(gameView);
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

    private handleGetGameViewResponse(gameView: GameView): void {
        this.setState({
            ...this.state,
            gameView: gameView,
        });
    }


}

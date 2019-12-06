import { Injectable, OnDestroy } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { Subject, Observable } from 'rxjs';
import { map, tap, switchMap, retry, takeUntil } from 'rxjs/operators';

import { GamesEndpoint } from './games.endpoint';
import { GameAppLoginStoreState } from './game-app-login.store.state';

import { GameAppLoginDetails } from '../types/game-app-login-detail';
import { GameAppSetPwd } from '../types/game-app-set-pwd';
//import { Login } from '../types/login';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';

import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
import { UserAction } from '../../games/games.constants';



@Injectable()
export class GameAppLoginStore extends Store<GameAppLoginStoreState> implements OnDestroy {

    private storeRequestStateUpdater: StoreRequestStateUpdater;
    private ngUnsubscribe$: Subject<undefined> = new Subject();
    private reloadGameLoginDetails$: Subject<undefined> = new Subject();


    constructor(private endpoint: GamesEndpoint) {
        super(new GameAppLoginStoreState());

        //this.gamesView$ = this.state$.pipe(map(state => state.gamesView));

    }


    init(gameID: string): void {
        this.initReloadGameLoginDetails$(gameID);

        this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
            this
        );
    }

    reloadGameLoginDetails(): void {
        this.reloadGameLoginDetails$.next();
    }

    private initReloadGameLoginDetails$(gameID: string): void {
        this.reloadGameLoginDetails$
            .pipe(
                switchMap(() => {
                    return this.endpoint.getUserAppLoginDetailsByGameID(
                        gameID,
                        this.storeRequestStateUpdater
                    );
                }),
                tap((gameAppLoginDetails: GameAppLoginDetails) => {
                    this.handleResponse(gameAppLoginDetails);
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

    private handleResponse(gameAppLoginDetails: GameAppLoginDetails): void {
        this.setState({
            ...this.state,
            gameAppLoginDetails: gameAppLoginDetails,
        });
    }
     
    submitUserAction(d: any, action: UserAction): Observable<GameAppLoginDetails> {
        let request$: Observable<GameAppLoginDetails>;
        if (action == UserAction.SetGameAppPwd) {

            const requestOptions = <GameAppSetPwd>d; //GameID
            request$ = this.endpoint.updateGameAppPwd(d, this.storeRequestStateUpdater);
            return request$.pipe(
                tap((data: GameAppLoginDetails) => {
                    this.handleResponse(data);
                     
                })
            );
        } 

    }


}

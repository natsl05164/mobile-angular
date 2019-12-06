import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiResponse } from '../../../shared/types/api-response';
import { GAMES_CONFIG } from '../games.config';
import { GamesView, GameView } from '../types/games-view';
import { GameAppLoginDetails } from '../types/game-app-login-detail';
import { GameAppSetPwd } from '../types/game-app-set-pwd';
import { SlotGamesView } from '../types/slot-games-view';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';


@Injectable()
export class GamesEndpoint {
    constructor(private http: HttpClient) { }

    getAllGamesViewByCategory(d: string, requestStateUpdater: StoreRequestStateUpdater): Observable<GamesView> {
        const request = GAMES_CONFIG.requests.getAllGamesViewByCategory;
         
        const url = endpointHelpers.getUrlWithParams(
            request.url,
            { category: d }
        );

        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<GamesView>>(url, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as GamesView;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }

    getAllGamesViewBySlotProvider(d: string, requestStateUpdater: StoreRequestStateUpdater): Observable<SlotGamesView> {
        const request = GAMES_CONFIG.requests.getAllGamesViewBySlotProvider;
        const url = endpointHelpers.getUrlWithParams(
            request.url,
            { slotProvider: d }
        );
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<SlotGamesView>>(url, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as SlotGamesView;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }

    getGameViewByID(gameID: string, requestStateUpdater: StoreRequestStateUpdater): Observable<GameView> {
        const request = GAMES_CONFIG.requests.getGameViewByID;
        const url = endpointHelpers.getUrlWithParams(
            request.url,
            { gameID: gameID }
        );
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.get<ApiResponse<GameView>>(url, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as GameView;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }


 
    getUserAppLoginDetailsByGameID(gameID: string, requestStateUpdater: StoreRequestStateUpdater): Observable<GameAppLoginDetails> {
        const request = GAMES_CONFIG.requests.getUserAppLoginDetailsByGameID;
        //const url = endpointHelpers.getUrlWithParams(
        //    request.url,
        //    { gameID: gameID }
        //);
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.post<ApiResponse<GameAppLoginDetails>>(request.url, gameID, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as GameAppLoginDetails;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                });
                return throwError(error);
            })
        );
    }

   

    updateGameAppPwd(d: GameAppSetPwd, requestStateUpdater: StoreRequestStateUpdater): Observable<GameAppLoginDetails> {
        const request = GAMES_CONFIG.requests.updateGameAppPwd;
        requestStateUpdater(request.name, {
            inProgress: true,
        });
        return this.http.post<ApiResponse<GameAppLoginDetails>>(request.url, d, { withCredentials: true }).pipe(
            map(response => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                });
                return response.data as GameAppLoginDetails;
            }),
            catchError((error: HttpErrorResponse) => {
                requestStateUpdater(request.name, {
                    inProgress: false,
                    error: true,
                    errorMessage: error.message
                });

                return throwError(error);
            })
        );
    }

    //getAllSlotGamesView(d: GameType): Observable<SlotGamesContent> { //all-slots page
    //  const href = '/api/getAllSlotGamesView';
    //  return this.http.post<SlotGamesContent>(href, d);
    //}
    //getAllGamesByCategory(d: string): Observable<Array<Game>> { //main-games1 page
    //  const href = '/api/getAllGamesByCategory'; //TODO pass category
    //  // const href = '/api/games/getAllGamesList';
    //  return this.http.get<Array<Game>>(href);
    //}
    //getAllGamesByCategory2(d: string): Observable<Array<Game>> { //main-games1 page
    //  const href = '/api/getAllGamesByCategory2'; //TODO pass category
    //  // const href = '/api/games/getAllGamesList';
    //  return this.http.get<Array<Game>>(href);
    //}

}

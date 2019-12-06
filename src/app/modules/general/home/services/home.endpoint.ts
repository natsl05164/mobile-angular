import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiResponse } from '../../../../shared/types/api-response';
import { HOME_CONFIG } from '../home.config';
import { NewGames } from '../types/new-games';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';


@Injectable()
export class HomeEndpoint {
  constructor(private http: HttpClient) { }

  getAllNewGames(  requestStateUpdater: StoreRequestStateUpdater): Observable<NewGames> {
    const request = HOME_CONFIG.requests.getAllNewGames;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.get<ApiResponse<NewGames>>(request.url, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as NewGames;
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

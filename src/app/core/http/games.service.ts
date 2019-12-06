import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { GameType } from '../../shared/models/game-type.interface';
//import { Game} from '../../shared/models/game.interface';
//import { SlotGamesContent } from '../../shared/models/slots-content.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {

  }
   


  //getAllGamesList(): Observable<Array<GameType>> { //transfer page
  //  const href = '/api/getAllGamesList';
  //  // const href = '/api/games/getAllGamesList';
  //  return this.http.get<Array<GameType>>(href);
  //}


}

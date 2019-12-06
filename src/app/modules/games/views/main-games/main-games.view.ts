import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
  
import { GamesStore } from '../../services/games.store';
import { GamesEndpoint } from '../../services/games.endpoint';

import { MainGamesBase } from "./main-games.base";
 
@Component({ 
  templateUrl: './main-games.view.html',
  styleUrls: ['./main-games.view.scss'],
  providers: [GamesStore, GamesEndpoint]
})
export class MainGamesView extends MainGamesBase  { 
 
  constructor(route: ActivatedRoute, store: GamesStore ) {
    super(route, store);
  }
   
}

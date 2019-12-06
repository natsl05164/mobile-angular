import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GamesStore } from '../../services/games.store';
import { GamesEndpoint } from '../../services/games.endpoint';

import { MainGamesBase } from "./main-games.base"; 
@Component({
  templateUrl: './main-games.mobile.view.html',
  styleUrls: ['./main-games.mobile.view.scss'],
  providers: [GamesStore, GamesEndpoint]
})
export class MainGamesMobileView extends MainGamesBase {
 
  constructor(route: ActivatedRoute, store: GamesStore ) {
    super(route, store);
  }

}

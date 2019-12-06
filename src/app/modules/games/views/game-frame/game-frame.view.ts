import { Component, OnInit } from '@angular/core';
import { GameStore } from '../../services/game.store';
import { GamesEndpoint } from '../../services/games.endpoint';
import { UserStore } from '../../../../core/user/services/user.store';
import { ActivatedRoute } from "@angular/router";
@Component({
  
    templateUrl: './game-frame.view.html',
    styleUrls: ['./game-frame.view.scss'],
    providers: [GameStore, GamesEndpoint]
})
export class GameFrameView implements OnInit {

    constructor(private route: ActivatedRoute, public gameStore: GameStore, public userStore: UserStore) {
        this.route.paramMap.subscribe(params => {
            //console.log('sportsName', params.get("sportsName"));
            this.gameStore.init(params.get("sportsName"));
            this.gameStore.reloadGamesView();
        });
       
    }

  ngOnInit() {
  }

}

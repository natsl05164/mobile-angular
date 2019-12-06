import { Component, OnInit  } from '@angular/core';
import { GameAppLoginStore } from '../../services/game-app-login.store';
import { GamesEndpoint } from '../../services/games.endpoint';
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-game-app-login',
    templateUrl: './game-app-login.view.html',
    styleUrls: ['./game-app-login.view.scss'],
    providers: [GameAppLoginStore, GamesEndpoint]
})
export class GameAppLoginView implements OnInit {
    gameID: string;
    constructor(private route: ActivatedRoute,public gameAppLoginStore: GameAppLoginStore) {
        this.route.paramMap.subscribe(params => {
            //console.log('gameID', params.get("gameID"));
            this.gameID = params.get("gameID");
            this.gameAppLoginStore.init(this.gameID);
            this.gameAppLoginStore.reloadGameLoginDetails();
        });
        
    }

    ngOnInit() {
    }

}

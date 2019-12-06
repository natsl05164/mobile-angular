import { Requests } from '../types/requests';
import { GameView } from '../types/games-view';

export class GameStoreState {
    gameView: GameView = null;
    requests: Requests = {
        getGameViewByID: {}
    };
}

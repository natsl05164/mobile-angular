import { Requests } from '../types/requests';
import { GameAppLoginDetails } from '../types/game-app-login-detail';

export class GameAppLoginStoreState {
    gameAppLoginDetails: GameAppLoginDetails = null;
    requests: Requests = {
        getUserAppLoginDetailsByGameID: {}
    };
}

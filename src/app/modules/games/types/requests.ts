import { RequestState } from '../../../shared/types/request-state';

export interface Requests {
    getAllGamesViewByCategory?: RequestState;
    getAllGamesViewBySubCategory?: RequestState;
    getGameViewByID?: RequestState;
    getUserAppLoginDetailsByGameID?: RequestState;
    updateGameAppPwd?: RequestState;
}

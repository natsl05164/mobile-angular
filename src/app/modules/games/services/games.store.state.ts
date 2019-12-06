import { Requests } from '../types/requests';
import { GamesView } from '../types/games-view';

export class GamesStoreState {
  gamesView: GamesView = null;
  requests: Requests = {
    getAllGamesViewByCategory: {}
  };
}

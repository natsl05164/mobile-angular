import { Requests } from '../types/requests';
import { NewGames } from '../types/new-games';

export class HomeStoreState {
  newGames: NewGames = null;
  requests: Requests = {
    getAllNewGames: {}
  };
}

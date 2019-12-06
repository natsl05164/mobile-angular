import { Requests } from '../types/requests';
import { SlotGamesView } from '../types/slot-games-view';
import { GameDetailsModal } from '../types/games-details-modal';
export class SlotGamesStoreState {
  slotGamesView: SlotGamesView = null;
  gameDetailsModal: GameDetailsModal;
  requests: Requests = {
    getAllGamesViewBySubCategory: {}
  };
}

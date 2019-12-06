import { Requests } from '../types/requests';
import { PromotionInfo } from '../types/promotion-view';

export class PromotionStoreState {
  promoInfo: PromotionInfo = null; 
  requests: Requests = {
    getDepositPromoListByUser: {},

  };
}

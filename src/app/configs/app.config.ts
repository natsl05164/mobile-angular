import { environment } from '../../environments/environment';

export const APP_CONFIG = {
  apiBaseUrl: environment.apiUrl,
  sortQueryParam: 'sort',
  sortRequestParam: 'sort',
  //currency: environment.currency,
  depositAmounts: environment.depositAmounts
};

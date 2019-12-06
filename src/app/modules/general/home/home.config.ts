import { APP_CONFIG } from '../../../configs/app.config';

export const HOME_CONFIG = {
  requests: {
    getAllNewGames: {
      name: 'getAllNewGames',
      url: `${APP_CONFIG.apiBaseUrl}/getAllNewGames`,
    } 
  },
};

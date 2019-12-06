import { APP_CONFIG } from '../configs/app.config';

export const LAYOUT_CONFIG = {
  requests: {
    getMainMenuItems: {
      name: 'getMainMenuItems',
          url: `${APP_CONFIG.apiBaseUrl}/getMainMenuItems`,
    } 
  },
};

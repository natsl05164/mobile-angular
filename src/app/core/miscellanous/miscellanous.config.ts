import { APP_CONFIG } from '../../configs/app.config';

export const MISCELLANOUS_CONFIG = {
    requests: {
        getMiscellanous: {
            name: 'getMiscellanousData',
            url: `${APP_CONFIG.apiBaseUrl}/getMiscellanousData`,
        }, 
    }
};

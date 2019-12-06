import { APP_CONFIG } from '../configs/app.config';

export const WEBSITE_DATA_CONFIG = {
    requests: {
        getWebsiteData: {
            name: 'getWebsiteData',
            url: `${APP_CONFIG.apiBaseUrl}/getWebsiteData`,
        },
        getLandingPageData: {
            name: 'getLandingPageData',
            url: `${APP_CONFIG.apiBaseUrl}/getLandingPageData`,
        } ,
        getSeoData: {
            name: 'getSeoData',
            url: `${APP_CONFIG.apiBaseUrl}/getSeoData`,
        }

    },
};

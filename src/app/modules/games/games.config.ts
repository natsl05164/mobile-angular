import { APP_CONFIG } from '../../configs/app.config';

export const GAMES_CONFIG = {
    requests: {
        getAllGamesViewByCategory: {
            name: 'getAllGamesViewByCategory',
            url: `${APP_CONFIG.apiBaseUrl}/getAllGamesViewByCategory/:category`,
            //url: `${APP_CONFIG.apiBaseUrl}/getAllGamesViewByCategory3`,
        },
        getAllGamesViewBySlotProvider: {
            name: 'getAllGamesViewBySlotProvider',
            url: `${APP_CONFIG.apiBaseUrl}/getAllGamesViewBySlotProvider/:slotProvider`,
        },
        getGameViewByID: {
            name: 'getGameViewByID',
            url: `${APP_CONFIG.apiBaseUrl}/getGameViewByID/:gameID`,
            //url: `${APP_CONFIG.apiBaseUrl}/getGameViewByID`,
        },
        getUserAppLoginDetailsByGameID: {
            name: 'getUserAppLoginDetailsByGameID', 
            url: `${APP_CONFIG.apiBaseUrl}/getUserAppLoginDetailsByGameID`,
        },
        updateGameAppPwd: {
            name: 'updateGameAppPwd',
            url: `${APP_CONFIG.apiBaseUrl}/updateGameAppPwd`,
        }
    },
};

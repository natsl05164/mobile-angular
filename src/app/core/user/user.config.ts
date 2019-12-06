import { APP_CONFIG } from '../../configs/app.config';

export const USER_CONFIG = {
    requests: {
        login: {
            name: 'login',
            url: `${APP_CONFIG.apiBaseUrl}/auth/login`,
        },
        logout: {
            name: 'logout',
            url: `${APP_CONFIG.apiBaseUrl}/logout`,
        },
        forgotPassword: {
            name: 'forgotPassword',
            url: `${APP_CONFIG.apiBaseUrl}/forgotPassword`,
        }
        ,
        register: {
            name: 'register',
            url: `${APP_CONFIG.apiBaseUrl}/auth/register`,
        },
        validateResetPwdToken: {
            name: 'validateResetPwdToken',
            url: `${APP_CONFIG.apiBaseUrl}/checkResetPwdToken`,
        },
        resetPassword: {
            name: 'resetPassword',
            url: `${APP_CONFIG.apiBaseUrl}/resetPassword`,
        },
        changePassword: {
            name: 'changePassword',
            url: `${APP_CONFIG.apiBaseUrl}/changePassword`,
        },
        validateEmailIsNew: {
            name: 'validateEmailIsNew',
            url: `${APP_CONFIG.apiBaseUrl}/checkEmailIsNew`,
        }
        ,
        validateUserNameIsNew: {
            name: 'validateUserNameIsNew',
            url: `${APP_CONFIG.apiBaseUrl}/checkUserNameIsNew`,
        },
        captcha: {
            name: 'captcha',
            url: `${APP_CONFIG.apiBaseUrl}/captcha/:rand`,
        },
        validateCaptcha : {
            name: 'validateCaptcha ',
            url: `${APP_CONFIG.apiBaseUrl}/checkCaptcha `,
        },
        registerGames: {
            name: 'registerGames ',
            url: `${APP_CONFIG.apiBaseUrl}/registerGames `,
        },
    }
};

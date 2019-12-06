import { APP_CONFIG } from '../../../configs/app.config';

export const ACCOUNT_CONFIG = {
  requests: {
    getDepositView: {
      name: 'getDepositView',
      url: `${APP_CONFIG.apiBaseUrl}/getDepositView`,
    },
    getAccountViewInfo: {
      name: 'getAccountViewInfo',
      url: `${APP_CONFIG.apiBaseUrl}/getAccountViewInfo`,
    },
   
    getPayGatewayBankLst: {
      name: 'getPayGatewayBankLst',
      url: `${APP_CONFIG.apiBaseUrl}/getPayGatewayBankLst/:id`,
    },
    getAllGameBalances: {
      name: 'getAllGameBalances',
      url: `${APP_CONFIG.apiBaseUrl}/getAllGameBalances`,
    },
    //getAllBanksByUser: {
    //  name: 'getAllBanksByUser',
    //  url: `${APP_CONFIG.apiBaseUrl}/getAllBanksByUser`,
    //},
    //getBankListBySite: {
    //  name: 'getBankListBySite',
    //  url: `${APP_CONFIG.apiBaseUrl}/getBankListBySite`,
    //} ,
    getDepositPromoListByUser: {
      name: 'getDepositPromoListByUser',
      url: `${APP_CONFIG.apiBaseUrl}/getDepositPromoListByUser`,
    },
    getTransactionHistoryByTypeDate: {
      name: 'getTransactionHistoryByTypeDate',
      url: `${APP_CONFIG.apiBaseUrl}/getTransHistoryByTypeDate`,
    },
    directDeposit: {
      name: 'directDeposit',
      url: `${APP_CONFIG.apiBaseUrl}/directDeposit`,
    },
    onlineDeposit: {
      name: 'onlineDeposit',
      url: `${APP_CONFIG.apiBaseUrl}/onlineDeposit`,
    },
    transfer: {
      name: 'transfer',
      url: `${APP_CONFIG.apiBaseUrl}/transfer`,
    }
    ,
    withdraw: {
      name: 'withdraw',
      url: `${APP_CONFIG.apiBaseUrl}/withdraw`,
    }
  },
};

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as endpointHelpers from '../../../../shared/helpers/endpoint.helpers';
import { StoreRequestStateUpdater } from '../../../../shared/types/store-request-state-updater';
//import { CustomRequestStateUpdater } from '../../../../shared/types/custom-request-state-updater';
import { ApiResponse } from '../../../../shared/types/api-response';
import { toFormData } from '../../../../shared/helpers/endpoint.helpers';
import { ACCOUNT_CONFIG } from '../account.config';
 
import { AllBalance } from '../types/game-balance';
import { AccountView } from '../types/account-view';
import { Bank } from '../types/bank-info';
import { PromotionInfo } from '../types/promotion-view';
import { Transfer } from '../types/transfer';
import { DirectDeposit } from '../types/direct-deposit';
import { Withdraw } from '../types/withdraw';
@Injectable()
export class AccountEndpoint {
  constructor(private http: HttpClient) { }

  getAllGameBalances(  requestStateUpdater: StoreRequestStateUpdater): Observable<AllBalance> {
    const request = ACCOUNT_CONFIG.requests.getAllGameBalances;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.get<ApiResponse<AllBalance>>(request.url, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as AllBalance;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

  getAccountView(requestStateUpdater: StoreRequestStateUpdater): Observable<AccountView> {
    const request = ACCOUNT_CONFIG.requests.getAccountViewInfo;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.get<ApiResponse<AccountView>>(request.url, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as AccountView;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

  getPayGatewayBankLst(payGatewayTypeID: number, requestStateUpdater: StoreRequestStateUpdater): Observable<Bank[]> {
    const request = ACCOUNT_CONFIG.requests.getPayGatewayBankLst;
    const url = endpointHelpers.getUrlWithParams(
      request.url,
      { id: payGatewayTypeID }
    );
    requestStateUpdater(request.name,{ 
      inProgress: true,
    });
      return this.http.get<ApiResponse<Bank[]>>(url, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as Bank[];
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

 
  directDeposit(d: DirectDeposit, requestStateUpdater: StoreRequestStateUpdater): Observable<void> {
    const request = ACCOUNT_CONFIG.requests.directDeposit;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<void>>(request.url, toFormData(d), { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        //return response.data as AllBalance;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }
  withdraw(d: Withdraw, requestStateUpdater: StoreRequestStateUpdater): Observable<AllBalance> {
    const request = ACCOUNT_CONFIG.requests.withdraw;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<AllBalance>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
         return response.data as AllBalance;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

  onlineDeposit(d: DirectDeposit, requestStateUpdater: StoreRequestStateUpdater): Observable<void> {
    const request = ACCOUNT_CONFIG.requests.onlineDeposit;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<void>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        //return response.data as AllBalance;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

  transfer(d: Transfer, requestStateUpdater: StoreRequestStateUpdater): Observable<AllBalance> {
    const request = ACCOUNT_CONFIG.requests.transfer;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<AllBalance>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as AllBalance;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

  getDepositPromoListByUser(requestStateUpdater: StoreRequestStateUpdater): Observable<PromotionInfo> {
    const request = ACCOUNT_CONFIG.requests.getDepositPromoListByUser;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.get<ApiResponse<PromotionInfo>>(request.url, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data as PromotionInfo;
      }),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }

  getTransactionHistoryByTypeDate(d: any, requestStateUpdater: StoreRequestStateUpdater): Observable<any[]> {
    //const href = '/api/getTransactionHistoryByTypeDate';
    //return this.http.post<any[]>(href, d);//.pipe(delay(5000))

    const request = ACCOUNT_CONFIG.requests.getTransactionHistoryByTypeDate;
    requestStateUpdater(request.name, {
      inProgress: true,
    });
      return this.http.post<ApiResponse<any[]>>(request.url, d, { withCredentials: true }).pipe(
      map(response => {
        requestStateUpdater(request.name, {
          inProgress: false,
        });
        return response.data ;
      }),
      catchError((error:any) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true,
        });
        return throwError(error);
      })
    );
  }




  //getAllSlotGamesView(d: GameType): Observable<SlotGamesContent> { //all-slots page
  //  const href = '/api/getAllSlotGamesView';
  //  return this.http.post<SlotGamesContent>(href, d);
  //}
  //getAllGamesByCategory(d: string): Observable<Array<Game>> { //main-games1 page
  //  const href = '/api/getAllGamesByCategory'; //TODO pass category
  //  // const href = '/api/games/getAllGamesList';
  //  return this.http.get<Array<Game>>(href);
  //}
  //getAllGamesByCategory2(d: string): Observable<Array<Game>> { //main-games1 page
  //  const href = '/api/getAllGamesByCategory2'; //TODO pass category
  //  // const href = '/api/games/getAllGamesList';
  //  return this.http.get<Array<Game>>(href);
  //}

}

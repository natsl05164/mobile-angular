import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, pipe} from 'rxjs';
//import { Transfer } from '../../shared/models/transfer.interface';
//import { AllBalance } from '../../shared/models/game-balance.interface'; 
//import { BankInfo, Bank } from '../../shared/models/bank-info.interface';
//import { Promotion } from '../../shared/models/promotion.interface';
//import { DirectDeposit } from '../../shared/models/direct-deposit.interface';
//import { DepositPage } from '../../shared/models/deposit-page.model';
import { tap, map, filter, delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  ///api/account
  //transfer(d: Transfer): Observable<AllBalance> {  
  //  const href = '/api/transfer';
  //  return this.http.post <AllBalance>(href, d);
  //}

  //getAllGameBalances(): Observable<AllBalance> {  //TODO https://stackoverflow.com/questions/39627396/angular-2-observable-with-multiple-subscribers
  //  const href = '/api/getAllGameBalances';
  //  return this.http.get<AllBalance>(href);  
  //}

  //getAllBanksByUser(): Observable<Array<BankInfo>> {
  //  const href = '/api/getAllBanksByUser';
  //  return this.http.get<Array<BankInfo>>(href);
  //}

  //getAllBanksList(): Observable<Array<Bank>> {
  //  const href = '/api/getAllBanksList';
  //  return this.http.get<Array<Bank>>(href);
  //}

  //getSiteBanksList(): Observable<Array<BankInfo>> {
  //  const href = '/api/getSiteBanksList';
  //  return this.http.get<Array<BankInfo>>(href);
  //}

  //getDepositPromoList(): Observable<Array<Promotion>> {
  //  const href = '/api/getDepositPromoList';
  //  return this.http.get<Array<Promotion>>(href);
  //}

  //directDeposit(d: DirectDeposit) {
  //  const href = '/api/directDeposit';
  //  return this.http.post(href, toFormData(d), { reportProgress: true, observe:'events' });
  //}


  //getDepositPageItems(): Observable<DepositPage>  {
  //  const href = '/api/getDepositPageItems';
  //  return this.http.get<DepositPage>(href);
  //}


  getTransactionHistoryByTypeDate(d: any): Observable<any[]> {
    const href = '/api/getTransactionHistoryByTypeDate';
    return this.http.post<any[]>(href, d);//.pipe(delay(5000))
  }
}


export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}



//import { Injectable } from '@angular/core';
//import { Observable, Subject } from 'rxjs';
//import { AllBalance } from '../../../../shared/models/game-balance.interface';

//@Injectable({ providedIn: 'root' })
//export class AccountComm {
//  private subjBank = new Subject<any>();

//  sendBankDetailsByUser(keys: Object) {
//    this.subjBank.next(keys);
//  }

//  clearBankDetailsByUser() {
//    this.subjBank.next();
//  }

//  getBankDetailsByUser(): Observable<any> {
//    return this.subjBank.asObservable();
//  }

   
//  private subjGameBalanceLst = new Subject<any>();
 
//  sendGameBalanceLst(d: AllBalance) {
//    this.subjGameBalanceLst.next(d);
//  }

//  clearGameBalanceLst() {
//    this.subjGameBalanceLst.next();
//  }

//  getGameBalanceLst(): Observable<AllBalance> {
//    return this.subjGameBalanceLst.asObservable();
//  }
//}

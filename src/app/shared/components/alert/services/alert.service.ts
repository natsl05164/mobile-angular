import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//this is alert-emit interface
import { Alert } from '../../../models/alert.interface';
 //[ngClass]="{'danger':type=='danger','info':type=='info','success':type=='success','warning':type=='warning'}">
@Injectable()
export class AlertService {

  resolveAlert ;
  private afterClosed$ = new Promise<void>((resolve, reject) => {
    this.resolveAlert = resolve;
  });
  alertSettings$ = new Subject<Alert>();
  constructor() { }
  create(title: string, type: string, time: number, message: string, details: string): Promise<void>{
    this.alertSettings$.next({
      title,
      type,
      time,
      message,
      details
    });
    return this.afterClosed$;
  }
}

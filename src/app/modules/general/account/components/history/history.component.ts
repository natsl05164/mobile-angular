//import * as moment from 'moment';
import moment from "moment";

import { Component, OnInit,    ChangeDetectionStrategy, Output, EventEmitter   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
//import { AccountService } from '../../../../core/http/account.service';
// import {   Subject} from 'rxjs';
//import { DepositPage } from '../../../../shared/models/deposit-page.model';
//import { tap, startWith, map, catchError } from 'rxjs/operators';

//import { indicate } from '../../../../shared/operators/operators'
 
import { UserAction,TransactionType } from '../../account.constants';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent  {

  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>();

  historyForm: FormGroup;
  isFormSubmitted: boolean = false;
  selected: any;
  ranges: any;

  //invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

  //isInvalidDate = (m: moment.Moment) => {
  //  return this.invalidDates.some(d => d.isSame(m, 'day'))
  //}

  //historyLst: any[];
   displayedColumns: string[];
  isLoadingResults = false;
  isRateLimitReached = false;
  resultsLength: number;
  //loading$ = new Subject<boolean>()

  transactionType= TransactionType;
  private dtNow: moment.Moment = moment();

  constructor() {
     

    this.createForm();
    //console.log(moment.locale());

  
     
    this.ranges = {
      'Today': [this.dtNow, this.dtNow ], 
      'Yesterday': [this.dtNow.subtract(1, 'days'), this.dtNow.subtract(1, 'days')],
      'Last 7 Days': [this.dtNow.subtract(6, 'days'), this.dtNow],
      'Last 30 Days': [this.dtNow.subtract(29, 'days'), this.dtNow],
      'This Month': [this.dtNow.startOf('month'), this.dtNow.endOf('month')],
      'Last Month': [this.dtNow.subtract(1, 'month').startOf('month'), this.dtNow.subtract(1, 'month').endOf('month')]
    }
  }

  createForm() {
    this.historyForm = new FormGroup({
      transaction_type: new FormControl(null, { validators: [Validators.required] }),
      daterange: new FormControl({
        startDate: this.dtNow.format('DD MMM YYYY'),
        endDate: this.dtNow.format('DD MMM YYYY')
      }, { validators: [Validators.required] }), //BankId 
    });

  }

  get transaction_type() { return this.historyForm.get('transaction_type'); }
  get daterange() { return this.historyForm.get('daterange'); }



  onSearchHistory() {
    this.isFormSubmitted = true;
    //console.log(this.historyForm.value);
    if (this.historyForm.valid) {
      let model = {
        transaction_type: parseInt(this.transaction_type.value),
        start_Date: this.daterange.value["startDate"] ,
        end_Date: this.daterange.value["endDate"] ,

      }

      //console.log(model);
      //this.accService.getTransactionHistoryByTypeDate(model).pipe(startWith(() => {
      //  this.isLoadingResults = true;

      //}), map(data => {
      //  this.isLoadingResults = false; this.isRateLimitReached = false;
      //  this.resultsLength = data.length;

      //  return data as any[];
      //}, catchError(() => {

      //  this.isLoadingResults = false;
      //  // Catch if the  API has reached its rate limit. Return empty data.
      //  this.isRateLimitReached = true;
      //  return observableOf([]);
      //}))).subscribe( 
      //    data => {
      //    this.historyLst = data;

      //    this.dataSource = new MatTableDataSource(this.historyLst);
      //      console.log(this.historyLst);
      //      if (this.historyLst && this.historyLst.length>0)
      //        this.displayedColumns = Object.keys(this.historyLst[0]);
      //    }
      //);
      this.onUserAction.emit({ action: UserAction.GetHistory, data: model});
      //this.accService.getTransactionHistoryByTypeDate(model).pipe(indicate(this.loading$)).subscribe(
      //  data => {
      //    this.historyLst = data;

      //    this.dataSource = new MatTableDataSource(this.historyLst);
      //    this.dataSource.paginator = this.paginator;
      //    this.dataSource.sort = this.sort;
      //    //console.log(this.historyLst);
      //    if (this.historyLst && this.historyLst.length > 0) {
      //      this.displayedColumns = Object.keys(this.historyLst[0]);
      //      //console.log(this.displayedColumns);
      //      this.resultsLength = this.historyLst.length;

      //     // console.log(this.displayedColumns.length);
      //    }
      //  }
      //);
    }
    return
  }

 
}

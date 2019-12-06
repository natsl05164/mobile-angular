import { Component, OnInit, ViewChild, Input, SimpleChanges, ChangeDetectionStrategy} from "@angular/core";
 
import { RequestState } from '../../../../../shared/types/request-state';
import { History } from '../../types/history';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {   TransactionStatus   } from '../../account.constants';

@Component({
  selector: 'app-history-results',
  templateUrl: './history-results.component.html',
  styleUrls: ['./history-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryResultsComponent implements OnInit {

  @Input() history: History;
  @Input() requestState: RequestState;
  dataSource: MatTableDataSource<any[]>;
    sort: MatSort;
    paginator: MatPaginator;
    @ViewChild(MatPaginator, { static: false }) set matPaginator(element: MatPaginator) {
        this.paginator = element;
        if (this.paginator) {
            this.dataSource.paginator = this.paginator;

        }

    }
    @ViewChild(MatSort, { static: false }) set matSort(element: MatSort) {
     this.sort = element;
      if (this.sort) {
          this.dataSource.sort = this.sort;

      }
  }
  constructor() {
    this.dataSource = new MatTableDataSource([]);
  }
   
  ngOnInit() {

    if (this.history) {
      // this.historyLst = this.history.historyLst;
      //this.history.historyLst
      //this.dataSource = new MatTableDataSource(this.history.historyLst);
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
   
  getTotal(strPropName) { // if status is success only add
    return this.history.historyLst.map(t => {
      if ((t.hasOwnProperty('Status') && t['Status'] === TransactionStatus.Success) || !t.hasOwnProperty('Status')) {
        return t[strPropName];
      }
      else { return 0; }
    }).reduce((acc, value) => acc + value, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      if (this.history) {
          this.dataSource = new MatTableDataSource(this.history.historyLst);
 
      }
  }
}

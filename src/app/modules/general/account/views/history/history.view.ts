import { Component    } from '@angular/core';
import { HistoryStore } from '../../services/history.store';
import { HistoryBase } from './history.base';
@Component({
  //selector: 'app-history',
  templateUrl: './history.view.html',
  styleUrls: ['./history.view.scss'],
  providers: [HistoryStore]
})
export class HistoryView extends HistoryBase{

  constructor(historyStore: HistoryStore) { 
    super(historyStore);
  }

 
}

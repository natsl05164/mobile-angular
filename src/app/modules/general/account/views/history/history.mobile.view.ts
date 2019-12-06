import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { HistoryStore } from '../../services/history.store';
import { HistoryBase } from './history.base';

import { DialogComponent } from '../../../../../shared/components/dialog/dialog.component'

@Component({
  //selector: 'app-history',
  templateUrl: './history.mobile.view.html',
  styleUrls: ['./history.mobile.view.scss'],
  providers: [HistoryStore]
})
export class HistoryMobileView extends HistoryBase implements AfterViewInit  {

  @ViewChild('detailsModal', { static: false }) detailsModal: DialogComponent;

  constructor(historyStore: HistoryStore) {
    super(historyStore);
  }

  ngAfterViewInit(): void {
    this.historyStore.setDetailsModal(this.detailsModal);
  }
}

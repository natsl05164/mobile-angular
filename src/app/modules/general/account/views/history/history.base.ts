 
import { HistoryStore } from '../../services/history.store';
import { UserAction } from '../../account.constants';
export class HistoryBase  {

  constructor(public historyStore: HistoryStore) { }

  ngOnInit() {
  }

  onUserAction($event) {
    if ($event.action == UserAction.OpenHistoryDetailsInModal) {
      this.historyStore.openDetailsModal($event.data);  
      return;
    }
     
  }

}

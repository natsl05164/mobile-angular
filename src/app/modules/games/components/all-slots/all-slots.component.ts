import { Component, OnInit, Input ,ChangeDetectionStrategy,Output,EventEmitter } from '@angular/core';
import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
import { SlotGamesView } from '../../types/slot-games-view';
import { UserAction } from '../../games.constants';

import GamesUtils from '../../helpers/games.utils';

//import { Slot } from '../../../shared/models/slot.interface';

@Component({
  selector: 'app-all-slots',
  templateUrl: './all-slots.component.html',
  styleUrls: ['./all-slots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AllSlotsComponent implements OnInit {

  @Input() slotGamesView: SlotGamesView;
  @Output() onUserAction = new EventEmitter<{ action: UserAction, data: any }>(); 
  //filterProperty: string = '';
  private _filterProperty: string = '';
  get filterProperty(): string {
    return this._filterProperty;
  }
  set filterProperty(value: string) {
    this._filterProperty = value;
  }
   

  BASE_MEDIA_URL: string = BASE_MEDIA_URL;
  constructor() {
    //console.log('all-slots');
    //console.log(this.route.snapshot.params['type']);
    // console.log(this.route.snapshot.params['gameID']);
    //let strGameID= this.route.snapshot.params['gameID'];

    //this.gameSvc.getAllSlotGamesView({
    //  Type: 'slots',
    //  GameID: strGameID

    //}).toPromise().then(data => {
    //  //console.log(data);
    //  this.slotGamesContent = data;
    //});


  }

  ngOnInit() {

    //console.log(this.route.snapshot.params['gameName']); // works first time only
    //console.log(this.route.snapshot.params['type']); // works first time only
    /** For later use, updates everytime you change route*/
    //this.route.params.subscribe((params) => { console.log(params['gameName']) });

  }
 
  filterSlot(slot, filterProperty) {
    //if (!filterProperty) return true;

    //return slot[filterProperty] == true;

    return GamesUtils.filterSlot(slot, filterProperty);
  }



  loadGame(e, link) {

    //TODO call ajax to get game link
    e.stopPropagation();
    e.preventDefault();
    this.onUserAction.emit({ action: UserAction.LoadGame, data: link });
   
  }
}

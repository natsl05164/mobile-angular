import {
  Component, OnInit ,
  AfterViewInit, } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SlotGamesStore } from '../../services/slot-games.store';
import { GamesEndpoint } from '../../services/games.endpoint'; 
  
import { UserStore } from '../../../../core/user/services/user.store'

import { AlertService } from '../../../../shared/components/alert/services/alert.service'; 
import { SubGamesBase } from './sub-games.base';


 
@Component({
  //selector: 'app-sub-games',
  templateUrl: './sub-games.view.html',
  styleUrls: ['./sub-games.view.scss'],
  providers: [SlotGamesStore, GamesEndpoint]
})
export class SubGamesView extends SubGamesBase implements OnInit, AfterViewInit {
   
  constructor(route: ActivatedRoute, store: SlotGamesStore, userStore: UserStore, alertSvc: AlertService) {
   super(route, store, userStore, alertSvc);
  }
   
}

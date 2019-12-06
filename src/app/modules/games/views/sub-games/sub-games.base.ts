import {
   ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SlotGamesStore } from '../../services/slot-games.store';
 
import { UserAction } from '../../games.constants';
  
import { UserStore } from '../../../../core/user/services/user.store'; 
import { AlertService } from '../../../../shared/components/alert/services/alert.service';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
 
 
export abstract class SubGamesBase  {
  gameWindow: Window = {} as Window;
 

  @ViewChild('detailsModal', { static: false }) detailsModal: DialogComponent;
  constructor(private route: ActivatedRoute, public store: SlotGamesStore, private userStore: UserStore,
    private alertSvc: AlertService) {
    const strGameSubCategory= this.route.snapshot.params['gameID'];
    this.store.init(strGameSubCategory);
    this.store.reloadGamesView();
  }


  ngOnInit() {
    this.gameWindow.onbeforeunload = ()=> {
      this.gameWindow = {} as Window;;
    };
  }

  ngAfterViewInit(): void {
    this.store.setDetailsModal(this.detailsModal);
  }
  onUserAction($event) {
    if ($event.action == UserAction.LoadGame) {
      this.loadGame($event.data); //string PlayLink or TryLink
      return;
    }

    if ($event.action == UserAction.ShowGameLinks) {
      this.showGameLinks($event.data); //data object PlayLink and TryLink
      return; 
    } 
  }

  private showGameLinks(objGame) {

    //if (!this.userStore.isLogin()) {
    //  this.alertSvc.create(
    //    "Warning!", //title
    //    "warning", //type
    //    2000, // time
    //    "Please login to continue",
    //    ""
    //  );
    //  return;
    //}

    this.store.openDetailsModal(objGame);
  }

  private loadGame(link:string) {
    if (!this.userStore.isLogin()) {
      this.alertSvc.create(
        "Warning!", //title
        "warning", //type
       2000, // time
        "Please login to continue",
        ""
      );
      return;
    }
    //link = 'pp_launch?game_id=vs20rome';
    var agentCode = "jacbets"; //TODO Window NAME ,TO test if gamewindow from another Slot Game 
     
    if (typeof this.gameWindow === 'undefined' || this.gameWindow == null || this.gameWindow.closed || !this.gameWindow.hasOwnProperty('location')) {
      this.gameWindow = window.open(link, agentCode + '_gameWindow', 'toolbar=0,width=1200,height=750');
      this.gameWindow.focus();
    }
    else {
      if (confirm("A game has been opened. Would you still like to proceed?")) {
        this.gameWindow = window.open(link, agentCode + '_gameWindow', 'toolbar=0,width=1200,height=750');
        this.gameWindow.focus();
      }
    } 
  }
  
}

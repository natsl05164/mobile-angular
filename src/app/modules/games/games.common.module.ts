import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; /*TODO*/
import { RouterModule } from '@angular/router'; 

//import { SharedModule } from '../../shared/shared.module'; 
import { MainGames2Component } from './components/main-games2/main-games2.component';
import { MainGames3Component } from './components/main-games3/main-games3.component'; 


import { Jackpot2Component } from './components/jackpot2/jackpot2.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameFrameComponent } from './components/game-frame/game-frame.component';
import { MaintenanceSignComponent } from './components/maintenance-sign/maintenance-sign.component';

import { GameFrameView } from './views/game-frame/game-frame.view'; 
const BASE_MODULES = [CommonModule,

  SharedModule];
const COMPONENTS = [ 
  MainGames2Component,
  MainGames3Component, 
  Jackpot2Component,
    GameDetailsComponent, GameFrameComponent, MaintenanceSignComponent, GameFrameView];


@NgModule({
  imports: [
        ...BASE_MODULES,
        RouterModule//xl TODO temp solution, already exported in routing module DAMN it 
  ],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [
    ...COMPONENTS 
    
  ]
})
export class GamesCommonModule {

}

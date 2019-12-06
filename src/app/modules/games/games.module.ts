import { NgModule } from '@angular/core';
 
import { GamesRoutingModule } from './games-routing.module';
import { GamesCommonModule } from './games.common.module';
import { MainGames1Component } from './components/main-games1/main-games1.component'; 
import { AllSlotsComponent } from './components/all-slots/all-slots.component';

@NgModule({
  imports: [
    GamesCommonModule,
    GamesRoutingModule
  ],
  declarations: [
    MainGames1Component, 
    AllSlotsComponent,
    GamesRoutingModule.views, 
  ]
})
export class GamesModule {
   
}

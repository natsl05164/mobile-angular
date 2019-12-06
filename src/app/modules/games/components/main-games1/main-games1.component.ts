import { Component, Input } from '@angular/core';
import { GamesView } from '../../types/games-view';

import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
//import { AlertService } from '../../../shared/components/alert/services/alert.service';
@Component({
  selector: 'app-main-games1',
  templateUrl: './main-games1.component.html',
  styleUrls: ['./main-games1.component.scss'] 
})
export class MainGames1Component  {
  BASE_MEDIA_URL: string = BASE_MEDIA_URL; 
  @Input() gamesView: GamesView;
  constructor() {
 
  }

 
  //trigerAlert() { 
  //  //your code goes here
  //  //It may http request
  //  //or any other
  //  //So you can use this alert service any where in your application
  //  this.alertSvc.create(
  //    "success!", //title
  //    "warning", //type
  //    5000, // time
  //    "Ops, something occurred.",
  //    "Error Message : " + "reason" 
  //  );
  //}

}

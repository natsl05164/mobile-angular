import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';
import { NewGames } from '../../types/new-games';
import { BASE_MEDIA_URL, BASE_MEDIA_URL_MOBILE } from '../../../../../configs/app.constants';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewGamesComponent implements OnInit {
  @Input() newGames: NewGames;
  @Input() isMobile: boolean;
  BASE_MEDIA_URL: string;
  constructor() {
    this.BASE_MEDIA_URL = this.isMobile ? BASE_MEDIA_URL_MOBILE : BASE_MEDIA_URL;
  }

  ngOnInit() {
  }

  //get runChangeDetection() {
  //  console.log('NewGamesComponent - Checking the view');
  //  return true;
  //}
}

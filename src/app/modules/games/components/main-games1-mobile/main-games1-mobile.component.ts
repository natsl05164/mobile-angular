import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';
import { GamesView } from '../../types/games-view';
import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-games1-mobile',
  templateUrl: './main-games1-mobile.component.html',
  styleUrls: ['./main-games1-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGames1MobileComponent implements OnInit {
  BASE_MEDIA_URL: string = BASE_MEDIA_URL;
  @Input() gamesView: GamesView;
  constructor(public router: Router) { }

  ngOnInit() {
 
  }

  showSubGames(id) {
    //[{ outlets: { mobileSubGames: ['test'] } }]
    this.router.navigate(['/games/slots',{ outlets: { 'mobileSubGames': [id] } }]);
  }
}

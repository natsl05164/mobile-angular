import { Component, Input, SimpleChanges} from '@angular/core'; 
import { GamesView } from '../../types/games-view';

import { BASE_MEDIA_URL } from '../../../../configs/app.constants';
@Component({
  selector: 'app-main-games2',
  templateUrl: './main-games2.component.html',
  styleUrls: ['./main-games2.component.scss']
})
export class MainGames2Component {
    @Input() gamesView: GamesView = {} as GamesView;
    BASE_MEDIA_URL = BASE_MEDIA_URL;
  public pagiContentArr: Array<any> = [ 
  ];
  //public lstSports: Array<any> =
  //  [
  //    {
  //      href:'',
  //      imgUrl: 'http://aurinkokunta.net/image/demo_assets/sbo/sports/sports_sbo.png',
  //      title: 'a-sports',
  //      description: 'Nikmati odds terbaik di berbagai pertandingan yang di sajikan dengan pengalaman yang berbeda'
  //    }, {
  //      href: '',
  //      imgUrl: 'http://aurinkokunta.net/image/demo_assets/sbo/sports/sports_sbo.png',
  //      title: 'b-sports',
  //      description: 'Nikmati odds terbaik di berbagai pertandingan yang di sajikan dengan pengalaman yang berbeda'
  //    }, {
  //      href: '',imgUrl: 'http://aurinkokunta.net/image/demo_assets/sbo/sports/sports_sbo.png',
  //      title: 'c-sports',
  //      description: 'Nikmati odds terbaik di berbagai pertandingan yang di sajikan dengan pengalaman yang berbeda'
  //    }, {
  //      href: '',imgUrl: 'http://aurinkokunta.net/image/demo_assets/sbo/sports/sports_sbo.png',
  //      title: 'd-sports',
  //      description: 'Nikmati odds terbaik di berbagai pertandingan yang di sajikan dengan pengalaman yang berbeda'
  //    }];
  constructor( ) { }
  

  //ngOnInit() {
  // // this.route.data.subscribe(data => console.log(data['gameCategory']));


  //  this.route.url.subscribe(params => {
  //    //console.log(params);
  //    //console.log(params[0].path);
  //  })


  //  //for (let i = 0; i < this.lstSports.length; i++) {
  //  //  let t = `<div class="pt-5"><h1>${this.lstSports[i].title}</h1></div>
  //  //   <div><h3>${this.lstSports[i].description}<h3></div>
  //  //   <a class="mt-2 btn btn-primary" href="${this.lstSports[i].href}">PLAY NOW</a>`;
  //  //  this.pagiContentArr.push(t); 
  //  //}
  //}
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
      if (changes['gamesView'] && this.gamesView) { 
      const games: any[] = this.gamesView.Games;
      for (let i = 0; i < games.length; i++) {
        let t = `<div class="pt-5"><h1>${games[i].Name}</h1></div>
       <div><h3>${games[i].Description}<h3></div>
       <a class="mt-2 btn btn-primary" href="${games[i].PlayLink}">PLAY NOW</a>`;
        this.pagiContentArr.push(t); 
      }
    }
  }

}

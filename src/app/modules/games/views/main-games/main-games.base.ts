 
import { ActivatedRoute } from "@angular/router";

import { GamesStore } from '../../services/games.store'; 
 
export abstract class MainGamesBase {
  intTemplate: number = 0;

  constructor(private route: ActivatedRoute, public store: GamesStore) {
    this.route.data.subscribe((data) => {
      //console.log(data); // this is returning an empty object {}
      const strGameCategory: string = data['gameCategory'];
      this.intTemplate = data['template'];
      this.store.init(strGameCategory);
      this.store.reloadGamesView();

    });

    //**Promise doesn't work for route observable
    //this.route.data.toPromise().then(data => { 
    //  const strGameCategory: string = data['gameCategory'];
    //  this.intTemplate = data['template'];
    //  this.store.init(strGameCategory);

    //}); 
  }
   
}

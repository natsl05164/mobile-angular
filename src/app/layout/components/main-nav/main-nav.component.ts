import { Component, Input, ChangeDetectionStrategy } from '@angular/core'; 
import { BASE_MEDIA_URL } from '../../../configs/app.constants'
import { MainNavMenu } from '../../types/main-nav-menu';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavComponent {
  @Input() arrMenu: MainNavMenu[];
  BASE_MEDIA_URL: string = BASE_MEDIA_URL; 
  //arrMenu: Array<any> = [{
  //  MenuTitle: "SPORTS",
  //  RoutePath:"",
  //  Rows: [{
  //    Items: [{
  //      Name: "sbo-Sports",
  //      FlexGrow: 1,
  //      Href: "sb",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_sbo_sports.png"

  //    },
  //    {
  //      Name: "a-Sports",
  //      FlexGrow: 1,
  //      Href: "http://www.jacbets.com/i-sports",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_sports_i.png"
  //    },
  //    {
  //      Name: "c-Sports",
  //      FlexGrow: 1,
  //      Href: "http://www.jacbets.com/c-sports",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_sports_c.png"
  //    } 

  //    ]

  //  }
  //  ]
  //},
  //{
  //  MenuTitle: "CASINO",
  //  RoutePath: "",
  //  Rows: [{
  //    Items: [{
  //      Name: "SBO Casino",
  //      FlexGrow: 1,
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_sbo.png",
  //      Href: ""
  //    }, {
  //      Name: "Opus Casino",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_opus.png"
  //    }, {
  //      Name: "GamePlay Casino",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_gp.png"
  //    }, {
  //      Name: "Evolution Casino",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_evo.png"
  //    }, {
  //      Name: "Ebet Casino",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_ebet.png"
  //    }, {
  //      Name: "Asia Gaming",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_ag.png"
  //    }, {
  //      Name: "All Bet Casino",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_ab.png"
  //    }]
  //  }, {
  //    Items: [{
  //      Name: "Playtech Casino",
  //      FlexGrow: 1,
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_pt.png",
  //      Href: ""
  //    }, {
  //      Name: "Microgaming",
  //      FlexGrow: 1,
  //      Href: "",
  //      ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_livecasino_mg.png"
  //      }, {
  //        Name: "o-Sports",
  //        FlexGrow: 1,
  //        Href: "http://www.jacbets.com/o-sports",
  //        ImgUrl: "http://www.aurinkokunta.net/babysitetheme/imagesbank/default/website/dropdown/dropdown_sports_o.png"
  //      }
  //      , {
  //        Name: "",
  //        FlexGrow: 1,
  //        Href: "",
  //        IsDisabled: true,
  //        ImgUrl: ""
  //      }
  //      , {
  //        Name: "",
  //        FlexGrow: 1,
  //        Href: "",
  //        IsDisabled: true,
  //        ImgUrl: ""
  //      }
  //      , {
  //        Name: "",
  //        FlexGrow: 1,
  //        Href: "",
  //        IsDisabled: true,
  //        ImgUrl: ""
  //      }, {
  //        Name: "",
  //        FlexGrow: 1,
  //        Href: "",
  //        IsDisabled: true,
  //        ImgUrl: ""
  //      }]
  //  }]
  //}
  //];
  constructor() {


  }

  

}

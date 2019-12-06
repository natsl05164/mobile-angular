import { Component, OnInit,Input } from '@angular/core';
import { SocialHandles } from '../../../../../shared/types/social-handles';
@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {
  @Input() socialHandles: SocialHandles;

  arrProductInfo: Array<any> = [];
  arrMemberService: Array<any>;

  constructor() {


    let arrProducts = [{ name: "Keno", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LIVE CASINO", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "SUPER BULL", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LOTTO", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LOTTO", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LOTTO", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LOTTO", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LOTTO", info: "Non-stop fun & excitement every 3-5 mins" }
      , { name: "LOTTO", info: "Non-stop fun & excitement every 3-5 mins" }
    ];

    for (let i = 0; i < arrProducts.length; i++) {

      this.arrProductInfo.push(`<a class="d-block mb-3 pointer text-left"><h4 class="mb-0">${arrProducts[i].name}</h4><div class="text-t500">${arrProducts[i].info}</div></a>`);
    }


    
  }

  ngOnInit() {
    this.arrMemberService = [

      `<a class="d-block clearfix  mb-3" href="${this.socialHandles.LiveChatUrl}" target="_blank">
        <div class="row no-gutters text-center text-lg-left">
	      <h2 class="col-12 col-lg-3">
		      <i class="icon-chat"></i>
	      </h2>
	      <div class="col-12 col-lg-6 mobile-text">
		      <h5 class="mb-0 text-primary">LIVE CHAT</h5>
		      <div>Click here</div>
	      </div>
      </div>
      </a>`,
      `<a class="d-block clearfix  mb-3" href="skype:${this.socialHandles.SkypeName}") ">
        <div class="row no-gutters text-center text-lg-left">
	      <h2 class="col-12 col-lg-3"  >
	      <i class="icon-skype"></i>
	      </h2>
	      <div  class="col-12 col-lg-6 mobile-text"> 
	        <h5 class="mb-0 text-primary">SKYPE</h5>
		      <div>${this.socialHandles.SkypeName}</div>
	      </div>
      </div>
      </a>`,
      `<div class="d-block clearfix  mb-3">
        <div class="row no-gutters text-center text-lg-left">
	      <h2 class="col-12 col-lg-3"  >
	      <i class="icon-wechat"></i>
	      </h2>
	      <div  class="col-12 col-lg-6 mobile-text"> 
          <h5 class="mb-0 text-primary">WECHAT</h5>
		      <div>${this.socialHandles.WeChatName}</div>
	      </div>
      </div>
      </a>`,
      `<div class="d-block clearfix  mb-3"  >
        <div class="row no-gutters text-center text-lg-left">
	      <h2 class="col-12 col-lg-3" >
      <i class="icon-telegram"></i>
	      </h2>
	      <div  class="col-12 col-lg-6 mobile-text"> 
          <h5 class="mb-0 text-primary">TELEGRAM</h5>
		      <div>${this.socialHandles.TelegramName}</div>
	      </div>
      </div>
      </div>`,
      `<div class="d-block clearfix  mb-3" >
        <div class="row no-gutters text-center text-lg-left">
	      <h2 class="col-12 col-lg-3"  >
		      <i class="icon-phone"></i>
	      </h2>
	      <div  class="col-12 col-lg-6 mobile-text"> 
        <h5 class="mb-0 text-primary">HOTLINE</h5>
		      <div>${this.socialHandles.HotlineName}</div>
	      </div>
      </div>
      </a>`];
  }


}

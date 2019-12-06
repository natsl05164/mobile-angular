import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  lstMemberBenefits: Array<object> =
    [{
      Title: '<a href="#">150% Welcome Bonus up to MYR 600</a>',
      Details: ['- Bonus code for a-SPORTS: WC150SBA', '- Bonus code for a-SPORTS: WC150SBA']
    },
      {
        Title: '<a href="#">Daily Reload 10%, x3 Time Rollover Only<a/>',
        Details: ['- Bonus Code for e-SPORTS: WC18SB2R']
      },
      {
        Title: '<a href="#">Earn freebets by simply validating your Account Safety with accurate information **</a>',
        Details: null
      },
      {
        Title: 'Speedy deposit and withdrawal with multiple depositing options',
        Details: null
      },
    ];

  constructor( ) {

    
  }

  

  ngOnInit() {
  
    
  }

}

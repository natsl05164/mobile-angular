import { Component, OnInit } from '@angular/core';
import { WebsiteData } from '../../../../../shared/models/website-data.interface';
@Component({
  selector: 'app-faq-withdrawal',
  templateUrl: './faq-withdrawal.component.html',
  styleUrls: ['./faq-withdrawal.component.scss']
})
export class FaqWithdrawalComponent implements OnInit {
  websiteData: WebsiteData = {} as WebsiteData;  //TODO
  constructor() { }

  ngOnInit() {
    
    this.websiteData.WebTitle = 'JACBET';
    this.websiteData.CurrenyCode = 'MYR';
    this.websiteData.CurrenyName = 'Malaysian Ringgit';
  }

}

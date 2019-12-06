import { Component, OnInit } from '@angular/core';
import { WebsiteData } from '../../../../../shared/models/website-data.interface';
@Component({
  selector: 'app-faq-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class FaqDepositComponent implements OnInit {
  websiteData: WebsiteData = {} as WebsiteData;  //TODO
  constructor() { }

  ngOnInit() {

    this.websiteData.WebTitle = 'JACBET';
    this.websiteData.CurrenyCode = 'MYR';
    this.websiteData.CurrenyName = 'Malaysian Ringgit';
  }

}

import { Component, OnInit } from '@angular/core';
import { WebsiteData } from '../../../../../shared/models/website-data.interface';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  websiteData: WebsiteData = {} as WebsiteData;  //TODO
  constructor() { }

  ngOnInit() {
    this.websiteData.WebTitle = 'JACBET';
    this.websiteData.CurrenyCode = 'MYR';
    this.websiteData.CurrenyName = 'Malaysian Ringgit';
  }

}

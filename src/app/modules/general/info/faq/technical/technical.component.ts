import { Component, OnInit } from '@angular/core';
import { WebsiteData } from '../../../../../shared/models/website-data.interface';
@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
  websiteData: WebsiteData = {} as WebsiteData;  //TODO
  constructor() { }

  ngOnInit() {
    this.websiteData.WebTitle = 'JACBET';
    this.websiteData.CurrenyCode = 'MYR';
    this.websiteData.CurrenyName = 'Malaysian Ringgit';
  }

}

import { Component, OnInit } from '@angular/core';
import { WebsiteData } from '../../../../../shared/models/website-data.interface';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
 

  websiteData: WebsiteData = {} as WebsiteData; //TODO

  constructor() { }

  ngOnInit() {

    this.websiteData.WebTitle = 'JACBET';
    this.websiteData.CurrenyCode = 'MYR';
    this.websiteData.CurrenyName = 'Malaysian Ringgit';
  }

}

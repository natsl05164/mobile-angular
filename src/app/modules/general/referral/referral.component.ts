import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {
  BASE_MEDIA_URL: string = '/assets/images/';//TODO to make constant service
     
  constructor() { }

  ngOnInit() {
  }

}

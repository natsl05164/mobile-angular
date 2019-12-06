import { Component, OnInit } from '@angular/core';
import { ProfileBase } from './profile.base';
@Component({ 
  templateUrl: './profile.view.html',
  styleUrls: ['./profile.view.scss']
})
export class ProfileView extends ProfileBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}

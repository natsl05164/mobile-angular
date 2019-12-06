import { Component, OnInit } from '@angular/core';
import { Languages } from '../../languages';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-landing',
    templateUrl: './app-landing.view.html',
    styleUrls: ['./app-landing.view.scss']
})
export class AppLandingView implements OnInit {
   languages = Languages;
    constructor(private router: Router) { }

  ngOnInit() {
  }

    navigateTo(countryCode :string, langCode:string) {
        this.router.navigate(["app",  
          countryCode,   langCode ]);
    }
}

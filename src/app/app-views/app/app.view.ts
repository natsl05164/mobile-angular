import { Component, OnInit } from '@angular/core';
 
import { ApplicationStateService } from '../../core/app-state/application-state.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-view',
  templateUrl: './app.view.html',
    styleUrls: ['./app.view.scss']
})
export class AppView implements OnInit {

    constructor(private route: ActivatedRoute, private appState: ApplicationStateService) {

        appState.countryCode = route.snapshot.params["country-code"];
        appState.langCode = route.snapshot.params["lang-code"];
    }

  ngOnInit() {
  }

}

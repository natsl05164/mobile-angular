//import { fade } from './../animations';
import { Component, OnInit, Input ,ChangeDetectionStrategy } from '@angular/core';
 
@Component({
  selector: 'app-site-ann',
    templateUrl: './site-ann.component.html',
    styleUrls: ['./site-ann.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  //animations: [ ]
})
export class SiteAnnComponent implements OnInit {
     
    private _announcement: string;
    private _isError: boolean;

    @Input() set announcement(value: string) {
        this._announcement = value;
    }

    get announcement() {
        return this._announcement;
    }

    @Input() set isError(value: boolean) {
        this._isError = value;
    }

    get isError() {
        return this._isError;
    }


  constructor() {
        
  }

  ngOnInit() { 
  }


 
}

import { Component, OnInit ,Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-game-frame',
  templateUrl: './game-frame.component.html',
    styleUrls: ['./game-frame.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class GameFrameComponent implements OnInit {
    
    private _url: string;

    @Input()
    set url(value: string) { 
        this._url = value; 
    }
    get url() {
        
        return this._url;
    }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppSettingsService } from '../../../../app-settings/services/app-settings.service';
@Component({
    selector: 'app-game-app-guide',
    templateUrl: './game-app-guide.component.html',
    styleUrls: ['./game-app-guide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameAppGuideComponent implements OnInit {
    private _gamePrefix: string; 
    @Input() set gamePrefix(value: string) {
        this._gamePrefix = value;
    }

    get gamePrefix() {
        return this._gamePrefix;
    }

    public WebTitle: string = "";
    constructor(private appSettingsService: AppSettingsService) {

        this.WebTitle = this.appSettingsService.websiteData.WebTitle;
    }

    ngOnInit() {
    }

}

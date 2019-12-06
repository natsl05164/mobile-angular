import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-jackpot',
    templateUrl: './jackpot.component.html',
    styleUrls: ['./jackpot.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JackpotComponent implements OnInit  {

    private _jackpotAmount: string;
    private _isError: boolean;

    @Input() set jackpotAmount(value: string) {
        this._jackpotAmount = value;
    }

    get jackpotAmount() {
        return this._jackpotAmount;
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

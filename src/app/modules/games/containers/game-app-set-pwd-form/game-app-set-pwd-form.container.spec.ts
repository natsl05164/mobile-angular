import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppSetPwdFormContainer } from './game-app-set-pwd-form.container';

describe('GameAppSetPwdFormContainer', () => {
    let component: GameAppSetPwdFormContainer;
    let fixture: ComponentFixture<GameAppSetPwdFormContainer>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GameAppSetPwdFormContainer]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameAppSetPwdFormContainer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

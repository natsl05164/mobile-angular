import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppLoginView } from './game-app-login.view';

describe('GameAppLoginView', () => {
    let component: GameAppLoginView;
    let fixture: ComponentFixture<GameAppLoginView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [GameAppLoginView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(GameAppLoginView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFrameView } from './game-frame.view';

describe('GameFrameView', () => {
    let component: GameFrameView;
    let fixture: ComponentFixture<GameFrameView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [GameFrameView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(GameFrameView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMenuModalComponent } from './game-menu-modal.component';

describe('GameMenuModalComponent', () => {
  let component: GameMenuModalComponent;
  let fixture: ComponentFixture<GameMenuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMenuModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppGuideComponent } from './game-app-guide.component';

describe('GameAppGuideComponent', () => {
    let component: GameAppGuideComponent;
    let fixture: ComponentFixture<GameAppGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [GameAppGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(GameAppGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

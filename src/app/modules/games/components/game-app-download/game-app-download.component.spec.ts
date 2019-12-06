import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppDownloadComponent } from './game-app-download.component';

describe('GameAppDownloadComponent', () => {
    let component: GameAppDownloadComponent;
    let fixture: ComponentFixture<GameAppDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [GameAppDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(GameAppDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGamesView } from './main-games.view';

describe('MainGamesView', () => {
  let component: MainGamesView;
  let fixture: ComponentFixture<MainGamesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainGamesView]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGamesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

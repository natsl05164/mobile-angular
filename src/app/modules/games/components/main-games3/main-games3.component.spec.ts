import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGames3Component } from './main-games3.component';

describe('MainGames3Component', () => {
  let component: MainGames3Component;
  let fixture: ComponentFixture<MainGames3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGames3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGames3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

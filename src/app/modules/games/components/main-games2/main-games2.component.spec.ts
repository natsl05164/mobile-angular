import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGames2Component } from './main-games2.component';

describe('MainGames2Component', () => {
  let component: MainGames2Component;
  let fixture: ComponentFixture<MainGames2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGames2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGames2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

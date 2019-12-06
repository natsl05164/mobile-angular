import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGames1Component } from './main-games1.component';

describe('MainGames1Component', () => {
  let component: MainGames1Component;
  let fixture: ComponentFixture<MainGames1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGames1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGames1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

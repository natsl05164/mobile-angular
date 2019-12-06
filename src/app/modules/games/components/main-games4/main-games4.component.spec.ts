import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGames4Component } from './main-games4.component';

describe('MainGames4Component', () => {
  let component: MainGames4Component;
  let fixture: ComponentFixture<MainGames4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGames4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGames4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

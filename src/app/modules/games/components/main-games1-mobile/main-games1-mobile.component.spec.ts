import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGames1MobileComponent } from './main-games1-mobile.component';

describe('MainGames1MobileComponent', () => {
  let component: MainGames1MobileComponent;
  let fixture: ComponentFixture<MainGames1MobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGames1MobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGames1MobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

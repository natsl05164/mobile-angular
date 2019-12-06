import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavMobileComponent } from './main-nav-mobile.component';

describe('MainNavMobileComponent', () => {
  let component: MainNavMobileComponent;
  let fixture: ComponentFixture<MainNavMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

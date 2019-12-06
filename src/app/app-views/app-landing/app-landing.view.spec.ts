import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingView } from './app-landing.view';

describe('AppLandingView', () => {
    let component: AppLandingView
    let fixture: ComponentFixture<AppLandingView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AppLandingView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(AppLandingView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

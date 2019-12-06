import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppView } from './app.view';

describe('AppView', () => {
    let component: AppView;
    let fixture: ComponentFixture<AppView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AppView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(AppView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

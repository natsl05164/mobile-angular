import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwdView } from './reset-pwd.view';

describe('ResetPwdView', () => {
  let component: ResetPwdView;
  let fixture: ComponentFixture<ResetPwdView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPwdView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPwdView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

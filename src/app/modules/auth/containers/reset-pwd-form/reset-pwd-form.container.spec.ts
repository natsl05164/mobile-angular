import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwdFormContainer } from './reset-pwd-form.container';

describe('ResetPwdFormContainer', () => {
  let component: ResetPwdFormContainer;
  let fixture: ComponentFixture<ResetPwdFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPwdFormContainer]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPwdFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

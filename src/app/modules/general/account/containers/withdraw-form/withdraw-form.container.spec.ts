import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFormContainer } from './withdraw-form.container';

describe('WithdrawFormContainer', () => {
  let component: WithdrawFormContainer;
  let fixture: ComponentFixture<WithdrawFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

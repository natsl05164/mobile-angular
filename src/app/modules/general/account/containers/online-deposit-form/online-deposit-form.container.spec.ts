import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDepositFormContainer } from './online-deposit-form.container';

describe('OnlineDepositFormContainer', () => {
  let component: OnlineDepositFormContainer;
  let fixture: ComponentFixture<OnlineDepositFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineDepositFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDepositFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

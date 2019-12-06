import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDepositFormContainer } from './direct-deposit-form.container';

describe('DirectDepositFormContainer', () => {
  let component: DirectDepositFormContainer;
  let fixture: ComponentFixture<DirectDepositFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectDepositFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectDepositFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

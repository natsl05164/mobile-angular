import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositView } from './deposit.view';

describe('DepositView', () => {
  let component: DepositView;
  let fixture: ComponentFixture<DepositView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepositView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

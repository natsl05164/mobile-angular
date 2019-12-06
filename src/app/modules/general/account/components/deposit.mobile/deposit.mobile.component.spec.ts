import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositMobileComponent } from './deposit.mobile.component';

describe('DepositMobileComponent', () => {
  let component: DepositMobileComponent;
  let fixture: ComponentFixture<DepositMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepositMobileComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

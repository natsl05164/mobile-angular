import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqWithdrawalComponent } from './faq-withdrawal.component';

describe('FaqWithdrawalComponent', () => {
  let component: FaqWithdrawalComponent;
  let fixture: ComponentFixture<FaqWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

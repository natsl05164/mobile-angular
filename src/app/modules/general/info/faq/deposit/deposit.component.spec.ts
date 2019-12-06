import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDepositComponent } from './deposit.component';

describe('FaqDepositComponent', () => {
  let component: FaqDepositComponent;
  let fixture: ComponentFixture<FaqDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

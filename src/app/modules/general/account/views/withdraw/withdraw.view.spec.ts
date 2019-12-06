import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawView } from './withdraw.view';

describe('WithdrawView', () => {
  let component: WithdrawView;
  let fixture: ComponentFixture<WithdrawView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

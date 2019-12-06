import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormContainer } from './transfer-form.container';

describe('TransferFormContainer', () => {
  let component: TransferFormContainer;
  let fixture: ComponentFixture<TransferFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

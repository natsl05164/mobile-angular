import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferView } from './transfer.view';

describe('TransferView', () => {
  let component: TransferView;
  let fixture: ComponentFixture<TransferView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryView } from './history.view';

describe('HistoryView', () => {
  let component: HistoryView;
  let fixture: ComponentFixture<HistoryView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryResultsMobileComponent } from './history-results.mobile.component';

describe('HistoryResultsMobileComponent', () => {
  let component: HistoryResultsMobileComponent;
  let fixture: ComponentFixture<HistoryResultsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryResultsMobileComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryResultsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSlotsComponent } from './all-slots.component';

describe('AllSlotsComponent', () => {
  let component: AllSlotsComponent;
  let fixture: ComponentFixture<AllSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

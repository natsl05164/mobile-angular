import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSlotsMobileComponent } from './all-slots-mobile.component';

describe('AllSlotsMobileComponent', () => {
  let component: AllSlotsMobileComponent;
  let fixture: ComponentFixture<AllSlotsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSlotsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSlotsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

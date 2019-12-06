import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutAmountButtonsComponent } from './shortcut-amount-buttons.component';

describe('ShortcutAmountButtonsComponent', () => {
  let component: ShortcutAmountButtonsComponent;
  let fixture: ComponentFixture<ShortcutAmountButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutAmountButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutAmountButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

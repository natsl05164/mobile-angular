import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutLinksComponent } from './shortcut-links.component';

describe('ShortcutLinksComponent', () => {
  let component: ShortcutLinksComponent;
  let fixture: ComponentFixture<ShortcutLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

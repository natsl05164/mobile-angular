import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppLoginDetailsComponent } from './mobile-app-login-details.component';

describe('MobileAppLoginDetailsComponent', () => {
  let component: MobileAppLoginDetailsComponent;
  let fixture: ComponentFixture<MobileAppLoginDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppLoginDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppLoginDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

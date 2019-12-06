import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSignComponent } from './maintenance-sign.component';

describe('MaintenanceSignComponent', () => {
  let component: MaintenanceSignComponent;
  let fixture: ComponentFixture<MaintenanceSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

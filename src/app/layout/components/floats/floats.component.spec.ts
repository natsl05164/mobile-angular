import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatsComponent } from './floats.component';

describe('FloatsComponent', () => {
  let component: FloatsComponent;
  let fixture: ComponentFixture<FloatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

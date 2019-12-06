import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormContainer } from './register-form.container';

describe('RegisterFormContainer', () => {
  let component: RegisterFormContainer;
  let fixture: ComponentFixture<RegisterFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

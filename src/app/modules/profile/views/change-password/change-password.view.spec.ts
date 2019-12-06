import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordView} from './change-password.view';

describe('ChangePasswordView', () => {
  let component: ChangePasswordView;
  let fixture: ComponentFixture<ChangePasswordView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordView]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

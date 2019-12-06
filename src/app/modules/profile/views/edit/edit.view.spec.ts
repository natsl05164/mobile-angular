import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditView } from './edit.view';

describe('EditView', () => {
  let component: EditView;
  let fixture: ComponentFixture<EditView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditView]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

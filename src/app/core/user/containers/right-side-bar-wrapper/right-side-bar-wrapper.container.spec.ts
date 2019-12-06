import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBarWrapperContainer } from './right-side-bar-wrapper.container';

describe('RightSideBarWrapperContainer', () => {
    let component: RightSideBarWrapperContainer;
    let fixture: ComponentFixture<RightSideBarWrapperContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [RightSideBarWrapperContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(RightSideBarWrapperContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

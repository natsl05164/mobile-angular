import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAnnComponent } from './site-ann.component';

describe('SiteAnnComponent', () => {
    let component: SiteAnnComponent;
    let fixture: ComponentFixture<SiteAnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SiteAnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(SiteAnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

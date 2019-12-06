import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGamesView } from './sub-games.view';

describe('SubGamesView', () => {
  let component: SubGamesView;
  let fixture: ComponentFixture<SubGamesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubGamesView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGamesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

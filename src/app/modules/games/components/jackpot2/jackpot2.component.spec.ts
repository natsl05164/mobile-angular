import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jackpot2Component } from './jackpot2.component';

describe('Jackpot2Component', () => {
  let component: Jackpot2Component;
  let fixture: ComponentFixture<Jackpot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jackpot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jackpot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

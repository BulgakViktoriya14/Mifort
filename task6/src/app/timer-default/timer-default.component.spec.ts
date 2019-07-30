import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDefaultComponent } from './timer-default.component';

describe('TimerDefaultComponent', () => {
  let component: TimerDefaultComponent;
  let fixture: ComponentFixture<TimerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

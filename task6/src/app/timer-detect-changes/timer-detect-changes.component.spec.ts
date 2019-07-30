import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerChangeDetectorComponent } from './timer-change-detector.component';

describe('TimerChangeDetectorComponent', () => {
  let component: TimerChangeDetectorComponent;
  let fixture: ComponentFixture<TimerChangeDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerChangeDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerChangeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOnPushComponent } from './timer-on-push.component';

describe('TimerOnPushComponent', () => {
  let component: TimerOnPushComponent;
  let fixture: ComponentFixture<TimerOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

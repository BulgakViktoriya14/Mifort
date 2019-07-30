import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer-on-push',
  templateUrl: './timer-on-push.component.html',
  styleUrls: ['./timer-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerOnPushComponent implements OnInit {
  counter : number = 0;
  @Input() value : number = 1;
  constructor() { }

  ngOnInit() {
  	setInterval(()=>{
      this.counter = this.counter + this.value;
    }, 1000)
  }

}

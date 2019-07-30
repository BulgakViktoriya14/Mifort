import { Component, OnInit,Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer-default',
  templateUrl: './timer-default.component.html',
  styleUrls: ['./timer-default.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TimerDefaultComponent implements OnInit {
 counter: number = 0;
 @Input() value : number = 1;
 constructor() { }

  ngOnInit() {
  	setInterval(()=>{
       this.counter = this.counter + this.value;
    }, 1000)
  }

}

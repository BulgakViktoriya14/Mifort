import { Component, OnInit, Input, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer-detect-changes',
  templateUrl: './timer-detect-changes.component.html',
  styleUrls: ['./timer-detect-changes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerDetectChangesComponent implements OnInit {
  counter: number = 0;
  @Input() value : number = 1;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  	setInterval(()=>{
       this.counter = this.counter + this.value;
       this.changeDetector.detectChanges();
    }, 1000)
  }

}

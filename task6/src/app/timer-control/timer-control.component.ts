import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent implements OnInit {
  value : number = 1;
  @Output() sendNumber: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  changeValue(val : string) : void {
  	this.value = val;
  }
  sendValue() : void {
    let number = Number(this.value);
    if(Number.isInteger(number)) {
      this.sendNumber.emit(number);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'The value you entered is not an integer',
        type: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }
}

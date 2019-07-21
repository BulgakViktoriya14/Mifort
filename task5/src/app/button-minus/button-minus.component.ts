import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-minus',
  templateUrl: './button-minus.component.html',
  styleUrls: ['./button-minus.component.css']
})
export class ButtonMinusComponent implements OnInit {
  @Output() reduceCount: EventEmitter = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  reduceSkillLevel() {
  	this.reduceCount.emit();
  }
}

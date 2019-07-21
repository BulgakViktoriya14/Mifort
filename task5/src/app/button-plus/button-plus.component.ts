import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-plus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.css']
})
export class ButtonPlusComponent implements OnInit {
  @Output() improveCount: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  improveSkillLevel() {
  	this.improveCount.emit();
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {
  @Output() changeName: EventEmitter = new EventEmitter();
  color : string = "green";
  constructor() { }
  ngOnChanges() {
    console.log("%c OnChanges",`color:${this.color}`)
  }
  ngOnInit() {
    console.log("%c OnInit",`color:${this.color}`)
  }
  ngDoCheck() {
    console.log("%c DoCheck",`color:${this.color}`)
  }
  ngAfterContentInit() {
    console.log("%c AfterContentInit",`color:${this.color}`)
  }
  ngAfterContentChecked() {
    console.log("%c AfterContentChecked",`color:${this.color}`)
  }
  ngAfterViewInit() {
    console.log("%c AfterViewInit",`color:${this.color}`)
  }
  ngAfterViewChecked() {
    console.log("%c AfterViewChecked",`color:${this.color}`)
  }
  ngOnDestroy() {
    console.log("%c OnDestroy",`color:${this.color}`)
  }
  changeInput(value: string) {
  	this.changeName.emit(value);
  }
}

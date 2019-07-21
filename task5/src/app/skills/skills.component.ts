import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  totalCount : number = 0;
  name : string = ''; 
  color : string = "red";
  colorBlue : string = "#00e5ff";
  colorPurple : string = "#c800ff";
  colorNavyBlue : string = "#2f00ff";
  one : number = 1;
  two : number = 2;
  three : number = 3;
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
  changeName(value: string){
    this.name = value;
  }
  changeTotalCount(count: number) {
    this.totalCount = count;
    console.log(this.totalCount)
  }
  reduceTotal() {
    this.totalCount--;
  }
  improveTotal() {
    this.totalCount++;
  }
}

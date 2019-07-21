import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() nameUser: string = '';
  @Input() number: number = 0;
  @Output() reduceTotal: EventEmitter = new EventEmitter();
  @Output() improveTotal: EventEmitter = new EventEmitter();
  countSkill: number = 0;
  @Input() color: string = "";
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
  improveCount() {
  	this.countSkill++;
  	this.improveTotal.emit();
  }
  reduceCount() {
  	if(this.countSkill != 0) {
  		this.countSkill--;
  		this.reduceTotal.emit();
  	}
  }
}

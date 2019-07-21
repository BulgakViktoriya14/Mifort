import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-skill',
  templateUrl: './total-skill.component.html',
  styleUrls: ['./total-skill.component.css']
})
export class TotalSkillComponent implements OnInit {
  @Input() numberTotal : number = 0;  
  color: string = "#ff6f00"
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

}

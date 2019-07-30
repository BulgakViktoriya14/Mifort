import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	value : number = 1;
	constructor() {

	}
	setValue(val : number) : void{
		this.value = val;
	}
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

	hide: Boolean = false;
	welcome: Boolean = false;
	@Output() change = new EventEmitter();

	constructor(private service: LogInService) { }

	ngOnInit(): void { }

	login() {
		this.service.login();
		this.hide = true;
		this.welcome = true;
	}

}
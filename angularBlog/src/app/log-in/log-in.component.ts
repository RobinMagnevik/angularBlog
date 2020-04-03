import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @Output() change = new EventEmitter();

  constructor(private service: LogInService) { }

  ngOnInit(): void { }

  login() { 
    this.service.login();
  }

}
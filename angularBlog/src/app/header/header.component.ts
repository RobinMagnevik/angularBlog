import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';
import { AddArticle } from '../add-article';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  navbar: AddArticle;
  constructor(private loginService: LogInService) { }

  ngOnInit(): void {
    this.loginService.$event
    .subscribe( (data) =>{
        this.isLoggedIn = true;
        this.navbar = data;
    })
  }

}

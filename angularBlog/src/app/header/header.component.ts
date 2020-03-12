import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';
import { AddArticle } from '../add-article';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLogged = false;
  navbar: AddArticle;
  constructor(private loginService: LogInService) { }

  ngOnInit(): void {
    this.loginService.$isLoggedIn
    .subscribe( (data) =>{
        this.isUserLogged = true;
        this.navbar = data;
    })
  }

}

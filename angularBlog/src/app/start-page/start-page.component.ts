import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../article-interface'
import { ArticleDataService } from '../article-data.service'
import { LogInService } from '../log-in.service';
import { AddArticle } from '../add-article';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  latestArticle: ArticleInterface;

  isLoggedIn = false;
  navbar: AddArticle;

  constructor(public articleDataService : ArticleDataService, private loginService: LogInService) { }

  ngOnInit(): void {
    this.latestArticle = this.articleDataService.fetchLatestArticle();

    this.loginService.$event
    .subscribe( (data) =>{
        this.isLoggedIn = true;
        this.navbar = data;
    })
  }

}

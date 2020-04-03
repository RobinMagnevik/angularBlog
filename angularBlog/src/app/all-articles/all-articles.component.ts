import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../article-interface'
import { ArticleDataService } from '../article-data.service'
import { LogInService } from '../log-in.service'

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
  allArticles: ArticleInterface[];
  showDeleteButton = false;
  articleDelete;

  deleteArticle(article){
    this.articleDelete = article;
    this.articleDataService.deleteArticle(this.articleDelete);
    this.allArticles = this.articleDataService.fetchAllArticles();
  }

  constructor(public articleDataService: ArticleDataService, public logInService: LogInService) { }

  ngOnInit(): void {
    this.allArticles = this.articleDataService.fetchAllArticles();
    this.showDeleteButton = this.logInService.isLoggedIn;
  }

}

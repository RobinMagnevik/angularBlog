import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../article-interface'
import { ArticleDataService } from '../article-data.service'

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {

  fiveArticles: ArticleInterface[];

  constructor(public articleDataService: ArticleDataService) { }

  ngOnInit(): void {
    this.fiveArticles = this.articleDataService.fetchFiveArticles();
  }

}

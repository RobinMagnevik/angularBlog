import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../article-interface'
import { ArticleDataService } from '../article-data.service'

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  allArticles: ArticleInterface[];

  constructor(public articleDataService: ArticleDataService) { }

  ngOnInit(): void {
    this.allArticles = this.articleDataService.fetchAllArticles();
  }

}

import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../article-interface'
import { ArticleDataService } from '../article-data.service'

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  latestArticle: ArticleInterface;

  constructor(public articleDataService : ArticleDataService) { }

  ngOnInit(): void {
    this.latestArticle = this.articleDataService.fetchLatestArticle();
  }

}

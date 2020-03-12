import { Component, OnInit } from '@angular/core';
import { ArticleClass } from '../article-class';
import { ArticleDataService } from '../article-data.service'
import { RangeValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  userModel = new ArticleClass("", "", "", null)
  onSubmit() {
    console.log(this.userModel);
  }
  newArticle: ArticleClass;
  articleTitle:string;
  articleContent:string;
  articleWriter:string;
  articleTime:number;

  constructor(public articleDataService: ArticleDataService) { }

  ngOnInit(): void {
    this.newArticle = new ArticleClass('', '', '', 0);
  }

  title(event){
    this.articleTitle = event.target.value;
  }
  content(event){
    this.articleContent = event.target.value;
  }
  writer(event){
    this.articleWriter = event.target.value;
  }
  time(event){
    this.articleTime = event.target.value;
  }
  addNewArticle(){
    this.articleDataService.newArticleAdd(this.articleTitle, this.articleContent, this.articleWriter,this.articleTime)
  }
}

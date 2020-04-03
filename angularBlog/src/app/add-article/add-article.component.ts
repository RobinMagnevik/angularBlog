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

  newArticle: ArticleClass;
  articleTitle:string;
  articleContent:string;
  articleWriter:string;
  articleTime:number;
  message:boolean = true;

  constructor(public articleDataService: ArticleDataService) { }

  ngOnInit(): void {
  }
  
  newTitle(event){
    this.articleTitle = event.target.value;
  }
  newContent(event){
    this.articleContent = event.target.value;
  }
  newWriter(event){
    this.articleWriter = event.target.value;
  }
  newTime(event){
    this.articleTime = event.target.value;
  }
  addNewArticle(){
	this.articleDataService.addArticleList(this.articleTitle, this.articleContent, this.articleWriter,this.articleTime)
  }
  submittedMessage(){
	  this.message = !this.message;
  }

}

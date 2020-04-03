import { Component, OnInit } from '@angular/core';
import { ArticleClass } from '../article-class';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  userModel = new ArticleClass("", "", "", null)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userModel);
  }
}

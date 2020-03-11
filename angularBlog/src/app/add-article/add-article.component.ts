import { Component, OnInit } from '@angular/core';
//import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  //userModel = new Blogpost("", "", "", null)

  constructor() { }

  ngOnInit(): void {
  }

  /*onSubmit() {
    console.log(this.userModel);
  }*/
}

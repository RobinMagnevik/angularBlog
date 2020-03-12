import { Injectable, EventEmitter } from '@angular/core';
import { AddArticle } from './add-article';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  $isLoggedIn = new EventEmitter();
  navbar: AddArticle = {
    addArticles: "",
  };

  constructor() { }

  login() { 
    this.navbar.addArticles = "Add article";
    this.$isLoggedIn.emit(this.navbar)
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { AddArticle } from './add-article';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  $event = new EventEmitter();
  navbar: AddArticle = {
    addArticles: "",
    deleteButton: "",
    welcome: ""
  };

  constructor() { }

  login() { 
    this.navbar.addArticles = "Add article";
    this.navbar.deleteButton = "Delete";
    this.navbar.welcome = "You're logged in!"
    this.$event.emit(this.navbar)
  }
}

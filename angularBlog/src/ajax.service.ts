import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) { }

  getKanyeQuote() {
    return this.http.get('https://api.kanye.rest/')
  }
}

import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/ajax.service';

@Component({
  selector: 'app-ajaxapi',
  templateUrl: './ajaxapi.component.html',
  styleUrls: ['./ajaxapi.component.css']
})
export class AjaxapiComponent implements OnInit {

  kanyeQuote: any; 
  
  constructor(private _http: AjaxService) { }

  ngOnInit(): void { 
    this._http.getKanyeQuote().subscribe(data => {
      this.kanyeQuote = data;
      console.log(this.kanyeQuote)
    });
  }

} 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LatestArticlesComponent,
    AllArticlesComponent,
    LogInComponent,
    AddArticleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

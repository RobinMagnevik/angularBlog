import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddArticleComponent } from './add-article/add-article.component';



const routes: Routes = [
  { path: '', component: StartPageComponent }, 
  { path: 'latest-articles', component: LatestArticlesComponent }, 
  { path: 'all-articles', component: AllArticlesComponent }, 
  { path: 'log-in', component: LogInComponent },
  { path: 'add-article', component: AddArticleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

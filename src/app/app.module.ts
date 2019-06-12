import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDomeComponent } from './home-dome/home-dome.component';
import { ArticleComponent } from './article/article.component';
import { ElModule } from 'element-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDomeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

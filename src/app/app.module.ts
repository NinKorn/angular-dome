import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElModule } from 'element-angular';
import { ListInfoComponent } from './list-info/list-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListInfoComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

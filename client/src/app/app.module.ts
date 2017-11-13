import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ContentComponent }  from './content.component';
import { DashboardComponent } from './dashboard.component';
import { MyBookComponent } from './mybook.component';
import { ChapterService } from './chapter.service';
import { ContentService } from './content.service';
import { MyBookService } from './mybook.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MyBookComponent,
    ContentComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [ChapterService, ContentService, MyBookService]
})


export class AppModule { }

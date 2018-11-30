import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { Routes,RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWidgetComponentComponent } from './my-widget-component/my-widget-component.component';
import { DateComponent } from './date/date.component';
import { CloudService } from './cloud.service';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    MyWidgetComponentComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

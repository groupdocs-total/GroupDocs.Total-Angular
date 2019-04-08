import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonComponentsModule} from "@groupdocs-total-angular/common-components";

import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome'
import {AppRoutingModule} from "./app-routing.module";
import { TotalNavComponent } from './total-nav/total-nav.component';


@NgModule({
  declarations: [AppComponent, TotalNavComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    Angular2FontawesomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

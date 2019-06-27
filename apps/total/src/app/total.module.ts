import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TotalAppComponent} from './total-app.component';
import {CommonComponentsModule} from "@groupdocs.examples.angular/common-components";

import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome'
import {AppRoutingModule} from "./app-routing.module";
import {TotalNavComponent} from './total-nav/total-nav.component';
import {TotalViewComponent} from './total-view/total-view.component';

@NgModule({
  declarations: [TotalAppComponent, TotalNavComponent, TotalViewComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonComponentsModule,
    Angular2FontawesomeModule,
  ],
  providers: [],
  bootstrap: [TotalAppComponent],
  exports: [TotalViewComponent]
})
export class TotalModule {
}

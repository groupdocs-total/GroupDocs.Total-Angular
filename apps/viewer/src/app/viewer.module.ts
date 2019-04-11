import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ViewerAppComponent } from './viewer-app.component';
import {CommonComponentsModule} from "@groupdocs-total-angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {ViewerService} from "./viewer.service";
import {Api, ConfigService} from "@groupdocs-total-angular/common-components";

@NgModule({
  declarations: [ViewerAppComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule.forRoot(),
    Angular2FontawesomeModule,
    HttpClientModule
  ],
  providers: [ViewerService, ConfigService, Api],
  bootstrap: [ViewerAppComponent]
})
export class ViewerModule {}

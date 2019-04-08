import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { ViewerAppComponent } from './viewer-app.component';
import {CommonComponentsModule} from "@groupdocs-total-angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";

@NgModule({
  declarations: [ViewerAppComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [ViewerAppComponent]
})
export class ViewerModule {}

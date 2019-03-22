import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonComponentsModule} from "@groupdocs-total-angular/common-components";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

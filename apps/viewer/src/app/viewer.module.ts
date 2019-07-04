import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {ViewerAppComponent} from './viewer-app.component';
import {CommonComponentsModule, ErrorInterceptorService} from "@groupdocs-total-angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {ViewerService} from "./viewer.service";
import {ConfigService} from "@groupdocs-total-angular/common-components";
import {ViewerConfigService} from "./viewer-config.service";
import {ViewerExportModule} from "./viewer-export/viewer-export.module";

@NgModule({
  declarations: [ViewerAppComponent, ThumbnailsComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule.forRoot(),
    Angular2FontawesomeModule,
    HttpClientModule,
    ViewerExportModule
  ],
  providers: [
    ViewerService,
    ConfigService,
    ViewerConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ViewerAppComponent]
})
export class ViewerModule {
}

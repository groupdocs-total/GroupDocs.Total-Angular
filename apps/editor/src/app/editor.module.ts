import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {EditorAppComponent} from './editor-app.component';
import {CommonComponentsModule, ErrorInterceptorService} from "@groupdocs-total-angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {EditorService} from "./editor.service";
import {ConfigService} from "@groupdocs-total-angular/common-components";
import {EditorConfigService} from "./editor-config.service";
import {EditorExportModule} from "./editor-export/editor-export.module"

@NgModule({
  imports: [
    BrowserModule,
    CommonComponentsModule.forRoot(),
    Angular2FontawesomeModule,
    HttpClientModule,
    EditorExportModule
  ],
  providers: [
    EditorService,
    ConfigService,
    EditorConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [EditorAppComponent],
})
export class EditorModule {
}

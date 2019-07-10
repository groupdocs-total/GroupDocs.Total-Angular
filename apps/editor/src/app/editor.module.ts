import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EditorAppComponent} from './editor-app.component';
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {EditorService} from "./editor.service";
import {
  CommonComponentsModule,
  ErrorInterceptorService,
  ConfigService,
  LoadingMaskService,
  LoadingMaskInterceptorService
} from "@groupdocs.examples.angular/common-components";
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
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (service: LoadingMaskService) => new LoadingMaskInterceptorService(service),
      multi: true,
      deps: [LoadingMaskService]
    }
  ],
  bootstrap: [EditorAppComponent],
})
export class EditorModule {
}

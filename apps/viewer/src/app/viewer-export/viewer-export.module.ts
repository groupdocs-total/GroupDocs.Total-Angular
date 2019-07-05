import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {ViewerAppComponent} from '../viewer-app.component';
import {CommonComponentsModule, ErrorInterceptorService, ConfigService} from "@groupdocs.examples.angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {ViewerService} from "../viewer.service";
import {ViewerConfigService} from "../viewer-config.service";
import {ThumbnailsComponent} from '../thumbnails/thumbnails.component';
import {CommonModule} from "@angular/common";
import {ViewerRoutingModule} from "../viewer-routing.module";

@NgModule({
  declarations: [ViewerAppComponent, ThumbnailsComponent],
  exports: [ViewerAppComponent, ThumbnailsComponent],
  imports: [
    ViewerRoutingModule,
    CommonModule,
    CommonComponentsModule.forRoot(),
    Angular2FontawesomeModule,
    HttpClientModule
  ],
  providers: [
    ViewerService,
    ConfigService,
    ViewerConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
  ],
  bootstrap: [ViewerAppComponent]
})
export class ViewerExportModule {
  constructor(viewerConfigService: ViewerConfigService) {
    viewerConfigService.load();
  }
}

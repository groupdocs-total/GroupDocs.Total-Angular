import {BrowserModule} from '@angular/platform-browser';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ViewerAppComponent} from './viewer-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import {ViewerService} from "./viewer.service";
import {ConfigService} from "@groupdocs.examples.angular/common-components";
import {ViewerConfigService} from "./viewer-config.service";
import {ThumbnailsComponent} from './thumbnails/thumbnails.component';

export function initializeApp(viewerConfigService: ViewerConfigService) {
  const result =  () => viewerConfigService.load();
  return result;
}

@NgModule({
  declarations: [
    ViewerAppComponent,
    ThumbnailsComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule
  ],
  exports : [
    ViewerAppComponent,
    ThumbnailsComponent,
    CommonComponentsModule
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
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ViewerConfigService], multi: true
    }
  ]
})
export class ViewerModule {
  static forRoot(apiEndpoint : string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint
    return {
      ngModule: ViewerModule
    };
  }
}

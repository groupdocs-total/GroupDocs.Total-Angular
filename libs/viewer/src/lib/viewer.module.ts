import {BrowserModule} from '@angular/platform-browser';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ViewerAppComponent} from './viewer-app.component';
import {
  Api,
  CommonComponentsModule,
  ErrorInterceptorService, LoadingMaskInterceptorService,
  LoadingMaskService
} from '@groupdocs.examples.angular/common-components';
import {ViewerService} from "./viewer.service";
import {ConfigService} from "@groupdocs.examples.angular/common-components";
import {ViewerConfigService} from "./viewer-config.service";
import {ThumbnailsComponent} from './thumbnails/thumbnails.component';
import {ExcelDocumentComponent} from './excel-document/excel-document.component';
import {ExcelPageComponent} from './excel-page/excel-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export function initializeApp(viewerConfigService: ViewerConfigService) {
  const result =  () => viewerConfigService.load();
  return result;
}

const routes: Routes = [
  {
    path: 'viewer',
    component: ViewerAppComponent
  },
  {
    path: 'viewer/:file',
    component: ViewerAppComponent
  }
];

export function endPoint() {
  let config = new ConfigService();
  config.apiEndpoint = Api.VIEWER_APP;
  return config;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    ViewerAppComponent,
    ThumbnailsComponent,
    ExcelDocumentComponent,
    ExcelPageComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    ViewerAppComponent,
    ThumbnailsComponent,
    ExcelDocumentComponent,
    ExcelPageComponent,
    CommonComponentsModule
  ],
  providers: [
    ViewerService,
    {
      provide: ConfigService,
      useFactory: endPoint
    },
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
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: setupLoadingInterceptor,
      multi: true,
      deps: [LoadingMaskService]
    },
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class ViewerModule {
}

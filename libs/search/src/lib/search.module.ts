import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchAppComponent} from './search-app.component';
import {
  Api,
  CommonComponentsModule,
  ErrorInterceptorService, LoadingMaskInterceptorService,
  LoadingMaskService
} from '@groupdocs.examples.angular/common-components';
import {SearchService} from "./search.service";
import {ConfigService} from "@groupdocs.examples.angular/common-components";
import {SearchConfigService} from "./search-config.service";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

export function initializeApp(searchConfigService: SearchConfigService) {
  const result = () => searchConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    SearchAppComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    SearchAppComponent,
    CommonComponentsModule
  ],
  providers: [
    SearchService,
    ConfigService,
    SearchConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SearchConfigService], multi: true
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: setupLoadingInterceptor,
      multi: true,
      deps: [LoadingMaskService]
    }
  ]
})
export class SearchModule {
  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: SearchModule
    };
  }
}

import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService
} from "@groupdocs.examples.angular/common-components";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ConversionService} from "./conversion.service";
import {ConversionConfigService} from "./conversion-config.service";
import {ConversionAppComponent} from "./conversion-app.component";

export function initializeApp(conversionConfigService: ConversionConfigService) {
  const result = () => conversionConfigService.load();
  return result;
}

@NgModule({
  declarations: [ConversionAppComponent],
  exports: [ConversionAppComponent],
  imports: [CommonModule,
    CommonComponentsModule,
    HttpClientModule],
  providers: [
    ConversionService,
    ConfigService,
    ConversionConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConversionConfigService], multi: true
    }
  ]
})
export class СonversionModule {
  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: СonversionModule
    };
  }
}

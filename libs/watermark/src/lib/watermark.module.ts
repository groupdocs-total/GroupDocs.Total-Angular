import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {WatermarkConfigService} from "./watermark-config.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ClickOutsideModule} from "ng-click-outside";
import {WatermarkAppComponent} from './watermark-app.component';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {WatermarkComponent} from './watermark/watermark.component';
import {ActiveWatermarkService} from "./active-watermark.service";
import {RemoveWatermarkService} from "./remove-watermark.service";

export function initializeApp(watermarkConfigService: WatermarkConfigService) {
  const result = () => watermarkConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [WatermarkAppComponent, WatermarkComponent ],
  exports: [CommonComponentsModule, WatermarkAppComponent, WatermarkComponent],
  imports:
    [CommonModule,
      CommonComponentsModule,
      HttpClientModule,
      FontAwesomeModule,
      ClickOutsideModule],
  providers:
    [
      ConfigService,
      WatermarkConfigService,
      ActiveWatermarkService,
      RemoveWatermarkService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptorService,
        multi: true
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [WatermarkConfigService], multi: true
      },
      LoadingMaskService,
      {
        provide: HTTP_INTERCEPTORS,
        useFactory: setupLoadingInterceptor,
        multi: true,
        deps: [LoadingMaskService]
      }
    ],
  entryComponents: [WatermarkComponent],
})

export class WatermarkModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: WatermarkModule
    };
  }
}

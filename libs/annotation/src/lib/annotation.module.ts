import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {AnnotationConfigService} from "./annotation-config.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ClickOutsideModule} from "ng-click-outside";
import {AnnotationAppComponent} from './annotation-app.component';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";

export function initializeApp(annotationConfigService: AnnotationConfigService) {
  const result = () => annotationConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [AnnotationAppComponent,
  ],
  exports: [AnnotationAppComponent],
  imports:
    [CommonModule,
      CommonComponentsModule,
      HttpClientModule,
      FontAwesomeModule,
      ClickOutsideModule],
  providers:
    [
      ConfigService,
      AnnotationConfigService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptorService,
        multi: true
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [AnnotationConfigService], multi: true
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

export class AnnotationModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: AnnotationModule
    };
  }
}

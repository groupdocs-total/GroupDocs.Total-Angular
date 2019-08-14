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
import { ConversionBrowseFilesModalComponent } from './conversion-browse-files-modal/conversion-browse-files-modal.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

export function initializeApp(conversionConfigService: ConversionConfigService) {
  const result = () => conversionConfigService.load();
  return result;
}

@NgModule({
  declarations: [ConversionAppComponent, ConversionBrowseFilesModalComponent],
  exports: [ConversionAppComponent, ConversionBrowseFilesModalComponent],
  imports: [CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule],
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
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: СonversionModule
    };
  }
}

import {BrowserModule} from '@angular/platform-browser';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MetadataAppComponent} from './metadata-app.component';
import {
  Api,
  CommonComponentsModule,
  ErrorInterceptorService, LoadingMaskInterceptorService,
  LoadingMaskService
} from '@groupdocs.examples.angular/common-components';
import {MetadataService} from "./metadata.service";
import {ConfigService} from "@groupdocs.examples.angular/common-components";
import {MetadataConfigService} from "./metadata-config.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent} from "./accordion/accordion.component";
import { AccordionGroupComponent} from "./accordion/accordion-group/accordion-group.component";
import { FormsModule } from '@angular/forms';
import { AccordionService } from './accordion.service';

export function initializeApp(metadataConfigService: MetadataConfigService) {
  const result =  () => metadataConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    MetadataAppComponent,
    AccordionComponent,
    AccordionGroupComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports : [
    MetadataAppComponent,
    CommonComponentsModule,
    AccordionComponent,
    AccordionGroupComponent
  ],
  providers: [
    MetadataService,
    AccordionService,
    ConfigService,
    DatePipe,
    MetadataConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [MetadataConfigService], multi: true
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
export class MetadataModule {
  static forRoot(apiEndpoint : string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint
    return {
      ngModule: MetadataModule
    };
  }
}

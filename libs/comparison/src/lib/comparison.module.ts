import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ComparisonAppComponent} from './comparison-app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {ComparisonService} from "./comparison.service";
import {
  CommonComponentsModule,
  ErrorInterceptorService,
  ConfigService,
  LoadingMaskService,
  LoadingMaskInterceptorService,
  Api
} from "@groupdocs.examples.angular/common-components";
import {ComparisonConfigService} from "./comparison-config.service";
import {AddFilePanelComponent} from './add-file-panel/add-file-panel.component';
import {UploadFilePanelComponent} from './upload-file-panel/upload-file-panel.component';
import {DifferenceComponent} from './difference/difference.component';
import {DifferenceHighlightComponent} from './difference-highlight/difference-highlight.component';
import {ResultDocumentComponent} from './result-document/result-document.component';
import {DifferencesComponent} from './differences/differences.component';
import {DifferencesService} from './differences.service';
import {ClickOutsideModule} from 'ng-click-outside';

export function initializeApp(comparisonConfigService: ComparisonConfigService) {
  const result = () => comparisonConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [ComparisonAppComponent, AddFilePanelComponent, UploadFilePanelComponent, DifferenceComponent, DifferenceHighlightComponent, ResultDocumentComponent, DifferencesComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    ClickOutsideModule
  ],
  exports: [
    ComparisonAppComponent,
    CommonComponentsModule,
    ResultDocumentComponent,
    DifferencesComponent
  ],
  providers: [
    ComparisonService,
    ConfigService,
    DifferencesService,
    ComparisonConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ComparisonConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
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
export class ComparisonModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: ComparisonModule
    };
  }
}

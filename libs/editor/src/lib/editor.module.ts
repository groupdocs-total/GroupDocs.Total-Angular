import {BrowserModule} from '@angular/platform-browser';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EditorAppComponent} from './editor-app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {CreateDocumentModalComponent} from './create.document-modal/create.document-modal.component';
import {EditorService} from "./editor.service";
import {
  CommonComponentsModule,
  ErrorInterceptorService,
  ConfigService,
  LoadingMaskService,
  LoadingMaskInterceptorService, Api
} from '@groupdocs.examples.angular/common-components';
import {EditorConfigService} from "./editor-config.service";
import {ExcelDocumentComponent} from './excel-document/excel-document.component';
import {ExcelPageComponent} from './excel-page/excel-page.component';

export function initializeApp(editorConfigService: EditorConfigService) {
  const result =  () => editorConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [EditorAppComponent,
    CreateDocumentModalComponent,
    ExcelDocumentComponent,
    ExcelPageComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    CreateDocumentModalComponent,
    EditorAppComponent,
    CommonComponentsModule,
    ExcelDocumentComponent,
    ExcelPageComponent
  ],
  providers: [
    EditorService,
    ConfigService,
    EditorConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EditorConfigService],
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
export class EditorModule {
  constructor(){
    library.add(fas,far);
  }
  static forRoot(apiEndpoint : string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint
    return {
      ngModule: EditorModule
    };
  }
}

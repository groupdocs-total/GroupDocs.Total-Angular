import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
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
  LoadingMaskInterceptorService
} from "@groupdocs.examples.angular/common-components";
import {EditorConfigService} from "./editor-config.service";

export function initializeApp(editorConfigService: EditorConfigService) {
  const result =  () => editorConfigService.load();
  return result;
}

export function setupLoadingInterceptor(service: LoadingMaskService) {
  const result =  () => new LoadingMaskInterceptorService(service);
  return result;
}

@NgModule({
  declarations :[EditorAppComponent,CreateDocumentModalComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    EditorService,
    ConfigService,
    EditorConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EditorConfigService], multi: true
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
}

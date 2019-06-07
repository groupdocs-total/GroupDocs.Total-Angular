import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {EditorAppComponent} from './editor-app.component';
import {CommonComponentsModule, ErrorInterceptorService} from "@groupdocs-total-angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {EditorService} from "./editor.service";
import {ConfigService} from "@groupdocs-total-angular/common-components";
import {EditorConfigService} from "./editor-config.service";
import { TabsComponent } from '../../../../libs/common-components/src/lib/tabs/tabs.component';
import { TabComponent } from '../../../../libs/common-components/src/lib/tab/tab.component';

export function initializeApp(editorConfigService: EditorConfigService) {
  return () => editorConfigService.load();
}

@NgModule({
  declarations: [EditorAppComponent, TabsComponent, TabComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule.forRoot(),
    Angular2FontawesomeModule,
    HttpClientModule
  ],
  providers: [
    EditorService,
    ConfigService,
    EditorConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EditorConfigService], multi: true
    }
  ],
  bootstrap: [EditorAppComponent],
  exports: [TabsComponent, TabComponent]
})
export class EditorModule {
}

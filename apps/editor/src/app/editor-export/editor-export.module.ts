import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {EditorAppComponent} from '../editor-app.component';
import {CommonComponentsModule, ErrorInterceptorService} from "@groupdocs-total-angular/common-components";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {EditorService} from "../editor.service";
import {ConfigService} from "@groupdocs-total-angular/common-components";
import {EditorConfigService} from "../editor-config.service";
import {CommonModule} from "@angular/common";
import {EditorRoutingModule} from "../editor-routing.module";
import {CreateDocumentModalComponent} from "../create.document-modal/create.document-modal.component";

@NgModule({
  declarations: [EditorAppComponent, CreateDocumentModalComponent],
  imports: [
    EditorRoutingModule,
    CommonModule,
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
  ],
  bootstrap: [EditorAppComponent]
})
export class EditorExportModule {
  constructor(editorConfigService: EditorConfigService) {
    editorConfigService.load();
  }
}

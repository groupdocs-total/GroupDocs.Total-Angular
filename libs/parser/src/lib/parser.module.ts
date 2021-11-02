import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CommonComponentsModule, ExceptionMessageService,
  ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService,
  Api, ConfigService 
} from "@groupdocs.examples.angular/common-components";

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from "ng-click-outside";
import { ParserAppComponent } from './parser-app.component';
import { SurfaceComponent } from './surface/surface.component';
import { FieldComponent } from './field/field.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TableViewerComponent } from './table-viewer/table-viewer.component';
import { ParserConfigService } from './parser-config.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParserService } from './parser.service';

export function initializeApp(parserConfigService: ParserConfigService) {
  const result = () => parserConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [
    ParserAppComponent,
    SurfaceComponent,
    FieldComponent,
    ConfirmationModalComponent,
    SidePanelComponent,
    RenameModalComponent,
    PlaceholderComponent,
    TableViewerComponent  
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule, 
    HttpClientModule,
    ClickOutsideModule,
    FontAwesomeModule
  ],  
  exports: [ 
    ParserAppComponent,
    FieldComponent
  ],
  providers: [ 
    ParserService,
    ConfigService,
    ExceptionMessageService,
    ParserConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ParserConfigService], multi: true
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: setupLoadingInterceptor,
      multi: true,
      deps: [LoadingMaskService]
    }
  ],

  entryComponents: [ FieldComponent ],
})
export class ParserModule { 
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: ParserModule
    };
  }

}

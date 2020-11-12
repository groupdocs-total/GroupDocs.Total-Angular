import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CommonComponentsModule, ExceptionMessageService,
  ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService
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
import { ActiveFieldService } from './active-field.service';
import { TemplateNameComponent } from './template-name/template-name.component';
import { TemplateBrowserComponent } from './template-browser/template-browser.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { Api, ConfigService } from "../../../common-components/src/lib/config.service";
import { ParseResultsComponent } from './parse-results/parse-results.component';

@NgModule({
  declarations: [ParserAppComponent, SurfaceComponent, FieldComponent, TemplateNameComponent, TemplateBrowserComponent, ConfirmationModalComponent, ParseResultsComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule, 
    ClickOutsideModule,
    FontAwesomeModule
  ],
  providers: [ ActiveFieldService, ConfigService, ExceptionMessageService ],
  exports: [ ParserAppComponent, FieldComponent ],
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

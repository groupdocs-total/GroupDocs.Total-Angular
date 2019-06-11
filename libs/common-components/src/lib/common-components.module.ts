import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopToolbarComponent} from './top-toolbar/top-toolbar.component';
import {ButtonComponent} from './button/button.component';
import {LogoComponent} from './logo/logo.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome'
import {Api, ConfigService,} from "./config.service";
import {ModalService} from "./modal.service";
import {ModalComponent} from './modal/modal.component';
import {BrowseFilesModalComponent} from './browse-files-modal/browse-files-modal.component';
import {FileModel, FileService, FileUtil} from "./file.service";
import {DocumentComponent} from './document/document.component';
import {PageComponent} from './page/page.component';
import {HighlightSearchPipe, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe} from "./pipes";
import {ChoiceButtonComponent} from './choice-button/choice-button.component';
import {UploadFileZoneComponent} from './upload-file-zone/upload-file-zone.component';
import {UploadFilesService} from "./upload-files.service";
import {DndDirective} from './dnd.directive';
import {ScrollableDirective} from './scrollable.directive';
import {NavigateService} from "./navigate.service";
import {PagePreloadService} from "./page-preload.service";
import {ZoomDirective} from './zoom.directive';
import {ZoomService} from "./zoom.service";
import {SelectComponent} from './select/select.component';
import {DisabledCursorDirective} from './disabled-cursor.directive';
import {RotationDirective} from './rotation.directive';
import {InitStateComponent} from './init-state/init-state.component';
import {RenderPrintService} from "./render-print.service";
import {RenderPrintDirective} from './render-print.directive';
import {ErrorModalComponent} from './error-modal/error-modal.component';
import {PasswordRequiredComponent} from './password-required/password-required.component';
import {ExceptionMessageService} from "./exception-message.service";
import {PasswordService} from "./password.service";
import {ErrorInterceptorService} from "./error-interceptor.service";
import {SearchComponent} from './search/search.component';
import {SearchableDirective} from './searchable.directive';
import {SearchService} from "./search.service";
import {WindowService} from "./window.service";
import {ViewportService} from "./viewport.service";
import {TabbedToolbarsComponent} from './tabbed-toolbars/tabbed-toolbars.component';
import {TabComponent} from "./tab/tab.component";
import {TabsComponent} from "./tabs/tabs.component";

const providers = [ConfigService,
  Api,
  ModalService,
  FileService,
  FileModel,
  FileUtil,
  SanitizeHtmlPipe,
  SanitizeResourceHtmlPipe,
  SanitizeStylePipe,
  HighlightSearchPipe,
  UploadFilesService,
  RenderPrintService,
  NavigateService,
  PagePreloadService,
  ZoomService,
  ExceptionMessageService,
  PasswordService,
  ErrorInterceptorService,
  SearchService,
  WindowService,
  ViewportService];

@NgModule({
  imports: [CommonModule, Angular2FontawesomeModule],
  declarations: [
    TopToolbarComponent,
    ButtonComponent,
    LogoComponent,
    TooltipComponent,
    ModalComponent,
    BrowseFilesModalComponent,
    DocumentComponent,
    PageComponent,
    SanitizeHtmlPipe,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    ChoiceButtonComponent,
    UploadFileZoneComponent,
    DndDirective,
    ScrollableDirective,
    ZoomDirective,
    SelectComponent,
    DisabledCursorDirective,
    RotationDirective,
    InitStateComponent,
    RenderPrintDirective,
    ErrorModalComponent,
    PasswordRequiredComponent,
    SearchComponent,
    SearchableDirective,
    TabbedToolbarsComponent,
    TabComponent,
    TabsComponent
  ],
  exports: [
    TopToolbarComponent,
    ButtonComponent,
    LogoComponent,
    TooltipComponent,
    ModalComponent,
    BrowseFilesModalComponent,
    DocumentComponent,
    PageComponent,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    SanitizeHtmlPipe,
    ChoiceButtonComponent,
    UploadFileZoneComponent,
    ScrollableDirective,
    SelectComponent,
    RotationDirective,
    InitStateComponent,
    RenderPrintDirective,
    ErrorModalComponent,
    PasswordRequiredComponent,
    SearchComponent,
    SearchableDirective,
    TabbedToolbarsComponent,
    TabComponent,
    TabsComponent
  ],
  providers: providers
})
export class CommonComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonComponentsModule,
      providers: providers
    };
  }
}

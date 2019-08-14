import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopToolbarComponent} from './top-toolbar/top-toolbar.component';
import {SidePanelComponent} from './side-panel/side-panel.component';
import {ButtonComponent} from './button/button.component';
import {LogoComponent} from './logo/logo.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
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
import {FileFormatSelectComponent} from './file-format-select/file-format-select.component';
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
import {FormattingService} from "./formatting.service";
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {FormattingDirective} from './formatting.directive';
import {BackFormattingService} from "./back-formatting.service";
import {OnCloseService} from "./on-close.service";
import {SuccessModalComponent} from './success-modal/success-modal.component';
import {EditorDirective} from './editor.directive';
import {LoadingMaskComponent} from './loading-mask/loading-mask.component';
import {LoadingMaskService} from './loading-mask.service';
import {LoadingMaskInterceptorService} from "./loading-mask-interceptor.service";
import {TabActivatorService} from "./tab-activator.service";
import { OutsideDirective } from './outside.directive';

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
  ViewportService,
  FormattingService,
  BackFormattingService,
  OnCloseService,
  LoadingMaskInterceptorService,
  LoadingMaskService,
  TabActivatorService];

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    TopToolbarComponent,
    SidePanelComponent,
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
    FileFormatSelectComponent,
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
    TabsComponent,
    ColorPickerComponent,
    FormattingDirective,
    SuccessModalComponent,
    EditorDirective,
    LoadingMaskComponent,
    OutsideDirective
  ],
  exports: [
    TopToolbarComponent,
    SidePanelComponent,
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
    FileFormatSelectComponent,
    RotationDirective,
    InitStateComponent,
    RenderPrintDirective,
    ErrorModalComponent,
    PasswordRequiredComponent,
    SearchComponent,
    SearchableDirective,
    TabbedToolbarsComponent,
    TabComponent,
    TabsComponent,
    ColorPickerComponent,
    FormattingDirective,
    SuccessModalComponent,
    LoadingMaskComponent,
    DndDirective,
    OutsideDirective
  ],
  providers: providers
})
export class CommonComponentsModule {
  constructor() {
    library.add(fas, far);
  }
}

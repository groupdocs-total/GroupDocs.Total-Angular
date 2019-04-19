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
import {SanitizeHtmlPipe, SanitizeResourceHtmlPipe} from "./pipes";
import { ChoiceButtonComponent } from './choice-button/choice-button.component';
import { UploadFileZoneComponent } from './upload-file-zone/upload-file-zone.component';
import {UploadFilesService} from "./upload-files.service";
import { DndDirective } from './dnd.directive';

const providers = [ConfigService, Api, ModalService, FileService, FileModel, FileUtil, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, UploadFilesService];

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
    ChoiceButtonComponent,
    UploadFileZoneComponent,
    DndDirective
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
    SanitizeHtmlPipe,
    ChoiceButtonComponent,
    UploadFileZoneComponent
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

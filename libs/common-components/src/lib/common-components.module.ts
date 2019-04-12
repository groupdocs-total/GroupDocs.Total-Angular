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

const providers = [ConfigService, Api, ModalService, FileService, FileModel, FileUtil];

@NgModule({
  imports: [CommonModule, Angular2FontawesomeModule],
  declarations: [TopToolbarComponent, ButtonComponent, LogoComponent, TooltipComponent, ModalComponent, BrowseFilesModalComponent],
  exports: [TopToolbarComponent, ButtonComponent, LogoComponent, TooltipComponent, ModalComponent, BrowseFilesModalComponent],
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

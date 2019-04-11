import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import {Api, ConfigService} from "./config.service";

const providers = [ConfigService, Api];

@NgModule({
  imports: [CommonModule, Angular2FontawesomeModule],
  declarations: [TopToolbarComponent, ButtonComponent, LogoComponent, TooltipComponent],
  exports: [TopToolbarComponent, ButtonComponent, LogoComponent, TooltipComponent],
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

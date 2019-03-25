import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopToolbarComponent, ButtonComponent],
  exports: [TopToolbarComponent, ButtonComponent]
})
export class CommonComponentsModule {}

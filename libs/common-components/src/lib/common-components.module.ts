import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopToolbarComponent],
  exports: [TopToolbarComponent]
})
export class CommonComponentsModule {}

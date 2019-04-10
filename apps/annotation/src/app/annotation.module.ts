import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnnotationAppComponent } from './annotation-app.component';

@NgModule({
  declarations: [AnnotationAppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AnnotationAppComponent]
})
export class AnnotationModule {}

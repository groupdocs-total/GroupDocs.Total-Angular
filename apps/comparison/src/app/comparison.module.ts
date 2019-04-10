import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComparisonAppComponent } from './comparison-app.component';

@NgModule({
  declarations: [ComparisonAppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ComparisonAppComponent]
})
export class ComparisonModule {}

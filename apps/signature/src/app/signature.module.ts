import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SignatureAppComponent } from './signature-app.component';

@NgModule({
  declarations: [SignatureAppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [SignatureAppComponent]
})
export class SignatureModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TotalNavComponent} from './total-nav/total-nav.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TotalViewComponent } from './total-view/total-view.component';
import { ViewerModule,ViewerAppComponent } from '@groupdocs.examples.angular/viewer';

@NgModule({
  declarations: [AppComponent, TotalNavComponent, TotalViewComponent],
  imports: [
    BrowserModule,
    ViewerModule,
    RouterModule.forRoot([
      {path: '', component: TotalViewComponent},
      {path: 'viewer', component: ViewerAppComponent},
    ], { initialNavigation: 'enabled' })
  ],
  providers: [],
  exports: [
    TotalViewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

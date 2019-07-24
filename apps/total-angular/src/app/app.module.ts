import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TotalNavComponent} from './total-nav/total-nav.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TotalViewComponent } from './total-view/total-view.component';
import { ViewerModule,ViewerAppComponent } from '@groupdocs.examples.angular/viewer';
import { EditorModule,EditorAppComponent } from '@groupdocs.examples.angular/editor';
import { ComparisonModule,ComparisonAppComponent } from '@groupdocs.examples.angular/comparison';

@NgModule({
  declarations: [AppComponent, TotalNavComponent, TotalViewComponent],
  imports: [
    BrowserModule,
    ViewerModule,
    EditorModule,
    ComparisonModule,
    RouterModule.forRoot([
      {path: '', component: TotalViewComponent},
      {path: 'viewer', component: ViewerAppComponent},
      {path: 'editor', component: EditorAppComponent},
      {path: 'comparison', component: ComparisonAppComponent},
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

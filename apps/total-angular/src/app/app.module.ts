import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TotalNavComponent} from './total-nav/total-nav.component';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {TotalViewComponent} from './total-view/total-view.component';
import {ViewerModule, ViewerAppComponent} from '@groupdocs.examples.angular/viewer';
import {EditorModule, EditorAppComponent} from '@groupdocs.examples.angular/editor';
import {ComparisonModule, ComparisonAppComponent} from '@groupdocs.examples.angular/comparison';
import {SignatureModule, SignatureAppComponent} from "@groupdocs.examples.angular/signature";
import {ConversionModule, ConversionAppComponent} from "@groupdocs.examples.angular/conversion";
import {AnnotationModule, AnnotationAppComponent} from "@groupdocs.examples.angular/annotation";

@NgModule({
  declarations: [AppComponent, TotalNavComponent, TotalViewComponent],
  imports: [
    BrowserModule,
    ViewerModule.forRoot("http://localhost:8080"),
    EditorModule.forRoot("http://localhost:8080"),
    ComparisonModule.forRoot("http://localhost:8080"),
    ConversionModule.forRoot("http://localhost:8080"),
    SignatureModule.forRoot("http://localhost:8080"),
    AnnotationModule.forRoot("http://localhost:8080"),
    RouterModule.forRoot([
      {path: '', component: TotalViewComponent},
      {path: 'viewer', component: ViewerAppComponent},
      {path: 'editor', component: EditorAppComponent},
      {path: 'comparison', component: ComparisonAppComponent},
      {path: 'conversion', component: ConversionAppComponent},
      {path: 'signature', component: SignatureAppComponent},
      {path: 'annotation', component: AnnotationAppComponent},
    ], {initialNavigation: 'enabled'})
  ],
  providers: [],
  exports: [
    TotalViewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

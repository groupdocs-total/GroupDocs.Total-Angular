import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewerModule} from "../../../viewer/src/app/viewer.module";
import {SignatureModule} from "../../../signature/src/app/signature.module";
import {AnnotationModule} from "../../../annotation/src/app/annotation.module";
import {ComparisonModule} from "../../../comparison/src/app/comparison.module";
import {ViewerAppComponent} from "../../../viewer/src/app/viewer-app.component";
import {SignatureAppComponent} from "../../../signature/src/app/signature-app.component";
import {AnnotationAppComponent} from "../../../annotation/src/app/annotation-app.component";
import {ComparisonAppComponent} from "../../../comparison/src/app/comparison-app.component";
import {TotalAppComponent} from "./total-app.component";

const routes: Routes = [
  {path: '', component: TotalAppComponent},
  {path: 'viewer',
    component: ViewerAppComponent},
  {path: 'signature',
    component: SignatureAppComponent},
  {path: 'annotation',
    component: AnnotationAppComponent},
  {path: 'comparison',
    component: ComparisonAppComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewerModule,
    SignatureModule,
    AnnotationModule,
    ComparisonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

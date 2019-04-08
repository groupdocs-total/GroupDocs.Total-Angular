import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewerModule} from "../../../viewer/src/app/viewer.module";
import {ViewerAppComponent} from "../../../viewer/src/app/viewer-app.component";
import {SignatureAppComponent} from "../../../signature/src/app/signature-app.component";
import {SignatureModule} from "../../../signature/src/app/signature.module";

const routes: Routes = [
  {path: 'viewer',
    component: ViewerAppComponent},
  {path: 'signature',
    component: SignatureAppComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewerModule,
    SignatureModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

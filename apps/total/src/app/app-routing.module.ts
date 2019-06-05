import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewerModule} from "../../../viewer/src/app/viewer.module";
import {ViewerAppComponent} from "../../../viewer/src/app/viewer-app.component";

import {EditorModule} from "../../../editor/src/app/editor.module";
import {EditorAppComponent} from "../../../editor/src/app/editor-app.component";

import {TotalViewComponent} from "./total-view/total-view.component";

const routes: Routes = [
  {path: '', component: TotalViewComponent},
  {path: 'viewer',
    component: ViewerAppComponent},
  {path: 'editor',
    component: EditorAppComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewerModule,
    EditorModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

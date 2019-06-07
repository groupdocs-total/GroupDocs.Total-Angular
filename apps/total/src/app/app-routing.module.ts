import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {TotalViewComponent} from "./total-view/total-view.component";

const routes: Routes = [
  {path: '', component: TotalViewComponent},
  {
    path: 'viewer',
    loadChildren: () => import('../../../viewer/src/app/viewer-export/viewer-export.module').then(mod => mod.ViewerExportModule)
  },
  {
    path: 'editor',
    loadChildren: () => import('../../../editor/src/app/editor-export/editor-export.module').then(mod => mod.EditorExportModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewerAppComponent} from "./viewer-app.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ViewerAppComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ViewerRoutingModule {
}

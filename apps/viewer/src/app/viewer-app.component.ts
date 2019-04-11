import { Component } from '@angular/core';
import {ViewerService} from "./viewer.service";

@Component({
  selector: 'groupdocs-viewer-angular-root',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent {
  title = 'viewer';
  files;

  constructor(private _service: ViewerService) {
  }

  openModal() {
    this._service.loadFiles().subscribe(files => this.files = files);
    console.log("open modal");
  }
}

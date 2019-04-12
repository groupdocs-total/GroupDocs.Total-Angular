import {Component} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {ModalService} from "@groupdocs-total-angular/common-components";

@Component({
  selector: 'groupdocs-viewer-angular-root',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent {
  title = 'viewer';
  files;

  constructor(private viewerService: ViewerService, private modalService: ModalService) {
  }

  openModal(id: string) {
    this.viewerService.loadFiles('').subscribe(files => this.files = files);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

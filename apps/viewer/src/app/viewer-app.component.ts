import {Component} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {FileDescription, FileModel, ModalService} from "@groupdocs-total-angular/common-components";

@Component({
  selector: 'groupdocs-viewer-angular-root',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent {
  title = 'viewer';
  files: FileModel[] = [];
  file: FileDescription;

  constructor(private viewerService: ViewerService, private modalService: ModalService) {
  }

  openModal(id: string) {
    this.viewerService.loadFiles('').subscribe((files: FileModel[]) => this.files = files || []);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  selectDir($event: string) {
    this.viewerService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, modalId: string) {
    this.viewerService.loadFile($event).subscribe((file: FileDescription) => this.file = file);
    this.modalService.close(modalId);
  }
}

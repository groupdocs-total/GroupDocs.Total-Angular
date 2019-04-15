import {Component, OnInit} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {FileDescription, FileModel, ModalService} from "@groupdocs-total-angular/common-components";
import {ViewerConfig} from "./viewer-config";
import {ViewerConfigService} from "./viewer-config.service";

@Component({
  selector: 'groupdocs-viewer-angular-root',
  templateUrl: './viewer-app.component.html',
  styleUrls: ['./viewer-app.component.less']
})
export class ViewerAppComponent {
  title = 'viewer';
  files: FileModel[] = [];
  file: FileDescription;
  viewerConfig: ViewerConfig;

  constructor(private _viewerService: ViewerService, private _modalService: ModalService, private _configService: ViewerConfigService) {
    this._configService.updatedConfig.subscribe( (viewerConfig) => {
      this.viewerConfig = viewerConfig;
    });
  }

  openModal(id: string) {
    this._viewerService.loadFiles('').subscribe((files: FileModel[]) => this.files = files || []);
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._viewerService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, modalId: string) {
    this._viewerService.loadFile($event).subscribe((file: FileDescription) => this.file = file);
    this._modalService.close(modalId);
  }
}

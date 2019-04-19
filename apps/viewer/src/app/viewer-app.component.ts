import {Component} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {FileDescription, FileModel, ModalService, UploadFilesService} from "@groupdocs-total-angular/common-components";
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

  constructor(private _viewerService: ViewerService, private _modalService: ModalService, private _configService: ViewerConfigService, private _uploadFilesService: UploadFilesService) {
    this._configService.updatedConfig.subscribe((viewerConfig) => {
      this.viewerConfig = viewerConfig;
    });

    this._uploadFilesService.uploadsChange$.subscribe((uploads) => {
      if (uploads) {
        var i: number;
        for (i = 0; i < uploads.length; i++) {
          this._viewerService.upload(uploads.item(i), '', this.viewerConfig.rewrite).subscribe(() => {
            this.selectDir('');
          });
        }
      }
    });
  }

  openModal(id: string) {
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


  upload($event: string) {
    this._viewerService.upload(null, $event, this.viewerConfig.rewrite).subscribe(() => {
      this.selectDir('');
    });
  }
}

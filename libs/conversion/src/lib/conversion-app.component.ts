import {Component, ElementRef, Input} from '@angular/core';
import * as jquery from 'jquery';
import {ConversionConfigService} from "./conversion-config.service";
import {ConversionService} from "./conversion.service";
import { ModalService,
  FileModel,
  CommonModals,
  UploadFilesService
} from "@groupdocs.examples.angular/common-components";
import {ConversionConfig} from "./conversion-config";
import {FileFormatModel} from "./models"

const $ = jquery;

@Component({
  selector: 'gd-conversion',
  templateUrl: './conversion-app.component.html',
  styleUrls: ['./conversion-app.component.less']
})
export class ConversionAppComponent {
  title = 'conversion';
  files: FileModel[] = [];
  formats: FileFormatModel[] = [];
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  leftBarOpen = false;
  conversionConfig: ConversionConfig;

  constructor(private _modalService: ModalService,
              private _conversionService: ConversionService,
              private configService: ConversionConfigService,
              uploadFilesService: UploadFilesService) {

    configService.updatedConfig.subscribe((config) => {
      this.conversionConfig = config;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._conversionService.upload(uploads.item(i), '', this.conversionConfig.rewrite).subscribe(() => {
            this.selectDir('');
          });
        }
      }
    });

    _conversionService.selectedFormat.subscribe((selectedFormat) => {
      if (Object.keys(selectedFormat).length > 0) {
        this.formats.push(selectedFormat as FileFormatModel);
      }
    });
  }

  get rewriteConfig(): boolean {
    return this.conversionConfig ? this.conversionConfig.rewrite : true;
  }

  get browseConfig(): boolean {
    return this.conversionConfig ? this.conversionConfig.browse : true;
  }

  get uploadConfig(): boolean {
    return this.conversionConfig ? this.conversionConfig.upload : true;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  upload($event: string) {
    this._conversionService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  selectDir($event: string) {
    this._conversionService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  convert() {
  }

  isLeftBarOpen() {
    return this.isDesktop ? true : this.leftBarOpen;
  }
}

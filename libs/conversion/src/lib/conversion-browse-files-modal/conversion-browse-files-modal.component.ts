import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, FileModel, ModalService, CommonModals } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
import {ConversionItemModel} from "../models";

@Component({
  selector: 'gd-conversion-browse-files-modal',
  templateUrl: './conversion-browse-files-modal.component.html',
  styleUrls: ['./conversion-browse-files-modal.component.less']
})
export class ConversionBrowseFilesModalComponent extends BrowseFilesModalComponent implements OnInit {
  private _format: string;
  formats;

  constructor(_uploadService: UploadFilesService,
    private _conversionService: ConversionService,
    private _modalService: ModalService) {
    super(_uploadService);
  }

  selectFormat($event: any, file: FileModel) {
    this._format = $event.value;
    const extension = file.guid.replace(/^.*\./, '');
    const destinationGuid = file.guid.replace(extension, this._format);
    const destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');

    const conversionItem: ConversionItemModel = {
      guid: file.guid,
      directory: file.directory,
      size: file.size,
      name: file.name,
      destinationType: $event.value,
      sizeString: this.getSize(file.size),
      sourceIcon: this.getFormatIcon(file),
      sourceFormatName: this.getFormatName(file),
      destinationFileName: destinationFileName,
      destinationFormatName: this.getFormatName({name: destinationFileName, directory: false} as FileModel),
      destinationIcon: this.getFormatIcon({name: destinationFileName, directory: false} as FileModel),
      converted: false,
      // TODO: add proper processing state
      //converting: false
    };

    this._conversionService.selectItem(conversionItem);
    this._modalService.close(CommonModals.BrowseFiles);
  }

  createFormatOption(val: string) {
    return {value: val, name: val}
  }

  formatOptions(formats) {
    const allTypes = new Array();
    for (let i = 0; i < formats.length; i++) {
      allTypes.push(this.createFormatOption(formats[i]));
    }
    return allTypes;
  }
}

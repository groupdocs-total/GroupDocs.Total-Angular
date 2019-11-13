import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, FileModel, ModalService, CommonModals } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
import {ConversionItemModel, ExtendedFileModel} from "../models";

export interface Option {
  name: string;
  value: any;
  warning: boolean;
}

@Component({
  selector: 'gd-conversion-browse-files-modal',
  templateUrl: './conversion-browse-files-modal.component.html',
  styleUrls: ['./conversion-browse-files-modal.component.less']
})
export class ConversionBrowseFilesModalComponent extends BrowseFilesModalComponent implements OnInit {
  private _format: string;
  formats;
  @Input() files: ExtendedFileModel[];
  @Output() selectAll = new EventEmitter<boolean>();

  dynamicOptions: Option[] = [];

  constructor(_uploadService: UploadFilesService,
    private _conversionService: ConversionService,
    private _modalService: ModalService) {
    super(_uploadService);
  }

  selectDD(entry){
    console.log('SELECTED DD',entry);
  }

  selectAllItems(checked: boolean){
    this.selectAll.emit(checked);

    this.dynamicOptions = this.prepareMultipleConversionTypes();
  }

  selectSingleItem(checked: boolean, file: ExtendedFileModel){
    // TODO: refactor?
    const selectedFiles = this.files.filter(f => f.guid === file.guid);
    if (selectedFiles.length === 1){
      selectedFiles[0].selected = checked;
    }

    this.dynamicOptions = this.prepareMultipleConversionTypes();
  }

  getLabelString(){
    if (this.files && this.files.length > 0) {
      const selectedCount = this.files.filter(file => file.selected).length;
      if (selectedCount > 0) {
      return 'Add ' + selectedCount + ' selected'
      }
      else {
        return 'Add selected'
      }
    }
  }

  prepareMultipleConversionTypes() {
    const allTypes = [];

    this.files.filter(file => file.selected).forEach((f) => {
      if (f.conversionTypes.length > 0) {
        const types = Object.assign([], f.conversionTypes);
        allTypes.push(types);
      }
    });

    let longestArray = [];
    allTypes.forEach((item) => {
      if(item.length >= longestArray.length){
        longestArray = item;
      }
    });

    //add warnings
    allTypes.forEach(typesArr => {
        for (let i = 0; i < longestArray.length; i++) {
          const type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
          // TODO: reconsider second check
          if (typesArr.indexOf(type) === -1 && typesArr.filter(t => t.name === type).length === 0) {
              longestArray[i] = {
                value: type,
                name: type,
                warning: true,
                icon: this.getFormatIcon({name: 'dummyName.' + type, directory: false} as FileModel)
              };
          } else {
            if(!longestArray[i].warning) {
              longestArray[i] = {
                value: type,
                name: type,
                warning: false,
                icon: this.getFormatIcon({name: 'dummyName.' + type, directory: false} as FileModel)
              };
            }
          }
        }
    }); 

    return longestArray;
  }

  selectFormat($event: any, file: ExtendedFileModel) {
    // the case when we selecting format inline on the single file
    if (file) {
      this.selectAll.emit(false);
      file.selected = true;
    }
    
    this._format = $event.value;
    const conversionItems = new Array<ConversionItemModel>();

    this.files.forEach((f) => {
        if (f.selected && !f.isDirectory && !f.directory){
          const extension = f.guid.replace(/^.*\./, '');
          const destinationGuid = f.guid.replace(extension, this._format);
          const destinationFileName = destinationGuid.replace(/^.*[\\\/]/, '');

          const conversionItem: ConversionItemModel = {
            guid: f.guid,
            directory: f.directory,
            size: f.size,
            name: f.name,
            destinationType: $event.value,
            isDirectory: f.isDirectory,
            sizeString: this.getSize(f.size),
            sourceIcon: this.getFormatIcon(f),
            sourceFormatName: this.getFormatName(f),
            destinationFileName: destinationFileName,
            destinationFormatName: this.getFormatName({name: destinationFileName, directory: false} as FileModel),
            destinationIcon: this.getFormatIcon({name: destinationFileName, directory: false} as FileModel),
            converted: false,
            // TODO: maybe there is a more beauty way?
            converting: false,
            warning: f.conversionTypes.indexOf(this._format) === -1 ? true : false
          };

          conversionItems.push(conversionItem);
        }
    })

    this._conversionService.selectItems(conversionItems);
    this._conversionService.selectFormat(this._format.toUpperCase());
    this._modalService.close(CommonModals.BrowseFiles);

    if ($event.warning){
      this._modalService.open(CommonModals.InformationMessage);
    }
  }

  createFormatOption(val: string) {
    return {
      value: val,
      name: val,
      icon: this.getFormatIcon({name: 'dummyName.' + val, directory: false} as FileModel)
    }
  }

  formatOptions(formats) {
    if (formats) {
      const allTypes = new Array();
      for (let i = 0; i < formats.length; i++) {
        allTypes.push(this.createFormatOption(formats[i]));
      }
      return allTypes;
    }
  }

  anyItemSelected() {
    // TODO: reconsider such checks
    if (this.files && this.files.length > 0) {
      return this.files.filter(file => file.selected).length > 0;
    }
    else return false;
  }

  allItemsSelected() {
    if (this.files && this.files.filter(file => !file.isDirectory && !file.directory).length > 0 && this.files.length > 0) {
      return this.files.filter(file => !file.isDirectory && !file.directory && file.selected).length 
         === this.files.filter(file => !file.isDirectory && !file.directory).length;
    }
    else return false;
  }
}

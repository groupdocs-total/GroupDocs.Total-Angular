import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, FileModel, ModalService, CommonModals } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
import {ConversionItemModel, ExtendedFileModel} from "../models";

export interface Option {
  name: string;
  value: any;
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
  selectAllChecked: boolean = false;

  constructor(_uploadService: UploadFilesService,
    private _conversionService: ConversionService,
    private _modalService: ModalService) {
    super(_uploadService);
  }

  selectAllItems(checked: boolean){
    this.selectAll.emit(checked);

    this.dynamicOptions = this.prepareMultipleConversionTypes();
  }

  selectSingleItem(checked: boolean, file: ExtendedFileModel){
    // TODO: refactor
    let selectedFiles = this.files.filter(f => f.guid == file.guid);
    if (selectedFiles.length == 1){
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
    var allTypes = [];

    this.files.filter(file => file.selected).forEach((f) => {
      if (f.conversionTypes.length > 0) {
        var types = Object.assign([], f.conversionTypes);
        allTypes.push(types);
      }
    });

    var longestArray = [];
    allTypes.forEach((item) => {
      if(item.length >= longestArray.length){
        longestArray = item;
      }
    });

    //add warnings
    allTypes.forEach(typesArr => {
        for (var i = 0; i < longestArray.length; i++) {
          var type = (longestArray[i].value) ? longestArray[i].value : longestArray[i];
          // TODO: reconsider second check
          if (typesArr.indexOf(type) == -1 && typesArr.filter(t => t.name == type).length == 0) {
              longestArray[i] = { value: type, name: type, warning: true };
          } else {
            if(!longestArray[i].warning) {
              longestArray[i] = { value: type, name: type, warning: false };
            }
          }
        }
    }); 

    return longestArray;
  }

  selectFormat($event: any, file: ExtendedFileModel) {
    // the case when we selecting format inline on the single
    if (file) file.selected = true;
    
    this._format = $event.value;

    let conversionItems = new Array<ConversionItemModel>();

    // TODO: try filter method
    // TODO: add check that item was already added
    this.files.forEach((file) => {
        if (file.selected && !file.isDirectory){
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
            // TODO: reconsider following field usage
            converting: false
          };

          conversionItems.push(conversionItem);
        }
    })

    this._conversionService.selectItems(conversionItems);
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

  anyItemSelected() {
    if (this.files && this.files.length > 0) {
      return this.files.filter(file => file.selected).length > 0;
    }
    else return false;
  }
}

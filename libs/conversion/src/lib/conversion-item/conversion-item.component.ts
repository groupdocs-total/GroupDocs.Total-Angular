import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ConversionItemModel } from '../models';
import {ConversionService} from "../conversion.service";

@Component({
  selector: 'gd-conversion-item',
  templateUrl: './conversion-item.component.html',
  styleUrls: ['./conversion-item.component.less']
})

export class ConversionItemComponent implements OnInit {
  @Input() item: ConversionItemModel;

  constructor(private _conversionService: ConversionService) {
  }
  
  ngOnInit(): void {
  }

  convert($event, item: ConversionItemModel) {
    $event.preventDefault();
    $event.stopPropagation();
    this._conversionService.selectedItemToConvert(item);
  }

  downloadFile($event, item: ConversionItemModel) {
    // TODO: maybe need to be simplified?
    const conversionFolderPath = item.guid.substring(0, item.guid.lastIndexOf("\\"));
    const extension = item.guid.replace(/^.*\./, '');
    const convertedFilePath = conversionFolderPath + '\\converted\\' + item.name;
    const destinationGuid = convertedFilePath.replace(extension, item.destinationType);
    window.location.assign(this._conversionService.getDownloadUrl(destinationGuid));
  }

  removeItemFromQueue($event, item: ConversionItemModel) {
    $event.preventDefault();
    $event.stopPropagation();
    this._conversionService.selectedItemToRemove(item);
  }
}

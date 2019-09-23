import { Component, Input, OnInit } from '@angular/core';
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

  downloadFile(item: ConversionItemModel) {
    window.location.assign(this._conversionService.getDownloadUrl(item.destinationFileName));
  }

  removeItemFromQueue($event, item: ConversionItemModel) {
    $event.preventDefault();
    $event.stopPropagation();
    this._conversionService.selectedItemToRemove(item);
  }
}

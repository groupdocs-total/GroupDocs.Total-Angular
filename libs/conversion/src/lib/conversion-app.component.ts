import {Component, ElementRef} from '@angular/core';
import * as jquery from 'jquery';
import {ConversionConfigService} from "./conversion-config.service";
import {ConversionService} from "./conversion.service";
import {ConversionConfig} from "./conversion-config";

const $ = jquery;

@Component({
  selector: 'gd-conversion',
  templateUrl: './conversion-app.component.html',
  styleUrls: ['./conversion-app.component.less']
})
export class ConversionAppComponent {
  isDesktop: boolean;
  leftBarOpen = false;
  conversionConfig: ConversionConfig;

  constructor(private _conversionService: ConversionService,
              private configService: ConversionConfigService) {
    configService.updatedConfig.subscribe((config) => {
      this.conversionConfig = config;
    });
  }

  convert() {
  }

  isLeftBarOpen() {
    return this.isDesktop ? true : this.leftBarOpen;
  }
}

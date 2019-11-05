import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ExcelPageService } from '../excel-page.service';

@Component({
  selector: 'gd-excel-page',
  templateUrl: './excel-page.component.html',
  styleUrls: ['./excel-page.component.less']
})
export class ExcelPageComponent implements OnInit, OnChanges {

  @Input() angle: number;
  @Input() width: number;
  @Input() height: number;
  @Input() number: number;
  @Input() data: string;
  @Input() isHtml: boolean;
  @Input() editable: boolean;
  imgData: string;
  dataUpated = false;

  constructor(private _excelPageService: ExcelPageService) {
  }

  ngOnInit() {
    const isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    if(isIE && this.number === 0){
      this.editable = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
    // which leads to undesired spaces on the top of the docs pages
    this.data = this.data !== null ? this.data.replace(/>\s+</g,'><').replace(/\uFEFF/g,"") : null;
    const dataImagePngBase64 = 'data:image/png;base64,';
    this.imgData = dataImagePngBase64;
    if (!this.isHtml) {
      this.imgData += this.data;
    }

    // to avoid adding additional rows/columns on each rotate action
    if (!this.dataUpated) {
      this.data = this.data !== null ? this._excelPageService.getUpdatedPage(this.data) : null;
      this.dataUpated = true;
    }
  }
}

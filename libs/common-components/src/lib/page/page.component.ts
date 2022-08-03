import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'gd-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit, OnChanges {

  @Input() angle: number;
  @Input() width: number;
  @Input() height: number;
  @Input() number: number;
  @Input() data: string;
  @Input() isHtml: boolean;
  @Input() editable: boolean;
  imgData: string;

  constructor() {
  }

  ngOnInit() {
    const isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    if(isIE && this.number === 0){
      this.editable = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.isHtml) {
      // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
      // which leads to undesired spaces on the top of the docs pages
      this.data = this.data 
        ? this.data.replace(/>\s+</g,'><')
        .replace(/\uFEFF/g,"")
      : null;
    } else {
      if(this.data) {
        this.imgData = this.data.startsWith('data:image') ? this.data : 'data:image/png;base64,' + this.data;
      }
    }
  }
}

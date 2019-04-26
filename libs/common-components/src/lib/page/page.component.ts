import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'gd-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit, OnChanges {

  @Input() angle: number;
  @Input() number: number;
  @Input() data: string;
  @Input() isHtml: boolean;
  @Input() landscape: boolean;
  imgData: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dataImagePngBase64 = 'data:image/png;base64,';
    this.imgData = dataImagePngBase64;
    if (!this.isHtml) {
      this.imgData += this.data;
    }
  }

}

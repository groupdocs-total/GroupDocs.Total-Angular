import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'gd-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less'],
  encapsulation: ViewEncapsulation.None,
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
  text: string;

  constructor(private _selectionService: SelectionService) {
  }

  ngOnInit() {
    this.text = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dataImagePngBase64 = 'data:image/png;base64,';
    this.imgData = dataImagePngBase64;
    if (!this.isHtml) {
      this.imgData += this.data;
    }
  }

  noop(event){
    event.preventDefault()
    this._selectionService.restoreSelection();
  }

  captureSelection(){
    this._selectionService.captureSelection();
  }
}

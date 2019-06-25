import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import { SelectionService } from '../selection.service';
import {GetHtmlServiceService} from "../get-html.service.service";
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
  text: any;
  private isIE: boolean;

  constructor(private _selectionService: SelectionService, private _htmlService: GetHtmlServiceService) {
  }

  ngOnInit() {
    this.text = this.data;
    this.isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    let initialEditableState = false;
    if(this.isIE){
      this.editable = false;
    }
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
    if(this.text.innerHTML) {
      let html = this.text.innerHTML.toString();
      this._htmlService.SetContent(html);
    }
  }

  captureSelection(){
    this._selectionService.captureSelection();
  }

}

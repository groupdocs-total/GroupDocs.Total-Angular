import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {FileDescription, FileUtil} from "../file.service";
import {ZoomService} from "../zoom.service";
import * as jquery from 'jquery';
const $ = jquery;

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit, OnChanges, AfterViewChecked {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  wait = false;
  refreshView: boolean;
  zoom: number;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              zoomService: ZoomService) {

    zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });
  }

  ngOnInit() {
  }

  getDimensionWithUnit(value: number) {
    return value + FileUtil.find(this.file.guid, false).unit;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshView = !this.refreshView;
  }

  ngAfterViewChecked(): void {
    const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
    const element = elementNodeListOf.item(0);
    if (element) {
      $(element).trigger('focus');
    }
  }
}

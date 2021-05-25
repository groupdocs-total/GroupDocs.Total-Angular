import {Component, Input, OnInit, OnDestroy, AfterViewInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {NavigateService, PageModel, ZoomService, FileUtil} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.less']
})
export class ThumbnailsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() pages: PageModel[];
  @Input() guid: string;
  @Input() mode: boolean;
  @Input() isHtmlMode: boolean;
  @Output() selectedPage = new EventEmitter<number>();

  constructor(private _navigateService: NavigateService, private _zoomService: ZoomService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
    // which leads to undesired spaces on the top of the docs pages
    if (this.pages) {
      this.pages.forEach(page => {
        if (page.data) {
          page.data = page.data.replace(/>\s+</g,'><')
                               .replace(/\uFEFF/g,"");
        }
      });
    }
  }

  ngAfterViewInit() {
    this._zoomService.changeZoom(this._zoomService.zoom);
  }

  ngOnDestroy() {
    setTimeout(() => {
      this._zoomService.changeZoom(this._zoomService.zoom);
    }, 100);
  }

  imgData(data: string) {
    const dataImagePngBase64 = 'data:image/png;base64,';
    if (!this.isHtmlMode) {
      return dataImagePngBase64 + data;
    }
    return dataImagePngBase64;
  }

  getScale(x: number, y: number) {
    return Math.min(190 / x, 190 / y);
  }

  openPage(pageNumber: number) {
    this.selectedPage.emit(pageNumber);
    this._navigateService.navigateTo(pageNumber);
  }

  // TODO: consider placing in one service
  getDimensionWithUnit(value: number) {
    return value + FileUtil.find(this.guid, false).unit;
  }
}

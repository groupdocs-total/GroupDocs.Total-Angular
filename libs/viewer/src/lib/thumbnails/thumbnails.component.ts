import {Component, Input, OnInit, OnDestroy, AfterViewInit, OnChanges} from '@angular/core';
import {NavigateService, PageModel, ZoomService} from "@groupdocs.examples.angular/common-components";

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

  constructor(private _navigateService: NavigateService, private _zoomService: ZoomService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // TODO: this is temporary needed to remove unneeded spaces and BOM symbol 
    // which leads to undesired spaces on the top of the docs pages
    this.pages.forEach(page => {
      page.data = page.data.replace(/>\s+</g,'><').replace(/\uFEFF/g,"");
    });
  }

  ngAfterViewInit() {
    this._zoomService.changeZoom(this._zoomService.zoom);
  }

  ngOnDestroy() {
    this._zoomService.changeZoom(this._zoomService.zoom);
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
    this._navigateService.navigateTo(pageNumber);
  }
}

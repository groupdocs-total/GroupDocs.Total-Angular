import {Component, Input, OnInit} from '@angular/core';
import {FileUtil, NavigateService, PageModel, ZoomService} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.less']
})
export class ThumbnailsComponent implements OnInit {

  @Input() pages: PageModel[];
  @Input() guid: string;
  @Input() mode: boolean;
  @Input() isHtmlMode: boolean;

  constructor(private _navigateService: NavigateService, private _zoomService: ZoomService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this._zoomService.changeZoom(100);
  }

  ngOnDestroy() {
    this._zoomService.changeZoom(100);
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

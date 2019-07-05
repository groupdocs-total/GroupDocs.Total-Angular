import {AfterViewInit, Directive, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Directive({
  selector: '[gdZoom]'
})
export class ZoomDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input() zoomActive = true;

  @HostBinding('style.zoom') zoomStr: string;
  @HostBinding('style.zoom') zoomInt: number;
  @HostBinding('style.-moz-transform') mozTransform: string;
  @HostBinding('style.-moz-transform-origin') mozTransformOrigin: string;
  @HostBinding('style.-webkit-transform') webkitTransform: SafeStyle;
  @HostBinding('style.-ms-transform') msTransform: SafeStyle;
  @HostBinding('style.-o-transform') oTransform: SafeStyle;

  constructor(private _zoomService: ZoomService, private _sanitizer: DomSanitizer) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    if (! this.zoomActive) {
      return;
    }
    this.setStyles(this._zoomService.zoom);
    this._zoomService.zoomChange.subscribe((zoom) => {
      this.setStyles(zoom);
    });
  }

  private setStyles(zoom) {
    if (! this.zoomActive) {
      return;
    }
    this.zoomStr = Math.round(zoom) + '%';
    this.zoomInt = zoom === 100 ? 1 : zoom / 100;
    this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
    this.mozTransformOrigin = 'top';
    const transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
    this.webkitTransform = transform;
    this.msTransform = transform;
    this.oTransform = transform;
  }

  ngAfterViewInit(): void {
    this.setStyles(this._zoomService.zoom);
  }
}

import {Directive, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Directive({
  selector: '[gdZoom]'
})
export class ZoomDirective implements OnInit, OnDestroy {

  @HostBinding('style.zoom') zoomStr: string;
  @HostBinding('style.zoom') zoomInt: number;
  @HostBinding('style.-moz-transform') mozTransform: string;
  @HostBinding('style.-moz-transform-origin') mozTransformOrigin: string;
  @HostBinding('style.-webkit-transform') webkitTransform: SafeStyle;
  @HostBinding('style.-ms-transform') msTransform: SafeStyle;
  @HostBinding('style.-o-transform') oTransform: SafeStyle;

  @HostBinding('style.margin-bottom') marginBottom: string;
  @HostBinding('style.margin-left') marginLeft: string;
  @HostBinding('style.margin-right') marginRight: string;

  constructor(private _zoomService: ZoomService, private _sanitizer: DomSanitizer) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.setStyles(this._zoomService.zoom);
    this._zoomService.zoomChange.subscribe((zoom) => {
      this.setStyles(zoom);
    });
  }

  private setStyles(zoom) {
    this.zoomStr = Math.round(zoom) + '%';
    this.zoomInt = zoom == 100 ? 1 : zoom / 100;
    this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
    this.mozTransformOrigin = 'top';
    const transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
    this.webkitTransform = transform;
    this.msTransform = transform;
    this.oTransform = transform;

    function getMargin(margin, alt = margin) {
      return (margin == 0 ? 10 : alt);
    }

    // TODO: magic!
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      const margin = (zoom - 100) * 6;
      this.marginBottom = getMargin(margin, margin * 2) + 'px';
      if (zoom > 90) {
        this.marginLeft = getMargin(margin) + 'px';
        this.marginRight = getMargin(margin) + 'px';
      } else {
        this.marginLeft = getMargin(margin, margin * 0.5) + 'px';
        this.marginRight = getMargin(margin, margin * 0.5) + 'px';
      }
    }
  }
}

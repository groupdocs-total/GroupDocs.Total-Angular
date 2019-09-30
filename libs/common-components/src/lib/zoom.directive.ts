import {AfterViewInit, Directive, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Directive({
  selector: '[gdZoom]'
})
export class ZoomDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input() zoomActive = true;
  ifEdge = window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
  ifFirefox = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  @Input() ifPdf = true;

  @HostBinding('style.zoom') zoomStr: string;
  @HostBinding('style.zoom') zoomInt: number;
  @HostBinding('style.-moz-transform') mozTransform: string;
  @HostBinding('style.transform') transform: string;
  @HostBinding('style.-moz-transform-origin') mozTransformOrigin: string;
  @HostBinding('style.transform-origin') transformOrigin: string;
  @HostBinding('style.-webkit-transform') webkitTransform: SafeStyle;
  @HostBinding('style.-ms-transform') msTransform: SafeStyle;
  @HostBinding('style.-o-transform') oTransform: SafeStyle;
  @HostBinding('class.mobile-flex-direction') isMobileFlex = false;

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
    const zoomInt = zoom === 100 ? 1 : zoom / 100;
    
    if (this.ifEdge || this.ifPdf) {
      this.zoomInt = zoomInt;
    }

    this.mozTransform = 'scale(' + zoomInt + ', ' + zoomInt + ')';
    this.mozTransformOrigin = 'top';
    
    if (!this.ifEdge && !this.ifPdf) {
      this.transform = 'scale(' + zoomInt + ')';
      this.transformOrigin = 'top';
    }

    if (this.ifFirefox && this.ifPdf){
      this.isMobileFlex = true;
    }

    const transform = this._sanitizer.bypassSecurityTrustStyle('(' + zoomInt + ', ' + zoomInt + ')');
    this.webkitTransform = transform;
    this.msTransform = transform;
    this.oTransform = transform;
  }

  ngAfterViewInit(): void {
    this.setStyles(this._zoomService.zoom);
  }
}

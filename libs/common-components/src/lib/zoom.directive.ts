import {AfterViewInit, Directive, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";

@Directive({
  selector: '[gdZoom]'
})
export class ZoomDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input() zoomActive = true;
  @Input() isEdge = true;
  @HostBinding('style.zoom') zoomInt: number;
  @HostBinding('style.transform') Transform: SafeStyle;
  @HostBinding('style.transform-origin') TransformOrigin: string;

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
    if (!this.zoomActive) {
      return;
    }

    const zoomInt = zoom === 100 ? 1 : zoom / 100;
    
    if (this.isEdge) {
      this.zoomInt = zoomInt;
    }
    else {
      this.Transform = 'scale(' + zoomInt + ')';
      this.TransformOrigin = 'top';
      }
  }

  ngAfterViewInit(): void {
    this.setStyles(this._zoomService.zoom);
  }
}

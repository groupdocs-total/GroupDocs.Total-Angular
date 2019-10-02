import {AfterViewInit, Directive, HostBinding, Input, OnDestroy, OnInit, ElementRef, OnChanges} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {DomSanitizer} from "@angular/platform-browser";

@Directive({
  selector: '[gdZoom]'
})
export class ZoomDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() zoomActive = true;
  @Input() ifPdf = true;
  @Input() file;
  ifChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  ifFirefox = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  ifEdge = window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;

  @HostBinding('style.zoom') zoomInt: number;
  @HostBinding('style.transform') transform: string;
  @HostBinding('style.transform-origin') transformOrigin: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.min-width') minWidth: string;
  el: ElementRef<any>;

  constructor(private _zoomService: ZoomService, el: ElementRef) {
    this.el = el;
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
    this.setStyles(this._zoomService.zoom);
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

    const zoomInt = zoom === 100 ? 1 : zoom / 100;
    
    if (this.ifEdge || (this.ifPdf && !this.ifChrome)) {
      this.zoomInt = zoomInt;
    }
    else {
      this.zoomInt = null;
    }
    
    if (!this.ifEdge && (!this.ifPdf || this.ifChrome || this.ifFirefox)) {
      this.transform = 'scale(' + zoomInt + ')';
      this.transformOrigin = 'top left';
    }
    else {
      this.transform = "";
      this.transformOrigin = "";
    }

    this.width = (this.el.nativeElement.parentElement.offsetWidth)/zoomInt + 'px';
    let maxWidth = 0;
    this.file.pages.forEach(page => {
      {
        if (page.width > maxWidth){
          maxWidth = page.width;
        }
      }
    });
    this.minWidth = maxWidth + 'pt';
  }

  ngAfterViewInit(): void {
    this.setStyles(this._zoomService.zoom);
  }
}

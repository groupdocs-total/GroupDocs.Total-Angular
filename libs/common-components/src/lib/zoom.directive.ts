import {AfterViewInit, Directive, HostBinding, Input, OnDestroy, OnInit, ElementRef, OnChanges} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {FileUtil} from "./file.service";
import { WindowService } from './window.service';

@Directive({
  selector: '[gdZoom]'
})
export class ZoomDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() zoomActive = true;
  @Input() file;

  @HostBinding('style.zoom') zoomInt: number;
  @HostBinding('style.transform') transform: string;
  @HostBinding('style.transform-origin') transformOrigin: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.height') height: string;
  @HostBinding('style.min-width') minWidth: string;
  el: ElementRef<any>;

  constructor(private _zoomService: ZoomService, private _windowService: WindowService, el: ElementRef) {
    this.el = el;
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
    this.setStyles(this._zoomService.zoom);
    this.resizePages(this._zoomService.zoom);
  }

  ngOnInit(): void {
    if (! this.zoomActive) {
      return;
    }

    this.setStyles(this._zoomService.zoom);
    this._zoomService.zoomChange.subscribe((zoom) => {
      this.setStyles(zoom);
      this.resizePages(zoom);
    });
  }

  private setStyles(zoom) {
    if (! this.zoomActive) {
      return;
    }

    const zoomInt = zoom === 100 ? 1 : zoom / 100;
    
    if (this._windowService.isEdge()) {
      this.zoomInt = zoomInt;
    }
    else {
      this.zoomInt = null;
    }
    
    if (!this._windowService.isEdge()) {
      this.transform = 'scale(' + zoomInt + ')';
      this.transformOrigin = 'top left';
    }
    else {
      this.transform = "";
      this.transformOrigin = "";
    }

    let maxWidth = 0;
    this.file.pages.forEach(page => {
      {
        if (page.width > maxWidth){
          maxWidth = page.width;
        }
      }
    });

    // Images and Excel-related files receiving dimensions in px from server
    this.minWidth = maxWidth + FileUtil.find(this.file.guid, false).unit;
  }

  private getScrollWidth(elm){
    return elm.offsetWidth - elm.clientWidth;
  }

  private getScrollHeight(elm){
    return elm.offsetHeight - elm.clientHeight;
  }

  private resizePages(zoom){
    const zoomInt = zoom === 100 ? 1 : zoom / 100;

    const viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
    const viewPortHeight = this.el.nativeElement.parentElement.offsetHeight;
    const scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
    const scrollHeight = this.getScrollHeight(this.el.nativeElement.parentElement);
    this.width = (viewPortWidth/zoomInt - scrollWidth/zoomInt) + 'px';
    this.height = (viewPortHeight/zoomInt - scrollHeight/zoomInt) + 'px';
  }

  ngAfterViewInit(): void {
    this.setStyles(this._zoomService.zoom);
  }
}

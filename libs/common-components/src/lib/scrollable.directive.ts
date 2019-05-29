import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {NavigateService} from "./navigate.service";
import {PagePreloadService} from "./page-preload.service";
import {ZoomService} from "./zoom.service";
import {WindowService} from "./window.service";
import * as $ from 'jquery';

@Directive({
  selector: '[gdScrollable]'
})
export class ScrollableDirective implements AfterViewInit, OnChanges, OnInit {
  @Input() onRefresh: boolean;

  private currentPage: number;
  private zoom: number = 100;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _navigateService: NavigateService,
              private _pagePreloadService: PagePreloadService,
              private _zoomService: ZoomService,
              private _windowService: WindowService) {

    this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val ? val : this.zoom;
      this.refresh();
    });
  }

  ngAfterViewInit() {
    this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    this._navigateService.navigate.subscribe((value => {
      this.currentPage = value;
      this.scrollToPage(value);
    }));
    this.refresh();
  }

  @HostListener('scroll') scrolling() {
    this.refresh();
  }

  @HostListener('window:resize') resizing() {
    this.refresh();
  }

  scrollToPage(pageNumber: number) {
    const el = this._elementRef.nativeElement;
    const page = this.getPage(pageNumber);
    const prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
    const isSameTop = (prev && $(prev).offset().top == $(page).offset().top);
    if (this.checkInViewport(page) && isSameTop) {
      return;
    }
    let pagesHeight = this.calculateOffset(pageNumber);
    let options = {
      left: 0,
      top: pagesHeight
    };
    el ? el.scrollTo(options) : null;
  }

  private getChildren() {
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      return el.children.item(0).children;
    }
  }

  private getPage(pageNumber: number) {
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      return el.children.item(0).children.item(pageNumber - 1);
    }
  }

  private calculateOffset(pageNumber: number) {
    let count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
    const margin = this._windowService.isDesktop() ? 40 : 10;
    let pagesHeight = 0;
    for (let i = 1; i < pageNumber / count; i++) {
      const item = this.getPage(i);
      const clientHeight = item ? item.clientHeight : 0;
      pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
    }
    return pagesHeight;
  }

  private countPagesOnWidth() {
    const pageEl = this.getPage(1);
    const offset = 150;
    const count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
    return count == 0 ? 1 : count;
  }

  ifFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }

  refresh() {
    let page;
    let currentPageSet = false;
    const pageElem = this.getPage(this.currentPage);
    const currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
    for (page = 1; page < this.getChildren().length + 1; page++) {
      const element = this.getPage(page);
      if (this.checkInViewport(element)) {
        if (!currentPageSet) {
          if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top != currentPageRect.top)) {
            this.currentPage = page;
            this._navigateService.currentPage = page;
          }
          currentPageSet = true;
        }
        this._pagePreloadService.changeLastPageInView(page);
      }
    }
  }

  checkInViewport(el, partial: boolean = true, direction: string = 'vertical') {
    if (!el) {
      return false;
    }
    let x = 0.5;
    let y = 0.5;

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft(),
      right: win.scrollLeft() + win.width(),
      bottom: win.scrollTop() + win.height()
    };


    if (isNaN(this.zoom)) {
      this.zoom = 1;
    }

    var height = $(el).outerHeight() * (this.zoom / 100);
    var width = $(el).outerWidth() * (this.zoom / 100);

    if (!width || !height) {
      return false;
    }

    var bounds = $(el).offset();
    var right = (bounds.left * (this.zoom / 100)) + width;
    var bottom = (bounds.top * (this.zoom / 100)) + height;

    var visible = (!(viewport.right < (bounds.left * (this.zoom / 100)) || viewport.left > right || viewport.bottom < (bounds.top * (this.zoom / 100)) || viewport.top > bottom));

    if (!visible) {
      return false;
    }

    var deltas = {
      top: Math.min(1, (bottom - viewport.top) / height),
      bottom: Math.min(1, (viewport.bottom - (bounds.top * (this.zoom / 100))) / height),
      left: Math.min(1, (right - viewport.left) / width),
      right: Math.min(1, (viewport.right - (bounds.left * (this.zoom / 100))) / width)
    };

    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  ngOnInit(): void {
    this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
  }


  private getWidth() {
    return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
  }

  private getZoom() {
    return this.zoom / 100;
  }
}

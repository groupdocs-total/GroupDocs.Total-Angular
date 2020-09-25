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
import {ViewportService} from "./viewport.service";
import * as jquery from "jquery";
const $ = jquery;

@Directive({
  selector: '[gdScrollable]'
})
export class ScrollableDirective implements AfterViewInit, OnChanges, OnInit {

  private currentPage: number;
  private zoom = 100;
  private loadedPagesSet = new Set();

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _navigateService: NavigateService,
              private _pagePreloadService: PagePreloadService,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              private _viewportService: ViewportService) {

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
    const isSameTop = (prev && $(prev).offset().top === $(page).offset().top);
    if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
      return;
    }
    const pagesHeight = this.calculateOffset(pageNumber);
    const options = {
      left: 0,
      top: pagesHeight
    };
    if(el){
      // using polyfill
      el.scroll(options);
    }
  }

  private getChildren() {
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      // here and in the similar line below we getting the document pages
      return el.children.item(0).children.item(0).children;
    }
  }

  private getPage(pageNumber: number) {
    const el = this._elementRef ? this._elementRef.nativeElement : null;
    if (el) {
      return el.children.item(0).children.item(0).children.item(pageNumber - 1);
    }
  }

  private calculateOffset(pageNumber: number) {
    const count = this._windowService.isFirefox() ? 1 : this.countPagesOnWidth();
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
    return count === 0 ? 1 : count;
  }

  refresh() {
    let page;
    let currentPageSet = false;
    const pageElem = this.getPage(this.currentPage);
    const currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
    for (page = 1; page < this.getChildren().length + 1; page++) {
      const element = this.getPage(page);
      if (this._viewportService.checkInViewport(element, this.zoom)) {
        if (!currentPageSet) {
          if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
            this.currentPage = page;
            if (this._navigateService.currentPage === 0) {
              this._navigateService.currentPage = page;
            }
          }
          currentPageSet = true;
        }
        if (!this.loadedPagesSet.has(page)) {
          this._pagePreloadService.changeLastPageInView(page);
          this.loadedPagesSet.add(page);
        }
      }
    }
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

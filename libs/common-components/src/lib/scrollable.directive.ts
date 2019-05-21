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
              private _zoomService: ZoomService) {

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
    if (this.checkInViewport(this.getPage(pageNumber))) {
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
    const margin = 20;
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
    const currentPageRect = this.currentPage ? this.getPage(this.currentPage).getBoundingClientRect() : null;
    for (page = 1; page < this.getChildren().length + 1; page++) {
      const element = this.getPage(page);
      if (this.checkInViewport(element)) {
        if (!currentPageSet) {
          if (!this.currentPage || (this.currentPage && currentPageRect && element.getBoundingClientRect().top != currentPageRect.top)) {
            this.currentPage = page + 1;
            this._navigateService.currentPage = page + 1;
          }
          currentPageSet = true;
        }
        this._pagePreloadService.changeLastPageInView(page + 1);
      }
    }
  }

  checkInViewport(el, partial: boolean = true, direction: string = 'vertical') {
    if (!el) {
      return false;
    }

    const elSize = (el.offsetWidth * el.offsetHeight);

    const rec = el.getBoundingClientRect();

    const vp = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const tViz = rec.top >= 0 && rec.top < vp.height / 2 && rec.top < vp.height;
    const bViz = rec.bottom > vp.height / 2 && rec.bottom <= vp.height;

    const lViz = rec.left >= 0 && rec.left < vp.width;
    const rViz = rec.right > 0 && rec.right <= vp.width;

    const vVisible = partial ? tViz || bViz : tViz && bViz;
    const hVisible = partial ? lViz || rViz : lViz && rViz;

    let ret;

    if (direction === 'both') {
      ret = (elSize && vVisible && hVisible) ? true : false;
    } else if (direction === 'vertical') {
      ret = (elSize && vVisible) ? true : false;
    } else if (direction === 'horizontal') {
      ret = (elSize && hVisible) ? true : false;
    }

    return ret;
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

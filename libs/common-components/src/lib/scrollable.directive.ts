import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NavigateService} from "./navigate.service";
import {PagePreloadService} from "./page-preload.service";
import {ZoomService} from "./zoom.service";

@Directive({
  selector: '[gdScrollable]'
})
export class ScrollableDirective implements AfterViewInit, OnChanges {
  @Input() onRefresh: boolean;

  private currentPage: number;
  private zoom: number = 100;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _navigateService: NavigateService,
              private _pagePreloadService: PagePreloadService,
              zoomService: ZoomService) {

    zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
      this.refresh();
    });
  }

  ngAfterViewInit() {
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
    if (this.checkInViewport(el.children.item(pageNumber - 1))) {
      return;
    }
    let pagesHeight = this.calculateOffset(pageNumber);
    let options = {
      left: 0,
      top: pagesHeight
    };
    el.scrollTo(options);
  }

  private calculateOffset(pageNumber: number) {
    const el = this._elementRef.nativeElement;
    const pageEl = el.children.item(pageNumber - 1);
    let count = Math.floor(window.innerWidth / (pageEl.getBoundingClientRect().width * this.zoom / 100));
    const margin = 20;
    let pagesHeight = 0;
    for (let i = 1; i < pageNumber / count; i++) {
      const item = el.children.item(i - 1);
      const clientHeight = item ? item.clientHeight : 0;
      pagesHeight += clientHeight > 0 ? clientHeight + margin : 0;
    }
    return pagesHeight;
  }

  refresh() {
    const el = this._elementRef.nativeElement;
    const children = el.children;
    let page;
    let currentPageSet = false;
    const currentPageRect = children.item(this.currentPage - 1).getBoundingClientRect();
    for (page = 0; page < children.length; page++) {
      const element = children.item(page);
      if (this.checkInViewport(element)) {
        if (!currentPageSet) {
          if (!this.currentPage || (this.currentPage && element.getBoundingClientRect().top != currentPageRect.top)) {
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


}

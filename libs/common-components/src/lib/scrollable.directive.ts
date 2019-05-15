import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';
import {NavigateService} from "./navigate.service";
import {PagePreloadService} from "./page-preload.service";
import {ZoomService} from "./zoom.service";

@Directive({
  selector: '[gdScrollable]'
})
export class ScrollableDirective implements AfterViewInit {
  private currentPage: number;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _navigateService: NavigateService,
              private _pagePreloadService: PagePreloadService,
              zoomService: ZoomService) {

    zoomService.zoomChange.subscribe((val: number) => {
      this.refresh();
    });
  }

  ngAfterViewInit() {
    this.refresh();
  }

  @HostListener('scroll') scrolling() {
    this.refresh();
  }

  @HostListener('window:resize') resizing() {
    this.refresh();
  }

  refresh() {
    const el = this._elementRef.nativeElement;
    const children = el.children;
    let page;
    let currentPageSet = false;
    for (page = 0; page < children.length; page++) {
      const element = children.item(page);
      if (this.checkInViewport(element)) {
        if (!currentPageSet) {
          this.currentPage = page + 1;
          this._navigateService.currentPage = page + 1;
        }
        this._pagePreloadService.changeLastPageInView(page + 1);
      }
    }
  }

  checkInViewport(el, partial: boolean = true, direction: string = 'both') {
    const elSize = (el.offsetWidth * el.offsetHeight);

    const rec = el.getBoundingClientRect();

    const vp = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const tViz = rec.top >= 0 && rec.top < vp.height;
    const bViz = rec.bottom > 0 && rec.bottom <= vp.height;

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

}

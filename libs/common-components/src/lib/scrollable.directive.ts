import {Directive, ElementRef, HostListener} from '@angular/core';
import {NavigateService} from "./navigate.service";
import {PagePreloadService} from "./page-preload.service";

@Directive({
  selector: '[gdScrollable]'
})
export class ScrollableDirective {
  private currentPage:number;

  constructor(private _elementRef: ElementRef<HTMLElement>, private _navigateService: NavigateService, private _pagePreloadService: PagePreloadService) {
  }

  @HostListener('scroll') scrolling() {
    this.setCurrentPage();
    this.checkPreloadPages();
  }

  @HostListener('window:resize') resizing() {
    this.setCurrentPage();
    this.checkPreloadPages();
  }

  checkPreloadPages() {
    if (this.currentPage) {
      this._pagePreloadService.changeCurrentPage(this.currentPage);
    }
  }

  setCurrentPage() {
    const el = this._elementRef.nativeElement;
    const children = el.children;
    let page;
    for (page = 0; page < children.length; page++) {
      const element = children.item(page);
      if (this.checkInViewport(element)) {
        this.currentPage = page + 1;
        this._navigateService.currentPage = page + 1;
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

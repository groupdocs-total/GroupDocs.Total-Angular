import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomService } from "./zoom.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
import { fromEvent } from 'rxjs';
import { delay, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[gdScrollableEdited]'
})
export class ScrollableEditedDirective implements AfterViewInit, OnChanges {
  @Input() isPresentation: boolean;

  private currentPage: number;
  private loadedPagesSet = new Set();

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _navigateService: NavigateService,
              private _pagePreloadService: PagePreloadService,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              private _viewportService: ViewportService) {
  }

  ngAfterViewInit() {
    this.refresh();

    fromEvent(window, 'resize')
      .pipe(
        throttleTime(100, undefined, { trailing: true })
      ).subscribe(() => this.refresh());

    fromEvent(this._elementRef.nativeElement, 'scroll')
      .pipe(
        throttleTime(100, undefined, { trailing: true })
      )
      .subscribe(() => this.refresh());

    this._zoomService.zoomChange
      .pipe(delay(300))
      .subscribe(() => this.refresh());

    this._navigateService.navigate.subscribe((value => {
      this.currentPage = value;
      this.scrollToPage(value);
    }));

  }

  scrollToPage(pageNumber: number) {
    const el = this._elementRef.nativeElement;
    const pages = this.getChildren();
    const pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen(pages.item(pageNumber - 1) as HTMLElement, this._elementRef.nativeElement);

    if (pageIsInViewport) {
      return;
    }

    const pagesHeight = this.calculateOffset(pageNumber);
    const options = {
      left: 0,
      top: pagesHeight
    };
    if (el) {
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

  private calculateOffset(pageNumber: number) {
    const pages = this.getChildren();
    if (!pages.length) {
      return;
    }

    return (pages.item(pageNumber - 1).getBoundingClientRect() as DOMRect).y + this._elementRef.nativeElement.scrollTop - 70;
  }

  refresh() {
    const pages = this.getChildren();
    let pageNum = 0;
    let counter = 0;

    while (counter < pages.length) {
      // if we scrolled till the end, the current page number must be the last page
      if (this._elementRef.nativeElement.scrollTop + this._elementRef.nativeElement.offsetHeight + 30 >= this._elementRef.nativeElement.scrollHeight) {
        pageNum = pages.length;
        break;
      }

      const pageIsInViewport = this._viewportService.isBelowCenterOfTheScreen(pages.item(counter) as HTMLElement, this._elementRef.nativeElement);
      if (pageIsInViewport) {
        pageNum = counter + 1;
      } else if (pageNum) {
        counter = pages.length
      }
      counter++;

      if (!this.loadedPagesSet.has(counter)) {
        this._pagePreloadService.changeLastPageInView(counter);
        this.loadedPagesSet.add(counter);
      }

      if (pageIsInViewport) {
        break;
      }
    }

    if ((this.isPresentation && this._navigateService.currentPage === 0) || !this.isPresentation) {
      this._navigateService.currentPage = pageNum;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }
}

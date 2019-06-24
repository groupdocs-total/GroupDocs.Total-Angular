import {AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import {ViewportService} from "../viewport.service";
import * as jquery from "jquery";
const $ = jquery;

@Component({
  selector: 'gd-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.less']
})
export class TopToolbarComponent implements OnInit, AfterViewChecked {
  showLeft: boolean;
  showRight: boolean;

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _viewportService: ViewportService,
              private _cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.refresh();
    const el = this.getToolsElem();
    const $this = this;
    el.addEventListener('scroll', function () {
      $this.refresh();
    });
  }

  moveLeft() {
    const el = this.getToolsElem();
    if (el) {
      const elem = this.canMoveTo(true);
      if (elem) {
        const options = {
          left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
          top: 0,
        };
        el.scrollTo(options);
      }
    }
  }

  moveRight() {
    const el = this.getToolsElem();
    if (el) {
      const elem = this.canMoveTo(false);
      if (elem) {
        const options = {
          left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
          top: 0,
        };
        el.scrollTo(options);
      }
    }
  }

  private getToolsElem() {
    return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
  }

  private canMoveTo(left: boolean) {
    let elem;
    const children = this.getChildren();
    const countElem = children.length;
    for (elem = 0; elem < countElem; elem++) {
      const element = this.getElem(elem);
      if (this._viewportService.checkInViewport(element, 100, this.getLeftOffset())) {
        if (left) {
          return elem > 0 ? children.item(elem - 1) : null;
        } else {
          return elem + 1 < countElem ? children.item(elem + 1) : null;
        }
      }
    }
    return;
  }

  private getElem(num: number) {
    const elems = this.getChildren();
    return elems.item(num !== null ? num : elems.length - 1);
  }

  private getChildren(): HTMLCollection {
    const el = this.getToolsElem();
    if (!el) {
      return;
    }
    return el.children;
  }

  private getLeftOffset() {
    const el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
    if (!el) {
      return 0;
    }
    return el.clientWidth;
  }

  private refresh() {
    this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
    this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
  }

  ngAfterViewChecked(): void {
    const showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
    const showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    if (showLeft !== this.showLeft || showRight !== this.showRight) {
      this.showLeft = showLeft;
      this.showRight = showRight;
      this._cdRef.detectChanges();
    }
  }
}

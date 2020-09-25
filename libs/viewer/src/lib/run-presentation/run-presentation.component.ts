import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {FileDescription, FileUtil} from "@groupdocs.examples.angular/common-components";
import {ZoomService} from "@groupdocs.examples.angular/common-components";
import * as Hammer from 'hammerjs';
import {WindowService} from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';
import { NavigateService } from "@groupdocs.examples.angular/common-components";
import { Subject } from 'rxjs';

const $ = jquery;

@Component({
  selector: 'gd-run-presentation',
  templateUrl: './run-presentation.component.html',
  styleUrls: ['./run-presentation.component.less']
})
export class RunPresentationComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  @Input() currentPage: number;
  @Output() selectedPage = new EventEmitter<number>();
  wait = false;
  zoom: number;

  docWidth = null;
  docHeight = null;
  viewportWidth = null;
  viewportHeight = null;
  scale = null;
  lastScale = null;
  container = null;
  doc = null;
  x = 0;
  lastX = 0;
  y = 0;
  lastY = 0;
  pinchCenter = null;
  pinchCenterOffset = null;
  curWidth = 0;
  curHeight = 0;
  isDesktop: boolean;
  lastCurrentPage: number;

  constructor(protected _elementRef: ElementRef<HTMLElement>,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              private _navigateService: NavigateService,) {
    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });

    this.isDesktop = _windowService.isDesktop();

    this._navigateService.navigate.subscribe(((
      value => {
          this.scrollTo(value, value > this.lastCurrentPage);
          this.lastCurrentPage = value;
      })));
  }

  ngOnInit() {
    this.lastCurrentPage = 1;
  }

  ngOnChanges() {
    const panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
    (panzoom as any).style.transform = '';
  }

  ngAfterViewInit() {
    // For current iteration we take .panzoom as a document
    this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
    // For current iteration we take .gd-document as a container
    this.container = this._elementRef.nativeElement;

    this.docWidth = this.doc.clientWidth;
    this.docHeight = this.doc.clientHeight;
    this.viewportWidth = this.doc.offsetWidth;

    // For cases where we already have zoom defined we should include it
    this.scale = (this.viewportWidth / this.docWidth) * this._zoomService.zoom / 100;

    this.lastScale = this.scale;
    this.viewportHeight = this.container.offsetHeight;
    this.curWidth = this.docWidth * this.scale;
    this.curHeight = this.docHeight * this.scale;

    if (this.currentPage !== 1)
    {
      this.scrollTo(this.currentPage, true);
    }

    const hammer = new Hammer(this.container);
  }

  ngAfterViewChecked(): void {
    const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
    const element = elementNodeListOf.item(0);
    if (element) {
      $(element).trigger('focus');
    }
  }

  scrollTo(pageNumber: number, onRight: boolean) {
    const pagesWidth = this._elementRef.nativeElement.offsetWidth * (pageNumber - 1);
    const startingX = onRight ? pagesWidth - this._elementRef.nativeElement.offsetWidth : pagesWidth + this._elementRef.nativeElement.offsetWidth;
    this.doScrolling(pagesWidth, startingX, 500, new Subject<any>(), this._elementRef);

    this.selectedPage.emit(pageNumber);
  }

  private doScrolling(elementX, startingX, duration, subject: Subject<any>, _elementRef) {
    const diff = elementX - startingX;
    let start;

    window.requestAnimationFrame(function step(timestamp) {
      start = (!start) ? timestamp : start;

      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      _elementRef.nativeElement.scrollTo({ left: startingX + diff * percent });

      if (time < duration) {
        window.requestAnimationFrame(step);
        subject.next({});
      } else {
        subject.complete();
      }
    });
  }

  getDimensionWithUnit(value: number, pageNumber: number) {
    return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
  }

  onPanLeft($event) {
    if ($event.isFinal) {
      this._navigateService.nextPage();
    }
  }

  onPanRight($event) {
    if ($event.isFinal) {
      this._navigateService.prevPage();
    }
  }
}

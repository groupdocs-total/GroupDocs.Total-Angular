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
import {FileDescription, FileUtil} from "../file.service";
import {ZoomService} from "../zoom.service";
import * as Hammer from 'hammerjs';
import {WindowService} from '../window.service';
import * as jquery from 'jquery';
import { NavigateService } from '../navigate.service';

const $ = jquery;

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  @Input() selectedPage: number;
  @Output() onpan = new EventEmitter<any>();
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

  constructor(protected _elementRef: ElementRef<HTMLElement>,
              private _zoomService: ZoomService,
              private _windowService: WindowService,
              private _navigateService: NavigateService,) {
    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });

    this.isDesktop = _windowService.isDesktop();
  }

  ngOnInit() {
    if (this.ifPresentation())
    {
      this.selectedPage = this._navigateService.currentPage;
    }
  }

  ngOnChanges() {
    const panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
    (panzoom as any).style.transform = '';
    // TODO: this intersects with zooming by zoom directive, but still needed
    // for flush previous settings before opening another file
    //this._zoomService.changeZoom(100);
    //this.scale = 1;
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

    const hammer = new Hammer(this.container);
  }

  // TODO: this temporary crutch for Excel files should be documented
  ifExcel() {
    return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
  }

  ifPresentation() {
    return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
  }

  getDimensionWithUnit(value: number, pageNumber: number) {
    return this.ifPresentation() && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
  }

  ifEdge() {
    return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
  }

  ngAfterViewChecked(): void {
    const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
    const element = elementNodeListOf.item(0);
    if (element) {
      $(element).trigger('focus');
    }
  }

  absolutePosition(el) {
    let x = 0, y = 0;

    while (el !== null) {
      x += el.offsetLeft;
      y += el.offsetTop;
      el = el.offsetParent;
    }

    return {x: x, y: y};
  };

  restrictRawPos(pos, viewportDim, docDim) {
    if (pos < viewportDim / this.scale - docDim) { // too far left/up?
      pos = viewportDim / this.scale - docDim;
    } else if (pos > 0) { // too far right/down?
      pos = 0;
    }
    return pos;
  };

  updateLastPos() {
    this.lastX = this.x;
    this.lastY = this.y;
  };

  translate(deltaX, deltaY) {
    // We restrict to the min of the viewport width/height or current width/height as the
    // current width/height may be smaller than the viewport width/height
    const newX = this.restrictRawPos(this.lastX + deltaX / this.scale,
      Math.min(this.viewportWidth, this.curWidth), this.docWidth);
    this.x = newX;
    // TODO: value here and in the similar line below changes to positive to take any effect
    this.container.scrollLeft = -Math.ceil(newX * this.scale);

    const newY = this.restrictRawPos(this.lastY + deltaY / this.scale,
      Math.min(this.viewportHeight, this.curHeight), this.docHeight);
    this.y = newY;
    this.container.scrollTop = -Math.ceil(newY * this.scale);

    this.doc.style.transform = 'scale(' + this.scale + ')';
  };

  startZoom(scaleBy) {
    this.scale = this.lastScale * scaleBy;

    this.curWidth = this.docWidth * this.scale;
    this.curHeight = this.docHeight * this.scale;

    // Adjust margins to make sure that we aren't out of bounds
    this.translate(0, 0);
  };

  rawCenter($event) {
    const pos = this.absolutePosition(this.container);

    // We need to account for the scroll position
    const scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
    const scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

    const zoomX = -this.x + ($event.center.x - pos.x + scrollLeft) / this.scale;
    const zoomY = -this.y + ($event.center.y - pos.y + scrollTop) / this.scale;

    return {x: zoomX, y: zoomY};
  };

  updateLastScale() {
    this.lastScale = this.scale;
  };

  zoomAround(scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
    // Zoom
    this.startZoom(scaleBy);

    // New raw center of viewport
    const rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth) / 2 / this.scale;
    const rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight) / 2 / this.scale;

    // Delta
    const deltaX = (rawCenterX - rawZoomX) * this.scale;
    const deltaY = (rawCenterY - rawZoomY) * this.scale;

    // Translate back to zoom center
    this.translate(deltaX, deltaY);

    if (!doNotUpdateLast) {
      this.updateLastScale();
      this.updateLastPos();
    }
  };

  onPinch($event) {
    if (this.pinchCenter === null) {
      this.pinchCenter = this.rawCenter($event);
      const offsetX = this.pinchCenter.x * this.scale - (-this.x * this.scale + Math.min(this.viewportWidth, this.curWidth) / 2);
      const offsetY = this.pinchCenter.y * this.scale - (-this.y * this.scale + Math.min(this.viewportHeight, this.curHeight) / 2);
      this.pinchCenterOffset = {x: offsetX, y: offsetY};
    }

    const newScale = this.scale * $event.scale;

    const zoomX = this.pinchCenter.x * newScale - this.pinchCenterOffset.x;
    const zoomY = this.pinchCenter.y * newScale - this.pinchCenterOffset.y;
    const zoomCenter = {x: zoomX / newScale, y: zoomY / newScale};

    this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
  }

  onPinchEnd($event) {
    this.updateLastScale();
    this.updateLastPos();
    this.pinchCenter = null;
  }

  onPan($event) {
    // TODO: looks like native pan works better
    // if (!this.isDesktop) {
    //   this.translate($event.deltaX, $event.deltaY);
    // }
    this.onpan.emit($event);
  }

  onPanEnd($event) {
    // if (!this.isDesktop) {
    //   this.updateLastPos();
    // }
  }

  onDoubleTap($event) {
    if (!this.isDesktop) {
      if ($event.tapCount === 2) {
        const c = this.rawCenter($event);
        this.zoomAround(2, c.x, c.y, false);
      }
    }
  }

  isVisible(pageNumber) {
    if (this.ifPresentation()) {
      return pageNumber === this.selectedPage ? true : false;
    }
    else {
      return true;
    }
  }
}

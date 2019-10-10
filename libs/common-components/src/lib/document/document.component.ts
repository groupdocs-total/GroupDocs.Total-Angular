import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnChanges} from '@angular/core';
import {FileDescription, FileUtil} from "../file.service";
import {ZoomService} from "../zoom.service";
import * as jquery from 'jquery';
const $ = jquery;
import * as Hammer from 'hammerjs';

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit, AfterViewChecked, AfterViewInit, OnChanges {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  wait = false;
  zoom: number;

  MIN_SCALE = 1; // 1=scaling when first loaded
  MAX_SCALE = 64;

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

  constructor(private _elementRef: ElementRef<HTMLElement>,
              private _zoomService: ZoomService) {

    _zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });
  }

  ngOnInit() {
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

    // TODO: check that this is needed
    //disableImgEventHandlers();

    this.docWidth = this.doc.offsetWidth;
    this.docHeight = this.doc.offsetHeight;
    this.viewportWidth = this.doc.offsetWidth;

    // TODO: for cases where we already have zoom defined we should include it
    //this.scale = this.viewportWidth/this.docWidth;
    this.scale = (this.viewportWidth/this.docWidth) * this._zoomService.zoom/100;
    
    this.lastScale = this.scale;
    this.viewportHeight = this.container.offsetHeight;
    this.curWidth = this.docWidth*this.scale;
    this.curHeight = this.docHeight*this.scale;

    const hammer = new Hammer(this.container);
  }

  getDimensionWithUnit(value: number) {
    return value + FileUtil.find(this.file.guid, false).unit;
  }

  ngAfterViewChecked(): void {
    const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
    const element = elementNodeListOf.item(0);
    if (element) {
      $(element).trigger('focus');
    }
  }

  restrictScale = function (scale) {
    if (scale < this.MIN_SCALE) {
      scale = this.MIN_SCALE;
    } else if (scale > this.MAX_SCALE) {
      scale = this.MAX_SCALE;
    }
    return scale;
  };

  absolutePosition(el) {
    let x = 0, y = 0;

    while (el !== null) {
      // TODO: we take client dimensions now because of our toolbar with 60px height
      // x += el.offsetLeft;
      // y += el.offsetTop;
      x += el.clientLeft;
      y += el.clientTop;
      el = el.offsetParent;
    }

    return { x: x, y: y };
  };

  rawCenter($event) {
    const pos = this.absolutePosition(this.container);

    // We need to account for the scroll position
    const scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
    const scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

    const zoomX = -this.x + ($event.center.x - pos.x + scrollLeft)/this.scale;
    // TODO: in $event.center.y we have absolute coordinate value including toolbar 
    // with height = 60px 
    const zoomY = -this.y + (($event.center.y - 60) - pos.y + scrollTop)/this.scale;

    return { x: zoomX, y: zoomY };
  };

  restrictRawPos(pos, viewportDim, imgDim) {
    // TODO: first condition only to handle not clear case with initil zoom <= 1
    if (this.scale <= 1 && (viewportDim/this.scale - imgDim === 0) && pos < 0){
      return pos;
    }
    else if (pos < viewportDim/this.scale - imgDim) { // too far left/up?
      pos = viewportDim/this.scale - imgDim;
    } else if (pos > 0) { // too far right/down?
      pos = 0;
    }
    return pos;
  };

  translate(deltaX, deltaY) {
    const newX = this.restrictRawPos(this.lastX + deltaX/this.scale,
                              Math.min(this.viewportWidth, this.curWidth), this.docWidth);
    this.x = newX;
    //this.doc.style.marginLeft = Math.ceil(newX*this.scale) + 'px';

    const newY = this.restrictRawPos(this.lastY + deltaY/this.scale,
                              Math.min(this.viewportHeight, this.curHeight), this.docHeight);
    this.y = newY;
    //this.doc.style.marginTop = Math.ceil(newY*this.scale) + 'px';
    
    this.doc.style.transform = 'translate(' + Math.ceil(newX*this.scale) + 'px,' + Math.ceil(newY*this.scale) + 'px)' + 'scale(' + this.scale + ')';
  };

  zoomTranslate(scaleBy) {
    this.scale = this.restrictScale(this.lastScale*scaleBy);

    this.curWidth = this.docWidth*this.scale;
    this.curHeight = this.docHeight*this.scale;

    // Instead of changing the actual img size we apply scale further
    //this.doc.style.width = Math.ceil(this.curWidth) + 'px';
    //this.doc.style.height = Math.ceil(this.curHeight) + 'px';
    
    this.doc.style.transformOrigin = 'left top';

    // Adjust margins to make sure that we aren't out of bounds
    this.translate(0, 0);
  };

  updateLastScale() {
    this.lastScale = this.scale;
  };

  updateLastPos() {
    this.lastX = this.x;
    this.lastY = this.y;
  };

  zoomAround(scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
    // Zoom
    this.zoomTranslate(scaleBy);

    // New raw center of viewport
    const rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth)/2/this.scale;
    const rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight)/2/this.scale;

    // Delta
    const deltaX = (rawCenterX - rawZoomX)*this.scale;
    const deltaY = (rawCenterY - rawZoomY)*this.scale;

    // Translate back to zoom center
    this.translate(deltaX, deltaY);

    if (!doNotUpdateLast) {
      this.updateLastScale();
      this.updateLastPos();
    }
  };

  // TODO: for now we working only with doubletap event
  // onPinch($event){
  //   if (this.pinchCenter === null) {
  //     this.pinchCenter = this.rawCenter($event);
  //     const offsetX = this.pinchCenter.x*this.scale - (-this.x*this.scale + Math.min(this.viewportWidth, this.curWidth)/2);
  //     const offsetY = this.pinchCenter.y*this.scale - (-this.y*this.scale + Math.min(this.viewportHeight, this.curHeight)/2);
  //     this.pinchCenterOffset = { x: offsetX, y: offsetY };
  //   }

  //   const newScale = this.restrictScale(this.scale*$event.scale);
  //   const zoomX = this.pinchCenter.x*newScale - this.pinchCenterOffset.x;
  //   const zoomY = this.pinchCenter.y*newScale - this.pinchCenterOffset.y;
  //   const zoomCenter = { x: zoomX/newScale, y: zoomY/newScale };

  //   this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
  // }

  onDoubleTap($event){
    if ($event.tapCount === 2) {
      const c = this.rawCenter($event);
      this.zoomAround(2, c.x, c.y, false);
    }
  }
}

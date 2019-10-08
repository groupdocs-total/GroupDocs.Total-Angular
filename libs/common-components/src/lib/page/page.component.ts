import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, ElementRef} from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'gd-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit, OnChanges {

  @Input() angle: number;
  @Input() width: number;
  @Input() height: number;
  @Input() number: number;
  @Input() data: string;
  @Input() isHtml: boolean;
  @Input() editable: boolean;
  imgData: string;

  MIN_SCALE = 1; // 1=scaling when first loaded
  MAX_SCALE = 64;

  imgWidth = null;
  imgHeight = null;
  viewportWidth = null;
  viewportHeight = null;
  scale = null;
  lastScale = null;
  container = null;
  img = null;
  x = 0;
  lastX = 0;
  y = 0;
  lastY = 0;
  pinchCenter = null;
  pinchCenterOffset = null;
  curWidth = 0;
  curHeight = 0;

  constructor(private _elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    const isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    if(isIE && this.number === 0){
      this.editable = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dataImagePngBase64 = 'data:image/png;base64,';
    this.imgData = dataImagePngBase64;
    if (!this.isHtml) {
      this.imgData += this.data;
    }
  }

  
  ngAfterViewInit() {
    this.img = this._elementRef.nativeElement.children.item(0);
    this.container = this._elementRef.nativeElement.parentElement;

    // TODO: check that this is needed
    //disableImgEventHandlers();

    this.imgWidth = this.img.offsetWidth;
    this.imgHeight = this.img.offsetHeight;
    this.viewportWidth = this.img.offsetWidth;
    this.scale = this.viewportWidth/this.imgWidth;
    this.lastScale = this.scale;
    this.viewportHeight = this.container.offsetHeight;
    this.curWidth = this.imgWidth*this.scale;
    this.curHeight = this.imgHeight*this.scale;

    const hammer = new Hammer(this.container);
    hammer.get('pinch').set({ enable: true });
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
      x += el.offsetLeft;
      y += el.offsetTop;
      el = el.offsetParent;
    }

    return { x: x, y: y };
  };

  rawCenter($event) {
    // for the first iteration lets take .panzoom as a container
    var pos = this.absolutePosition(this.container);

    // We need to account for the scroll position
    var scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
    var scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;

    var zoomX = -this.x + ($event.center.x - pos.x + scrollLeft)/this.scale;
    var zoomY = -this.y + ($event.center.y - pos.y + scrollTop)/this.scale;

    return { x: zoomX, y: zoomY };
  };

  restrictRawPos(pos, viewportDim, imgDim) {
    if (pos < viewportDim/this.scale - imgDim) { // too far left/up?
      pos = viewportDim/this.scale - imgDim;
    } else if (pos > 0) { // too far right/down?
      pos = 0;
    }
    return pos;
  };

  translate(deltaX, deltaY) {
    var newX = this.restrictRawPos(this.lastX + deltaX/this.scale,
                              Math.min(this.viewportWidth, this.curWidth), this.imgWidth);
                              this.x = newX;
                              this.img.style.marginLeft = Math.ceil(newX*this.scale) + 'px';

    var newY = this.restrictRawPos(this.lastY + deltaY/this.scale,
                              Math.min(this.viewportHeight, this.curHeight), this.imgHeight);
                              this.y = newY;
                              this.img.style.marginTop = Math.ceil(newY*this.scale) + 'px';
  };

  zoomTranslate(scaleBy) {
    this.scale = this.restrictScale(this.lastScale*scaleBy);

    this.curWidth = this.imgWidth*this.scale;
    this.curHeight = this.imgHeight*this.scale;

    // TODO: HostBinding
    this.img.style.width = Math.ceil(this.curWidth) + 'px';
    this.img.style.height = Math.ceil(this.curHeight) + 'px';

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
    var rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth)/2/this.scale;
    var rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight)/2/this.scale;

    // Delta
    var deltaX = (rawCenterX - rawZoomX)*this.scale;
    var deltaY = (rawCenterY - rawZoomY)*this.scale;

    // Translate back to zoom center
    this.translate(deltaX, deltaY);

    if (!doNotUpdateLast) {
      this.updateLastScale();
      this.updateLastPos();
    }
  };

  onPinch($event){
    if (this.pinchCenter === null) {
      this.pinchCenter = this.rawCenter($event);
      var offsetX = this.pinchCenter.x*this.scale - (-this.x*this.scale + Math.min(this.viewportWidth, this.curWidth)/2);
      var offsetY = this.pinchCenter.y*this.scale - (-this.y*this.scale + Math.min(this.viewportHeight, this.curHeight)/2);
      this.pinchCenterOffset = { x: offsetX, y: offsetY };
    }

    var newScale = this.restrictScale(this.scale*$event.scale);
    var zoomX = this.pinchCenter.x*newScale - this.pinchCenterOffset.x;
    var zoomY = this.pinchCenter.y*newScale - this.pinchCenterOffset.y;
    var zoomCenter = { x: zoomX/newScale, y: zoomY/newScale };

    this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
  }
}

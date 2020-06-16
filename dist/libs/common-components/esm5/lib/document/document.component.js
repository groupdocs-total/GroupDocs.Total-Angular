/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
import * as Hammer from 'hammerjs';
import { WindowService } from '../window.service';
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService, _windowService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.onpan = new EventEmitter();
        this.wait = false;
        this.docWidth = null;
        this.docHeight = null;
        this.viewportWidth = null;
        this.viewportHeight = null;
        this.scale = null;
        this.lastScale = null;
        this.container = null;
        this.doc = null;
        this.x = 0;
        this.lastX = 0;
        this.y = 0;
        this.lastY = 0;
        this.pinchCenter = null;
        this.pinchCenterOffset = null;
        this.curWidth = 0;
        this.curHeight = 0;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
    }
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        ((/** @type {?} */ (panzoom))).style.transform = '';
        // TODO: this intersects with zooming by zoom directive, but still needed
        // for flush previous settings before opening another file
        //this._zoomService.changeZoom(100);
        //this.scale = 1;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
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
        /** @type {?} */
        var hammer = new Hammer(this.container);
    };
    // TODO: this temporary crutch for Excel files should be documented
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifExcel = 
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DocumentComponent.prototype.getDimensionWithUnit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifEdge = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        var element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    DocumentComponent.prototype.absolutePosition = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var x = 0;
        /** @type {?} */
        var y = 0;
        while (el !== null) {
            x += el.offsetLeft;
            y += el.offsetTop;
            el = el.offsetParent;
        }
        return { x: x, y: y };
    };
    ;
    /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} docDim
     * @return {?}
     */
    DocumentComponent.prototype.restrictRawPos = /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} docDim
     * @return {?}
     */
    function (pos, viewportDim, docDim) {
        if (pos < viewportDim / this.scale - docDim) { // too far left/up?
            pos = viewportDim / this.scale - docDim;
        }
        else if (pos > 0) { // too far right/down?
            pos = 0;
        }
        return pos;
    };
    ;
    /**
     * @return {?}
     */
    DocumentComponent.prototype.updateLastPos = /**
     * @return {?}
     */
    function () {
        this.lastX = this.x;
        this.lastY = this.y;
    };
    ;
    /**
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    DocumentComponent.prototype.translate = /**
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    function (deltaX, deltaY) {
        // We restrict to the min of the viewport width/height or current width/height as the
        // current width/height may be smaller than the viewport width/height
        /** @type {?} */
        var newX = this.restrictRawPos(this.lastX + deltaX / this.scale, Math.min(this.viewportWidth, this.curWidth), this.docWidth);
        this.x = newX;
        // TODO: value here and in the similar line below changes to positive to take any effect
        this.container.scrollLeft = -Math.ceil(newX * this.scale);
        /** @type {?} */
        var newY = this.restrictRawPos(this.lastY + deltaY / this.scale, Math.min(this.viewportHeight, this.curHeight), this.docHeight);
        this.y = newY;
        this.container.scrollTop = -Math.ceil(newY * this.scale);
        this.doc.style.transform = 'scale(' + this.scale + ')';
    };
    ;
    /**
     * @param {?} scaleBy
     * @return {?}
     */
    DocumentComponent.prototype.startZoom = /**
     * @param {?} scaleBy
     * @return {?}
     */
    function (scaleBy) {
        this.scale = this.lastScale * scaleBy;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        // Adjust margins to make sure that we aren't out of bounds
        this.translate(0, 0);
    };
    ;
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.rawCenter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var pos = this.absolutePosition(this.container);
        // We need to account for the scroll position
        /** @type {?} */
        var scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
        /** @type {?} */
        var scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
        /** @type {?} */
        var zoomX = -this.x + ($event.center.x - pos.x + scrollLeft) / this.scale;
        /** @type {?} */
        var zoomY = -this.y + ($event.center.y - pos.y + scrollTop) / this.scale;
        return { x: zoomX, y: zoomY };
    };
    ;
    /**
     * @return {?}
     */
    DocumentComponent.prototype.updateLastScale = /**
     * @return {?}
     */
    function () {
        this.lastScale = this.scale;
    };
    ;
    /**
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    DocumentComponent.prototype.zoomAround = /**
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    function (scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
        // Zoom
        this.startZoom(scaleBy);
        // New raw center of viewport
        /** @type {?} */
        var rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth) / 2 / this.scale;
        /** @type {?} */
        var rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight) / 2 / this.scale;
        // Delta
        /** @type {?} */
        var deltaX = (rawCenterX - rawZoomX) * this.scale;
        /** @type {?} */
        var deltaY = (rawCenterY - rawZoomY) * this.scale;
        // Translate back to zoom center
        this.translate(deltaX, deltaY);
        if (!doNotUpdateLast) {
            this.updateLastScale();
            this.updateLastPos();
        }
    };
    ;
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPinch = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.pinchCenter === null) {
            this.pinchCenter = this.rawCenter($event);
            /** @type {?} */
            var offsetX = this.pinchCenter.x * this.scale - (-this.x * this.scale + Math.min(this.viewportWidth, this.curWidth) / 2);
            /** @type {?} */
            var offsetY = this.pinchCenter.y * this.scale - (-this.y * this.scale + Math.min(this.viewportHeight, this.curHeight) / 2);
            this.pinchCenterOffset = { x: offsetX, y: offsetY };
        }
        /** @type {?} */
        var newScale = this.scale * $event.scale;
        /** @type {?} */
        var zoomX = this.pinchCenter.x * newScale - this.pinchCenterOffset.x;
        /** @type {?} */
        var zoomY = this.pinchCenter.y * newScale - this.pinchCenterOffset.y;
        /** @type {?} */
        var zoomCenter = { x: zoomX / newScale, y: zoomY / newScale };
        this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPinchEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.updateLastScale();
        this.updateLastPos();
        this.pinchCenter = null;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPan = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // TODO: looks like native pan works better
        // if (!this.isDesktop) {
        //   this.translate($event.deltaX, $event.deltaY);
        // }
        this.onpan.emit($event);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onPanEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        // if (!this.isDesktop) {
        //   this.updateLastPos();
        // }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onDoubleTap = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isDesktop) {
            if ($event.tapCount === 2) {
                /** @type {?} */
                var c = this.rawCenter($event);
                this.zoomAround(2, c.x, c.y, false);
            }
        }
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \r\n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService }
    ]; };
    DocumentComponent.propDecorators = {
        mode: [{ type: Input }],
        preloadPageCount: [{ type: Input }],
        file: [{ type: Input }],
        onpan: [{ type: Output }]
    };
    return DocumentComponent;
}());
export { DocumentComponent };
if (false) {
    /** @type {?} */
    DocumentComponent.prototype.mode;
    /** @type {?} */
    DocumentComponent.prototype.preloadPageCount;
    /** @type {?} */
    DocumentComponent.prototype.file;
    /** @type {?} */
    DocumentComponent.prototype.onpan;
    /** @type {?} */
    DocumentComponent.prototype.wait;
    /** @type {?} */
    DocumentComponent.prototype.zoom;
    /** @type {?} */
    DocumentComponent.prototype.docWidth;
    /** @type {?} */
    DocumentComponent.prototype.docHeight;
    /** @type {?} */
    DocumentComponent.prototype.viewportWidth;
    /** @type {?} */
    DocumentComponent.prototype.viewportHeight;
    /** @type {?} */
    DocumentComponent.prototype.scale;
    /** @type {?} */
    DocumentComponent.prototype.lastScale;
    /** @type {?} */
    DocumentComponent.prototype.container;
    /** @type {?} */
    DocumentComponent.prototype.doc;
    /** @type {?} */
    DocumentComponent.prototype.x;
    /** @type {?} */
    DocumentComponent.prototype.lastX;
    /** @type {?} */
    DocumentComponent.prototype.y;
    /** @type {?} */
    DocumentComponent.prototype.lastY;
    /** @type {?} */
    DocumentComponent.prototype.pinchCenter;
    /** @type {?} */
    DocumentComponent.prototype.pinchCenterOffset;
    /** @type {?} */
    DocumentComponent.prototype.curWidth;
    /** @type {?} */
    DocumentComponent.prototype.curHeight;
    /** @type {?} */
    DocumentComponent.prototype.isDesktop;
    /**
     * @type {?}
     * @protected
     */
    DocumentComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._windowService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUUzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQWdDRSwyQkFBc0IsV0FBb0MsRUFDdEMsWUFBeUIsRUFDekIsY0FBNkI7UUFGakQsaUJBU0M7UUFUcUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBeEJ2QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFPWixZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQVc7WUFDNUMsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDs7WUFDUSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdEMseUVBQXlFO1FBQ3pFLDBEQUEwRDtRQUMxRCxvQ0FBb0M7UUFDcEMsaUJBQWlCO0lBQ25CLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsNERBQTREO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFMUMsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFakYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O1lBRXZDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFRCxtRUFBbUU7Ozs7O0lBQ25FLG1DQUFPOzs7OztJQUFQO1FBQ0UsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxpQkFBaUIsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUVELGdEQUFvQjs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7SUFFRCxrQ0FBTTs7O0lBQU47UUFDRSxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCw4Q0FBa0I7OztJQUFsQjs7WUFDUSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7O1lBQ2xGLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxFQUFFO1lBQ1gsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQUU7O1lBQ2IsQ0FBQyxHQUFHLENBQUM7O1lBQUUsQ0FBQyxHQUFHLENBQUM7UUFFaEIsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2xCLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ25CLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2xCLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ3RCLENBQUM7SUFBQSxDQUFDOzs7Ozs7O0lBRUYsMENBQWM7Ozs7OztJQUFkLFVBQWUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNO1FBQ3JDLElBQUksR0FBRyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxFQUFFLG1CQUFtQjtZQUNoRSxHQUFHLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsc0JBQXNCO1lBQzFDLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRix5Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFFRixxQ0FBUzs7Ozs7SUFBVCxVQUFVLE1BQU0sRUFBRSxNQUFNOzs7O1lBR2hCLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3RCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNkLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFFcEQsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixxQ0FBUzs7OztJQUFULFVBQVUsT0FBTztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFN0MsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDOzs7OztJQUVGLHFDQUFTOzs7O0lBQVQsVUFBVSxNQUFNOztZQUNSLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7O1lBRzNDLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVU7O1lBQy9FLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVM7O1lBRTdFLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLOztZQUNyRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFD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QUs7dUJBQ0wsS0FBSzt3QkFDTCxNQUFNOztJQStOVCx3QkFBQztDQUFBLEFBek9ELElBeU9DO1NBcE9ZLGlCQUFpQjs7O0lBRTVCLGlDQUF1Qjs7SUFDdkIsNkNBQWtDOztJQUNsQyxpQ0FBK0I7O0lBQy9CLGtDQUEwQzs7SUFDMUMsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBRWIscUNBQWdCOztJQUNoQixzQ0FBaUI7O0lBQ2pCLDBDQUFxQjs7SUFDckIsMkNBQXNCOztJQUN0QixrQ0FBYTs7SUFDYixzQ0FBaUI7O0lBQ2pCLHNDQUFpQjs7SUFDakIsZ0NBQVc7O0lBQ1gsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1YsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1Ysd0NBQW1COztJQUNuQiw4Q0FBeUI7O0lBQ3pCLHFDQUFhOztJQUNiLHNDQUFjOztJQUNkLHNDQUFtQjs7Ozs7SUFFUCx3Q0FBOEM7Ozs7O0lBQzlDLHlDQUFpQzs7Ozs7SUFDakMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgQE91dHB1dCgpIG9ucGFuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgd2FpdCA9IGZhbHNlO1xyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XHJcblxyXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnpvb20gPSB2YWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IHBhbnpvb20gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgKHBhbnpvb20gYXMgYW55KS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgIC8vIFRPRE86IHRoaXMgaW50ZXJzZWN0cyB3aXRoIHpvb21pbmcgYnkgem9vbSBkaXJlY3RpdmUsIGJ1dCBzdGlsbCBuZWVkZWRcclxuICAgIC8vIGZvciBmbHVzaCBwcmV2aW91cyBzZXR0aW5ncyBiZWZvcmUgb3BlbmluZyBhbm90aGVyIGZpbGVcclxuICAgIC8vdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSgxMDApO1xyXG4gICAgLy90aGlzLnNjYWxlID0gMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5wYW56b29tIGFzIGEgZG9jdW1lbnRcclxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5kb2NXaWR0aCA9IHRoaXMuZG9jLmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5kb2NIZWlnaHQgPSB0aGlzLmRvYy5jbGllbnRIZWlnaHQ7XHJcbiAgICB0aGlzLnZpZXdwb3J0V2lkdGggPSB0aGlzLmRvYy5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAvLyBGb3IgY2FzZXMgd2hlcmUgd2UgYWxyZWFkeSBoYXZlIHpvb20gZGVmaW5lZCB3ZSBzaG91bGQgaW5jbHVkZSBpdFxyXG4gICAgdGhpcy5zY2FsZSA9ICh0aGlzLnZpZXdwb3J0V2lkdGggLyB0aGlzLmRvY1dpZHRoKSAqIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gLyAxMDA7XHJcblxyXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoICogdGhpcy5zY2FsZTtcclxuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQgKiB0aGlzLnNjYWxlO1xyXG5cclxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogdGhpcyB0ZW1wb3JhcnkgY3J1dGNoIGZvciBFeGNlbCBmaWxlcyBzaG91bGQgYmUgZG9jdW1lbnRlZFxyXG4gIGlmRXhjZWwoKSB7XHJcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgRXhjZWxcIjtcclxuICB9XHJcblxyXG4gIGdldERpbWVuc2lvbldpdGhVbml0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB2YWx1ZSArICh0aGlzLm1vZGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdCA6ICdweCcpO1xyXG4gIH1cclxuXHJcbiAgaWZFZGdlKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic29sdXRlUG9zaXRpb24oZWwpIHtcclxuICAgIGxldCB4ID0gMCwgeSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKGVsICE9PSBudWxsKSB7XHJcbiAgICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgeSArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7eDogeCwgeTogeX07XHJcbiAgfTtcclxuXHJcbiAgcmVzdHJpY3RSYXdQb3MocG9zLCB2aWV3cG9ydERpbSwgZG9jRGltKSB7XHJcbiAgICBpZiAocG9zIDwgdmlld3BvcnREaW0gLyB0aGlzLnNjYWxlIC0gZG9jRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cclxuICAgICAgcG9zID0gdmlld3BvcnREaW0gLyB0aGlzLnNjYWxlIC0gZG9jRGltO1xyXG4gICAgfSBlbHNlIGlmIChwb3MgPiAwKSB7IC8vIHRvbyBmYXIgcmlnaHQvZG93bj9cclxuICAgICAgcG9zID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3M7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlTGFzdFBvcygpIHtcclxuICAgIHRoaXMubGFzdFggPSB0aGlzLng7XHJcbiAgICB0aGlzLmxhc3RZID0gdGhpcy55O1xyXG4gIH07XHJcblxyXG4gIHRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgLy8gV2UgcmVzdHJpY3QgdG8gdGhlIG1pbiBvZiB0aGUgdmlld3BvcnQgd2lkdGgvaGVpZ2h0IG9yIGN1cnJlbnQgd2lkdGgvaGVpZ2h0IGFzIHRoZVxyXG4gICAgLy8gY3VycmVudCB3aWR0aC9oZWlnaHQgbWF5IGJlIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XHJcbiAgICBjb25zdCBuZXdYID0gdGhpcy5yZXN0cmljdFJhd1Bvcyh0aGlzLmxhc3RYICsgZGVsdGFYIC8gdGhpcy5zY2FsZSxcclxuICAgICAgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSwgdGhpcy5kb2NXaWR0aCk7XHJcbiAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgLy8gVE9ETzogdmFsdWUgaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyBjaGFuZ2VzIHRvIHBvc2l0aXZlIHRvIHRha2UgYW55IGVmZmVjdFxyXG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IC1NYXRoLmNlaWwobmV3WCAqIHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1kgPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFkgKyBkZWx0YVkgLyB0aGlzLnNjYWxlLFxyXG4gICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCksIHRoaXMuZG9jSGVpZ2h0KTtcclxuICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAtTWF0aC5jZWlsKG5ld1kgKiB0aGlzLnNjYWxlKTtcclxuXHJcbiAgICB0aGlzLmRvYy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKSc7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRab29tKHNjYWxlQnkpIHtcclxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLmxhc3RTY2FsZSAqIHNjYWxlQnk7XHJcblxyXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcclxuICAgIHRoaXMudHJhbnNsYXRlKDAsIDApO1xyXG4gIH07XHJcblxyXG4gIHJhd0NlbnRlcigkZXZlbnQpIHtcclxuICAgIGNvbnN0IHBvcyA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbih0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gV2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgY29uc3Qgem9vbVggPSAtdGhpcy54ICsgKCRldmVudC5jZW50ZXIueCAtIHBvcy54ICsgc2Nyb2xsTGVmdCkgLyB0aGlzLnNjYWxlO1xyXG4gICAgY29uc3Qgem9vbVkgPSAtdGhpcy55ICsgKCRldmVudC5jZW50ZXIueSAtIHBvcy55ICsgc2Nyb2xsVG9wKSAvIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgcmV0dXJuIHt4OiB6b29tWCwgeTogem9vbVl9O1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUxhc3RTY2FsZSgpIHtcclxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICB9O1xyXG5cclxuICB6b29tQXJvdW5kKHNjYWxlQnksIHJhd1pvb21YLCByYXdab29tWSwgZG9Ob3RVcGRhdGVMYXN0KSB7XHJcbiAgICAvLyBab29tXHJcbiAgICB0aGlzLnN0YXJ0Wm9vbShzY2FsZUJ5KTtcclxuXHJcbiAgICAvLyBOZXcgcmF3IGNlbnRlciBvZiB2aWV3cG9ydFxyXG4gICAgY29uc3QgcmF3Q2VudGVyWCA9IC10aGlzLnggKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpIC8gMiAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSAvIDIgLyB0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIERlbHRhXHJcbiAgICBjb25zdCBkZWx0YVggPSAocmF3Q2VudGVyWCAtIHJhd1pvb21YKSAqIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBkZWx0YVkgPSAocmF3Q2VudGVyWSAtIHJhd1pvb21ZKSAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gVHJhbnNsYXRlIGJhY2sgdG8gem9vbSBjZW50ZXJcclxuICAgIHRoaXMudHJhbnNsYXRlKGRlbHRhWCwgZGVsdGFZKTtcclxuXHJcbiAgICBpZiAoIWRvTm90VXBkYXRlTGFzdCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxhc3RTY2FsZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvblBpbmNoKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMucGluY2hDZW50ZXIgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5waW5jaENlbnRlciA9IHRoaXMucmF3Q2VudGVyKCRldmVudCk7XHJcbiAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLnBpbmNoQ2VudGVyLnggKiB0aGlzLnNjYWxlIC0gKC10aGlzLnggKiB0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSAvIDIpO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5waW5jaENlbnRlci55ICogdGhpcy5zY2FsZSAtICgtdGhpcy55ICogdGhpcy5zY2FsZSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSAvIDIpO1xyXG4gICAgICB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0ID0ge3g6IG9mZnNldFgsIHk6IG9mZnNldFl9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5zY2FsZSAqICRldmVudC5zY2FsZTtcclxuXHJcbiAgICBjb25zdCB6b29tWCA9IHRoaXMucGluY2hDZW50ZXIueCAqIG5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC54O1xyXG4gICAgY29uc3Qgem9vbVkgPSB0aGlzLnBpbmNoQ2VudGVyLnkgKiBuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueTtcclxuICAgIGNvbnN0IHpvb21DZW50ZXIgPSB7eDogem9vbVggLyBuZXdTY2FsZSwgeTogem9vbVkgLyBuZXdTY2FsZX07XHJcblxyXG4gICAgdGhpcy56b29tQXJvdW5kKCRldmVudC5zY2FsZSwgem9vbUNlbnRlci54LCB6b29tQ2VudGVyLnksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25QaW5jaEVuZCgkZXZlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIHRoaXMucGluY2hDZW50ZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25QYW4oJGV2ZW50KSB7XHJcbiAgICAvLyBUT0RPOiBsb29rcyBsaWtlIG5hdGl2ZSBwYW4gd29ya3MgYmV0dGVyXHJcbiAgICAvLyBpZiAoIXRoaXMuaXNEZXNrdG9wKSB7XHJcbiAgICAvLyAgIHRoaXMudHJhbnNsYXRlKCRldmVudC5kZWx0YVgsICRldmVudC5kZWx0YVkpO1xyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5vbnBhbi5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblBhbkVuZCgkZXZlbnQpIHtcclxuICAgIC8vIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgIC8vICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBvbkRvdWJsZVRhcCgkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgaWYgKCRldmVudC50YXBDb3VudCA9PT0gMikge1xyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLnJhd0NlbnRlcigkZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuem9vbUFyb3VuZCgyLCBjLngsIGMueSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
import * as Hammer from 'hammerjs';
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this.wait = false;
        this.MIN_SCALE = 1; // 1=scaling when first loaded
        // 1=scaling when first loaded
        this.MAX_SCALE = 64;
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
        this.restrictScale = (/**
         * @param {?} scale
         * @return {?}
         */
        function (scale) {
            if (scale < this.MIN_SCALE) {
                scale = this.MIN_SCALE;
            }
            else if (scale > this.MAX_SCALE) {
                scale = this.MAX_SCALE;
            }
            return scale;
        });
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val;
        }));
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
    DocumentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        // TODO: check that this is needed
        //disableImgEventHandlers();
        this.docWidth = this.doc.offsetWidth;
        this.docHeight = this.doc.offsetHeight;
        this.viewportWidth = this.doc.offsetWidth;
        this.scale = this.viewportWidth / this.docWidth;
        this.lastScale = this.scale;
        this.viewportHeight = this.container.offsetHeight;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        /** @type {?} */
        var hammer = new Hammer(this.container);
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
        return value + FileUtil.find(this.file.guid, false).unit;
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
            // TODO: we take client dimensions now because of our toolbar with 60px height
            // x += el.offsetLeft;
            // y += el.offsetTop;
            x += el.clientLeft;
            y += el.clientTop;
            el = el.offsetParent;
        }
        return { x: x, y: y };
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
        // TODO: in $event.center.y we have absolute coordinate value including toolbar 
        // with height = 60px 
        /** @type {?} */
        var zoomY = -this.y + (($event.center.y - 60) - pos.y + scrollTop) / this.scale;
        return { x: zoomX, y: zoomY };
    };
    ;
    /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} imgDim
     * @return {?}
     */
    DocumentComponent.prototype.restrictRawPos = /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} imgDim
     * @return {?}
     */
    function (pos, viewportDim, imgDim) {
        if (pos < viewportDim / this.scale - imgDim) { // too far left/up?
            pos = viewportDim / this.scale - imgDim;
        }
        else if (pos > 0) { // too far right/down?
            pos = 0;
        }
        return pos;
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
        /** @type {?} */
        var newX = this.restrictRawPos(this.lastX + deltaX / this.scale, Math.min(this.viewportWidth, this.curWidth), this.docWidth);
        this.x = newX;
        //this.doc.style.marginLeft = Math.ceil(newX*this.scale) + 'px';
        /** @type {?} */
        var newY = this.restrictRawPos(this.lastY + deltaY / this.scale, Math.min(this.viewportHeight, this.curHeight), this.docHeight);
        this.y = newY;
        //this.doc.style.marginTop = Math.ceil(newY*this.scale) + 'px';
        this.doc.style.transform = 'translate(' + Math.ceil(newX * this.scale) + 'px,' + Math.ceil(newY * this.scale) + 'px)' + 'scale(' + this.scale + ')';
    };
    ;
    /**
     * @param {?} scaleBy
     * @return {?}
     */
    DocumentComponent.prototype.zoomTranslate = /**
     * @param {?} scaleBy
     * @return {?}
     */
    function (scaleBy) {
        this.scale = this.restrictScale(this.lastScale * scaleBy);
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        // Instead of changing the actual img size we apply scale further
        //this.doc.style.width = Math.ceil(this.curWidth) + 'px';
        //this.doc.style.height = Math.ceil(this.curHeight) + 'px';
        //this.doc.style.transform = 'scale(' + this.scale + ')';
        this.doc.style.transformOrigin = 'left top';
        // Adjust margins to make sure that we aren't out of bounds
        this.translate(0, 0);
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
        this.zoomTranslate(scaleBy);
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
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onDoubleTap = 
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
    /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.tapCount === 2) {
            /** @type {?} */
            var c = this.rawCenter($event);
            this.zoomAround(2, c.x, c.y, false);
        }
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\">\r\n  <div class=\"panzoom\" gdSearchable>\r\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll}.page{display:inline-block;background-color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService }
    ]; };
    DocumentComponent.propDecorators = {
        mode: [{ type: Input }],
        preloadPageCount: [{ type: Input }],
        file: [{ type: Input }]
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
    DocumentComponent.prototype.wait;
    /** @type {?} */
    DocumentComponent.prototype.zoom;
    /** @type {?} */
    DocumentComponent.prototype.MIN_SCALE;
    /** @type {?} */
    DocumentComponent.prototype.MAX_SCALE;
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
    DocumentComponent.prototype.restrictScale;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._zoomService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVTLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUVuQztJQWlDRSwyQkFBb0IsV0FBb0MsRUFDcEMsWUFBeUI7UUFEN0MsaUJBTUM7UUFObUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBeEI3QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLDhCQUE4Qjs7UUFDN0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBK0NkLGtCQUFhOzs7O1FBQUcsVUFBVSxLQUFLO1lBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3hCO2lCQUFNLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUM7UUFqREEsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFXO1lBQzVDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFHRCwyQ0FBZTs7O0lBQWY7UUFDRSx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsNERBQTREO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFaEQsa0NBQWtDO1FBQ2xDLDRCQUE0QjtRQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFFckMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxnREFBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUNoQyxPQUFPLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsOENBQWtCOzs7SUFBbEI7O1lBQ1EsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDOztZQUNsRixPQUFPLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQVdELDRDQUFnQjs7OztJQUFoQixVQUFpQixFQUFFOztZQUNiLENBQUMsR0FBRyxDQUFDOztZQUFFLENBQUMsR0FBRyxDQUFDO1FBRWhCLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNsQiw4RUFBOEU7WUFDOUUsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNuQixDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNsQixFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN0QjtRQUVELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixxQ0FBUzs7OztJQUFULFVBQVUsTUFBTTs7WUFDUixHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7OztZQUczQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVOztZQUMvRSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTOztZQUU3RSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSzs7OztZQUduRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLO1FBRS9FLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7OztJQUVGLDBDQUFjOzs7Ozs7SUFBZCxVQUFlLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTTtRQUNyQyxJQUFJLEdBQUcsR0FBRyxXQUFXLEdBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsRUFBRSxtQkFBbUI7WUFDOUQsR0FBRyxHQUFHLFdBQVcsR0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUN2QzthQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFFRixxQ0FBUzs7Ozs7SUFBVCxVQUFVLE1BQU0sRUFBRSxNQUFNOztZQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBQyxJQUFJLENBQUMsS0FBSyxFQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckYsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7OztZQUdSLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFDLElBQUksQ0FBQyxLQUFLLEVBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4RixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNkLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbEosQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYseUNBQWE7Ozs7SUFBYixVQUFjLE9BQU87UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFM0MsaUVBQWlFO1FBQ2pFLHlEQUF5RDtRQUN6RCwyREFBMkQ7UUFFM0QseURBQXlEO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFFNUMsMkRBQTJEO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsMkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYseUNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQzs7Ozs7Ozs7SUFFRixzQ0FBVTs7Ozs7OztJQUFWLFVBQVcsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZTtRQUNyRCxPQUFPO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O1lBR3RCLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUs7O1lBQy9FLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUs7OztZQUdqRixNQUFNLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUs7O1lBQzNDLE1BQU0sR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSztRQUVqRCxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRixxREFBcUQ7SUFDckQsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxpREFBaUQ7SUFDakQsNEhBQTRIO0lBQzVILDhIQUE4SDtJQUM5SCwyREFBMkQ7SUFDM0QsTUFBTTtJQUVOLGtFQUFrRTtJQUNsRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLGlFQUFpRTtJQUVqRSxxRUFBcUU7SUFDckUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVKLHVDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQVgsVUFBWSxNQUFNO1FBQ2hCLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7O2dCQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Z0JBaE5GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMHdCQUF3Qzs7aUJBRXpDOzs7O2dCQWRDLFVBQVU7Z0JBS0osV0FBVzs7O3VCQVloQixLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUF3TVIsd0JBQUM7Q0FBQSxBQWpORCxJQWlOQztTQTVNWSxpQkFBaUI7OztJQUU1QixpQ0FBdUI7O0lBQ3ZCLDZDQUFrQzs7SUFDbEMsaUNBQStCOztJQUMvQixpQ0FBYTs7SUFDYixpQ0FBYTs7SUFFYixzQ0FBYzs7SUFDZCxzQ0FBZTs7SUFFZixxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7SUFDakIsMENBQXFCOztJQUNyQiwyQ0FBc0I7O0lBQ3RCLGtDQUFhOztJQUNiLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixnQ0FBVzs7SUFDWCw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDViw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDVix3Q0FBbUI7O0lBQ25CLDhDQUF5Qjs7SUFDekIscUNBQWE7O0lBQ2Isc0NBQWM7O0lBK0NkLDBDQU9FOzs7OztJQXBEVSx3Q0FBNEM7Ozs7O0lBQzVDLHlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kb2N1bWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcclxuICB3YWl0ID0gZmFsc2U7XHJcbiAgem9vbTogbnVtYmVyO1xyXG5cclxuICBNSU5fU0NBTEUgPSAxOyAvLyAxPXNjYWxpbmcgd2hlbiBmaXJzdCBsb2FkZWRcclxuICBNQVhfU0NBTEUgPSA2NDtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xyXG5cclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gICAgXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAvLyBUT0RPOiBjaGVjayB0aGF0IHRoaXMgaXMgbmVlZGVkXHJcbiAgICAvL2Rpc2FibGVJbWdFdmVudEhhbmRsZXJzKCk7XHJcblxyXG4gICAgdGhpcy5kb2NXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5kb2NIZWlnaHQgPSB0aGlzLmRvYy5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLnZpZXdwb3J0V2lkdGggPSB0aGlzLmRvYy5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLnZpZXdwb3J0V2lkdGgvdGhpcy5kb2NXaWR0aDtcclxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgIHRoaXMudmlld3BvcnRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCp0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCp0aGlzLnNjYWxlO1xyXG5cclxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHZhbHVlICsgRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50Tm9kZUxpc3RPZiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN0cmljdFNjYWxlID0gZnVuY3Rpb24gKHNjYWxlKSB7XHJcbiAgICBpZiAoc2NhbGUgPCB0aGlzLk1JTl9TQ0FMRSkge1xyXG4gICAgICBzY2FsZSA9IHRoaXMuTUlOX1NDQUxFO1xyXG4gICAgfSBlbHNlIGlmIChzY2FsZSA+IHRoaXMuTUFYX1NDQUxFKSB7XHJcbiAgICAgIHNjYWxlID0gdGhpcy5NQVhfU0NBTEU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NhbGU7XHJcbiAgfTtcclxuXHJcbiAgYWJzb2x1dGVQb3NpdGlvbihlbCkge1xyXG4gICAgbGV0IHggPSAwLCB5ID0gMDtcclxuXHJcbiAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcclxuICAgICAgLy8gVE9ETzogd2UgdGFrZSBjbGllbnQgZGltZW5zaW9ucyBub3cgYmVjYXVzZSBvZiBvdXIgdG9vbGJhciB3aXRoIDYwcHggaGVpZ2h0XHJcbiAgICAgIC8vIHggKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgLy8geSArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIHggKz0gZWwuY2xpZW50TGVmdDtcclxuICAgICAgeSArPSBlbC5jbGllbnRUb3A7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICB9O1xyXG5cclxuICByYXdDZW50ZXIoJGV2ZW50KSB7XHJcbiAgICBjb25zdCBwb3MgPSB0aGlzLmFic29sdXRlUG9zaXRpb24odGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgIC8vIFdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cclxuICAgIGNvbnN0IHpvb21YID0gLXRoaXMueCArICgkZXZlbnQuY2VudGVyLnggLSBwb3MueCArIHNjcm9sbExlZnQpL3RoaXMuc2NhbGU7XHJcbiAgICAvLyBUT0RPOiBpbiAkZXZlbnQuY2VudGVyLnkgd2UgaGF2ZSBhYnNvbHV0ZSBjb29yZGluYXRlIHZhbHVlIGluY2x1ZGluZyB0b29sYmFyIFxyXG4gICAgLy8gd2l0aCBoZWlnaHQgPSA2MHB4IFxyXG4gICAgY29uc3Qgem9vbVkgPSAtdGhpcy55ICsgKCgkZXZlbnQuY2VudGVyLnkgLSA2MCkgLSBwb3MueSArIHNjcm9sbFRvcCkvdGhpcy5zY2FsZTtcclxuXHJcbiAgICByZXR1cm4geyB4OiB6b29tWCwgeTogem9vbVkgfTtcclxuICB9O1xyXG5cclxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBpbWdEaW0pIHtcclxuICAgIGlmIChwb3MgPCB2aWV3cG9ydERpbS90aGlzLnNjYWxlIC0gaW1nRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cclxuICAgICAgcG9zID0gdmlld3BvcnREaW0vdGhpcy5zY2FsZSAtIGltZ0RpbTtcclxuICAgIH0gZWxzZSBpZiAocG9zID4gMCkgeyAvLyB0b28gZmFyIHJpZ2h0L2Rvd24/XHJcbiAgICAgIHBvcyA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zO1xyXG4gIH07XHJcblxyXG4gIHRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgY29uc3QgbmV3WCA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WCArIGRlbHRhWC90aGlzLnNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcclxuICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAvL3RoaXMuZG9jLnN0eWxlLm1hcmdpbkxlZnQgPSBNYXRoLmNlaWwobmV3WCp0aGlzLnNjYWxlKSArICdweCc7XHJcblxyXG4gICAgY29uc3QgbmV3WSA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WSArIGRlbHRhWS90aGlzLnNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCksIHRoaXMuZG9jSGVpZ2h0KTtcclxuICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICAvL3RoaXMuZG9jLnN0eWxlLm1hcmdpblRvcCA9IE1hdGguY2VpbChuZXdZKnRoaXMuc2NhbGUpICsgJ3B4JztcclxuICAgIHRoaXMuZG9jLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIE1hdGguY2VpbChuZXdYKnRoaXMuc2NhbGUpICsgJ3B4LCcgKyBNYXRoLmNlaWwobmV3WSp0aGlzLnNjYWxlKSArICdweCknICsgJ3NjYWxlKCcgKyB0aGlzLnNjYWxlICsgJyknO1xyXG4gIH07XHJcblxyXG4gIHpvb21UcmFuc2xhdGUoc2NhbGVCeSkge1xyXG4gICAgdGhpcy5zY2FsZSA9IHRoaXMucmVzdHJpY3RTY2FsZSh0aGlzLmxhc3RTY2FsZSpzY2FsZUJ5KTtcclxuXHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCp0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCp0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIEluc3RlYWQgb2YgY2hhbmdpbmcgdGhlIGFjdHVhbCBpbWcgc2l6ZSB3ZSBhcHBseSBzY2FsZSBmdXJ0aGVyXHJcbiAgICAvL3RoaXMuZG9jLnN0eWxlLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuY3VyV2lkdGgpICsgJ3B4JztcclxuICAgIC8vdGhpcy5kb2Muc3R5bGUuaGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuY3VySGVpZ2h0KSArICdweCc7XHJcbiAgICBcclxuICAgIC8vdGhpcy5kb2Muc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKCcgKyB0aGlzLnNjYWxlICsgJyknO1xyXG4gICAgdGhpcy5kb2Muc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ2xlZnQgdG9wJztcclxuXHJcbiAgICAvLyBBZGp1c3QgbWFyZ2lucyB0byBtYWtlIHN1cmUgdGhhdCB3ZSBhcmVuJ3Qgb3V0IG9mIGJvdW5kc1xyXG4gICAgdGhpcy50cmFuc2xhdGUoMCwgMCk7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlTGFzdFNjYWxlKCkge1xyXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUxhc3RQb3MoKSB7XHJcbiAgICB0aGlzLmxhc3RYID0gdGhpcy54O1xyXG4gICAgdGhpcy5sYXN0WSA9IHRoaXMueTtcclxuICB9O1xyXG5cclxuICB6b29tQXJvdW5kKHNjYWxlQnksIHJhd1pvb21YLCByYXdab29tWSwgZG9Ob3RVcGRhdGVMYXN0KSB7XHJcbiAgICAvLyBab29tXHJcbiAgICB0aGlzLnpvb21UcmFuc2xhdGUoc2NhbGVCeSk7XHJcblxyXG4gICAgLy8gTmV3IHJhdyBjZW50ZXIgb2Ygdmlld3BvcnRcclxuICAgIGNvbnN0IHJhd0NlbnRlclggPSAtdGhpcy54ICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKS8yL3RoaXMuc2NhbGU7XHJcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KS8yL3RoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gRGVsdGFcclxuICAgIGNvbnN0IGRlbHRhWCA9IChyYXdDZW50ZXJYIC0gcmF3Wm9vbVgpKnRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBkZWx0YVkgPSAocmF3Q2VudGVyWSAtIHJhd1pvb21ZKSp0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSBiYWNrIHRvIHpvb20gY2VudGVyXHJcbiAgICB0aGlzLnRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSk7XHJcblxyXG4gICAgaWYgKCFkb05vdFVwZGF0ZUxhc3QpIHtcclxuICAgICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gVE9ETzogZm9yIG5vdyB3ZSB3b3JraW5nIG9ubHkgd2l0aCBkb3VibGV0YXAgZXZlbnRcclxuICAvLyBvblBpbmNoKCRldmVudCl7XHJcbiAgLy8gICBpZiAodGhpcy5waW5jaENlbnRlciA9PT0gbnVsbCkge1xyXG4gIC8vICAgICB0aGlzLnBpbmNoQ2VudGVyID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcclxuICAvLyAgICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMucGluY2hDZW50ZXIueCp0aGlzLnNjYWxlIC0gKC10aGlzLngqdGhpcy5zY2FsZSArIE1hdGgubWluKHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy5jdXJXaWR0aCkvMik7XHJcbiAgLy8gICAgIGNvbnN0IG9mZnNldFkgPSB0aGlzLnBpbmNoQ2VudGVyLnkqdGhpcy5zY2FsZSAtICgtdGhpcy55KnRoaXMuc2NhbGUgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCkvMik7XHJcbiAgLy8gICAgIHRoaXMucGluY2hDZW50ZXJPZmZzZXQgPSB7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICBjb25zdCBuZXdTY2FsZSA9IHRoaXMucmVzdHJpY3RTY2FsZSh0aGlzLnNjYWxlKiRldmVudC5zY2FsZSk7XHJcbiAgLy8gICBjb25zdCB6b29tWCA9IHRoaXMucGluY2hDZW50ZXIueCpuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueDtcclxuICAvLyAgIGNvbnN0IHpvb21ZID0gdGhpcy5waW5jaENlbnRlci55Km5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC55O1xyXG4gIC8vICAgY29uc3Qgem9vbUNlbnRlciA9IHsgeDogem9vbVgvbmV3U2NhbGUsIHk6IHpvb21ZL25ld1NjYWxlIH07XHJcblxyXG4gIC8vICAgdGhpcy56b29tQXJvdW5kKCRldmVudC5zY2FsZSwgem9vbUNlbnRlci54LCB6b29tQ2VudGVyLnksIHRydWUpO1xyXG4gIC8vIH1cclxuXHJcbiAgb25Eb3VibGVUYXAoJGV2ZW50KXtcclxuICAgIGlmICgkZXZlbnQudGFwQ291bnQgPT09IDIpIHtcclxuICAgICAgY29uc3QgYyA9IHRoaXMucmF3Q2VudGVyKCRldmVudCk7XHJcbiAgICAgIHRoaXMuem9vbUFyb3VuZCgyLCBjLngsIGMueSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
import * as jquery from 'jquery';
/** @type {?} */
const $ = jquery;
import * as Hammer from 'hammerjs';
export class DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     */
    constructor(_elementRef, _zoomService) {
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
        (val) => {
            this.zoom = val;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        const panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        ((/** @type {?} */ (panzoom))).style.transform = '';
        // TODO: this intersects with zooming by zoom directive, but still needed
        // for flush previous settings before opening another file
        //this._zoomService.changeZoom(100);
        //this.scale = 1;
    }
    /**
     * @return {?}
     */
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
        this.scale = (this.viewportWidth / this.docWidth) * this._zoomService.zoom / 100;
        this.lastScale = this.scale;
        this.viewportHeight = this.container.offsetHeight;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        /** @type {?} */
        const hammer = new Hammer(this.container);
    }
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    ifExcel() {
        return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDimensionWithUnit(value) {
        return value + FileUtil.find(this.file.guid, false).unit;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        const element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    absolutePosition(el) {
        /** @type {?} */
        let x = 0;
        /** @type {?} */
        let y = 0;
        while (el !== null) {
            // TODO: we take client dimensions now because of our toolbar with 60px height
            // x += el.offsetLeft;
            // y += el.offsetTop;
            x += el.clientLeft;
            y += el.clientTop;
            el = el.offsetParent;
        }
        return { x: x, y: y };
    }
    ;
    /**
     * @param {?} $event
     * @return {?}
     */
    rawCenter($event) {
        /** @type {?} */
        const pos = this.absolutePosition(this.container);
        // We need to account for the scroll position
        /** @type {?} */
        const scrollLeft = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft;
        /** @type {?} */
        const scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
        /** @type {?} */
        const zoomX = -this.x + ($event.center.x - pos.x + scrollLeft) / this.scale;
        // TODO: in $event.center.y we have absolute coordinate value including toolbar 
        // with height = 60px 
        /** @type {?} */
        const zoomY = -this.y + (($event.center.y - 60) - pos.y + scrollTop) / this.scale;
        return { x: zoomX, y: zoomY };
    }
    ;
    /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} imgDim
     * @return {?}
     */
    restrictRawPos(pos, viewportDim, imgDim) {
        // TODO: first condition only to handle not clear case with initil zoom <= 1
        if (this.scale <= 1 && (viewportDim / this.scale - imgDim === 0) && pos < 0) {
            return pos;
        }
        else if (pos < viewportDim / this.scale - imgDim) { // too far left/up?
            pos = viewportDim / this.scale - imgDim;
        }
        else if (pos > 0) { // too far right/down?
            pos = 0;
        }
        return pos;
    }
    ;
    /**
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    translate(deltaX, deltaY) {
        /** @type {?} */
        const newX = this.restrictRawPos(this.lastX + deltaX / this.scale, Math.min(this.viewportWidth, this.curWidth), this.docWidth);
        this.x = newX;
        //this.doc.style.marginLeft = Math.ceil(newX*this.scale) + 'px';
        /** @type {?} */
        const newY = this.restrictRawPos(this.lastY + deltaY / this.scale, Math.min(this.viewportHeight, this.curHeight), this.docHeight);
        this.y = newY;
        //this.doc.style.marginTop = Math.ceil(newY*this.scale) + 'px';
        this.doc.style.transform = 'translate(' + Math.ceil(newX * this.scale) + 'px,' + Math.ceil(newY * this.scale) + 'px)' + 'scale(' + this.scale + ')';
    }
    ;
    /**
     * @param {?} scaleBy
     * @return {?}
     */
    zoomTranslate(scaleBy) {
        this.scale = this.restrictScale(this.lastScale * scaleBy);
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        // Instead of changing the actual img size we apply scale further
        //this.doc.style.width = Math.ceil(this.curWidth) + 'px';
        //this.doc.style.height = Math.ceil(this.curHeight) + 'px';
        this.doc.style.transformOrigin = 'left top';
        // Adjust margins to make sure that we aren't out of bounds
        this.translate(0, 0);
    }
    ;
    /**
     * @return {?}
     */
    updateLastScale() {
        this.lastScale = this.scale;
    }
    ;
    /**
     * @return {?}
     */
    updateLastPos() {
        this.lastX = this.x;
        this.lastY = this.y;
    }
    ;
    /**
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    zoomAround(scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
        // Zoom
        this.zoomTranslate(scaleBy);
        // New raw center of viewport
        /** @type {?} */
        const rawCenterX = -this.x + Math.min(this.viewportWidth, this.curWidth) / 2 / this.scale;
        /** @type {?} */
        const rawCenterY = -this.y + Math.min(this.viewportHeight, this.curHeight) / 2 / this.scale;
        // Delta
        /** @type {?} */
        const deltaX = (rawCenterX - rawZoomX) * this.scale;
        /** @type {?} */
        const deltaY = (rawCenterY - rawZoomY) * this.scale;
        // Translate back to zoom center
        this.translate(deltaX, deltaY);
        if (!doNotUpdateLast) {
            this.updateLastScale();
            this.updateLastPos();
        }
    }
    ;
    /**
     * @param {?} $event
     * @return {?}
     */
    onPinch($event) {
        if (this.pinchCenter === null) {
            this.pinchCenter = this.rawCenter($event);
            /** @type {?} */
            const offsetX = this.pinchCenter.x * this.scale - (-this.x * this.scale + Math.min(this.viewportWidth, this.curWidth) / 2);
            /** @type {?} */
            const offsetY = this.pinchCenter.y * this.scale - (-this.y * this.scale + Math.min(this.viewportHeight, this.curHeight) / 2);
            this.pinchCenterOffset = { x: offsetX, y: offsetY };
        }
        /** @type {?} */
        const newScale = this.restrictScale(this.scale * $event.scale);
        /** @type {?} */
        const zoomX = this.pinchCenter.x * newScale - this.pinchCenterOffset.x;
        /** @type {?} */
        const zoomY = this.pinchCenter.y * newScale - this.pinchCenterOffset.y;
        /** @type {?} */
        const zoomCenter = { x: zoomX / newScale, y: zoomY / newScale };
        this.zoomAround($event.scale, zoomCenter.x, zoomCenter.y, true);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPinchEnd($event) {
        this.updateLastScale();
        this.updateLastPos();
        this.pinchCenter = null;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPan($event) {
        this.translate($event.deltaX, $event.deltaY);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanEnd($event) {
        this.updateLastPos();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDoubleTap($event) {
        if ($event.tapCount === 2) {
            /** @type {?} */
            const c = this.rawCenter($event);
            this.zoomAround(2, c.x, c.y, false);
        }
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\r\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService }
];
DocumentComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQU9uQyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQTRCNUIsWUFBb0IsV0FBb0MsRUFDcEMsWUFBeUI7UUFEekIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBeEI3QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLDhCQUE4Qjs7UUFDN0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sVUFBSyxHQUFHLENBQUMsQ0FBQztR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QVc7OzttQkFZaEIsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFGTixpQ0FBdUI7O0lBQ3ZCLDZDQUFrQzs7SUFDbEMsaUNBQStCOztJQUMvQixpQ0FBYTs7SUFDYixpQ0FBYTs7SUFFYixzQ0FBYzs7SUFDZCxzQ0FBZTs7SUFFZixxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7SUFDakIsMENBQXFCOztJQUNyQiwyQ0FBc0I7O0lBQ3RCLGtDQUFhOztJQUNiLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixnQ0FBVzs7SUFDWCw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDViw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDVix3Q0FBbUI7O0lBQ25CLDhDQUF5Qjs7SUFDekIscUNBQWE7O0lBQ2Isc0NBQWM7O0lBZ0VkLDBDQU9FOzs7OztJQXJFVSx3Q0FBNEM7Ozs7O0lBQzVDLHlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpbGVEZXNjcmlwdGlvbiwgRmlsZVV0aWx9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4uL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZG9jdW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcclxuICB3YWl0ID0gZmFsc2U7XHJcbiAgem9vbTogbnVtYmVyO1xyXG5cclxuICBNSU5fU0NBTEUgPSAxOyAvLyAxPXNjYWxpbmcgd2hlbiBmaXJzdCBsb2FkZWRcclxuICBNQVhfU0NBTEUgPSA2NDtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSkge1xyXG5cclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgcGFuem9vbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICAocGFuem9vbSBhcyBhbnkpLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgLy8gVE9ETzogdGhpcyBpbnRlcnNlY3RzIHdpdGggem9vbWluZyBieSB6b29tIGRpcmVjdGl2ZSwgYnV0IHN0aWxsIG5lZWRlZFxyXG4gICAgLy8gZm9yIGZsdXNoIHByZXZpb3VzIHNldHRpbmdzIGJlZm9yZSBvcGVuaW5nIGFub3RoZXIgZmlsZVxyXG4gICAgLy90aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKDEwMCk7XHJcbiAgICAvL3RoaXMuc2NhbGUgPSAxO1xyXG4gIH1cclxuICAgIFxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5wYW56b29tIGFzIGEgZG9jdW1lbnRcclxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gVE9ETzogY2hlY2sgdGhhdCB0aGlzIGlzIG5lZWRlZFxyXG4gICAgLy9kaXNhYmxlSW1nRXZlbnRIYW5kbGVycygpO1xyXG5cclxuICAgIHRoaXMuZG9jV2lkdGggPSB0aGlzLmRvYy5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuZG9jSGVpZ2h0ID0gdGhpcy5kb2Mub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy52aWV3cG9ydFdpZHRoID0gdGhpcy5kb2Mub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgLy8gVE9ETzogZm9yIGNhc2VzIHdoZXJlIHdlIGFscmVhZHkgaGF2ZSB6b29tIGRlZmluZWQgd2Ugc2hvdWxkIGluY2x1ZGUgaXRcclxuICAgIC8vdGhpcy5zY2FsZSA9IHRoaXMudmlld3BvcnRXaWR0aC90aGlzLmRvY1dpZHRoO1xyXG4gICAgdGhpcy5zY2FsZSA9ICh0aGlzLnZpZXdwb3J0V2lkdGgvdGhpcy5kb2NXaWR0aCkgKiB0aGlzLl96b29tU2VydmljZS56b29tLzEwMDtcclxuICAgIFxyXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoKnRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0KnRoaXMuc2NhbGU7XHJcblxyXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiB0aGlzIHRlbXBvcmFyeSBjcnV0Y2ggZm9yIEV4Y2VsIGZpbGVzIHNob3VsZCBiZSBkb2N1bWVudGVkXHJcbiAgaWZFeGNlbCgpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHZhbHVlICsgRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50Tm9kZUxpc3RPZiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXN0cmljdFNjYWxlID0gZnVuY3Rpb24gKHNjYWxlKSB7XHJcbiAgICBpZiAoc2NhbGUgPCB0aGlzLk1JTl9TQ0FMRSkge1xyXG4gICAgICBzY2FsZSA9IHRoaXMuTUlOX1NDQUxFO1xyXG4gICAgfSBlbHNlIGlmIChzY2FsZSA+IHRoaXMuTUFYX1NDQUxFKSB7XHJcbiAgICAgIHNjYWxlID0gdGhpcy5NQVhfU0NBTEU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NhbGU7XHJcbiAgfTtcclxuXHJcbiAgYWJzb2x1dGVQb3NpdGlvbihlbCkge1xyXG4gICAgbGV0IHggPSAwLCB5ID0gMDtcclxuXHJcbiAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcclxuICAgICAgLy8gVE9ETzogd2UgdGFrZSBjbGllbnQgZGltZW5zaW9ucyBub3cgYmVjYXVzZSBvZiBvdXIgdG9vbGJhciB3aXRoIDYwcHggaGVpZ2h0XHJcbiAgICAgIC8vIHggKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgLy8geSArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIHggKz0gZWwuY2xpZW50TGVmdDtcclxuICAgICAgeSArPSBlbC5jbGllbnRUb3A7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICB9O1xyXG5cclxuICByYXdDZW50ZXIoJGV2ZW50KSB7XHJcbiAgICBjb25zdCBwb3MgPSB0aGlzLmFic29sdXRlUG9zaXRpb24odGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgIC8vIFdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cclxuICAgIGNvbnN0IHpvb21YID0gLXRoaXMueCArICgkZXZlbnQuY2VudGVyLnggLSBwb3MueCArIHNjcm9sbExlZnQpL3RoaXMuc2NhbGU7XHJcbiAgICAvLyBUT0RPOiBpbiAkZXZlbnQuY2VudGVyLnkgd2UgaGF2ZSBhYnNvbHV0ZSBjb29yZGluYXRlIHZhbHVlIGluY2x1ZGluZyB0b29sYmFyIFxyXG4gICAgLy8gd2l0aCBoZWlnaHQgPSA2MHB4IFxyXG4gICAgY29uc3Qgem9vbVkgPSAtdGhpcy55ICsgKCgkZXZlbnQuY2VudGVyLnkgLSA2MCkgLSBwb3MueSArIHNjcm9sbFRvcCkvdGhpcy5zY2FsZTtcclxuXHJcbiAgICByZXR1cm4geyB4OiB6b29tWCwgeTogem9vbVkgfTtcclxuICB9O1xyXG5cclxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBpbWdEaW0pIHtcclxuICAgIC8vIFRPRE86IGZpcnN0IGNvbmRpdGlvbiBvbmx5IHRvIGhhbmRsZSBub3QgY2xlYXIgY2FzZSB3aXRoIGluaXRpbCB6b29tIDw9IDFcclxuICAgIGlmICh0aGlzLnNjYWxlIDw9IDEgJiYgKHZpZXdwb3J0RGltL3RoaXMuc2NhbGUgLSBpbWdEaW0gPT09IDApICYmIHBvcyA8IDApe1xyXG4gICAgICByZXR1cm4gcG9zO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocG9zIDwgdmlld3BvcnREaW0vdGhpcy5zY2FsZSAtIGltZ0RpbSkgeyAvLyB0b28gZmFyIGxlZnQvdXA/XHJcbiAgICAgIHBvcyA9IHZpZXdwb3J0RGltL3RoaXMuc2NhbGUgLSBpbWdEaW07XHJcbiAgICB9IGVsc2UgaWYgKHBvcyA+IDApIHsgLy8gdG9vIGZhciByaWdodC9kb3duP1xyXG4gICAgICBwb3MgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvcztcclxuICB9O1xyXG5cclxuICB0cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIGNvbnN0IG5ld1ggPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFggKyBkZWx0YVgvdGhpcy5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSwgdGhpcy5kb2NXaWR0aCk7XHJcbiAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgLy90aGlzLmRvYy5zdHlsZS5tYXJnaW5MZWZ0ID0gTWF0aC5jZWlsKG5ld1gqdGhpcy5zY2FsZSkgKyAncHgnO1xyXG5cclxuICAgIGNvbnN0IG5ld1kgPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFkgKyBkZWx0YVkvdGhpcy5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpLCB0aGlzLmRvY0hlaWdodCk7XHJcbiAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgLy90aGlzLmRvYy5zdHlsZS5tYXJnaW5Ub3AgPSBNYXRoLmNlaWwobmV3WSp0aGlzLnNjYWxlKSArICdweCc7XHJcbiAgICBcclxuICAgIHRoaXMuZG9jLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIE1hdGguY2VpbChuZXdYKnRoaXMuc2NhbGUpICsgJ3B4LCcgKyBNYXRoLmNlaWwobmV3WSp0aGlzLnNjYWxlKSArICdweCknICsgJ3NjYWxlKCcgKyB0aGlzLnNjYWxlICsgJyknO1xyXG4gIH07XHJcblxyXG4gIHpvb21UcmFuc2xhdGUoc2NhbGVCeSkge1xyXG4gICAgdGhpcy5zY2FsZSA9IHRoaXMucmVzdHJpY3RTY2FsZSh0aGlzLmxhc3RTY2FsZSpzY2FsZUJ5KTtcclxuXHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCp0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCp0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIEluc3RlYWQgb2YgY2hhbmdpbmcgdGhlIGFjdHVhbCBpbWcgc2l6ZSB3ZSBhcHBseSBzY2FsZSBmdXJ0aGVyXHJcbiAgICAvL3RoaXMuZG9jLnN0eWxlLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuY3VyV2lkdGgpICsgJ3B4JztcclxuICAgIC8vdGhpcy5kb2Muc3R5bGUuaGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuY3VySGVpZ2h0KSArICdweCc7XHJcbiAgICBcclxuICAgIHRoaXMuZG9jLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICdsZWZ0IHRvcCc7XHJcblxyXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcclxuICAgIHRoaXMudHJhbnNsYXRlKDAsIDApO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUxhc3RTY2FsZSgpIHtcclxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVMYXN0UG9zKCkge1xyXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMueDtcclxuICAgIHRoaXMubGFzdFkgPSB0aGlzLnk7XHJcbiAgfTtcclxuXHJcbiAgem9vbUFyb3VuZChzY2FsZUJ5LCByYXdab29tWCwgcmF3Wm9vbVksIGRvTm90VXBkYXRlTGFzdCkge1xyXG4gICAgLy8gWm9vbVxyXG4gICAgdGhpcy56b29tVHJhbnNsYXRlKHNjYWxlQnkpO1xyXG5cclxuICAgIC8vIE5ldyByYXcgY2VudGVyIG9mIHZpZXdwb3J0XHJcbiAgICBjb25zdCByYXdDZW50ZXJYID0gLXRoaXMueCArIE1hdGgubWluKHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy5jdXJXaWR0aCkvMi90aGlzLnNjYWxlO1xyXG4gICAgY29uc3QgcmF3Q2VudGVyWSA9IC10aGlzLnkgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCkvMi90aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIERlbHRhXHJcbiAgICBjb25zdCBkZWx0YVggPSAocmF3Q2VudGVyWCAtIHJhd1pvb21YKSp0aGlzLnNjYWxlO1xyXG4gICAgY29uc3QgZGVsdGFZID0gKHJhd0NlbnRlclkgLSByYXdab29tWSkqdGhpcy5zY2FsZTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgYmFjayB0byB6b29tIGNlbnRlclxyXG4gICAgdGhpcy50cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpO1xyXG5cclxuICAgIGlmICghZG9Ob3RVcGRhdGVMYXN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uUGluY2goJGV2ZW50KXtcclxuICAgIGlmICh0aGlzLnBpbmNoQ2VudGVyID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucGluY2hDZW50ZXIgPSB0aGlzLnJhd0NlbnRlcigkZXZlbnQpO1xyXG4gICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5waW5jaENlbnRlci54KnRoaXMuc2NhbGUgLSAoLXRoaXMueCp0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKS8yKTtcclxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMucGluY2hDZW50ZXIueSp0aGlzLnNjYWxlIC0gKC10aGlzLnkqdGhpcy5zY2FsZSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KS8yKTtcclxuICAgICAgdGhpcy5waW5jaENlbnRlck9mZnNldCA9IHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5yZXN0cmljdFNjYWxlKHRoaXMuc2NhbGUqJGV2ZW50LnNjYWxlKTtcclxuICAgIGNvbnN0IHpvb21YID0gdGhpcy5waW5jaENlbnRlci54Km5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC54O1xyXG4gICAgY29uc3Qgem9vbVkgPSB0aGlzLnBpbmNoQ2VudGVyLnkqbmV3U2NhbGUgLSB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0Lnk7XHJcbiAgICBjb25zdCB6b29tQ2VudGVyID0geyB4OiB6b29tWC9uZXdTY2FsZSwgeTogem9vbVkvbmV3U2NhbGUgfTtcclxuXHJcbiAgICB0aGlzLnpvb21Bcm91bmQoJGV2ZW50LnNjYWxlLCB6b29tQ2VudGVyLngsIHpvb21DZW50ZXIueSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvblBpbmNoRW5kKCRldmVudCl7XHJcbiAgICB0aGlzLnVwZGF0ZUxhc3RTY2FsZSgpO1xyXG4gICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XHJcbiAgICB0aGlzLnBpbmNoQ2VudGVyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uUGFuKCRldmVudCl7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSgkZXZlbnQuZGVsdGFYLCAkZXZlbnQuZGVsdGFZKTtcclxuICB9XHJcblxyXG4gIG9uUGFuRW5kKCRldmVudCl7XHJcbiAgICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICB9XHJcblxyXG4gIG9uRG91YmxlVGFwKCRldmVudCl7XHJcbiAgICBpZiAoJGV2ZW50LnRhcENvdW50ID09PSAyKSB7XHJcbiAgICAgIGNvbnN0IGMgPSB0aGlzLnJhd0NlbnRlcigkZXZlbnQpO1xyXG4gICAgICB0aGlzLnpvb21Bcm91bmQoMiwgYy54LCBjLnksIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
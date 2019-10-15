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
import { WindowService } from '../window.service';
export class DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     */
    constructor(_elementRef, _zoomService, _windowService) {
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
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
        (val) => {
            this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
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
            x += el.offsetLeft;
            y += el.offsetTop;
            el = el.offsetParent;
        }
        return { x: x, y: y };
    }
    ;
    /**
     * @param {?} pos
     * @param {?} viewportDim
     * @param {?} docDim
     * @return {?}
     */
    restrictRawPos(pos, viewportDim, docDim) {
        if (pos < viewportDim / this.scale - docDim) { // too far left/up?
            pos = viewportDim / this.scale - docDim;
        }
        else if (pos > 0) { // too far right/down?
            pos = 0;
        }
        return pos;
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
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    translate(deltaX, deltaY) {
        // We restrict to the min of the viewport width/height or current width/height as the
        // current width/height may be smaller than the viewport width/height
        /** @type {?} */
        const newX = this.restrictRawPos(this.lastX + deltaX / this.scale, Math.min(this.viewportWidth, this.curWidth), this.docWidth);
        this.x = newX;
        // TODO: value here and in the similar line below changes to positive to take any effect
        this.container.scrollLeft = -Math.ceil(newX * this.scale);
        /** @type {?} */
        const newY = this.restrictRawPos(this.lastY + deltaY / this.scale, Math.min(this.viewportHeight, this.curHeight), this.docHeight);
        this.y = newY;
        this.container.scrollTop = -Math.ceil(newY * this.scale);
        this.doc.style.transform = 'scale(' + this.scale + ')';
    }
    ;
    /**
     * @param {?} scaleBy
     * @return {?}
     */
    startZoom(scaleBy) {
        this.scale = this.lastScale * scaleBy;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        // Adjust margins to make sure that we aren't out of bounds
        this.translate(0, 0);
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
        /** @type {?} */
        const zoomY = -this.y + ($event.center.y - pos.y + scrollTop) / this.scale;
        return { x: zoomX, y: zoomY };
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
     * @param {?} scaleBy
     * @param {?} rawZoomX
     * @param {?} rawZoomY
     * @param {?} doNotUpdateLast
     * @return {?}
     */
    zoomAround(scaleBy, rawZoomX, rawZoomY, doNotUpdateLast) {
        // Zoom
        this.startZoom(scaleBy);
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
        const newScale = this.scale * $event.scale;
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
        // TODO: looks like native pan works better
        // if (!this.isDesktop) {
        //   this.translate($event.deltaX, $event.deltaY);
        // }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPanEnd($event) {
        // if (!this.isDesktop) {
        //   this.updateLastPos();
        // }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onDoubleTap($event) {
        if (!this.isDesktop) {
            if ($event.tapCount === 2) {
                /** @type {?} */
                const c = this.rawCenter($event);
                this.zoomAround(2, c.x, c.y, false);
            }
        }
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \r\n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}.panzoom.mobile{overflow:scroll}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService }
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
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBMEI1QixZQUFvQixXQUFvQyxFQUNwQyxZQUF5QixFQUN6QixjQUE2QjtRQUY3QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUF2QmpELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixRQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLFVB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SUFFRCxRQUFRLENBQUMsTUFBTTtRQUNiLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsSUFBSTtJQUNOLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQU07UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTs7c0JBQ25CLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7SUFDSCxDQUFDOzs7WUFsT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpL0JBQXdDOzthQUV6Qzs7OztZQWhCQyxVQUFVO1lBTUosV0FBVztZQUlWLGFBQWE7OzttQkFTbkIsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFGTixpQ0FBdUI7O0lBQ3ZCLDZDQUFrQzs7SUFDbEMsaUNBQStCOztJQUMvQixpQ0FBYTs7SUFDYixpQ0FBYTs7SUFFYixxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7SUFDakIsMENBQXFCOztJQUNyQiwyQ0FBc0I7O0lBQ3RCLGtDQUFhOztJQUNiLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixnQ0FBVzs7SUFDWCw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDViw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDVix3Q0FBbUI7O0lBQ25CLDhDQUF5Qjs7SUFDekIscUNBQWE7O0lBQ2Isc0NBQWM7O0lBQ2Qsc0NBQW1COzs7OztJQUVQLHdDQUE0Qzs7Ozs7SUFDNUMseUNBQWlDOzs7OztJQUNqQywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgd2FpdCA9IGZhbHNlO1xyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xyXG5cclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBwYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIChwYW56b29tIGFzIGFueSkuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGludGVyc2VjdHMgd2l0aCB6b29taW5nIGJ5IHpvb20gZGlyZWN0aXZlLCBidXQgc3RpbGwgbmVlZGVkXHJcbiAgICAvLyBmb3IgZmx1c2ggcHJldmlvdXMgc2V0dGluZ3MgYmVmb3JlIG9wZW5pbmcgYW5vdGhlciBmaWxlXHJcbiAgICAvL3RoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oMTAwKTtcclxuICAgIC8vdGhpcy5zY2FsZSA9IDE7XHJcbiAgfVxyXG4gICAgXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmRvY1dpZHRoID0gdGhpcy5kb2MuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLmRvY0hlaWdodCA9IHRoaXMuZG9jLmNsaWVudEhlaWdodDtcclxuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIC8vIEZvciBjYXNlcyB3aGVyZSB3ZSBhbHJlYWR5IGhhdmUgem9vbSBkZWZpbmVkIHdlIHNob3VsZCBpbmNsdWRlIGl0XHJcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMudmlld3BvcnRXaWR0aC90aGlzLmRvY1dpZHRoKSAqIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20vMTAwO1xyXG4gICAgXHJcbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGgqdGhpcy5zY2FsZTtcclxuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQqdGhpcy5zY2FsZTtcclxuXHJcbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHRoaXMgdGVtcG9yYXJ5IGNydXRjaCBmb3IgRXhjZWwgZmlsZXMgc2hvdWxkIGJlIGRvY3VtZW50ZWRcclxuICBpZkV4Y2VsKCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCI7XHJcbiAgfVxyXG5cclxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgKyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic29sdXRlUG9zaXRpb24oZWwpIHtcclxuICAgIGxldCB4ID0gMCwgeSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKGVsICE9PSBudWxsKSB7XHJcbiAgICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgeSArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICB9O1xyXG5cclxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBkb2NEaW0pIHtcclxuICAgIGlmIChwb3MgPCB2aWV3cG9ydERpbS90aGlzLnNjYWxlIC0gZG9jRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cclxuICAgICAgcG9zID0gdmlld3BvcnREaW0vdGhpcy5zY2FsZSAtIGRvY0RpbTtcclxuICAgIH0gZWxzZSBpZiAocG9zID4gMCkgeyAvLyB0b28gZmFyIHJpZ2h0L2Rvd24/XHJcbiAgICAgIHBvcyA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUxhc3RQb3MoKSB7XHJcbiAgICB0aGlzLmxhc3RYID0gdGhpcy54O1xyXG4gICAgdGhpcy5sYXN0WSA9IHRoaXMueTtcclxuICB9O1xyXG5cclxuICB0cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIC8vIFdlIHJlc3RyaWN0IHRvIHRoZSBtaW4gb2YgdGhlIHZpZXdwb3J0IHdpZHRoL2hlaWdodCBvciBjdXJyZW50IHdpZHRoL2hlaWdodCBhcyB0aGVcclxuICAgIC8vIGN1cnJlbnQgd2lkdGgvaGVpZ2h0IG1heSBiZSBzbWFsbGVyIHRoYW4gdGhlIHZpZXdwb3J0IHdpZHRoL2hlaWdodFxyXG4gICAgY29uc3QgbmV3WCA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WCArIGRlbHRhWC90aGlzLnNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcclxuICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAvLyBUT0RPOiB2YWx1ZSBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IGNoYW5nZXMgdG8gcG9zaXRpdmUgdG8gdGFrZSBhbnkgZWZmZWN0XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gLU1hdGguY2VpbChuZXdYKnRoaXMuc2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1kgPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFkgKyBkZWx0YVkvdGhpcy5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpLCB0aGlzLmRvY0hlaWdodCk7XHJcbiAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wID0gLU1hdGguY2VpbChuZXdZKnRoaXMuc2NhbGUpO1xyXG4gICAgXHJcbiAgICB0aGlzLmRvYy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKSc7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRab29tKHNjYWxlQnkpIHtcclxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLmxhc3RTY2FsZSpzY2FsZUJ5O1xyXG5cclxuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoKnRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0KnRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcclxuICAgIHRoaXMudHJhbnNsYXRlKDAsIDApO1xyXG4gIH07XHJcblxyXG4gIHJhd0NlbnRlcigkZXZlbnQpIHtcclxuICAgIGNvbnN0IHBvcyA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbih0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gV2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgY29uc3Qgem9vbVggPSAtdGhpcy54ICsgKCRldmVudC5jZW50ZXIueCAtIHBvcy54ICsgc2Nyb2xsTGVmdCkvdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IHpvb21ZID0gLXRoaXMueSArICgkZXZlbnQuY2VudGVyLnkgLSBwb3MueSArIHNjcm9sbFRvcCkvdGhpcy5zY2FsZTtcclxuXHJcbiAgICByZXR1cm4geyB4OiB6b29tWCwgeTogem9vbVkgfTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVMYXN0U2NhbGUoKSB7XHJcbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgfTtcclxuXHJcbiAgem9vbUFyb3VuZChzY2FsZUJ5LCByYXdab29tWCwgcmF3Wm9vbVksIGRvTm90VXBkYXRlTGFzdCkge1xyXG4gICAgLy8gWm9vbVxyXG4gICAgdGhpcy5zdGFydFpvb20oc2NhbGVCeSk7XHJcblxyXG4gICAgLy8gTmV3IHJhdyBjZW50ZXIgb2Ygdmlld3BvcnRcclxuICAgIGNvbnN0IHJhd0NlbnRlclggPSAtdGhpcy54ICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKS8yL3RoaXMuc2NhbGU7XHJcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KS8yL3RoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gRGVsdGFcclxuICAgIGNvbnN0IGRlbHRhWCA9IChyYXdDZW50ZXJYIC0gcmF3Wm9vbVgpKnRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBkZWx0YVkgPSAocmF3Q2VudGVyWSAtIHJhd1pvb21ZKSp0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSBiYWNrIHRvIHpvb20gY2VudGVyXHJcbiAgICB0aGlzLnRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSk7XHJcblxyXG4gICAgaWYgKCFkb05vdFVwZGF0ZUxhc3QpIHtcclxuICAgICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25QaW5jaCgkZXZlbnQpe1xyXG4gICAgaWYgKHRoaXMucGluY2hDZW50ZXIgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5waW5jaENlbnRlciA9IHRoaXMucmF3Q2VudGVyKCRldmVudCk7XHJcbiAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLnBpbmNoQ2VudGVyLngqdGhpcy5zY2FsZSAtICgtdGhpcy54KnRoaXMuc2NhbGUgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLzIpO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5waW5jaENlbnRlci55KnRoaXMuc2NhbGUgLSAoLXRoaXMueSp0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpLzIpO1xyXG4gICAgICB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0ID0geyB4OiBvZmZzZXRYLCB5OiBvZmZzZXRZIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnNjYWxlKiRldmVudC5zY2FsZTtcclxuXHJcbiAgICBjb25zdCB6b29tWCA9IHRoaXMucGluY2hDZW50ZXIueCpuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueDtcclxuICAgIGNvbnN0IHpvb21ZID0gdGhpcy5waW5jaENlbnRlci55Km5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC55O1xyXG4gICAgY29uc3Qgem9vbUNlbnRlciA9IHsgeDogem9vbVgvbmV3U2NhbGUsIHk6IHpvb21ZL25ld1NjYWxlIH07XHJcbiAgICBcclxuICAgIHRoaXMuem9vbUFyb3VuZCgkZXZlbnQuc2NhbGUsIHpvb21DZW50ZXIueCwgem9vbUNlbnRlci55LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uUGluY2hFbmQoJGV2ZW50KXtcclxuICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIHRoaXMucGluY2hDZW50ZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25QYW4oJGV2ZW50KXtcclxuICAgIC8vIFRPRE86IGxvb2tzIGxpa2UgbmF0aXZlIHBhbiB3b3JrcyBiZXR0ZXJcclxuICAgIC8vIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgIC8vICAgdGhpcy50cmFuc2xhdGUoJGV2ZW50LmRlbHRhWCwgJGV2ZW50LmRlbHRhWSk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBvblBhbkVuZCgkZXZlbnQpe1xyXG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgLy8gICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG9uRG91YmxlVGFwKCRldmVudCl7XHJcbiAgICBpZiAoIXRoaXMuaXNEZXNrdG9wKSB7XHJcbiAgICAgIGlmICgkZXZlbnQudGFwQ291bnQgPT09IDIpIHtcclxuICAgICAgICBjb25zdCBjID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcclxuICAgICAgICB0aGlzLnpvb21Bcm91bmQoMiwgYy54LCBjLnksIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
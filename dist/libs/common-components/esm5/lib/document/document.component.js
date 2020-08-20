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
import { NavigateService } from '../navigate.service';
/** @type {?} */
var $ = jquery;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService, _windowService, _navigateService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
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
        if (this.ifPresentation()) {
            this.selectedPage = 1;
        }
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
     * @return {?}
     */
    DocumentComponent.prototype.ifPresentation = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
    };
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    DocumentComponent.prototype.getDimensionWithUnit = /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    function (value, pageNumber) {
        return this.ifPresentation() && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
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
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    DocumentComponent.prototype.isVisible = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        if (this.ifPresentation()) {
            return pageNumber === this.selectedPage ? true : false;
        }
        else {
            return true;
        }
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \r\n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\r\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\r\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page *ngIf=\"isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\r\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: NavigateService }
    ]; };
    DocumentComponent.propDecorators = {
        mode: [{ type: Input }],
        preloadPageCount: [{ type: Input }],
        file: [{ type: Input }],
        selectedPage: [{ type: Input }],
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
    DocumentComponent.prototype.selectedPage;
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
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._navigateService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFaEQsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFpQ0UsMkJBQXNCLFdBQW9DLEVBQ3RDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUhyRCxpQkFTQztRQVRxQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQXpCM0MsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLElBQUksQ0FBQztR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QUFNOztJQUNOLGtDQUFVOztJQUNWLDhCQUFNOztJQUNOLGtDQUFVOztJQUNWLHdDQUFtQjs7SUFDbkIsOENBQXlCOztJQUN6QixxQ0FBYTs7SUFDYixzQ0FBYzs7SUFDZCxzQ0FBbUI7Ozs7O0lBRVAsd0NBQThDOzs7OztJQUM5Qyx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQzs7Ozs7SUFDckMsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGUuc2VydmljZSc7XHJcblxyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kb2N1bWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwcmVsb2FkUGFnZUNvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBvbnBhbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHdhaXQgPSBmYWxzZTtcclxuICB6b29tOiBudW1iZXI7XHJcblxyXG4gIGRvY1dpZHRoID0gbnVsbDtcclxuICBkb2NIZWlnaHQgPSBudWxsO1xyXG4gIHZpZXdwb3J0V2lkdGggPSBudWxsO1xyXG4gIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcclxuICBzY2FsZSA9IG51bGw7XHJcbiAgbGFzdFNjYWxlID0gbnVsbDtcclxuICBjb250YWluZXIgPSBudWxsO1xyXG4gIGRvYyA9IG51bGw7XHJcbiAgeCA9IDA7XHJcbiAgbGFzdFggPSAwO1xyXG4gIHkgPSAwO1xyXG4gIGxhc3RZID0gMDtcclxuICBwaW5jaENlbnRlciA9IG51bGw7XHJcbiAgcGluY2hDZW50ZXJPZmZzZXQgPSBudWxsO1xyXG4gIGN1cldpZHRoID0gMDtcclxuICBjdXJIZWlnaHQgPSAwO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSlcclxuICAgIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBwYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIChwYW56b29tIGFzIGFueSkuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGludGVyc2VjdHMgd2l0aCB6b29taW5nIGJ5IHpvb20gZGlyZWN0aXZlLCBidXQgc3RpbGwgbmVlZGVkXHJcbiAgICAvLyBmb3IgZmx1c2ggcHJldmlvdXMgc2V0dGluZ3MgYmVmb3JlIG9wZW5pbmcgYW5vdGhlciBmaWxlXHJcbiAgICAvL3RoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oMTAwKTtcclxuICAgIC8vdGhpcy5zY2FsZSA9IDE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAucGFuem9vbSBhcyBhIGRvY3VtZW50XHJcbiAgICB0aGlzLmRvYyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAuZ2QtZG9jdW1lbnQgYXMgYSBjb250YWluZXJcclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuZG9jV2lkdGggPSB0aGlzLmRvYy5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuZG9jSGVpZ2h0ID0gdGhpcy5kb2MuY2xpZW50SGVpZ2h0O1xyXG4gICAgdGhpcy52aWV3cG9ydFdpZHRoID0gdGhpcy5kb2Mub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgLy8gRm9yIGNhc2VzIHdoZXJlIHdlIGFscmVhZHkgaGF2ZSB6b29tIGRlZmluZWQgd2Ugc2hvdWxkIGluY2x1ZGUgaXRcclxuICAgIHRoaXMuc2NhbGUgPSAodGhpcy52aWV3cG9ydFdpZHRoIC8gdGhpcy5kb2NXaWR0aCkgKiB0aGlzLl96b29tU2VydmljZS56b29tIC8gMTAwO1xyXG5cclxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgIHRoaXMudmlld3BvcnRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0ICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHRoaXMgdGVtcG9yYXJ5IGNydXRjaCBmb3IgRXhjZWwgZmlsZXMgc2hvdWxkIGJlIGRvY3VtZW50ZWRcclxuICBpZkV4Y2VsKCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCI7XHJcbiAgfVxyXG5cclxuICBpZlByZXNlbnRhdGlvbigpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBQb3dlclBvaW50XCI7XHJcbiAgfVxyXG5cclxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgIXRoaXMuaXNWaXNpYmxlKHBhZ2VOdW1iZXIpID8gMCA6IHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XHJcbiAgfVxyXG5cclxuICBpZkVkZ2UoKSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2VkZ2UnKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudE5vZGVMaXN0T2YgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdkLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWJzb2x1dGVQb3NpdGlvbihlbCkge1xyXG4gICAgbGV0IHggPSAwLCB5ID0gMDtcclxuXHJcbiAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcclxuICAgICAgeCArPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgICB5ICs9IGVsLm9mZnNldFRvcDtcclxuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcclxuICB9O1xyXG5cclxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBkb2NEaW0pIHtcclxuICAgIGlmIChwb3MgPCB2aWV3cG9ydERpbSAvIHRoaXMuc2NhbGUgLSBkb2NEaW0pIHsgLy8gdG9vIGZhciBsZWZ0L3VwP1xyXG4gICAgICBwb3MgPSB2aWV3cG9ydERpbSAvIHRoaXMuc2NhbGUgLSBkb2NEaW07XHJcbiAgICB9IGVsc2UgaWYgKHBvcyA+IDApIHsgLy8gdG9vIGZhciByaWdodC9kb3duP1xyXG4gICAgICBwb3MgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvcztcclxuICB9O1xyXG5cclxuICB1cGRhdGVMYXN0UG9zKCkge1xyXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMueDtcclxuICAgIHRoaXMubGFzdFkgPSB0aGlzLnk7XHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlKGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAvLyBXZSByZXN0cmljdCB0byB0aGUgbWluIG9mIHRoZSB2aWV3cG9ydCB3aWR0aC9oZWlnaHQgb3IgY3VycmVudCB3aWR0aC9oZWlnaHQgYXMgdGhlXHJcbiAgICAvLyBjdXJyZW50IHdpZHRoL2hlaWdodCBtYXkgYmUgc21hbGxlciB0aGFuIHRoZSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcclxuICAgIGNvbnN0IG5ld1ggPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFggKyBkZWx0YVggLyB0aGlzLnNjYWxlLFxyXG4gICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcclxuICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAvLyBUT0RPOiB2YWx1ZSBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IGNoYW5nZXMgdG8gcG9zaXRpdmUgdG8gdGFrZSBhbnkgZWZmZWN0XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gLU1hdGguY2VpbChuZXdYICogdGhpcy5zY2FsZSk7XHJcblxyXG4gICAgY29uc3QgbmV3WSA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WSArIGRlbHRhWSAvIHRoaXMuc2NhbGUsXHJcbiAgICAgIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSwgdGhpcy5kb2NIZWlnaHQpO1xyXG4gICAgdGhpcy55ID0gbmV3WTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCA9IC1NYXRoLmNlaWwobmV3WSAqIHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIHRoaXMuZG9jLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgdGhpcy5zY2FsZSArICcpJztcclxuICB9O1xyXG5cclxuICBzdGFydFpvb20oc2NhbGVCeSkge1xyXG4gICAgdGhpcy5zY2FsZSA9IHRoaXMubGFzdFNjYWxlICogc2NhbGVCeTtcclxuXHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0ICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAvLyBBZGp1c3QgbWFyZ2lucyB0byBtYWtlIHN1cmUgdGhhdCB3ZSBhcmVuJ3Qgb3V0IG9mIGJvdW5kc1xyXG4gICAgdGhpcy50cmFuc2xhdGUoMCwgMCk7XHJcbiAgfTtcclxuXHJcbiAgcmF3Q2VudGVyKCRldmVudCkge1xyXG4gICAgY29uc3QgcG9zID0gdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBXZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZSBzY3JvbGwgcG9zaXRpb25cclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICBjb25zdCB6b29tWCA9IC10aGlzLnggKyAoJGV2ZW50LmNlbnRlci54IC0gcG9zLnggKyBzY3JvbGxMZWZ0KSAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCB6b29tWSA9IC10aGlzLnkgKyAoJGV2ZW50LmNlbnRlci55IC0gcG9zLnkgKyBzY3JvbGxUb3ApIC8gdGhpcy5zY2FsZTtcclxuXHJcbiAgICByZXR1cm4ge3g6IHpvb21YLCB5OiB6b29tWX07XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlTGFzdFNjYWxlKCkge1xyXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gIH07XHJcblxyXG4gIHpvb21Bcm91bmQoc2NhbGVCeSwgcmF3Wm9vbVgsIHJhd1pvb21ZLCBkb05vdFVwZGF0ZUxhc3QpIHtcclxuICAgIC8vIFpvb21cclxuICAgIHRoaXMuc3RhcnRab29tKHNjYWxlQnkpO1xyXG5cclxuICAgIC8vIE5ldyByYXcgY2VudGVyIG9mIHZpZXdwb3J0XHJcbiAgICBjb25zdCByYXdDZW50ZXJYID0gLXRoaXMueCArIE1hdGgubWluKHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy5jdXJXaWR0aCkgLyAyIC8gdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IHJhd0NlbnRlclkgPSAtdGhpcy55ICsgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpIC8gMiAvIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gRGVsdGFcclxuICAgIGNvbnN0IGRlbHRhWCA9IChyYXdDZW50ZXJYIC0gcmF3Wm9vbVgpICogdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IGRlbHRhWSA9IChyYXdDZW50ZXJZIC0gcmF3Wm9vbVkpICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgYmFjayB0byB6b29tIGNlbnRlclxyXG4gICAgdGhpcy50cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpO1xyXG5cclxuICAgIGlmICghZG9Ob3RVcGRhdGVMYXN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uUGluY2goJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5waW5jaENlbnRlciA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnBpbmNoQ2VudGVyID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMucGluY2hDZW50ZXIueCAqIHRoaXMuc2NhbGUgLSAoLXRoaXMueCAqIHRoaXMuc2NhbGUgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpIC8gMik7XHJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB0aGlzLnBpbmNoQ2VudGVyLnkgKiB0aGlzLnNjYWxlIC0gKC10aGlzLnkgKiB0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpIC8gMik7XHJcbiAgICAgIHRoaXMucGluY2hDZW50ZXJPZmZzZXQgPSB7eDogb2Zmc2V0WCwgeTogb2Zmc2V0WX07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnNjYWxlICogJGV2ZW50LnNjYWxlO1xyXG5cclxuICAgIGNvbnN0IHpvb21YID0gdGhpcy5waW5jaENlbnRlci54ICogbmV3U2NhbGUgLSB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0Lng7XHJcbiAgICBjb25zdCB6b29tWSA9IHRoaXMucGluY2hDZW50ZXIueSAqIG5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC55O1xyXG4gICAgY29uc3Qgem9vbUNlbnRlciA9IHt4OiB6b29tWCAvIG5ld1NjYWxlLCB5OiB6b29tWSAvIG5ld1NjYWxlfTtcclxuXHJcbiAgICB0aGlzLnpvb21Bcm91bmQoJGV2ZW50LnNjYWxlLCB6b29tQ2VudGVyLngsIHpvb21DZW50ZXIueSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvblBpbmNoRW5kKCRldmVudCkge1xyXG4gICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcclxuICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgdGhpcy5waW5jaENlbnRlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvblBhbigkZXZlbnQpIHtcclxuICAgIC8vIFRPRE86IGxvb2tzIGxpa2UgbmF0aXZlIHBhbiB3b3JrcyBiZXR0ZXJcclxuICAgIC8vIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgIC8vICAgdGhpcy50cmFuc2xhdGUoJGV2ZW50LmRlbHRhWCwgJGV2ZW50LmRlbHRhWSk7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLm9ucGFuLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uUGFuRW5kKCRldmVudCkge1xyXG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgLy8gICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG9uRG91YmxlVGFwKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgICBpZiAoJGV2ZW50LnRhcENvdW50ID09PSAyKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHRoaXMucmF3Q2VudGVyKCRldmVudCk7XHJcbiAgICAgICAgdGhpcy56b29tQXJvdW5kKDIsIGMueCwgYy55LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZShwYWdlTnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKSB7XHJcbiAgICAgIHJldHVybiBwYWdlTnVtYmVyID09PSB0aGlzLnNlbGVjdGVkUGFnZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
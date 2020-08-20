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
        this._navigateService.navigate.subscribe(((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("document.component ngAfterViewInit");
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFaEQsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFpQ0UsMkJBQXNCLFdBQW9DLEVBQ3RDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUhyRCxpQkFTQztRQVRxQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQXpCM0MsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLElBQUksQ0FBQztR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aUNBQWE7O0lBQ2IsaUNBQWE7O0lBRWIscUNBQWdCOztJQUNoQixzQ0FBaUI7O0lBQ2pCLDBDQUFxQjs7SUFDckIsMkNBQXNCOztJQUN0QixrQ0FBYTs7SUFDYixzQ0FBaUI7O0lBQ2pCLHNDQUFpQjs7SUFDakIsZ0NBQVc7O0lBQ1gsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1YsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1Ysd0NBQW1COztJQUNuQiw4Q0FBeUI7O0lBQ3pCLHFDQUFhOztJQUNiLHNDQUFjOztJQUNkLHNDQUFtQjs7Ozs7SUFFUCx3Q0FBOEM7Ozs7O0lBQzlDLHlDQUFpQzs7Ozs7SUFDakMsMkNBQXFDOzs7OztJQUNyQyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIG9ucGFuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgd2FpdCA9IGZhbHNlO1xyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLCkge1xyXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnpvb20gPSB2YWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IHBhbnpvb20gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgKHBhbnpvb20gYXMgYW55KS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgIC8vIFRPRE86IHRoaXMgaW50ZXJzZWN0cyB3aXRoIHpvb21pbmcgYnkgem9vbSBkaXJlY3RpdmUsIGJ1dCBzdGlsbCBuZWVkZWRcclxuICAgIC8vIGZvciBmbHVzaCBwcmV2aW91cyBzZXR0aW5ncyBiZWZvcmUgb3BlbmluZyBhbm90aGVyIGZpbGVcclxuICAgIC8vdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSgxMDApO1xyXG4gICAgLy90aGlzLnNjYWxlID0gMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKHZhbHVlID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJkb2N1bWVudC5jb21wb25lbnQgbmdBZnRlclZpZXdJbml0XCIpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmRvY1dpZHRoID0gdGhpcy5kb2MuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLmRvY0hlaWdodCA9IHRoaXMuZG9jLmNsaWVudEhlaWdodDtcclxuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIC8vIEZvciBjYXNlcyB3aGVyZSB3ZSBhbHJlYWR5IGhhdmUgem9vbSBkZWZpbmVkIHdlIHNob3VsZCBpbmNsdWRlIGl0XHJcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMudmlld3BvcnRXaWR0aCAvIHRoaXMuZG9jV2lkdGgpICogdGhpcy5fem9vbVNlcnZpY2Uuem9vbSAvIDEwMDtcclxuXHJcbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiB0aGlzIHRlbXBvcmFyeSBjcnV0Y2ggZm9yIEV4Y2VsIGZpbGVzIHNob3VsZCBiZSBkb2N1bWVudGVkXHJcbiAgaWZFeGNlbCgpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiO1xyXG4gIH1cclxuXHJcbiAgaWZQcmVzZW50YXRpb24oKSB7XHJcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZlByZXNlbnRhdGlvbigpICYmICF0aGlzLmlzVmlzaWJsZShwYWdlTnVtYmVyKSA/IDAgOiB2YWx1ZSArICh0aGlzLm1vZGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdCA6ICdweCcpO1xyXG4gIH1cclxuXHJcbiAgaWZFZGdlKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic29sdXRlUG9zaXRpb24oZWwpIHtcclxuICAgIGxldCB4ID0gMCwgeSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKGVsICE9PSBudWxsKSB7XHJcbiAgICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgeSArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7eDogeCwgeTogeX07XHJcbiAgfTtcclxuXHJcbiAgcmVzdHJpY3RSYXdQb3MocG9zLCB2aWV3cG9ydERpbSwgZG9jRGltKSB7XHJcbiAgICBpZiAocG9zIDwgdmlld3BvcnREaW0gLyB0aGlzLnNjYWxlIC0gZG9jRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cclxuICAgICAgcG9zID0gdmlld3BvcnREaW0gLyB0aGlzLnNjYWxlIC0gZG9jRGltO1xyXG4gICAgfSBlbHNlIGlmIChwb3MgPiAwKSB7IC8vIHRvbyBmYXIgcmlnaHQvZG93bj9cclxuICAgICAgcG9zID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3M7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlTGFzdFBvcygpIHtcclxuICAgIHRoaXMubGFzdFggPSB0aGlzLng7XHJcbiAgICB0aGlzLmxhc3RZID0gdGhpcy55O1xyXG4gIH07XHJcblxyXG4gIHRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgLy8gV2UgcmVzdHJpY3QgdG8gdGhlIG1pbiBvZiB0aGUgdmlld3BvcnQgd2lkdGgvaGVpZ2h0IG9yIGN1cnJlbnQgd2lkdGgvaGVpZ2h0IGFzIHRoZVxyXG4gICAgLy8gY3VycmVudCB3aWR0aC9oZWlnaHQgbWF5IGJlIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XHJcbiAgICBjb25zdCBuZXdYID0gdGhpcy5yZXN0cmljdFJhd1Bvcyh0aGlzLmxhc3RYICsgZGVsdGFYIC8gdGhpcy5zY2FsZSxcclxuICAgICAgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSwgdGhpcy5kb2NXaWR0aCk7XHJcbiAgICB0aGlzLnggPSBuZXdYO1xyXG4gICAgLy8gVE9ETzogdmFsdWUgaGVyZSBhbmQgaW4gdGhlIHNpbWlsYXIgbGluZSBiZWxvdyBjaGFuZ2VzIHRvIHBvc2l0aXZlIHRvIHRha2UgYW55IGVmZmVjdFxyXG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IC1NYXRoLmNlaWwobmV3WCAqIHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1kgPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFkgKyBkZWx0YVkgLyB0aGlzLnNjYWxlLFxyXG4gICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCksIHRoaXMuZG9jSGVpZ2h0KTtcclxuICAgIHRoaXMueSA9IG5ld1k7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAtTWF0aC5jZWlsKG5ld1kgKiB0aGlzLnNjYWxlKTtcclxuXHJcbiAgICB0aGlzLmRvYy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKSc7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRab29tKHNjYWxlQnkpIHtcclxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLmxhc3RTY2FsZSAqIHNjYWxlQnk7XHJcblxyXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcclxuICAgIHRoaXMudHJhbnNsYXRlKDAsIDApO1xyXG4gIH07XHJcblxyXG4gIHJhd0NlbnRlcigkZXZlbnQpIHtcclxuICAgIGNvbnN0IHBvcyA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbih0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gV2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgY29uc3Qgem9vbVggPSAtdGhpcy54ICsgKCRldmVudC5jZW50ZXIueCAtIHBvcy54ICsgc2Nyb2xsTGVmdCkgLyB0aGlzLnNjYWxlO1xyXG4gICAgY29uc3Qgem9vbVkgPSAtdGhpcy55ICsgKCRldmVudC5jZW50ZXIueSAtIHBvcy55ICsgc2Nyb2xsVG9wKSAvIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgcmV0dXJuIHt4OiB6b29tWCwgeTogem9vbVl9O1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUxhc3RTY2FsZSgpIHtcclxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICB9O1xyXG5cclxuICB6b29tQXJvdW5kKHNjYWxlQnksIHJhd1pvb21YLCByYXdab29tWSwgZG9Ob3RVcGRhdGVMYXN0KSB7XHJcbiAgICAvLyBab29tXHJcbiAgICB0aGlzLnN0YXJ0Wm9vbShzY2FsZUJ5KTtcclxuXHJcbiAgICAvLyBOZXcgcmF3IGNlbnRlciBvZiB2aWV3cG9ydFxyXG4gICAgY29uc3QgcmF3Q2VudGVyWCA9IC10aGlzLnggKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpIC8gMiAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSAvIDIgLyB0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIERlbHRhXHJcbiAgICBjb25zdCBkZWx0YVggPSAocmF3Q2VudGVyWCAtIHJhd1pvb21YKSAqIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBkZWx0YVkgPSAocmF3Q2VudGVyWSAtIHJhd1pvb21ZKSAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gVHJhbnNsYXRlIGJhY2sgdG8gem9vbSBjZW50ZXJcclxuICAgIHRoaXMudHJhbnNsYXRlKGRlbHRhWCwgZGVsdGFZKTtcclxuXHJcbiAgICBpZiAoIWRvTm90VXBkYXRlTGFzdCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxhc3RTY2FsZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvblBpbmNoKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMucGluY2hDZW50ZXIgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5waW5jaENlbnRlciA9IHRoaXMucmF3Q2VudGVyKCRldmVudCk7XHJcbiAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLnBpbmNoQ2VudGVyLnggKiB0aGlzLnNjYWxlIC0gKC10aGlzLnggKiB0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSAvIDIpO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gdGhpcy5waW5jaENlbnRlci55ICogdGhpcy5zY2FsZSAtICgtdGhpcy55ICogdGhpcy5zY2FsZSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSAvIDIpO1xyXG4gICAgICB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0ID0ge3g6IG9mZnNldFgsIHk6IG9mZnNldFl9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5zY2FsZSAqICRldmVudC5zY2FsZTtcclxuXHJcbiAgICBjb25zdCB6b29tWCA9IHRoaXMucGluY2hDZW50ZXIueCAqIG5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC54O1xyXG4gICAgY29uc3Qgem9vbVkgPSB0aGlzLnBpbmNoQ2VudGVyLnkgKiBuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueTtcclxuICAgIGNvbnN0IHpvb21DZW50ZXIgPSB7eDogem9vbVggLyBuZXdTY2FsZSwgeTogem9vbVkgLyBuZXdTY2FsZX07XHJcblxyXG4gICAgdGhpcy56b29tQXJvdW5kKCRldmVudC5zY2FsZSwgem9vbUNlbnRlci54LCB6b29tQ2VudGVyLnksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25QaW5jaEVuZCgkZXZlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIHRoaXMucGluY2hDZW50ZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgb25QYW4oJGV2ZW50KSB7XHJcbiAgICAvLyBUT0RPOiBsb29rcyBsaWtlIG5hdGl2ZSBwYW4gd29ya3MgYmV0dGVyXHJcbiAgICAvLyBpZiAoIXRoaXMuaXNEZXNrdG9wKSB7XHJcbiAgICAvLyAgIHRoaXMudHJhbnNsYXRlKCRldmVudC5kZWx0YVgsICRldmVudC5kZWx0YVkpO1xyXG4gICAgLy8gfVxyXG4gICAgdGhpcy5vbnBhbi5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblBhbkVuZCgkZXZlbnQpIHtcclxuICAgIC8vIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgIC8vICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBvbkRvdWJsZVRhcCgkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgaWYgKCRldmVudC50YXBDb3VudCA9PT0gMikge1xyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLnJhd0NlbnRlcigkZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuem9vbUFyb3VuZCgyLCBjLngsIGMueSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUocGFnZU51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSkge1xyXG4gICAgICByZXR1cm4gcGFnZU51bWJlciA9PT0gdGhpcy5zZWxlY3RlZFBhZ2UgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
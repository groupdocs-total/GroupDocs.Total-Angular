/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height)\"\n         [style.width]=\"getDimensionWithUnit(page.width)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}.panzoom.mobile{overflow:scroll}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7SUFFM0IsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUErQkUsMkJBQW9CLFdBQW9DLEVBQ3BDLFlBQXlCLEVBQ3pCLGNBQTZCO1FBRmpELGlCQVNDO1FBVG1CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQXZCakQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxNQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ04sVUFBSyxHQUFHLENB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akIsZ0NBQVc7O0lBQ1gsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1YsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1Ysd0NBQW1COztJQUNuQiw4Q0FBeUI7O0lBQ3pCLHFDQUFhOztJQUNiLHNDQUFjOztJQUNkLHNDQUFtQjs7Ozs7SUFFUCx3Q0FBNEM7Ozs7O0lBQzVDLHlDQUFpQzs7Ozs7SUFDakMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpbGVEZXNjcmlwdGlvbiwgRmlsZVV0aWx9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gJy4uL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHdhaXQgPSBmYWxzZTtcbiAgem9vbTogbnVtYmVyO1xuXG4gIGRvY1dpZHRoID0gbnVsbDtcbiAgZG9jSGVpZ2h0ID0gbnVsbDtcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XG4gIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcbiAgc2NhbGUgPSBudWxsO1xuICBsYXN0U2NhbGUgPSBudWxsO1xuICBjb250YWluZXIgPSBudWxsO1xuICBkb2MgPSBudWxsO1xuICB4ID0gMDtcbiAgbGFzdFggPSAwO1xuICB5ID0gMDtcbiAgbGFzdFkgPSAwO1xuICBwaW5jaENlbnRlciA9IG51bGw7XG4gIHBpbmNoQ2VudGVyT2Zmc2V0ID0gbnVsbDtcbiAgY3VyV2lkdGggPSAwO1xuICBjdXJIZWlnaHQgPSAwO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgcGFuem9vbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgKHBhbnpvb20gYXMgYW55KS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAvLyBUT0RPOiB0aGlzIGludGVyc2VjdHMgd2l0aCB6b29taW5nIGJ5IHpvb20gZGlyZWN0aXZlLCBidXQgc3RpbGwgbmVlZGVkXG4gICAgLy8gZm9yIGZsdXNoIHByZXZpb3VzIHNldHRpbmdzIGJlZm9yZSBvcGVuaW5nIGFub3RoZXIgZmlsZVxuICAgIC8vdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSgxMDApO1xuICAgIC8vdGhpcy5zY2FsZSA9IDE7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAuZ2QtZG9jdW1lbnQgYXMgYSBjb250YWluZXJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuZG9jV2lkdGggPSB0aGlzLmRvYy5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmRvY0hlaWdodCA9IHRoaXMuZG9jLmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnZpZXdwb3J0V2lkdGggPSB0aGlzLmRvYy5vZmZzZXRXaWR0aDtcblxuICAgIC8vIEZvciBjYXNlcyB3aGVyZSB3ZSBhbHJlYWR5IGhhdmUgem9vbSBkZWZpbmVkIHdlIHNob3VsZCBpbmNsdWRlIGl0XG4gICAgdGhpcy5zY2FsZSA9ICh0aGlzLnZpZXdwb3J0V2lkdGggLyB0aGlzLmRvY1dpZHRoKSAqIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gLyAxMDA7XG5cbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCAqIHRoaXMuc2NhbGU7XG5cbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIFRPRE86IHRoaXMgdGVtcG9yYXJ5IGNydXRjaCBmb3IgRXhjZWwgZmlsZXMgc2hvdWxkIGJlIGRvY3VtZW50ZWRcbiAgaWZFeGNlbCgpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgRXhjZWxcIjtcbiAgfVxuXG4gIGdldERpbWVuc2lvbldpdGhVbml0KHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50Tm9kZUxpc3RPZiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuICB9XG5cbiAgYWJzb2x1dGVQb3NpdGlvbihlbCkge1xuICAgIGxldCB4ID0gMCwgeSA9IDA7XG5cbiAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcbiAgICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgIHkgKz0gZWwub2Zmc2V0VG9wO1xuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcbiAgfTtcblxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBkb2NEaW0pIHtcbiAgICBpZiAocG9zIDwgdmlld3BvcnREaW0gLyB0aGlzLnNjYWxlIC0gZG9jRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cbiAgICAgIHBvcyA9IHZpZXdwb3J0RGltIC8gdGhpcy5zY2FsZSAtIGRvY0RpbTtcbiAgICB9IGVsc2UgaWYgKHBvcyA+IDApIHsgLy8gdG9vIGZhciByaWdodC9kb3duP1xuICAgICAgcG9zID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbiAgfTtcblxuICB1cGRhdGVMYXN0UG9zKCkge1xuICAgIHRoaXMubGFzdFggPSB0aGlzLng7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMueTtcbiAgfTtcblxuICB0cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAvLyBXZSByZXN0cmljdCB0byB0aGUgbWluIG9mIHRoZSB2aWV3cG9ydCB3aWR0aC9oZWlnaHQgb3IgY3VycmVudCB3aWR0aC9oZWlnaHQgYXMgdGhlXG4gICAgLy8gY3VycmVudCB3aWR0aC9oZWlnaHQgbWF5IGJlIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gICAgY29uc3QgbmV3WCA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WCArIGRlbHRhWCAvIHRoaXMuc2NhbGUsXG4gICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcbiAgICB0aGlzLnggPSBuZXdYO1xuICAgIC8vIFRPRE86IHZhbHVlIGhlcmUgYW5kIGluIHRoZSBzaW1pbGFyIGxpbmUgYmVsb3cgY2hhbmdlcyB0byBwb3NpdGl2ZSB0byB0YWtlIGFueSBlZmZlY3RcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gLU1hdGguY2VpbChuZXdYICogdGhpcy5zY2FsZSk7XG5cbiAgICBjb25zdCBuZXdZID0gdGhpcy5yZXN0cmljdFJhd1Bvcyh0aGlzLmxhc3RZICsgZGVsdGFZIC8gdGhpcy5zY2FsZSxcbiAgICAgIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSwgdGhpcy5kb2NIZWlnaHQpO1xuICAgIHRoaXMueSA9IG5ld1k7XG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wID0gLU1hdGguY2VpbChuZXdZICogdGhpcy5zY2FsZSk7XG5cbiAgICB0aGlzLmRvYy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKSc7XG4gIH07XG5cbiAgc3RhcnRab29tKHNjYWxlQnkpIHtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5sYXN0U2NhbGUgKiBzY2FsZUJ5O1xuXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQgKiB0aGlzLnNjYWxlO1xuXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcbiAgICB0aGlzLnRyYW5zbGF0ZSgwLCAwKTtcbiAgfTtcblxuICByYXdDZW50ZXIoJGV2ZW50KSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMuY29udGFpbmVyKTtcblxuICAgIC8vIFdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cbiAgICBjb25zdCB6b29tWCA9IC10aGlzLnggKyAoJGV2ZW50LmNlbnRlci54IC0gcG9zLnggKyBzY3JvbGxMZWZ0KSAvIHRoaXMuc2NhbGU7XG4gICAgY29uc3Qgem9vbVkgPSAtdGhpcy55ICsgKCRldmVudC5jZW50ZXIueSAtIHBvcy55ICsgc2Nyb2xsVG9wKSAvIHRoaXMuc2NhbGU7XG5cbiAgICByZXR1cm4ge3g6IHpvb21YLCB5OiB6b29tWX07XG4gIH07XG5cbiAgdXBkYXRlTGFzdFNjYWxlKCkge1xuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcbiAgfTtcblxuICB6b29tQXJvdW5kKHNjYWxlQnksIHJhd1pvb21YLCByYXdab29tWSwgZG9Ob3RVcGRhdGVMYXN0KSB7XG4gICAgLy8gWm9vbVxuICAgIHRoaXMuc3RhcnRab29tKHNjYWxlQnkpO1xuXG4gICAgLy8gTmV3IHJhdyBjZW50ZXIgb2Ygdmlld3BvcnRcbiAgICBjb25zdCByYXdDZW50ZXJYID0gLXRoaXMueCArIE1hdGgubWluKHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy5jdXJXaWR0aCkgLyAyIC8gdGhpcy5zY2FsZTtcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSAvIDIgLyB0aGlzLnNjYWxlO1xuXG4gICAgLy8gRGVsdGFcbiAgICBjb25zdCBkZWx0YVggPSAocmF3Q2VudGVyWCAtIHJhd1pvb21YKSAqIHRoaXMuc2NhbGU7XG4gICAgY29uc3QgZGVsdGFZID0gKHJhd0NlbnRlclkgLSByYXdab29tWSkgKiB0aGlzLnNjYWxlO1xuXG4gICAgLy8gVHJhbnNsYXRlIGJhY2sgdG8gem9vbSBjZW50ZXJcbiAgICB0aGlzLnRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSk7XG5cbiAgICBpZiAoIWRvTm90VXBkYXRlTGFzdCkge1xuICAgICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcbiAgICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xuICAgIH1cbiAgfTtcblxuICBvblBpbmNoKCRldmVudCkge1xuICAgIGlmICh0aGlzLnBpbmNoQ2VudGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnBpbmNoQ2VudGVyID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcbiAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLnBpbmNoQ2VudGVyLnggKiB0aGlzLnNjYWxlIC0gKC10aGlzLnggKiB0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSAvIDIpO1xuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMucGluY2hDZW50ZXIueSAqIHRoaXMuc2NhbGUgLSAoLXRoaXMueSAqIHRoaXMuc2NhbGUgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCkgLyAyKTtcbiAgICAgIHRoaXMucGluY2hDZW50ZXJPZmZzZXQgPSB7eDogb2Zmc2V0WCwgeTogb2Zmc2V0WX07XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnNjYWxlICogJGV2ZW50LnNjYWxlO1xuXG4gICAgY29uc3Qgem9vbVggPSB0aGlzLnBpbmNoQ2VudGVyLnggKiBuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueDtcbiAgICBjb25zdCB6b29tWSA9IHRoaXMucGluY2hDZW50ZXIueSAqIG5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC55O1xuICAgIGNvbnN0IHpvb21DZW50ZXIgPSB7eDogem9vbVggLyBuZXdTY2FsZSwgeTogem9vbVkgLyBuZXdTY2FsZX07XG5cbiAgICB0aGlzLnpvb21Bcm91bmQoJGV2ZW50LnNjYWxlLCB6b29tQ2VudGVyLngsIHpvb21DZW50ZXIueSwgdHJ1ZSk7XG4gIH1cblxuICBvblBpbmNoRW5kKCRldmVudCkge1xuICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XG4gICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XG4gICAgdGhpcy5waW5jaENlbnRlciA9IG51bGw7XG4gIH1cblxuICBvblBhbigkZXZlbnQpIHtcbiAgICAvLyBUT0RPOiBsb29rcyBsaWtlIG5hdGl2ZSBwYW4gd29ya3MgYmV0dGVyXG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgIC8vICAgdGhpcy50cmFuc2xhdGUoJGV2ZW50LmRlbHRhWCwgJGV2ZW50LmRlbHRhWSk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25QYW5FbmQoJGV2ZW50KSB7XG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgIC8vICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25Eb3VibGVUYXAoJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgICAgaWYgKCRldmVudC50YXBDb3VudCA9PT0gMikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcbiAgICAgICAgdGhpcy56b29tQXJvdW5kKDIsIGMueCwgYy55LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
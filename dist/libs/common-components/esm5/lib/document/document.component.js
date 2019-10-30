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
import { WindowService } from '../window.service';
import { RotationService } from '../rotation.service';
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService, _windowService, _rotationServcie) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._rotationServcie = _rotationServcie;
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
        console.log("pinch");
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
        console.log("pinchEnd");
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
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onRotateStart = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.initialRotation = $event.rotation;
        console.log("rotateStart: " + $event.rotation + ' ' + $event.angle);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DocumentComponent.prototype.onRotateEnd = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        console.log("rotateEnd: " + $event.rotation + ' ' + $event.angle);
        if ($event.rotation > 0 && this.initialRotation > 0) {
            if ($event.rotation > this.initialRotation && ($event.rotation - this.initialRotation > 45)) {
                this._rotationServcie.setRotationAngle(90);
            }
            else if ($event.rotation < this.initialRotation && (this.initialRotation - $event.rotation > 45)) {
                this._rotationServcie.setRotationAngle(-90);
            }
        }
        // case with negative values
        else {
            if (this.initialRotation > $event.rotation && ($event.rotation - this.initialRotation > 45)) {
                this._rotationServcie.setRotationAngle(-90);
            }
            else if (this.initialRotation < $event.rotation && (this.initialRotation - $event.rotation > 45)) {
                this._rotationServcie.setRotationAngle(90);
            }
        }
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \r\n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\" \r\n  (rotatestart)=\"onRotateStart($event)\" (rotateend)=\"onRotateEnd($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}.panzoom.mobile{overflow:scroll}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: RotationService }
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
    /** @type {?} */
    DocumentComponent.prototype.initialRotation;
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
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._rotationServcie;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUNoQixPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBZ0NFLDJCQUFvQixXQUFvQyxFQUNwQyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBVUM7UUFWbUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUF6QnJELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIs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QUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qixta0NBQXdDOztpQkFFekM7Ozs7Z0JBakJDLFVBQVU7Z0JBTUosV0FBVztnQkFJVixhQUFhO2dCQUNiLGVBQWU7Ozt1QkFTckIsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7O0lBd1BSLHdCQUFDO0NBQUEsQUFqUUQsSUFpUUM7U0E1UFksaUJBQWlCOzs7SUFFNUIsaUNBQXVCOztJQUN2Qiw2Q0FBa0M7O0lBQ2xDLGlDQUErQjs7SUFDL0IsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBRWIscUNBQWdCOztJQUNoQixzQ0FBaUI7O0lBQ2pCLDBDQUFxQjs7SUFDckIsMkNBQXNCOztJQUN0QixrQ0FBYTs7SUFDYixzQ0FBaUI7O0lBQ2pCLHNDQUFpQjs7SUFDakIsZ0NBQVc7O0lBQ1gsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1YsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1Ysd0NBQW1COztJQUNuQiw4Q0FBeUI7O0lBQ3pCLHFDQUFhOztJQUNiLHNDQUFjOztJQUNkLHNDQUFtQjs7SUFDbkIsNENBQXFCOzs7OztJQUVULHdDQUE0Qzs7Ozs7SUFDNUMseUNBQWlDOzs7OztJQUNqQywyQ0FBcUM7Ozs7O0lBQ3JDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpbGVEZXNjcmlwdGlvbiwgRmlsZVV0aWx9IGZyb20gXCIuLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4uL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uL3dpbmRvdy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm90YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vcm90YXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgd2FpdCA9IGZhbHNlO1xyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG4gIGluaXRpYWxSb3RhdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3RhdGlvblNlcnZjaWU6IFJvdGF0aW9uU2VydmljZSkge1xyXG5cclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBwYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIChwYW56b29tIGFzIGFueSkuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGludGVyc2VjdHMgd2l0aCB6b29taW5nIGJ5IHpvb20gZGlyZWN0aXZlLCBidXQgc3RpbGwgbmVlZGVkXHJcbiAgICAvLyBmb3IgZmx1c2ggcHJldmlvdXMgc2V0dGluZ3MgYmVmb3JlIG9wZW5pbmcgYW5vdGhlciBmaWxlXHJcbiAgICAvL3RoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oMTAwKTtcclxuICAgIC8vdGhpcy5zY2FsZSA9IDE7XHJcbiAgfVxyXG4gICAgXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmRvY1dpZHRoID0gdGhpcy5kb2MuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLmRvY0hlaWdodCA9IHRoaXMuZG9jLmNsaWVudEhlaWdodDtcclxuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIC8vIEZvciBjYXNlcyB3aGVyZSB3ZSBhbHJlYWR5IGhhdmUgem9vbSBkZWZpbmVkIHdlIHNob3VsZCBpbmNsdWRlIGl0XHJcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMudmlld3BvcnRXaWR0aC90aGlzLmRvY1dpZHRoKSAqIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20vMTAwO1xyXG4gICAgXHJcbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGgqdGhpcy5zY2FsZTtcclxuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQqdGhpcy5zY2FsZTtcclxuXHJcbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHRoaXMgdGVtcG9yYXJ5IGNydXRjaCBmb3IgRXhjZWwgZmlsZXMgc2hvdWxkIGJlIGRvY3VtZW50ZWRcclxuICBpZkV4Y2VsKCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCI7XHJcbiAgfVxyXG5cclxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgKyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic29sdXRlUG9zaXRpb24oZWwpIHtcclxuICAgIGxldCB4ID0gMCwgeSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKGVsICE9PSBudWxsKSB7XHJcbiAgICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgICAgeSArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcclxuICB9O1xyXG5cclxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBkb2NEaW0pIHtcclxuICAgIGlmIChwb3MgPCB2aWV3cG9ydERpbS90aGlzLnNjYWxlIC0gZG9jRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cclxuICAgICAgcG9zID0gdmlld3BvcnREaW0vdGhpcy5zY2FsZSAtIGRvY0RpbTtcclxuICAgIH0gZWxzZSBpZiAocG9zID4gMCkgeyAvLyB0b28gZmFyIHJpZ2h0L2Rvd24/XHJcbiAgICAgIHBvcyA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUxhc3RQb3MoKSB7XHJcbiAgICB0aGlzLmxhc3RYID0gdGhpcy54O1xyXG4gICAgdGhpcy5sYXN0WSA9IHRoaXMueTtcclxuICB9O1xyXG5cclxuICB0cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgIC8vIFdlIHJlc3RyaWN0IHRvIHRoZSBtaW4gb2YgdGhlIHZpZXdwb3J0IHdpZHRoL2hlaWdodCBvciBjdXJyZW50IHdpZHRoL2hlaWdodCBhcyB0aGVcclxuICAgIC8vIGN1cnJlbnQgd2lkdGgvaGVpZ2h0IG1heSBiZSBzbWFsbGVyIHRoYW4gdGhlIHZpZXdwb3J0IHdpZHRoL2hlaWdodFxyXG4gICAgY29uc3QgbmV3WCA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WCArIGRlbHRhWC90aGlzLnNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcclxuICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAvLyBUT0RPOiB2YWx1ZSBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IGNoYW5nZXMgdG8gcG9zaXRpdmUgdG8gdGFrZSBhbnkgZWZmZWN0XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gLU1hdGguY2VpbChuZXdYKnRoaXMuc2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1kgPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFkgKyBkZWx0YVkvdGhpcy5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpLCB0aGlzLmRvY0hlaWdodCk7XHJcbiAgICB0aGlzLnkgPSBuZXdZO1xyXG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wID0gLU1hdGguY2VpbChuZXdZKnRoaXMuc2NhbGUpO1xyXG4gICAgXHJcbiAgICB0aGlzLmRvYy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKSc7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRab29tKHNjYWxlQnkpIHtcclxuICAgIHRoaXMuc2NhbGUgPSB0aGlzLmxhc3RTY2FsZSpzY2FsZUJ5O1xyXG5cclxuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoKnRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0KnRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcclxuICAgIHRoaXMudHJhbnNsYXRlKDAsIDApO1xyXG4gIH07XHJcblxyXG4gIHJhd0NlbnRlcigkZXZlbnQpIHtcclxuICAgIGNvbnN0IHBvcyA9IHRoaXMuYWJzb2x1dGVQb3NpdGlvbih0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gV2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGUgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgY29uc3Qgem9vbVggPSAtdGhpcy54ICsgKCRldmVudC5jZW50ZXIueCAtIHBvcy54ICsgc2Nyb2xsTGVmdCkvdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IHpvb21ZID0gLXRoaXMueSArICgkZXZlbnQuY2VudGVyLnkgLSBwb3MueSArIHNjcm9sbFRvcCkvdGhpcy5zY2FsZTtcclxuXHJcbiAgICByZXR1cm4geyB4OiB6b29tWCwgeTogem9vbVkgfTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVMYXN0U2NhbGUoKSB7XHJcbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgfTtcclxuXHJcbiAgem9vbUFyb3VuZChzY2FsZUJ5LCByYXdab29tWCwgcmF3Wm9vbVksIGRvTm90VXBkYXRlTGFzdCkge1xyXG4gICAgLy8gWm9vbVxyXG4gICAgdGhpcy5zdGFydFpvb20oc2NhbGVCeSk7XHJcblxyXG4gICAgLy8gTmV3IHJhdyBjZW50ZXIgb2Ygdmlld3BvcnRcclxuICAgIGNvbnN0IHJhd0NlbnRlclggPSAtdGhpcy54ICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKS8yL3RoaXMuc2NhbGU7XHJcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KS8yL3RoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gRGVsdGFcclxuICAgIGNvbnN0IGRlbHRhWCA9IChyYXdDZW50ZXJYIC0gcmF3Wm9vbVgpKnRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCBkZWx0YVkgPSAocmF3Q2VudGVyWSAtIHJhd1pvb21ZKSp0aGlzLnNjYWxlO1xyXG5cclxuICAgIC8vIFRyYW5zbGF0ZSBiYWNrIHRvIHpvb20gY2VudGVyXHJcbiAgICB0aGlzLnRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSk7XHJcblxyXG4gICAgaWYgKCFkb05vdFVwZGF0ZUxhc3QpIHtcclxuICAgICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25QaW5jaCgkZXZlbnQpe1xyXG4gICAgY29uc29sZS5sb2coXCJwaW5jaFwiKTtcclxuICAgIGlmICh0aGlzLnBpbmNoQ2VudGVyID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucGluY2hDZW50ZXIgPSB0aGlzLnJhd0NlbnRlcigkZXZlbnQpO1xyXG4gICAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5waW5jaENlbnRlci54KnRoaXMuc2NhbGUgLSAoLXRoaXMueCp0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKS8yKTtcclxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMucGluY2hDZW50ZXIueSp0aGlzLnNjYWxlIC0gKC10aGlzLnkqdGhpcy5zY2FsZSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KS8yKTtcclxuICAgICAgdGhpcy5waW5jaENlbnRlck9mZnNldCA9IHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5zY2FsZSokZXZlbnQuc2NhbGU7XHJcblxyXG4gICAgY29uc3Qgem9vbVggPSB0aGlzLnBpbmNoQ2VudGVyLngqbmV3U2NhbGUgLSB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0Lng7XHJcbiAgICBjb25zdCB6b29tWSA9IHRoaXMucGluY2hDZW50ZXIueSpuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueTtcclxuICAgIGNvbnN0IHpvb21DZW50ZXIgPSB7IHg6IHpvb21YL25ld1NjYWxlLCB5OiB6b29tWS9uZXdTY2FsZSB9O1xyXG4gICAgXHJcbiAgICB0aGlzLnpvb21Bcm91bmQoJGV2ZW50LnNjYWxlLCB6b29tQ2VudGVyLngsIHpvb21DZW50ZXIueSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvblBpbmNoRW5kKCRldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInBpbmNoRW5kXCIpO1xyXG4gICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcclxuICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgdGhpcy5waW5jaENlbnRlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvblBhbigkZXZlbnQpe1xyXG4gICAgLy8gVE9ETzogbG9va3MgbGlrZSBuYXRpdmUgcGFuIHdvcmtzIGJldHRlclxyXG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgLy8gICB0aGlzLnRyYW5zbGF0ZSgkZXZlbnQuZGVsdGFYLCAkZXZlbnQuZGVsdGFZKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG9uUGFuRW5kKCRldmVudCl7XHJcbiAgICAvLyBpZiAoIXRoaXMuaXNEZXNrdG9wKSB7XHJcbiAgICAvLyAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgb25Eb3VibGVUYXAoJGV2ZW50KXtcclxuICAgIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgaWYgKCRldmVudC50YXBDb3VudCA9PT0gMikge1xyXG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLnJhd0NlbnRlcigkZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuem9vbUFyb3VuZCgyLCBjLngsIGMueSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJvdGF0ZVN0YXJ0KCRldmVudCl7XHJcbiAgICB0aGlzLmluaXRpYWxSb3RhdGlvbiA9ICRldmVudC5yb3RhdGlvbjtcclxuICAgIGNvbnNvbGUubG9nKFwicm90YXRlU3RhcnQ6IFwiICsgJGV2ZW50LnJvdGF0aW9uICsgJyAnICsgJGV2ZW50LmFuZ2xlKTtcclxuICB9XHJcblxyXG4gIG9uUm90YXRlRW5kKCRldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInJvdGF0ZUVuZDogXCIgKyAkZXZlbnQucm90YXRpb24gKyAnICcgKyAkZXZlbnQuYW5nbGUpO1xyXG4gICAgaWYgKCRldmVudC5yb3RhdGlvbiA+IDAgJiYgdGhpcy5pbml0aWFsUm90YXRpb24gPiAwKSB7XHJcbiAgICAgIGlmICgkZXZlbnQucm90YXRpb24gPiB0aGlzLmluaXRpYWxSb3RhdGlvbiAmJiAoJGV2ZW50LnJvdGF0aW9uIC0gdGhpcy5pbml0aWFsUm90YXRpb24gPiA0NSkpIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGlvblNlcnZjaWUuc2V0Um90YXRpb25BbmdsZSg5MCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoJGV2ZW50LnJvdGF0aW9uIDwgdGhpcy5pbml0aWFsUm90YXRpb24gJiYgKHRoaXMuaW5pdGlhbFJvdGF0aW9uIC0gJGV2ZW50LnJvdGF0aW9uID4gNDUpKSB7XHJcbiAgICAgICAgdGhpcy5fcm90YXRpb25TZXJ2Y2llLnNldFJvdGF0aW9uQW5nbGUoLTkwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2FzZSB3aXRoIG5lZ2F0aXZlIHZhbHVlc1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmluaXRpYWxSb3RhdGlvbiA+ICRldmVudC5yb3RhdGlvbiAmJiAoJGV2ZW50LnJvdGF0aW9uIC0gdGhpcy5pbml0aWFsUm90YXRpb24gPiA0NSkpIHtcclxuICAgICAgICB0aGlzLl9yb3RhdGlvblNlcnZjaWUuc2V0Um90YXRpb25BbmdsZSgtOTApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuaW5pdGlhbFJvdGF0aW9uIDwgJGV2ZW50LnJvdGF0aW9uICYmICh0aGlzLmluaXRpYWxSb3RhdGlvbiAtICRldmVudC5yb3RhdGlvbiA+IDQ1KSkge1xyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uU2VydmNpZS5zZXRSb3RhdGlvbkFuZ2xlKDkwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
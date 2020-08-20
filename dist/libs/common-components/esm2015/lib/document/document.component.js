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
const $ = jquery;
export class DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, _zoomService, _windowService, _navigateService) {
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
        (val) => {
            this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ifPresentation()) {
            this.selectedPage = 1;
        }
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
     * @return {?}
     */
    ifPresentation() {
        return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
    }
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    getDimensionWithUnit(value, pageNumber) {
        return this.ifPresentation() && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    }
    /**
     * @return {?}
     */
    ifEdge() {
        return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
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
        this.onpan.emit($event);
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
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    isVisible(pageNumber) {
        if (this.ifPresentation()) {
            return pageNumber === this.selectedPage ? true : false;
        }
        else {
            return true;
        }
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \r\n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\r\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\r\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page *ngIf=\"isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\r\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
DocumentComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }],
    selectedPage: [{ type: Input }],
    onpan: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7TUFFaEQsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQTRCNUIsWUFBc0IsV0FBb0MsRUFDdEMsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsZ0JBQWlDO1FBSC9CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUN0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBekIzQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcs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QyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBVTtRQUNsQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN4RDthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7OztZQTFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG9uQ0FBd0M7O2FBRXpDOzs7O1lBckJDLFVBQVU7WUFTSixXQUFXO1lBRVgsYUFBYTtZQUVaLGVBQWU7OzttQkFXckIsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxNQUFNOzs7O0lBSlAsaUNBQXVCOztJQUN2Qiw2Q0FBa0M7O0lBQ2xDLGlDQUErQjs7SUFDL0IseUNBQThCOztJQUM5QixrQ0FBMEM7O0lBQzFDLGlDQUFhOztJQUNiLGlDQUFhOztJQUViLHFDQUFnQjs7SUFDaEIsc0NBQWlCOztJQUNqQiwwQ0FBcUI7O0lBQ3JCLDJDQUFzQjs7SUFDdEIsa0NBQWE7O0lBQ2Isc0NBQWlCOztJQUNqQixzQ0FBaUI7O0lBQ2pCLGdDQUFXOztJQUNYLDhCQUFNOztJQUNOLGtDQUFVOztJQUNWLDhCQUFNOztJQUNOLGtDQUFVOztJQUNWLHdDQUFtQjs7SUFDbkIsOENBQXlCOztJQUN6QixxQ0FBYTs7SUFDYixzQ0FBYzs7SUFDZCxzQ0FBbUI7Ozs7O0lBRVAsd0NBQThDOzs7OztJQUM5Qyx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQzs7Ozs7SUFDckMsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGUuc2VydmljZSc7XHJcblxyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kb2N1bWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwcmVsb2FkUGFnZUNvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBvbnBhbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHdhaXQgPSBmYWxzZTtcclxuICB6b29tOiBudW1iZXI7XHJcblxyXG4gIGRvY1dpZHRoID0gbnVsbDtcclxuICBkb2NIZWlnaHQgPSBudWxsO1xyXG4gIHZpZXdwb3J0V2lkdGggPSBudWxsO1xyXG4gIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcclxuICBzY2FsZSA9IG51bGw7XHJcbiAgbGFzdFNjYWxlID0gbnVsbDtcclxuICBjb250YWluZXIgPSBudWxsO1xyXG4gIGRvYyA9IG51bGw7XHJcbiAgeCA9IDA7XHJcbiAgbGFzdFggPSAwO1xyXG4gIHkgPSAwO1xyXG4gIGxhc3RZID0gMDtcclxuICBwaW5jaENlbnRlciA9IG51bGw7XHJcbiAgcGluY2hDZW50ZXJPZmZzZXQgPSBudWxsO1xyXG4gIGN1cldpZHRoID0gMDtcclxuICBjdXJIZWlnaHQgPSAwO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSlcclxuICAgIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBwYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIChwYW56b29tIGFzIGFueSkuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAvLyBUT0RPOiB0aGlzIGludGVyc2VjdHMgd2l0aCB6b29taW5nIGJ5IHpvb20gZGlyZWN0aXZlLCBidXQgc3RpbGwgbmVlZGVkXHJcbiAgICAvLyBmb3IgZmx1c2ggcHJldmlvdXMgc2V0dGluZ3MgYmVmb3JlIG9wZW5pbmcgYW5vdGhlciBmaWxlXHJcbiAgICAvL3RoaXMuX3pvb21TZXJ2aWNlLmNoYW5nZVpvb20oMTAwKTtcclxuICAgIC8vdGhpcy5zY2FsZSA9IDE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAucGFuem9vbSBhcyBhIGRvY3VtZW50XHJcbiAgICB0aGlzLmRvYyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAuZ2QtZG9jdW1lbnQgYXMgYSBjb250YWluZXJcclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMuZG9jV2lkdGggPSB0aGlzLmRvYy5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuZG9jSGVpZ2h0ID0gdGhpcy5kb2MuY2xpZW50SGVpZ2h0O1xyXG4gICAgdGhpcy52aWV3cG9ydFdpZHRoID0gdGhpcy5kb2Mub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgLy8gRm9yIGNhc2VzIHdoZXJlIHdlIGFscmVhZHkgaGF2ZSB6b29tIGRlZmluZWQgd2Ugc2hvdWxkIGluY2x1ZGUgaXRcclxuICAgIHRoaXMuc2NhbGUgPSAodGhpcy52aWV3cG9ydFdpZHRoIC8gdGhpcy5kb2NXaWR0aCkgKiB0aGlzLl96b29tU2VydmljZS56b29tIC8gMTAwO1xyXG5cclxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgIHRoaXMudmlld3BvcnRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0ICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICBjb25zdCBoYW1tZXIgPSBuZXcgSGFtbWVyKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHRoaXMgdGVtcG9yYXJ5IGNydXRjaCBmb3IgRXhjZWwgZmlsZXMgc2hvdWxkIGJlIGRvY3VtZW50ZWRcclxuICBpZkV4Y2VsKCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCI7XHJcbiAgfVxyXG5cclxuICBpZlByZXNlbnRhdGlvbigpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBQb3dlclBvaW50XCI7XHJcbiAgfVxyXG5cclxuICBnZXREaW1lbnNpb25XaXRoVW5pdCh2YWx1ZTogbnVtYmVyLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgIXRoaXMuaXNWaXNpYmxlKHBhZ2VOdW1iZXIpID8gMCA6IHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XHJcbiAgfVxyXG5cclxuICBpZkVkZ2UoKSB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2VkZ2UnKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudE5vZGVMaXN0T2YgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdkLXdyYXBwZXInKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWJzb2x1dGVQb3NpdGlvbihlbCkge1xyXG4gICAgbGV0IHggPSAwLCB5ID0gMDtcclxuXHJcbiAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcclxuICAgICAgeCArPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgICB5ICs9IGVsLm9mZnNldFRvcDtcclxuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcclxuICB9O1xyXG5cclxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBkb2NEaW0pIHtcclxuICAgIGlmIChwb3MgPCB2aWV3cG9ydERpbSAvIHRoaXMuc2NhbGUgLSBkb2NEaW0pIHsgLy8gdG9vIGZhciBsZWZ0L3VwP1xyXG4gICAgICBwb3MgPSB2aWV3cG9ydERpbSAvIHRoaXMuc2NhbGUgLSBkb2NEaW07XHJcbiAgICB9IGVsc2UgaWYgKHBvcyA+IDApIHsgLy8gdG9vIGZhciByaWdodC9kb3duP1xyXG4gICAgICBwb3MgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvcztcclxuICB9O1xyXG5cclxuICB1cGRhdGVMYXN0UG9zKCkge1xyXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMueDtcclxuICAgIHRoaXMubGFzdFkgPSB0aGlzLnk7XHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlKGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAvLyBXZSByZXN0cmljdCB0byB0aGUgbWluIG9mIHRoZSB2aWV3cG9ydCB3aWR0aC9oZWlnaHQgb3IgY3VycmVudCB3aWR0aC9oZWlnaHQgYXMgdGhlXHJcbiAgICAvLyBjdXJyZW50IHdpZHRoL2hlaWdodCBtYXkgYmUgc21hbGxlciB0aGFuIHRoZSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcclxuICAgIGNvbnN0IG5ld1ggPSB0aGlzLnJlc3RyaWN0UmF3UG9zKHRoaXMubGFzdFggKyBkZWx0YVggLyB0aGlzLnNjYWxlLFxyXG4gICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcclxuICAgIHRoaXMueCA9IG5ld1g7XHJcbiAgICAvLyBUT0RPOiB2YWx1ZSBoZXJlIGFuZCBpbiB0aGUgc2ltaWxhciBsaW5lIGJlbG93IGNoYW5nZXMgdG8gcG9zaXRpdmUgdG8gdGFrZSBhbnkgZWZmZWN0XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gLU1hdGguY2VpbChuZXdYICogdGhpcy5zY2FsZSk7XHJcblxyXG4gICAgY29uc3QgbmV3WSA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WSArIGRlbHRhWSAvIHRoaXMuc2NhbGUsXHJcbiAgICAgIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSwgdGhpcy5kb2NIZWlnaHQpO1xyXG4gICAgdGhpcy55ID0gbmV3WTtcclxuICAgIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCA9IC1NYXRoLmNlaWwobmV3WSAqIHRoaXMuc2NhbGUpO1xyXG5cclxuICAgIHRoaXMuZG9jLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgdGhpcy5zY2FsZSArICcpJztcclxuICB9O1xyXG5cclxuICBzdGFydFpvb20oc2NhbGVCeSkge1xyXG4gICAgdGhpcy5zY2FsZSA9IHRoaXMubGFzdFNjYWxlICogc2NhbGVCeTtcclxuXHJcbiAgICB0aGlzLmN1cldpZHRoID0gdGhpcy5kb2NXaWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0ICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAvLyBBZGp1c3QgbWFyZ2lucyB0byBtYWtlIHN1cmUgdGhhdCB3ZSBhcmVuJ3Qgb3V0IG9mIGJvdW5kc1xyXG4gICAgdGhpcy50cmFuc2xhdGUoMCwgMCk7XHJcbiAgfTtcclxuXHJcbiAgcmF3Q2VudGVyKCRldmVudCkge1xyXG4gICAgY29uc3QgcG9zID0gdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBXZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZSBzY3JvbGwgcG9zaXRpb25cclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICBjb25zdCB6b29tWCA9IC10aGlzLnggKyAoJGV2ZW50LmNlbnRlci54IC0gcG9zLnggKyBzY3JvbGxMZWZ0KSAvIHRoaXMuc2NhbGU7XHJcbiAgICBjb25zdCB6b29tWSA9IC10aGlzLnkgKyAoJGV2ZW50LmNlbnRlci55IC0gcG9zLnkgKyBzY3JvbGxUb3ApIC8gdGhpcy5zY2FsZTtcclxuXHJcbiAgICByZXR1cm4ge3g6IHpvb21YLCB5OiB6b29tWX07XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlTGFzdFNjYWxlKCkge1xyXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gIH07XHJcblxyXG4gIHpvb21Bcm91bmQoc2NhbGVCeSwgcmF3Wm9vbVgsIHJhd1pvb21ZLCBkb05vdFVwZGF0ZUxhc3QpIHtcclxuICAgIC8vIFpvb21cclxuICAgIHRoaXMuc3RhcnRab29tKHNjYWxlQnkpO1xyXG5cclxuICAgIC8vIE5ldyByYXcgY2VudGVyIG9mIHZpZXdwb3J0XHJcbiAgICBjb25zdCByYXdDZW50ZXJYID0gLXRoaXMueCArIE1hdGgubWluKHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy5jdXJXaWR0aCkgLyAyIC8gdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IHJhd0NlbnRlclkgPSAtdGhpcy55ICsgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpIC8gMiAvIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgLy8gRGVsdGFcclxuICAgIGNvbnN0IGRlbHRhWCA9IChyYXdDZW50ZXJYIC0gcmF3Wm9vbVgpICogdGhpcy5zY2FsZTtcclxuICAgIGNvbnN0IGRlbHRhWSA9IChyYXdDZW50ZXJZIC0gcmF3Wm9vbVkpICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAvLyBUcmFuc2xhdGUgYmFjayB0byB6b29tIGNlbnRlclxyXG4gICAgdGhpcy50cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpO1xyXG5cclxuICAgIGlmICghZG9Ob3RVcGRhdGVMYXN0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uUGluY2goJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5waW5jaENlbnRlciA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnBpbmNoQ2VudGVyID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMucGluY2hDZW50ZXIueCAqIHRoaXMuc2NhbGUgLSAoLXRoaXMueCAqIHRoaXMuc2NhbGUgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpIC8gMik7XHJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB0aGlzLnBpbmNoQ2VudGVyLnkgKiB0aGlzLnNjYWxlIC0gKC10aGlzLnkgKiB0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydEhlaWdodCwgdGhpcy5jdXJIZWlnaHQpIC8gMik7XHJcbiAgICAgIHRoaXMucGluY2hDZW50ZXJPZmZzZXQgPSB7eDogb2Zmc2V0WCwgeTogb2Zmc2V0WX07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnNjYWxlICogJGV2ZW50LnNjYWxlO1xyXG5cclxuICAgIGNvbnN0IHpvb21YID0gdGhpcy5waW5jaENlbnRlci54ICogbmV3U2NhbGUgLSB0aGlzLnBpbmNoQ2VudGVyT2Zmc2V0Lng7XHJcbiAgICBjb25zdCB6b29tWSA9IHRoaXMucGluY2hDZW50ZXIueSAqIG5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC55O1xyXG4gICAgY29uc3Qgem9vbUNlbnRlciA9IHt4OiB6b29tWCAvIG5ld1NjYWxlLCB5OiB6b29tWSAvIG5ld1NjYWxlfTtcclxuXHJcbiAgICB0aGlzLnpvb21Bcm91bmQoJGV2ZW50LnNjYWxlLCB6b29tQ2VudGVyLngsIHpvb21DZW50ZXIueSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvblBpbmNoRW5kKCRldmVudCkge1xyXG4gICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcclxuICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xyXG4gICAgdGhpcy5waW5jaENlbnRlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvblBhbigkZXZlbnQpIHtcclxuICAgIC8vIFRPRE86IGxvb2tzIGxpa2UgbmF0aXZlIHBhbiB3b3JrcyBiZXR0ZXJcclxuICAgIC8vIGlmICghdGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgIC8vICAgdGhpcy50cmFuc2xhdGUoJGV2ZW50LmRlbHRhWCwgJGV2ZW50LmRlbHRhWSk7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLm9ucGFuLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uUGFuRW5kKCRldmVudCkge1xyXG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgLy8gICB0aGlzLnVwZGF0ZUxhc3RQb3MoKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIG9uRG91YmxlVGFwKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGVza3RvcCkge1xyXG4gICAgICBpZiAoJGV2ZW50LnRhcENvdW50ID09PSAyKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHRoaXMucmF3Q2VudGVyKCRldmVudCk7XHJcbiAgICAgICAgdGhpcy56b29tQXJvdW5kKDIsIGMueCwgYy55LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZShwYWdlTnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKSB7XHJcbiAgICAgIHJldHVybiBwYWdlTnVtYmVyID09PSB0aGlzLnNlbGVjdGVkUGFnZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
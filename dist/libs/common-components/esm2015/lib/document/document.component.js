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
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" (tap)=\"onDoubleTap($event)\" (pinch)=\"onPinch($event)\" \n  (pinchend)=\"onPinchEnd($event)\" (pan)=\"onPan($event)\" (panend)=\"onPanEnd($event)\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page *ngIf=\"isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;-webkit-transition:unset;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7TUFFaEQsQ0FBQyxHQUFHLE1BQU07QUFPaEIsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQTRCNUIsWUFBc0IsV0FBb0MsRUFDdEMsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsZ0JBQWlDO1FBSC9CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUN0QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBekIzQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcs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QyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBVTtRQUNsQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN6QixPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN4RDthQUNJO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7OztZQTFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDBsQ0FBd0M7O2FBRXpDOzs7O1lBckJDLFVBQVU7WUFTSixXQUFXO1lBRVgsYUFBYTtZQUVaLGVBQWU7OzttQkFXckIsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxNQUFNOzs7O0lBSlAsaUNBQXVCOztJQUN2Qiw2Q0FBa0M7O0lBQ2xDLGlDQUErQjs7SUFDL0IseUNBQThCOztJQUM5QixrQ0FBMEM7O0lBQzFDLGlDQUFhOztJQUNiLGlDQUFhOztJQUViLHFDQUFnQjs7SUFDaEIsc0NBQWlCOztJQUNqQiwwQ0FBcUI7O0lBQ3JCLDJDQUFzQjs7SUFDdEIsa0NBQWE7O0lBQ2Isc0NBQWlCOztJQUNqQixzQ0FBaUI7O0lBQ2pCLGdDQUFXOztJQUNYLDhCQUFNOztJQUNOLGtDQUFVOztJQUNWLDhCQUFNOztJQUNOLGtDQUFVOztJQUNWLHdDQUFtQjs7SUFDbkIsOENBQXlCOztJQUN6QixxQ0FBYTs7SUFDYixzQ0FBYzs7SUFDZCxzQ0FBbUI7Ozs7O0lBRVAsd0NBQThDOzs7OztJQUM5Qyx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQzs7Ozs7SUFDckMsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRlLnNlcnZpY2UnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogbnVtYmVyO1xuICBAT3V0cHV0KCkgb25wYW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgd2FpdCA9IGZhbHNlO1xuICB6b29tOiBudW1iZXI7XG5cbiAgZG9jV2lkdGggPSBudWxsO1xuICBkb2NIZWlnaHQgPSBudWxsO1xuICB2aWV3cG9ydFdpZHRoID0gbnVsbDtcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xuICBzY2FsZSA9IG51bGw7XG4gIGxhc3RTY2FsZSA9IG51bGw7XG4gIGNvbnRhaW5lciA9IG51bGw7XG4gIGRvYyA9IG51bGw7XG4gIHggPSAwO1xuICBsYXN0WCA9IDA7XG4gIHkgPSAwO1xuICBsYXN0WSA9IDA7XG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcbiAgcGluY2hDZW50ZXJPZmZzZXQgPSBudWxsO1xuICBjdXJXaWR0aCA9IDA7XG4gIGN1ckhlaWdodCA9IDA7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLCkge1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbDtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKVxuICAgIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gMTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zdCBwYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAocGFuem9vbSBhcyBhbnkpLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIC8vIFRPRE86IHRoaXMgaW50ZXJzZWN0cyB3aXRoIHpvb21pbmcgYnkgem9vbSBkaXJlY3RpdmUsIGJ1dCBzdGlsbCBuZWVkZWRcbiAgICAvLyBmb3IgZmx1c2ggcHJldmlvdXMgc2V0dGluZ3MgYmVmb3JlIG9wZW5pbmcgYW5vdGhlciBmaWxlXG4gICAgLy90aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKDEwMCk7XG4gICAgLy90aGlzLnNjYWxlID0gMTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAucGFuem9vbSBhcyBhIGRvY3VtZW50XG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5kb2NXaWR0aCA9IHRoaXMuZG9jLmNsaWVudFdpZHRoO1xuICAgIHRoaXMuZG9jSGVpZ2h0ID0gdGhpcy5kb2MuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gRm9yIGNhc2VzIHdoZXJlIHdlIGFscmVhZHkgaGF2ZSB6b29tIGRlZmluZWQgd2Ugc2hvdWxkIGluY2x1ZGUgaXRcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMudmlld3BvcnRXaWR0aCAvIHRoaXMuZG9jV2lkdGgpICogdGhpcy5fem9vbVNlcnZpY2Uuem9vbSAvIDEwMDtcblxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoICogdGhpcy5zY2FsZTtcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0ICogdGhpcy5zY2FsZTtcblxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgLy8gVE9ETzogdGhpcyB0ZW1wb3JhcnkgY3J1dGNoIGZvciBFeGNlbCBmaWxlcyBzaG91bGQgYmUgZG9jdW1lbnRlZFxuICBpZkV4Y2VsKCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiO1xuICB9XG5cbiAgaWZQcmVzZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IFBvd2VyUG9pbnRcIjtcbiAgfVxuXG4gIGdldERpbWVuc2lvbldpdGhVbml0KHZhbHVlOiBudW1iZXIsIHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgIXRoaXMuaXNWaXNpYmxlKHBhZ2VOdW1iZXIpID8gMCA6IHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XG4gIH1cblxuICBpZkVkZ2UoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50Tm9kZUxpc3RPZiA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2Qtd3JhcHBlcicpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuICB9XG5cbiAgYWJzb2x1dGVQb3NpdGlvbihlbCkge1xuICAgIGxldCB4ID0gMCwgeSA9IDA7XG5cbiAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcbiAgICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICAgIHkgKz0gZWwub2Zmc2V0VG9wO1xuICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5fTtcbiAgfTtcblxuICByZXN0cmljdFJhd1Bvcyhwb3MsIHZpZXdwb3J0RGltLCBkb2NEaW0pIHtcbiAgICBpZiAocG9zIDwgdmlld3BvcnREaW0gLyB0aGlzLnNjYWxlIC0gZG9jRGltKSB7IC8vIHRvbyBmYXIgbGVmdC91cD9cbiAgICAgIHBvcyA9IHZpZXdwb3J0RGltIC8gdGhpcy5zY2FsZSAtIGRvY0RpbTtcbiAgICB9IGVsc2UgaWYgKHBvcyA+IDApIHsgLy8gdG9vIGZhciByaWdodC9kb3duP1xuICAgICAgcG9zID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHBvcztcbiAgfTtcblxuICB1cGRhdGVMYXN0UG9zKCkge1xuICAgIHRoaXMubGFzdFggPSB0aGlzLng7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMueTtcbiAgfTtcblxuICB0cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAvLyBXZSByZXN0cmljdCB0byB0aGUgbWluIG9mIHRoZSB2aWV3cG9ydCB3aWR0aC9oZWlnaHQgb3IgY3VycmVudCB3aWR0aC9oZWlnaHQgYXMgdGhlXG4gICAgLy8gY3VycmVudCB3aWR0aC9oZWlnaHQgbWF5IGJlIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gICAgY29uc3QgbmV3WCA9IHRoaXMucmVzdHJpY3RSYXdQb3ModGhpcy5sYXN0WCArIGRlbHRhWCAvIHRoaXMuc2NhbGUsXG4gICAgICBNYXRoLm1pbih0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMuY3VyV2lkdGgpLCB0aGlzLmRvY1dpZHRoKTtcbiAgICB0aGlzLnggPSBuZXdYO1xuICAgIC8vIFRPRE86IHZhbHVlIGhlcmUgYW5kIGluIHRoZSBzaW1pbGFyIGxpbmUgYmVsb3cgY2hhbmdlcyB0byBwb3NpdGl2ZSB0byB0YWtlIGFueSBlZmZlY3RcbiAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gLU1hdGguY2VpbChuZXdYICogdGhpcy5zY2FsZSk7XG5cbiAgICBjb25zdCBuZXdZID0gdGhpcy5yZXN0cmljdFJhd1Bvcyh0aGlzLmxhc3RZICsgZGVsdGFZIC8gdGhpcy5zY2FsZSxcbiAgICAgIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSwgdGhpcy5kb2NIZWlnaHQpO1xuICAgIHRoaXMueSA9IG5ld1k7XG4gICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wID0gLU1hdGguY2VpbChuZXdZICogdGhpcy5zY2FsZSk7XG5cbiAgICB0aGlzLmRvYy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKSc7XG4gIH07XG5cbiAgc3RhcnRab29tKHNjYWxlQnkpIHtcbiAgICB0aGlzLnNjYWxlID0gdGhpcy5sYXN0U2NhbGUgKiBzY2FsZUJ5O1xuXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQgKiB0aGlzLnNjYWxlO1xuXG4gICAgLy8gQWRqdXN0IG1hcmdpbnMgdG8gbWFrZSBzdXJlIHRoYXQgd2UgYXJlbid0IG91dCBvZiBib3VuZHNcbiAgICB0aGlzLnRyYW5zbGF0ZSgwLCAwKTtcbiAgfTtcblxuICByYXdDZW50ZXIoJGV2ZW50KSB7XG4gICAgY29uc3QgcG9zID0gdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKHRoaXMuY29udGFpbmVyKTtcblxuICAgIC8vIFdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG5cbiAgICBjb25zdCB6b29tWCA9IC10aGlzLnggKyAoJGV2ZW50LmNlbnRlci54IC0gcG9zLnggKyBzY3JvbGxMZWZ0KSAvIHRoaXMuc2NhbGU7XG4gICAgY29uc3Qgem9vbVkgPSAtdGhpcy55ICsgKCRldmVudC5jZW50ZXIueSAtIHBvcy55ICsgc2Nyb2xsVG9wKSAvIHRoaXMuc2NhbGU7XG5cbiAgICByZXR1cm4ge3g6IHpvb21YLCB5OiB6b29tWX07XG4gIH07XG5cbiAgdXBkYXRlTGFzdFNjYWxlKCkge1xuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcbiAgfTtcblxuICB6b29tQXJvdW5kKHNjYWxlQnksIHJhd1pvb21YLCByYXdab29tWSwgZG9Ob3RVcGRhdGVMYXN0KSB7XG4gICAgLy8gWm9vbVxuICAgIHRoaXMuc3RhcnRab29tKHNjYWxlQnkpO1xuXG4gICAgLy8gTmV3IHJhdyBjZW50ZXIgb2Ygdmlld3BvcnRcbiAgICBjb25zdCByYXdDZW50ZXJYID0gLXRoaXMueCArIE1hdGgubWluKHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy5jdXJXaWR0aCkgLyAyIC8gdGhpcy5zY2FsZTtcbiAgICBjb25zdCByYXdDZW50ZXJZID0gLXRoaXMueSArIE1hdGgubWluKHRoaXMudmlld3BvcnRIZWlnaHQsIHRoaXMuY3VySGVpZ2h0KSAvIDIgLyB0aGlzLnNjYWxlO1xuXG4gICAgLy8gRGVsdGFcbiAgICBjb25zdCBkZWx0YVggPSAocmF3Q2VudGVyWCAtIHJhd1pvb21YKSAqIHRoaXMuc2NhbGU7XG4gICAgY29uc3QgZGVsdGFZID0gKHJhd0NlbnRlclkgLSByYXdab29tWSkgKiB0aGlzLnNjYWxlO1xuXG4gICAgLy8gVHJhbnNsYXRlIGJhY2sgdG8gem9vbSBjZW50ZXJcbiAgICB0aGlzLnRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSk7XG5cbiAgICBpZiAoIWRvTm90VXBkYXRlTGFzdCkge1xuICAgICAgdGhpcy51cGRhdGVMYXN0U2NhbGUoKTtcbiAgICAgIHRoaXMudXBkYXRlTGFzdFBvcygpO1xuICAgIH1cbiAgfTtcblxuICBvblBpbmNoKCRldmVudCkge1xuICAgIGlmICh0aGlzLnBpbmNoQ2VudGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLnBpbmNoQ2VudGVyID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcbiAgICAgIGNvbnN0IG9mZnNldFggPSB0aGlzLnBpbmNoQ2VudGVyLnggKiB0aGlzLnNjYWxlIC0gKC10aGlzLnggKiB0aGlzLnNjYWxlICsgTWF0aC5taW4odGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLmN1cldpZHRoKSAvIDIpO1xuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHRoaXMucGluY2hDZW50ZXIueSAqIHRoaXMuc2NhbGUgLSAoLXRoaXMueSAqIHRoaXMuc2NhbGUgKyBNYXRoLm1pbih0aGlzLnZpZXdwb3J0SGVpZ2h0LCB0aGlzLmN1ckhlaWdodCkgLyAyKTtcbiAgICAgIHRoaXMucGluY2hDZW50ZXJPZmZzZXQgPSB7eDogb2Zmc2V0WCwgeTogb2Zmc2V0WX07XG4gICAgfVxuXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnNjYWxlICogJGV2ZW50LnNjYWxlO1xuXG4gICAgY29uc3Qgem9vbVggPSB0aGlzLnBpbmNoQ2VudGVyLnggKiBuZXdTY2FsZSAtIHRoaXMucGluY2hDZW50ZXJPZmZzZXQueDtcbiAgICBjb25zdCB6b29tWSA9IHRoaXMucGluY2hDZW50ZXIueSAqIG5ld1NjYWxlIC0gdGhpcy5waW5jaENlbnRlck9mZnNldC55O1xuICAgIGNvbnN0IHpvb21DZW50ZXIgPSB7eDogem9vbVggLyBuZXdTY2FsZSwgeTogem9vbVkgLyBuZXdTY2FsZX07XG5cbiAgICB0aGlzLnpvb21Bcm91bmQoJGV2ZW50LnNjYWxlLCB6b29tQ2VudGVyLngsIHpvb21DZW50ZXIueSwgdHJ1ZSk7XG4gIH1cblxuICBvblBpbmNoRW5kKCRldmVudCkge1xuICAgIHRoaXMudXBkYXRlTGFzdFNjYWxlKCk7XG4gICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XG4gICAgdGhpcy5waW5jaENlbnRlciA9IG51bGw7XG4gIH1cblxuICBvblBhbigkZXZlbnQpIHtcbiAgICAvLyBUT0RPOiBsb29rcyBsaWtlIG5hdGl2ZSBwYW4gd29ya3MgYmV0dGVyXG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgIC8vICAgdGhpcy50cmFuc2xhdGUoJGV2ZW50LmRlbHRhWCwgJGV2ZW50LmRlbHRhWSk7XG4gICAgLy8gfVxuICAgIHRoaXMub25wYW4uZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgb25QYW5FbmQoJGV2ZW50KSB7XG4gICAgLy8gaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgIC8vICAgdGhpcy51cGRhdGVMYXN0UG9zKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25Eb3VibGVUYXAoJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgICAgaWYgKCRldmVudC50YXBDb3VudCA9PT0gMikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5yYXdDZW50ZXIoJGV2ZW50KTtcbiAgICAgICAgdGhpcy56b29tQXJvdW5kKDIsIGMueCwgYy55LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNWaXNpYmxlKHBhZ2VOdW1iZXIpIHtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKSB7XG4gICAgICByZXR1cm4gcGFnZU51bWJlciA9PT0gdGhpcy5zZWxlY3RlZFBhZ2UgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=
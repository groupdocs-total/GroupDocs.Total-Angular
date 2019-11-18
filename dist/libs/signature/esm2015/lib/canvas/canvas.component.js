/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WindowService } from "@groupdocs.examples.angular/common-components";
export class CanvasComponent {
    /**
     * @param {?} _windowService
     */
    constructor(_windowService) {
        this._windowService = _windowService;
        this._isDragged = false;
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._ctx = this.canvas.nativeElement.getContext('2d');
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseDown(e) {
        /** @type {?} */
        let pos;
        if (this.isDesktop) {
            pos = { x: e.offsetX, y: e.offsetY };
        }
        else {
            /** @type {?} */
            const wEvent = (/** @type {?} */ (window.event));
            pos = { x: wEvent.offsetX, y: wEvent.offsetY };
        }
        e.preventDefault();
        this._isDragged = true;
        this._ctx.beginPath();
        this._ctx.moveTo(pos.x, pos.y);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseUp(e) {
        e.preventDefault();
        this._isDragged = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseMove(e) {
        /** @type {?} */
        let pos;
        if (this.isDesktop) {
            pos = { x: e.offsetX, y: e.offsetY };
        }
        else {
            /** @type {?} */
            const wEvent = (/** @type {?} */ (window.event));
            pos = { x: wEvent.offsetX, y: wEvent.offsetY };
        }
        e.preventDefault();
        if (this._isDragged) {
            this._ctx.lineTo(pos.x, pos.y);
            this._ctx.stroke();
        }
    }
    /**
     * @param {?} color
     * @return {?}
     */
    setColor(color) {
        if (this._ctx) {
            this._ctx.strokeStyle = color;
        }
    }
    /**
     * @return {?}
     */
    getImage() {
        return this.canvas.nativeElement.toDataURL('image/png');
    }
    /**
     * @return {?}
     */
    clear() {
        this.canvas.nativeElement.width = this.canvas.nativeElement.width;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setColor(this.color);
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.isDesktop ? 1079 : this._windowService.getWidth();
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.isDesktop ? 540 : this._windowService.getHeight();
    }
}
CanvasComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-canvas',
                template: "<div class=\"bc-paint-container\">\n  <div class=\"bc-paint-canvas-container\">\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\n            (panend)=\"onMouseUp($event)\"></canvas>\n  </div>\n</div>\n",
                styles: [".bc-paint-canvas-container,.bc-paint-container{width:100%;height:100%}@media (max-width:1037px){.bc-paint-canvas-container>canvas{width:100%;height:100%;border:0}}"]
            }] }
];
/** @nocollapse */
CanvasComponent.ctorParameters = () => [
    { type: WindowService }
];
CanvasComponent.propDecorators = {
    color: [{ type: Input }],
    canvas: [{ type: ViewChild, args: ['canvas', { static: true },] }]
};
if (false) {
    /** @type {?} */
    CanvasComponent.prototype.color;
    /** @type {?} */
    CanvasComponent.prototype._ctx;
    /** @type {?} */
    CanvasComponent.prototype._isDragged;
    /**
     * @type {?}
     * @private
     */
    CanvasComponent.prototype.isDesktop;
    /** @type {?} */
    CanvasComponent.prototype.canvas;
    /**
     * @type {?}
     * @private
     */
    CanvasComponent.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY2FudmFzL2NhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQU81RSxNQUFNLE9BQU8sZUFBZTs7OztJQVUxQixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUxqRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBTWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLENBQUM7O1lBQ1AsR0FBRztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixHQUFHLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBQyxDQUFDO1NBQ3BDO2FBQU07O2tCQUNDLE1BQU0sR0FBYyxtQkFBVyxNQUFNLENBQUMsS0FBSyxFQUFBO1lBQ2pELEdBQUcsR0FBRyxF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aGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY2FudmFzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbnZhcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbnZhcy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbnZhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgX2lzRHJhZ2dlZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzRGVza3RvcDogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdjYW52YXMnLCB7c3RhdGljOiB0cnVlfSkgY2FudmFzOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2N0eCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGUpIHtcbiAgICBsZXQgcG9zO1xuICAgIGlmICh0aGlzLmlzRGVza3RvcCkge1xuICAgICAgcG9zID0ge3g6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd0V2ZW50OiBEcmFnRXZlbnQgPSA8RHJhZ0V2ZW50PndpbmRvdy5ldmVudDtcbiAgICAgIHBvcyA9IHt4OiB3RXZlbnQub2Zmc2V0WCwgeTogd0V2ZW50Lm9mZnNldFl9O1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5faXNEcmFnZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fY3R4Lm1vdmVUbyhwb3MueCwgcG9zLnkpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5faXNEcmFnZ2VkID0gZmFsc2U7XG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgbGV0IHBvcztcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3ApIHtcbiAgICAgIHBvcyA9IHt4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WX07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XG4gICAgICBwb3MgPSB7eDogd0V2ZW50Lm9mZnNldFgsIHk6IHdFdmVudC5vZmZzZXRZfTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLl9pc0RyYWdnZWQpIHtcbiAgICAgIHRoaXMuX2N0eC5saW5lVG8ocG9zLngsIHBvcy55KTtcbiAgICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIGlmICh0aGlzLl9jdHgpIHtcbiAgICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGdldEltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LndpZHRoO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q29sb3IodGhpcy5jb2xvcik7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyAxMDc5IDogdGhpcy5fd2luZG93U2VydmljZS5nZXRXaWR0aCgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IDU0MCA6IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0SGVpZ2h0KCk7XG4gIH1cbn1cbiJdfQ==
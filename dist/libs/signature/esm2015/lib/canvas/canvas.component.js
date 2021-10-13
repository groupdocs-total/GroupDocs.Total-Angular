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
                template: "<div class=\"bc-paint-container\">\n  <div class=\"bc-paint-canvas-container\">\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\n            (panend)=\"onMouseUp($event)\" (touchstart)=\"onMouseDown($event)\"\n            (touchmove)=\"onMouseMove($event)\" (touchend)=\"onMouseUp($event)\"></canvas>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY2FudmFzL2NhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQU81RSxNQUFNLE9BQU8sZUFBZTs7OztJQVUxQixZQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUxqRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBTWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLENBQUM7O1lBQ1AsR0FBRztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixHQUFHLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBQyxDQUFDO1NBQ3BDO2FBQU07O2tCQUNDLE1BQU0sR0FBYyxtQkFBVyxNQUFNLENBQUMsS0FBSyxFQUFBO1lBQ2pELEdBQUcsR0FBRyxF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Q2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNhbnZhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW52YXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYW52YXMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIF9pc0RyYWdnZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3N0YXRpYzogdHJ1ZX0pIGNhbnZhczogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gIH1cblxuICBvbk1vdXNlRG93bihlKSB7XG4gICAgbGV0IHBvcztcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3ApIHtcbiAgICAgIHBvcyA9IHt4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WX07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XG4gICAgICBwb3MgPSB7eDogd0V2ZW50Lm9mZnNldFgsIHk6IHdFdmVudC5vZmZzZXRZfTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2lzRHJhZ2dlZCA9IHRydWU7XG4gICAgdGhpcy5fY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX2N0eC5tb3ZlVG8ocG9zLngsIHBvcy55KTtcbiAgfVxuXG4gIG9uTW91c2VVcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2lzRHJhZ2dlZCA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIGxldCBwb3M7XG4gICAgaWYgKHRoaXMuaXNEZXNrdG9wKSB7XG4gICAgICBwb3MgPSB7eDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFl9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3RXZlbnQ6IERyYWdFdmVudCA9IDxEcmFnRXZlbnQ+d2luZG93LmV2ZW50O1xuICAgICAgcG9zID0ge3g6IHdFdmVudC5vZmZzZXRYLCB5OiB3RXZlbnQub2Zmc2V0WX07XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5faXNEcmFnZ2VkKSB7XG4gICAgICB0aGlzLl9jdHgubGluZVRvKHBvcy54LCBwb3MueSk7XG4gICAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICBpZiAodGhpcy5fY3R4KSB7XG4gICAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICB9XG4gIH1cblxuICBnZXRJbWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LndpZHRoID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC53aWR0aDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbG9yKHRoaXMuY29sb3IpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gMTA3OSA6IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyA1NDAgOiB0aGlzLl93aW5kb3dTZXJ2aWNlLmdldEhlaWdodCgpO1xuICB9XG59XG4iXX0=
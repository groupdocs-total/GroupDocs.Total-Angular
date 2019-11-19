/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WindowService } from "@groupdocs.examples.angular/common-components";
var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(_windowService) {
        var _this = this;
        this._windowService = _windowService;
        this._isDragged = false;
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    CanvasComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._ctx = this.canvas.nativeElement.getContext('2d');
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CanvasComponent.prototype.onMouseDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var pos;
        if (this.isDesktop) {
            pos = { x: e.offsetX, y: e.offsetY };
        }
        else {
            /** @type {?} */
            var wEvent = (/** @type {?} */ (window.event));
            pos = { x: wEvent.offsetX, y: wEvent.offsetY };
        }
        e.preventDefault();
        this._isDragged = true;
        this._ctx.beginPath();
        this._ctx.moveTo(pos.x, pos.y);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CanvasComponent.prototype.onMouseUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this._isDragged = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CanvasComponent.prototype.onMouseMove = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var pos;
        if (this.isDesktop) {
            pos = { x: e.offsetX, y: e.offsetY };
        }
        else {
            /** @type {?} */
            var wEvent = (/** @type {?} */ (window.event));
            pos = { x: wEvent.offsetX, y: wEvent.offsetY };
        }
        e.preventDefault();
        if (this._isDragged) {
            this._ctx.lineTo(pos.x, pos.y);
            this._ctx.stroke();
        }
    };
    /**
     * @param {?} color
     * @return {?}
     */
    CanvasComponent.prototype.setColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        if (this._ctx) {
            this._ctx.strokeStyle = color;
        }
    };
    /**
     * @return {?}
     */
    CanvasComponent.prototype.getImage = /**
     * @return {?}
     */
    function () {
        return this.canvas.nativeElement.toDataURL('image/png');
    };
    /**
     * @return {?}
     */
    CanvasComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.canvas.nativeElement.width = this.canvas.nativeElement.width;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CanvasComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setColor(this.color);
    };
    /**
     * @return {?}
     */
    CanvasComponent.prototype.getWidth = /**
     * @return {?}
     */
    function () {
        return this.isDesktop ? 1079 : this._windowService.getWidth();
    };
    /**
     * @return {?}
     */
    CanvasComponent.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.isDesktop ? 540 : this._windowService.getHeight();
    };
    CanvasComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-canvas',
                    template: "<div class=\"bc-paint-container\">\n  <div class=\"bc-paint-canvas-container\">\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\n            (panend)=\"onMouseUp($event)\"></canvas>\n  </div>\n</div>\n",
                    styles: [".bc-paint-canvas-container,.bc-paint-container{width:100%;height:100%}@media (max-width:1037px){.bc-paint-canvas-container>canvas{width:100%;height:100%;border:0}}"]
                }] }
    ];
    /** @nocollapse */
    CanvasComponent.ctorParameters = function () { return [
        { type: WindowService }
    ]; };
    CanvasComponent.propDecorators = {
        color: [{ type: Input }],
        canvas: [{ type: ViewChild, args: ['canvas', { static: true },] }]
    };
    return CanvasComponent;
}());
export { CanvasComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY2FudmFzL2NhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUU1RTtJQWVFLHlCQUFvQixjQUE2QjtRQUFqRCxpQkFLQztRQUxtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUxqRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBTWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxDQUFDOztZQUNQLEdBQUc7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQztTQUNwQzthQUFNOztnQkFDQyxNQUFNLEdBQWMsbUJBQVcsTUFBTSxDQUFDLEtBQUssRUFBQTtZQUNqRCxHQUFHLEdBQUcs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bUI7Ozs7O0lBQ25CLG9DQUEyQjs7SUFFM0IsaUNBQXdEOzs7OztJQUU1Qyx5Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNhbnZhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW52YXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYW52YXMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIF9pc0RyYWdnZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3N0YXRpYzogdHJ1ZX0pIGNhbnZhczogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gIH1cblxuICBvbk1vdXNlRG93bihlKSB7XG4gICAgbGV0IHBvcztcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3ApIHtcbiAgICAgIHBvcyA9IHt4OiBlLm9mZnNldFgsIHk6IGUub2Zmc2V0WX07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XG4gICAgICBwb3MgPSB7eDogd0V2ZW50Lm9mZnNldFgsIHk6IHdFdmVudC5vZmZzZXRZfTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2lzRHJhZ2dlZCA9IHRydWU7XG4gICAgdGhpcy5fY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX2N0eC5tb3ZlVG8ocG9zLngsIHBvcy55KTtcbiAgfVxuXG4gIG9uTW91c2VVcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2lzRHJhZ2dlZCA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIGxldCBwb3M7XG4gICAgaWYgKHRoaXMuaXNEZXNrdG9wKSB7XG4gICAgICBwb3MgPSB7eDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFl9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3RXZlbnQ6IERyYWdFdmVudCA9IDxEcmFnRXZlbnQ+d2luZG93LmV2ZW50O1xuICAgICAgcG9zID0ge3g6IHdFdmVudC5vZmZzZXRYLCB5OiB3RXZlbnQub2Zmc2V0WX07XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5faXNEcmFnZ2VkKSB7XG4gICAgICB0aGlzLl9jdHgubGluZVRvKHBvcy54LCBwb3MueSk7XG4gICAgICB0aGlzLl9jdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICBpZiAodGhpcy5fY3R4KSB7XG4gICAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICB9XG4gIH1cblxuICBnZXRJbWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LndpZHRoID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC53aWR0aDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbG9yKHRoaXMuY29sb3IpO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gMTA3OSA6IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc2t0b3AgPyA1NDAgOiB0aGlzLl93aW5kb3dTZXJ2aWNlLmdldEhlaWdodCgpO1xuICB9XG59XG4iXX0=
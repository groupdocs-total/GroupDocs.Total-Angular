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
                    template: "<div class=\"bc-paint-container\">\r\n  <div class=\"bc-paint-canvas-container\">\r\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\r\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\r\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\r\n            (panend)=\"onMouseUp($event)\" (touchstart)=\"onMouseDown($event)\"\r\n            (touchmove)=\"onMouseMove($event)\" (touchend)=\"onMouseUp($event)\"></canvas>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY2FudmFzL2NhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUU1RTtJQWVFLHlCQUFvQixjQUE2QjtRQUFqRCxpQkFLQztRQUxtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUxqRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBTWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxDQUFDOztZQUNQLEdBQUc7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQztTQUNwQzthQUFNOztnQkFDQyxNQUFNLEdBQWMsbUJBQVcsTUFBTSxDQUFDLEtBQUssRUFBQTtZQUNqRCxHQUFHLEdBQUcs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QW1COzs7OztJQUNuQixvQ0FBMkI7O0lBRTNCLGlDQUF3RDs7Ozs7SUFFNUMseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNhbnZhcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbnZhcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FudmFzLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbnZhc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIF9pc0RyYWdnZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzRGVza3RvcDogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2FudmFzJywge3N0YXRpYzogdHJ1ZX0pIGNhbnZhczogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX2N0eCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGUpIHtcclxuICAgIGxldCBwb3M7XHJcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgcG9zID0ge3g6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHBvcyA9IHt4OiB3RXZlbnQub2Zmc2V0WCwgeTogd0V2ZW50Lm9mZnNldFl9O1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5faXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuX2N0eC5tb3ZlVG8ocG9zLngsIHBvcy55KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLl9pc0RyYWdnZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VNb3ZlKGUpIHtcclxuICAgIGxldCBwb3M7XHJcbiAgICBpZiAodGhpcy5pc0Rlc2t0b3ApIHtcclxuICAgICAgcG9zID0ge3g6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHBvcyA9IHt4OiB3RXZlbnQub2Zmc2V0WCwgeTogd0V2ZW50Lm9mZnNldFl9O1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuX2lzRHJhZ2dlZCkge1xyXG4gICAgICB0aGlzLl9jdHgubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgIHRoaXMuX2N0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENvbG9yKGNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fY3R4KSB7XHJcbiAgICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQud2lkdGggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50LndpZHRoO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDb2xvcih0aGlzLmNvbG9yKTtcclxuICB9XHJcblxyXG4gIGdldFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gMTA3OSA6IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0V2lkdGgoKTtcclxuICB9XHJcblxyXG4gIGdldEhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IDU0MCA6IHRoaXMuX3dpbmRvd1NlcnZpY2UuZ2V0SGVpZ2h0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
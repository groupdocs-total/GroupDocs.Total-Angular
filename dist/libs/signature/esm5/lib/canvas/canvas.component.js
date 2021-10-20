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
                    template: "<div class=\"bc-paint-container\">\n  <div class=\"bc-paint-canvas-container\">\n    <canvas #canvas (mousedown)=\"onMouseDown($event)\" (mousemove)=\"onMouseMove($event)\"\n            (mouseup)=\"onMouseUp($event)\" (mouseleave)=\"onMouseUp($event)\" [width]=\"getWidth()\"\n            [height]=\"getHeight()\" (panstart)=\"onMouseDown($event)\" (panmove)=\"onMouseMove($event)\"\n            (panend)=\"onMouseUp($event)\" (touchstart)=\"onMouseDown($event)\"\n            (touchmove)=\"onMouseMove($event)\" (touchend)=\"onMouseUp($event)\"></canvas>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY2FudmFzL2NhbnZhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUU1RTtJQWVFLHlCQUFvQixjQUE2QjtRQUFqRCxpQkFLQztRQUxtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUxqRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBTWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxDQUFDOztZQUNQLEdBQUc7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQztTQUNwQzthQUFNOztnQkFDQyxNQUFNLEdBQWMsbUJBQVcsTUFBTSxDQUFDLEtBQUssRUFBQTtZQUNqRCxHQUFHLEdBQUcs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QW1COzs7OztJQUNuQixvQ0FBMkI7O0lBRTNCLGlDQUF3RDs7Ozs7SUFFNUMseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jYW52YXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FudmFzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FudmFzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FudmFzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBfaXNEcmFnZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgaXNEZXNrdG9wOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhcycsIHtzdGF0aWM6IHRydWV9KSBjYW52YXM6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fY3R4ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZSkge1xuICAgIGxldCBwb3M7XG4gICAgaWYgKHRoaXMuaXNEZXNrdG9wKSB7XG4gICAgICBwb3MgPSB7eDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFl9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB3RXZlbnQ6IERyYWdFdmVudCA9IDxEcmFnRXZlbnQ+d2luZG93LmV2ZW50O1xuICAgICAgcG9zID0ge3g6IHdFdmVudC5vZmZzZXRYLCB5OiB3RXZlbnQub2Zmc2V0WX07XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9pc0RyYWdnZWQgPSB0cnVlO1xuICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jdHgubW92ZVRvKHBvcy54LCBwb3MueSk7XG4gIH1cblxuICBvbk1vdXNlVXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9pc0RyYWdnZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGUpIHtcbiAgICBsZXQgcG9zO1xuICAgIGlmICh0aGlzLmlzRGVza3RvcCkge1xuICAgICAgcG9zID0ge3g6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd0V2ZW50OiBEcmFnRXZlbnQgPSA8RHJhZ0V2ZW50PndpbmRvdy5ldmVudDtcbiAgICAgIHBvcyA9IHt4OiB3RXZlbnQub2Zmc2V0WCwgeTogd0V2ZW50Lm9mZnNldFl9O1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuX2lzRHJhZ2dlZCkge1xuICAgICAgdGhpcy5fY3R4LmxpbmVUbyhwb3MueCwgcG9zLnkpO1xuICAgICAgdGhpcy5fY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbG9yKGNvbG9yKSB7XG4gICAgaWYgKHRoaXMuX2N0eCkge1xuICAgICAgdGhpcy5fY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudC53aWR0aCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQud2lkdGg7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDb2xvcih0aGlzLmNvbG9yKTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGVza3RvcCA/IDEwNzkgOiB0aGlzLl93aW5kb3dTZXJ2aWNlLmdldFdpZHRoKCk7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEZXNrdG9wID8gNTQwIDogdGhpcy5fd2luZG93U2VydmljZS5nZXRIZWlnaHQoKTtcbiAgfVxufVxuIl19
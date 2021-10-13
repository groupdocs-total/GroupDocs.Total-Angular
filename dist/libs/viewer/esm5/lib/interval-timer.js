/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IntervalTimer = /** @class */ (function () {
    function IntervalTimer(callback, interval) {
        var _this_1 = this;
        this.remaining = 0;
        this.state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
        this.callback = callback;
        this.interval = interval;
        this.startTime = new Date().getTime();
        /** @type {?} */
        var _this = this;
        this.timerId = setInterval((/**
         * @return {?}
         */
        function () {
            _this_1.callback();
            _this.startTime = new Date().getTime();
        }), this.interval);
        this.state = 1;
    }
    /**
     * @return {?}
     */
    IntervalTimer.prototype.pause = /**
     * @return {?}
     */
    function () {
        if (this.state !== 1)
            return;
        this.remaining = this.interval - (new Date().getTime() - this.startTime);
        clearInterval(this.timerId);
        this.state = 2;
    };
    ;
    /**
     * @return {?}
     */
    IntervalTimer.prototype.resume = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        if (this.state !== 2)
            return;
        this.state = 3;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this_1.timeoutCallback(); }), this.remaining);
    };
    ;
    /**
     * @return {?}
     */
    IntervalTimer.prototype.stop = /**
     * @return {?}
     */
    function () {
        this.state = 0;
        clearInterval(this.timerId);
    };
    /**
     * @return {?}
     */
    IntervalTimer.prototype.timeoutCallback = /**
     * @return {?}
     */
    function () {
        if (this.state !== 3)
            return;
        this.callback();
        this.startTime = new Date().getTime();
        this.timerId = setInterval(this.callback, this.interval);
        this.state = 1;
    };
    ;
    return IntervalTimer;
}());
export { IntervalTimer };
if (false) {
    /** @type {?} */
    IntervalTimer.prototype.callback;
    /** @type {?} */
    IntervalTimer.prototype.interval;
    /** @type {?} */
    IntervalTimer.prototype.timerId;
    /** @type {?} */
    IntervalTimer.prototype.startTime;
    /** @type {?} */
    IntervalTimer.prototype.remaining;
    /** @type {?} */
    IntervalTimer.prototype.state;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJ2YWwtdGltZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2ludGVydmFsLXRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQVFJLHVCQUFZLFFBQWEsRUFBRSxRQUFnQjtRQUEzQyxtQkFXQztRQWRELGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsaURBQWlEO1FBRzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFDaEMsS0FBSyxHQUFHLElBQUk7UUFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXOzs7UUFBQztZQUN2QixPQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLENBQUMsR0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTztRQUU3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsOEJBQU07OztJQUFOO1FBQUEsbUJBS0M7UUFKRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixVQUFVOzs7UUFBQyxjQUFNLE9BQUEsT0FBSSxDQUFDLGVBQWUsRUFBRSxFQUF0QixDQUFzQixHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLDRCQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsdUNBQWU7OztJQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUFBLENBQUM7SUFDTixvQkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7Ozs7SUFqREcsaUNBQWM7O0lBQ2QsaUNBQWlCOztJQUNqQixnQ0FBZ0I7O0lBQ2hCLGtDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2QsOEJBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW50ZXJ2YWxUaW1lciB7XHJcbiAgICBjYWxsYmFjazogYW55O1xyXG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHRpbWVySWQ6IG51bWJlcjtcclxuICAgIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgcmVtYWluaW5nID0gMDtcclxuICAgIHN0YXRlID0gMDsgLy8gIDAgPSBpZGxlLCAxID0gcnVubmluZywgMiA9IHBhdXNlZCwgMz0gcmVzdW1lZFxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2s6IGFueSwgaW50ZXJ2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBcclxuICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcclxuICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgIF90aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHRoaXMuaW50ZXJ2YWwgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAyO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpbWVvdXRDYWxsYmFjaygpLCB0aGlzLnJlbWFpbmluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwodGhpcy5jYWxsYmFjaywgdGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XHJcbiAgICB9O1xyXG59Il19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class IntervalTimer {
    //  0 = idle, 1 = running, 2 = paused, 3= resumed
    /**
     * @param {?} callback
     * @param {?} interval
     */
    constructor(callback, interval) {
        this.remaining = 0;
        this.state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
        this.callback = callback;
        this.interval = interval;
        this.startTime = new Date().getTime();
        /** @type {?} */
        const _this = this;
        this.timerId = setInterval((/**
         * @return {?}
         */
        () => {
            this.callback();
            _this.startTime = new Date().getTime();
        }), this.interval);
        this.state = 1;
    }
    /**
     * @return {?}
     */
    pause() {
        if (this.state !== 1)
            return;
        this.remaining = this.interval - (new Date().getTime() - this.startTime);
        clearInterval(this.timerId);
        this.state = 2;
    }
    ;
    /**
     * @return {?}
     */
    resume() {
        if (this.state !== 2)
            return;
        this.state = 3;
        setTimeout((/**
         * @return {?}
         */
        () => this.timeoutCallback()), this.remaining);
    }
    ;
    /**
     * @return {?}
     */
    stop() {
        this.state = 0;
        clearInterval(this.timerId);
    }
    /**
     * @return {?}
     */
    timeoutCallback() {
        if (this.state !== 3)
            return;
        this.callback();
        this.startTime = new Date().getTime();
        this.timerId = setInterval(this.callback, this.interval);
        this.state = 1;
    }
    ;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJ2YWwtdGltZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2ludGVydmFsLXRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBUXRCLFlBQVksUUFBYSxFQUFFLFFBQWdCO1FBSDNDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsaURBQWlEO1FBRzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Y0FDaEMsS0FBSyxHQUFHLElBQUk7UUFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixNQUFNO1FBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLElBQUk7UUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFqREcsaUNBQWM7O0lBQ2QsaUNBQWlCOztJQUNqQixnQ0FBZ0I7O0lBQ2hCLGtDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2QsOEJBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW50ZXJ2YWxUaW1lciB7XHJcbiAgICBjYWxsYmFjazogYW55O1xyXG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHRpbWVySWQ6IG51bWJlcjtcclxuICAgIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgcmVtYWluaW5nID0gMDtcclxuICAgIHN0YXRlID0gMDsgLy8gIDAgPSBpZGxlLCAxID0gcnVubmluZywgMiA9IHBhdXNlZCwgMz0gcmVzdW1lZFxyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2s6IGFueSwgaW50ZXJ2YWw6IG51bWJlcikge1xyXG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBcclxuICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcclxuICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgIF90aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLnN0YXRlID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHRoaXMuaW50ZXJ2YWwgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAyO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpbWVvdXRDYWxsYmFjaygpLCB0aGlzLnJlbWFpbmluZyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwodGhpcy5jYWxsYmFjaywgdGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XHJcbiAgICB9O1xyXG59Il19
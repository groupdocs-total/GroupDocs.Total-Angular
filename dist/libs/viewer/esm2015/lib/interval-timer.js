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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJ2YWwtdGltZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2ludGVydmFsLXRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBUXRCLFlBQVksUUFBYSxFQUFFLFFBQWdCO1FBSDNDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsaURBQWlEO1FBRzFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Y0FDaEMsS0FBSyxHQUFHLElBQUk7UUFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXOzs7UUFBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixNQUFNO1FBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQUEsQ0FBQzs7OztJQUVGLElBQUk7UUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQUEsQ0FBQztDQUNMOzs7SUFqREcsaUNBQWM7O0lBQ2QsaUNBQWlCOztJQUNqQixnQ0FBZ0I7O0lBQ2hCLGtDQUFrQjs7SUFDbEIsa0NBQWM7O0lBQ2QsOEJBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSW50ZXJ2YWxUaW1lciB7XG4gICAgY2FsbGJhY2s6IGFueTtcbiAgICBpbnRlcnZhbDogbnVtYmVyO1xuICAgIHRpbWVySWQ6IG51bWJlcjtcbiAgICBzdGFydFRpbWU6IG51bWJlcjtcbiAgICByZW1haW5pbmcgPSAwO1xuICAgIHN0YXRlID0gMDsgLy8gIDAgPSBpZGxlLCAxID0gcnVubmluZywgMiA9IHBhdXNlZCwgMz0gcmVzdW1lZFxuICBcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjazogYW55LCBpbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgXG4gICAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgICBfdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IDEpIHJldHVybjtcblxuICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHRoaXMuaW50ZXJ2YWwgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDI7XG4gICAgfTtcblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IDIpIHJldHVybjtcblxuICAgICAgICB0aGlzLnN0YXRlID0gMztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpbWVvdXRDYWxsYmFjaygpLCB0aGlzLnJlbWFpbmluZyk7XG4gICAgfTtcblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgfVxuXG4gICAgdGltZW91dENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gMykgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aGlzLmNhbGxiYWNrLCB0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XG4gICAgfTtcbn0iXX0=
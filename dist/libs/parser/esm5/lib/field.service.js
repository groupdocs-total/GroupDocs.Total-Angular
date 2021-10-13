/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RendererFactory2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { Utils } from '@groupdocs.examples.angular/common-components';
import { fromEventPattern, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
var FieldService = /** @class */ (function () {
    function FieldService(rendererFactory2) {
        this.rendererFactory2 = rendererFactory2;
        this._destroy = new Subject();
        this._isMoving = false;
        this._mouseMoveSubject = new Subject();
        this._mouseUpSubject = new Subject();
        this._activeChangedSubject = new Subject();
        this.mouseMove = this._mouseMoveSubject.asObservable();
        this.mouseUp = this._mouseUpSubject.asObservable();
        this.activeChanged = this._activeChangedSubject.asObservable();
        /** @type {?} */
        var renderer = this.rendererFactory2.createRenderer(null, null);
        this.createMouseObservables(renderer);
    }
    /**
     * @private
     * @param {?} renderer
     * @return {?}
     */
    FieldService.prototype.createMouseObservables = /**
     * @private
     * @param {?} renderer
     * @return {?}
     */
    function (renderer) {
        // MOUSE
        var _this = this;
        // MOUSE
        /** @type {?} */
        var removeMouseMoveListener;
        /** @type {?} */
        var createMouseMoveListener = (/**
         * @param {?} handler
         * @return {?}
         */
        function (handler) {
            removeMouseMoveListener = renderer.listen("document", "mousemove", handler);
        });
        fromEventPattern(createMouseMoveListener, (/**
         * @return {?}
         */
        function () { return removeMouseMoveListener(); }))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMouseMove(event); }));
        /** @type {?} */
        var removeMouseUpListener;
        /** @type {?} */
        var createMouseUpListener = (/**
         * @param {?} handler
         * @return {?}
         */
        function (handler) {
            removeMouseUpListener = renderer.listen("document", "mouseup", handler);
        });
        fromEventPattern(createMouseUpListener, (/**
         * @return {?}
         */
        function () { return removeMouseUpListener(); }))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMouseUp(event); }));
        // TOUCH
        /** @type {?} */
        var removePanMoveListener;
        /** @type {?} */
        var createPanMoveListener = (/**
         * @param {?} handler
         * @return {?}
         */
        function (handler) {
            removePanMoveListener = renderer.listen("document", "panmove", handler);
        });
        fromEventPattern(createPanMoveListener, (/**
         * @return {?}
         */
        function () { return removePanMoveListener(); }))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMouseMove(event); }));
        /** @type {?} */
        var removePanEndListener;
        /** @type {?} */
        var createPanEndListener = (/**
         * @param {?} handler
         * @return {?}
         */
        function (handler) {
            removePanEndListener = renderer.listen("document", "panend", handler);
        });
        fromEventPattern(createPanEndListener, (/**
         * @return {?}
         */
        function () { return removePanEndListener(); }))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMouseUp(event); }));
    };
    /**
     * @return {?}
     */
    FieldService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    Object.defineProperty(FieldService.prototype, "isMoving", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isMoving;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fieldName
     * @return {?}
     */
    FieldService.prototype.setActive = /**
     * @param {?} fieldName
     * @return {?}
     */
    function (fieldName) {
        this._activeChangedSubject.next(fieldName);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FieldService.prototype.beginMove = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var mousePosition = Utils.getMousePosition($event);
        this._isMoving = true;
        return mousePosition;
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    FieldService.prototype.onMouseMove = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isMoving) {
            return;
        }
        /** @type {?} */
        var mousePosition = Utils.getMousePosition($event);
        this._mouseMoveSubject.next(mousePosition);
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    FieldService.prototype.onMouseUp = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isMoving) {
            return;
        }
        /** @type {?} */
        var mousePosition = Utils.getMousePosition($event);
        this._mouseUpSubject.next(mousePosition);
        this._isMoving = false;
    };
    FieldService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FieldService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ FieldService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FieldService_Factory() { return new FieldService(i0.ɵɵinject(i0.RendererFactory2)); }, token: FieldService, providedIn: "root" });
    return FieldService;
}());
export { FieldService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldService.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    FieldService.prototype._isMoving;
    /**
     * @type {?}
     * @private
     */
    FieldService.prototype._mouseMoveSubject;
    /**
     * @type {?}
     * @private
     */
    FieldService.prototype._mouseUpSubject;
    /**
     * @type {?}
     * @private
     */
    FieldService.prototype._activeChangedSubject;
    /** @type {?} */
    FieldService.prototype.mouseMove;
    /** @type {?} */
    FieldService.prototype.mouseUp;
    /** @type {?} */
    FieldService.prototype.activeChanged;
    /**
     * @type {?}
     * @private
     */
    FieldService.prototype.rendererFactory2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvZmllbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHaEQ7SUFZRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQ3pDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBdUQ3QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDOztZQXREM0QsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUVqRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7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QUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sa0NBQVc7Ozs7O0lBQW5CLFVBQW9CLE1BQWtCO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFFRyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVPLGdDQUFTOzs7OztJQUFqQixVQUFrQixNQUFrQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7O1lBRUcsYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Z0JBckdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsZ0JBQWdCOzs7dUJBRHpCO0NBOEdDLEFBdEdELElBc0dDO1NBbkdZLFlBQVk7Ozs7OztJQUV2QixnQ0FBaUM7Ozs7O0lBQ2pDLGlDQUEwQjs7Ozs7SUFFMUIseUNBQWlEOzs7OztJQUNqRCx1Q0FBK0M7Ozs7O0lBQy9DLDZDQUFzRDs7SUF1RHRELGlDQUEyRDs7SUFDM0QsK0JBQXVEOztJQUN2RCxxQ0FBbUU7Ozs7O0lBdkR2RCx3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGZyb21FdmVudFBhdHRlcm4sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX2lzTW92aW5nID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX21vdXNlTW92ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxQb2ludD4oKTtcclxuICBwcml2YXRlIF9tb3VzZVVwU3ViamVjdCA9IG5ldyBTdWJqZWN0PFBvaW50PigpO1xyXG4gIHByaXZhdGUgX2FjdGl2ZUNoYW5nZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlTW91c2VPYnNlcnZhYmxlcyhyZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU1vdXNlT2JzZXJ2YWJsZXMocmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgLy8gTU9VU0VcclxuXHJcbiAgICBsZXQgcmVtb3ZlTW91c2VNb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVNb3VzZU1vdmVMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgIHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJtb3VzZW1vdmVcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlTW91c2VNb3ZlTGlzdGVuZXIsICgpID0+IHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyKCkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KSk7XHJcblxyXG4gICAgbGV0IHJlbW92ZU1vdXNlVXBMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICAgIGNvbnN0IGNyZWF0ZU1vdXNlVXBMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgIHJlbW92ZU1vdXNlVXBMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwibW91c2V1cFwiLCBoYW5kbGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgZnJvbUV2ZW50UGF0dGVybjxNb3VzZUV2ZW50PihjcmVhdGVNb3VzZVVwTGlzdGVuZXIsICgpID0+IHJlbW92ZU1vdXNlVXBMaXN0ZW5lcigpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbk1vdXNlVXAoZXZlbnQpKTtcclxuXHJcbiAgICAvLyBUT1VDSFxyXG5cclxuICAgIGxldCByZW1vdmVQYW5Nb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVQYW5Nb3ZlTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICByZW1vdmVQYW5Nb3ZlTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcInBhbm1vdmVcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlUGFuTW92ZUxpc3RlbmVyLCAoKSA9PiByZW1vdmVQYW5Nb3ZlTGlzdGVuZXIoKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpKTtcclxuXHJcbiAgICBsZXQgcmVtb3ZlUGFuRW5kTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVQYW5FbmRMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgIHJlbW92ZVBhbkVuZExpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJwYW5lbmRcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlUGFuRW5kTGlzdGVuZXIsICgpID0+IHJlbW92ZVBhbkVuZExpc3RlbmVyKCkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VVcChldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IG1vdXNlTW92ZSA9IHRoaXMuX21vdXNlTW92ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgbW91c2VVcCA9IHRoaXMuX21vdXNlVXBTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHJlYWRvbmx5IGFjdGl2ZUNoYW5nZWQgPSB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGlzTW92aW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTW92aW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlKGZpZWxkTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5uZXh0KGZpZWxkTmFtZSk7XHJcbiAgfVxyXG5cclxuICBiZWdpbk1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogUG9pbnQge1xyXG4gICAgbGV0IG1vdXNlUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XHJcbiAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIG1vdXNlUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIHRoaXMuX21vdXNlTW92ZVN1YmplY3QubmV4dChtb3VzZVBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVVwKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIHRoaXMuX21vdXNlVXBTdWJqZWN0Lm5leHQobW91c2VQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
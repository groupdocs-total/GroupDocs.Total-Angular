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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvZmllbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHaEQ7SUFnQkUsc0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBWDlDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUN6QyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFDdkMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUU3QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDOztZQUczRCxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBRWpFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7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SyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxrQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsTUFBa0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSOztZQUVLLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRU8sZ0NBQVM7Ozs7O0lBQWpCLFVBQWtCLE1BQWtCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFFSyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOztnQkFyR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUUSxnQkFBZ0I7Ozt1QkFEekI7Q0E4R0MsQUF0R0QsSUFzR0M7U0FuR1ksWUFBWTs7Ozs7O0lBRXZCLGdDQUFpQzs7Ozs7SUFDakMsaUNBQTBCOzs7OztJQUUxQix5Q0FBaUQ7Ozs7O0lBQ2pELHVDQUErQzs7Ozs7SUFDL0MsNkNBQXNEOztJQUV0RCxpQ0FBMkQ7O0lBQzNELCtCQUF1RDs7SUFDdkQscUNBQW1FOzs7OztJQUV2RCx3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50UGF0dGVybiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfbW91c2VNb3ZlU3ViamVjdCA9IG5ldyBTdWJqZWN0PFBvaW50PigpO1xyXG4gIHByaXZhdGUgX21vdXNlVXBTdWJqZWN0ID0gbmV3IFN1YmplY3Q8UG9pbnQ+KCk7XHJcbiAgcHJpdmF0ZSBfYWN0aXZlQ2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIHJlYWRvbmx5IG1vdXNlTW92ZSA9IHRoaXMuX21vdXNlTW92ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgbW91c2VVcCA9IHRoaXMuX21vdXNlVXBTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHJlYWRvbmx5IGFjdGl2ZUNoYW5nZWQgPSB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU1vdXNlT2JzZXJ2YWJsZXMocmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVNb3VzZU9ic2VydmFibGVzKHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIC8vIE1PVVNFXHJcblxyXG4gICAgbGV0IHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG4gICAgY29uc3QgY3JlYXRlTW91c2VNb3ZlTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICByZW1vdmVNb3VzZU1vdmVMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwibW91c2Vtb3ZlXCIsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmcm9tRXZlbnRQYXR0ZXJuPE1vdXNlRXZlbnQ+KGNyZWF0ZU1vdXNlTW92ZUxpc3RlbmVyLCAoKSA9PiByZW1vdmVNb3VzZU1vdmVMaXN0ZW5lcigpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbk1vdXNlTW92ZShldmVudCkpO1xyXG5cclxuICAgIGxldCByZW1vdmVNb3VzZVVwTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVNb3VzZVVwTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICByZW1vdmVNb3VzZVVwTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcIm1vdXNldXBcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlTW91c2VVcExpc3RlbmVyLCAoKSA9PiByZW1vdmVNb3VzZVVwTGlzdGVuZXIoKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25Nb3VzZVVwKGV2ZW50KSk7XHJcblxyXG4gICAgLy8gVE9VQ0hcclxuXHJcbiAgICBsZXQgcmVtb3ZlUGFuTW92ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG4gICAgY29uc3QgY3JlYXRlUGFuTW92ZUxpc3RlbmVyID0gKGhhbmRsZXI6IChlOiBFdmVudCkgPT4gYm9vbGVhbiB8IHZvaWQpID0+IHtcclxuICAgICAgcmVtb3ZlUGFuTW92ZUxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJwYW5tb3ZlXCIsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmcm9tRXZlbnRQYXR0ZXJuPE1vdXNlRXZlbnQ+KGNyZWF0ZVBhbk1vdmVMaXN0ZW5lciwgKCkgPT4gcmVtb3ZlUGFuTW92ZUxpc3RlbmVyKCkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KSk7XHJcblxyXG4gICAgbGV0IHJlbW92ZVBhbkVuZExpc3RlbmVyOiAoKSA9PiB2b2lkO1xyXG4gICAgY29uc3QgY3JlYXRlUGFuRW5kTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICByZW1vdmVQYW5FbmRMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwicGFuZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmcm9tRXZlbnRQYXR0ZXJuPE1vdXNlRXZlbnQ+KGNyZWF0ZVBhbkVuZExpc3RlbmVyLCAoKSA9PiByZW1vdmVQYW5FbmRMaXN0ZW5lcigpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbk1vdXNlVXAoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNb3ZpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNNb3Zpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRBY3RpdmUoZmllbGROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2FjdGl2ZUNoYW5nZWRTdWJqZWN0Lm5leHQoZmllbGROYW1lKTtcclxuICB9XHJcblxyXG4gIGJlZ2luTW92ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBQb2ludCB7XHJcbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG4gICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiBtb3VzZVBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc01vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIHRoaXMuX21vdXNlTW92ZVN1YmplY3QubmV4dChtb3VzZVBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVVwKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG4gICAgdGhpcy5fbW91c2VVcFN1YmplY3QubmV4dChtb3VzZVBvc2l0aW9uKTtcclxuICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvZmllbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHaEQ7SUFnQkUsc0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBWDlDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUN6QyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFDdkMsMEJBQXFCLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUU3QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDOztZQUczRCxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBRWpFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7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SyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxrQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsTUFBa0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSOztZQUVLLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRU8sZ0NBQVM7Ozs7O0lBQWpCLFVBQWtCLE1BQWtCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFFSyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOztnQkFyR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUUSxnQkFBZ0I7Ozt1QkFEekI7Q0E4R0MsQUF0R0QsSUFzR0M7U0FuR1ksWUFBWTs7Ozs7O0lBRXZCLGdDQUFpQzs7Ozs7SUFDakMsaUNBQTBCOzs7OztJQUUxQix5Q0FBaUQ7Ozs7O0lBQ2pELHVDQUErQzs7Ozs7SUFDL0MsNkNBQXNEOztJQUV0RCxpQ0FBMkQ7O0lBQzNELCtCQUF1RDs7SUFDdkQscUNBQW1FOzs7OztJQUV2RCx3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IGZyb21FdmVudFBhdHRlcm4sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWVsZFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX21vdXNlTW92ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxQb2ludD4oKTtcbiAgcHJpdmF0ZSBfbW91c2VVcFN1YmplY3QgPSBuZXcgU3ViamVjdDxQb2ludD4oKTtcbiAgcHJpdmF0ZSBfYWN0aXZlQ2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgcmVhZG9ubHkgbW91c2VNb3ZlID0gdGhpcy5fbW91c2VNb3ZlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcmVhZG9ubHkgbW91c2VVcCA9IHRoaXMuX21vdXNlVXBTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICByZWFkb25seSBhY3RpdmVDaGFuZ2VkID0gdGhpcy5fYWN0aXZlQ2hhbmdlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLmNyZWF0ZU1vdXNlT2JzZXJ2YWJsZXMocmVuZGVyZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNb3VzZU9ic2VydmFibGVzKHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICAvLyBNT1VTRVxuXG4gICAgbGV0IHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0IGNyZWF0ZU1vdXNlTW92ZUxpc3RlbmVyID0gKGhhbmRsZXI6IChlOiBFdmVudCkgPT4gYm9vbGVhbiB8IHZvaWQpID0+IHtcbiAgICAgIHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJtb3VzZW1vdmVcIiwgaGFuZGxlcik7XG4gICAgfTtcblxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlTW91c2VNb3ZlTGlzdGVuZXIsICgpID0+IHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyKCkpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpKTtcblxuICAgIGxldCByZW1vdmVNb3VzZVVwTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgY29uc3QgY3JlYXRlTW91c2VVcExpc3RlbmVyID0gKGhhbmRsZXI6IChlOiBFdmVudCkgPT4gYm9vbGVhbiB8IHZvaWQpID0+IHtcbiAgICAgIHJlbW92ZU1vdXNlVXBMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwibW91c2V1cFwiLCBoYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgZnJvbUV2ZW50UGF0dGVybjxNb3VzZUV2ZW50PihjcmVhdGVNb3VzZVVwTGlzdGVuZXIsICgpID0+IHJlbW92ZU1vdXNlVXBMaXN0ZW5lcigpKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VVcChldmVudCkpO1xuXG4gICAgLy8gVE9VQ0hcblxuICAgIGxldCByZW1vdmVQYW5Nb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgY29uc3QgY3JlYXRlUGFuTW92ZUxpc3RlbmVyID0gKGhhbmRsZXI6IChlOiBFdmVudCkgPT4gYm9vbGVhbiB8IHZvaWQpID0+IHtcbiAgICAgIHJlbW92ZVBhbk1vdmVMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwicGFubW92ZVwiLCBoYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgZnJvbUV2ZW50UGF0dGVybjxNb3VzZUV2ZW50PihjcmVhdGVQYW5Nb3ZlTGlzdGVuZXIsICgpID0+IHJlbW92ZVBhbk1vdmVMaXN0ZW5lcigpKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KSk7XG5cbiAgICBsZXQgcmVtb3ZlUGFuRW5kTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgY29uc3QgY3JlYXRlUGFuRW5kTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xuICAgICAgcmVtb3ZlUGFuRW5kTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcInBhbmVuZFwiLCBoYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgZnJvbUV2ZW50UGF0dGVybjxNb3VzZUV2ZW50PihjcmVhdGVQYW5FbmRMaXN0ZW5lciwgKCkgPT4gcmVtb3ZlUGFuRW5kTGlzdGVuZXIoKSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbk1vdXNlVXAoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldCBpc01vdmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faXNNb3Zpbmc7XG4gIH1cblxuICBzZXRBY3RpdmUoZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5uZXh0KGZpZWxkTmFtZSk7XG4gIH1cblxuICBiZWdpbk1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogUG9pbnQge1xuICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG1vdXNlUG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VNb3ZlKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5pc01vdmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgdGhpcy5fbW91c2VNb3ZlU3ViamVjdC5uZXh0KG1vdXNlUG9zaXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlVXAoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICB0aGlzLl9tb3VzZVVwU3ViamVjdC5uZXh0KG1vdXNlUG9zaXRpb24pO1xuICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
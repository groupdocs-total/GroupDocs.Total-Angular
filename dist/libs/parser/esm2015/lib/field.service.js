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
export class FieldService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
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
        const renderer = this.rendererFactory2.createRenderer(null, null);
        this.createMouseObservables(renderer);
    }
    /**
     * @private
     * @param {?} renderer
     * @return {?}
     */
    createMouseObservables(renderer) {
        // MOUSE
        // MOUSE
        /** @type {?} */
        let removeMouseMoveListener;
        /** @type {?} */
        const createMouseMoveListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removeMouseMoveListener = renderer.listen("document", "mousemove", handler);
        });
        fromEventPattern(createMouseMoveListener, (/**
         * @return {?}
         */
        () => removeMouseMoveListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseMove(event)));
        /** @type {?} */
        let removeMouseUpListener;
        /** @type {?} */
        const createMouseUpListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removeMouseUpListener = renderer.listen("document", "mouseup", handler);
        });
        fromEventPattern(createMouseUpListener, (/**
         * @return {?}
         */
        () => removeMouseUpListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseUp(event)));
        // TOUCH
        /** @type {?} */
        let removePanMoveListener;
        /** @type {?} */
        const createPanMoveListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removePanMoveListener = renderer.listen("document", "panmove", handler);
        });
        fromEventPattern(createPanMoveListener, (/**
         * @return {?}
         */
        () => removePanMoveListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseMove(event)));
        /** @type {?} */
        let removePanEndListener;
        /** @type {?} */
        const createPanEndListener = (/**
         * @param {?} handler
         * @return {?}
         */
        (handler) => {
            removePanEndListener = renderer.listen("document", "panend", handler);
        });
        fromEventPattern(createPanEndListener, (/**
         * @return {?}
         */
        () => removePanEndListener()))
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => this.onMouseUp(event)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * @return {?}
     */
    get isMoving() {
        return this._isMoving;
    }
    /**
     * @param {?} fieldName
     * @return {?}
     */
    setActive(fieldName) {
        this._activeChangedSubject.next(fieldName);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    beginMove($event) {
        /** @type {?} */
        let mousePosition = Utils.getMousePosition($event);
        this._isMoving = true;
        return mousePosition;
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    onMouseMove($event) {
        if (!this.isMoving) {
            return;
        }
        /** @type {?} */
        let mousePosition = Utils.getMousePosition($event);
        this._mouseMoveSubject.next(mousePosition);
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    onMouseUp($event) {
        if (!this.isMoving) {
            return;
        }
        /** @type {?} */
        let mousePosition = Utils.getMousePosition($event);
        this._mouseUpSubject.next(mousePosition);
        this._isMoving = false;
    }
}
FieldService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FieldService.ctorParameters = () => [
    { type: RendererFactory2 }
];
/** @nocollapse */ FieldService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FieldService_Factory() { return new FieldService(i0.ɵɵinject(i0.RendererFactory2)); }, token: FieldService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvZmllbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNaEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFTdkIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQ3pDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBdUQ3QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDOztjQXREM0QsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUVqRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENB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Q0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsTUFBa0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSOztZQUVHLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLE1BQWtCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFFRyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7WUFyR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEsZ0JBQWdCOzs7Ozs7OztJQVl2QixnQ0FBaUM7Ozs7O0lBQ2pDLGlDQUEwQjs7Ozs7SUFFMUIseUNBQWlEOzs7OztJQUNqRCx1Q0FBK0M7Ozs7O0lBQy9DLDZDQUFzRDs7SUF1RHRELGlDQUEyRDs7SUFDM0QsK0JBQXVEOztJQUN2RCxxQ0FBbUU7Ozs7O0lBdkR2RCx3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGZyb21FdmVudFBhdHRlcm4sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX2lzTW92aW5nID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX21vdXNlTW92ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxQb2ludD4oKTtcclxuICBwcml2YXRlIF9tb3VzZVVwU3ViamVjdCA9IG5ldyBTdWJqZWN0PFBvaW50PigpO1xyXG4gIHByaXZhdGUgX2FjdGl2ZUNoYW5nZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlTW91c2VPYnNlcnZhYmxlcyhyZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU1vdXNlT2JzZXJ2YWJsZXMocmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgLy8gTU9VU0VcclxuXHJcbiAgICBsZXQgcmVtb3ZlTW91c2VNb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVNb3VzZU1vdmVMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgIHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJtb3VzZW1vdmVcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlTW91c2VNb3ZlTGlzdGVuZXIsICgpID0+IHJlbW92ZU1vdXNlTW92ZUxpc3RlbmVyKCkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KSk7XHJcblxyXG4gICAgbGV0IHJlbW92ZU1vdXNlVXBMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICAgIGNvbnN0IGNyZWF0ZU1vdXNlVXBMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgIHJlbW92ZU1vdXNlVXBMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwibW91c2V1cFwiLCBoYW5kbGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgZnJvbUV2ZW50UGF0dGVybjxNb3VzZUV2ZW50PihjcmVhdGVNb3VzZVVwTGlzdGVuZXIsICgpID0+IHJlbW92ZU1vdXNlVXBMaXN0ZW5lcigpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbk1vdXNlVXAoZXZlbnQpKTtcclxuXHJcbiAgICAvLyBUT1VDSFxyXG5cclxuICAgIGxldCByZW1vdmVQYW5Nb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVQYW5Nb3ZlTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xyXG4gICAgICByZW1vdmVQYW5Nb3ZlTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcInBhbm1vdmVcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlUGFuTW92ZUxpc3RlbmVyLCAoKSA9PiByZW1vdmVQYW5Nb3ZlTGlzdGVuZXIoKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpKTtcclxuXHJcbiAgICBsZXQgcmVtb3ZlUGFuRW5kTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdCBjcmVhdGVQYW5FbmRMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XHJcbiAgICAgIHJlbW92ZVBhbkVuZExpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJwYW5lbmRcIiwgaGFuZGxlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZyb21FdmVudFBhdHRlcm48TW91c2VFdmVudD4oY3JlYXRlUGFuRW5kTGlzdGVuZXIsICgpID0+IHJlbW92ZVBhbkVuZExpc3RlbmVyKCkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VVcChldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHJlYWRvbmx5IG1vdXNlTW92ZSA9IHRoaXMuX21vdXNlTW92ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcmVhZG9ubHkgbW91c2VVcCA9IHRoaXMuX21vdXNlVXBTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHJlYWRvbmx5IGFjdGl2ZUNoYW5nZWQgPSB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGlzTW92aW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTW92aW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlKGZpZWxkTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5uZXh0KGZpZWxkTmFtZSk7XHJcbiAgfVxyXG5cclxuICBiZWdpbk1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogUG9pbnQge1xyXG4gICAgbGV0IG1vdXNlUG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XHJcbiAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIG1vdXNlUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIHRoaXMuX21vdXNlTW92ZVN1YmplY3QubmV4dChtb3VzZVBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVVwKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuICAgIHRoaXMuX21vdXNlVXBTdWJqZWN0Lm5leHQobW91c2VQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=
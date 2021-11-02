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
        const mousePosition = Utils.getMousePosition($event);
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
        const mousePosition = Utils.getMousePosition($event);
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
        const mousePosition = Utils.getMousePosition($event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvZmllbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNaEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFhdkIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYOUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQ3pDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRTdDLGNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsWUFBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7O2NBRzNELFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFFakUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFD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QUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLE1BQWtCO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7Y0FFSyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxNQUFrQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7O2NBRUssYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7O1lBckdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRRLGdCQUFnQjs7Ozs7Ozs7SUFZdkIsZ0NBQWlDOzs7OztJQUNqQyxpQ0FBMEI7Ozs7O0lBRTFCLHlDQUFpRDs7Ozs7SUFDakQsdUNBQStDOzs7OztJQUMvQyw2Q0FBc0Q7O0lBRXRELGlDQUEyRDs7SUFDM0QsK0JBQXVEOztJQUN2RCxxQ0FBbUU7Ozs7O0lBRXZELHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50UGF0dGVybiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vYXBwLW1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX2lzTW92aW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbW91c2VNb3ZlU3ViamVjdCA9IG5ldyBTdWJqZWN0PFBvaW50PigpO1xuICBwcml2YXRlIF9tb3VzZVVwU3ViamVjdCA9IG5ldyBTdWJqZWN0PFBvaW50PigpO1xuICBwcml2YXRlIF9hY3RpdmVDaGFuZ2VkU3ViamVjdCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICByZWFkb25seSBtb3VzZU1vdmUgPSB0aGlzLl9tb3VzZU1vdmVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICByZWFkb25seSBtb3VzZVVwID0gdGhpcy5fbW91c2VVcFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHJlYWRvbmx5IGFjdGl2ZUNoYW5nZWQgPSB0aGlzLl9hY3RpdmVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcblxuICAgIHRoaXMuY3JlYXRlTW91c2VPYnNlcnZhYmxlcyhyZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1vdXNlT2JzZXJ2YWJsZXMocmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIC8vIE1PVVNFXG5cbiAgICBsZXQgcmVtb3ZlTW91c2VNb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgY29uc3QgY3JlYXRlTW91c2VNb3ZlTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xuICAgICAgcmVtb3ZlTW91c2VNb3ZlTGlzdGVuZXIgPSByZW5kZXJlci5saXN0ZW4oXCJkb2N1bWVudFwiLCBcIm1vdXNlbW92ZVwiLCBoYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgZnJvbUV2ZW50UGF0dGVybjxNb3VzZUV2ZW50PihjcmVhdGVNb3VzZU1vdmVMaXN0ZW5lciwgKCkgPT4gcmVtb3ZlTW91c2VNb3ZlTGlzdGVuZXIoKSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbk1vdXNlTW92ZShldmVudCkpO1xuXG4gICAgbGV0IHJlbW92ZU1vdXNlVXBMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgICBjb25zdCBjcmVhdGVNb3VzZVVwTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xuICAgICAgcmVtb3ZlTW91c2VVcExpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJtb3VzZXVwXCIsIGhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBmcm9tRXZlbnRQYXR0ZXJuPE1vdXNlRXZlbnQ+KGNyZWF0ZU1vdXNlVXBMaXN0ZW5lciwgKCkgPT4gcmVtb3ZlTW91c2VVcExpc3RlbmVyKCkpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25Nb3VzZVVwKGV2ZW50KSk7XG5cbiAgICAvLyBUT1VDSFxuXG4gICAgbGV0IHJlbW92ZVBhbk1vdmVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgICBjb25zdCBjcmVhdGVQYW5Nb3ZlTGlzdGVuZXIgPSAoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiBib29sZWFuIHwgdm9pZCkgPT4ge1xuICAgICAgcmVtb3ZlUGFuTW92ZUxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJwYW5tb3ZlXCIsIGhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBmcm9tRXZlbnRQYXR0ZXJuPE1vdXNlRXZlbnQ+KGNyZWF0ZVBhbk1vdmVMaXN0ZW5lciwgKCkgPT4gcmVtb3ZlUGFuTW92ZUxpc3RlbmVyKCkpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpKTtcblxuICAgIGxldCByZW1vdmVQYW5FbmRMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgICBjb25zdCBjcmVhdGVQYW5FbmRMaXN0ZW5lciA9IChoYW5kbGVyOiAoZTogRXZlbnQpID0+IGJvb2xlYW4gfCB2b2lkKSA9PiB7XG4gICAgICByZW1vdmVQYW5FbmRMaXN0ZW5lciA9IHJlbmRlcmVyLmxpc3RlbihcImRvY3VtZW50XCIsIFwicGFuZW5kXCIsIGhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBmcm9tRXZlbnRQYXR0ZXJuPE1vdXNlRXZlbnQ+KGNyZWF0ZVBhbkVuZExpc3RlbmVyLCAoKSA9PiByZW1vdmVQYW5FbmRMaXN0ZW5lcigpKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLm9uTW91c2VVcChldmVudCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzTW92aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc01vdmluZztcbiAgfVxuXG4gIHNldEFjdGl2ZShmaWVsZE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGl2ZUNoYW5nZWRTdWJqZWN0Lm5leHQoZmllbGROYW1lKTtcbiAgfVxuXG4gIGJlZ2luTW92ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiBQb2ludCB7XG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XG5cbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzTW92aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcbiAgICB0aGlzLl9tb3VzZU1vdmVTdWJqZWN0Lm5leHQobW91c2VQb3NpdGlvbik7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VVcCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3ZpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZVBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuICAgIHRoaXMuX21vdXNlVXBTdWJqZWN0Lm5leHQobW91c2VQb3NpdGlvbik7XG4gICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcbiAgfVxufVxuIl19
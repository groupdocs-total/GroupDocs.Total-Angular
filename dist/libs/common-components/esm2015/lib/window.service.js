/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromEvent, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, startWith, tap } from "rxjs/operators";
/** @type {?} */
const MOBILE_MAX_WIDTH = 425;
/** @type {?} */
const TABLET_MAX_WIDTH = 1024;
export class WindowService {
    constructor() {
        this.resizeSubject = new Subject();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200), distinctUntilChanged(), startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), tap((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.resizeSubject.next((/** @type {?} */ (event.target)));
            this.width = ((/** @type {?} */ (event.target))).innerWidth;
            this.height = ((/** @type {?} */ (event.target))).innerHeight;
        })));
        this._resize$.subscribe();
    }
    /**
     * @return {?}
     */
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    /**
     * @return {?}
     */
    isMobile() {
        return this.width <= MOBILE_MAX_WIDTH;
    }
    /**
     * @return {?}
     */
    isTablet() {
        return this.width <= TABLET_MAX_WIDTH;
    }
    /**
     * @return {?}
     */
    isDesktop() {
        return !this.isMobile() && !this.isTablet();
    }
    /**
     * @return {?}
     */
    getWidth() {
        return this.width;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.height;
    }
    /**
     * @return {?}
     */
    isEdge() {
        return window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    }
    /**
     * @return {?}
     */
    isFirefox() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype.resizeSubject;
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype._resize$;
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype.width;
    /**
     * @type {?}
     * @private
     */
    WindowService.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztNQUU1RSxnQkFBZ0IsR0FBRyxHQUFHOztNQUN0QixnQkFBZ0IsR0FBRyxJQUFJO0FBRTdCLE1BQU0sT0FBTyxhQUFhO0lBT3hCO1FBTFEsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU1yRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsRUFBQyxDQUFDLEVBQ3JGLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFVLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Y7Ozs7OztJQXREQyxzQ0FBdUQ7Ozs7O0lBQ3ZELGlDQUFpQjs7Ozs7SUFDakIsOEJBQXNCOzs7OztJQUN0QiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3RhcnRXaXRoLCB0YXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5jb25zdCBNT0JJTEVfTUFYX1dJRFRIID0gNDI1O1xuY29uc3QgVEFCTEVUX01BWF9XSURUSCA9IDEwMjQ7XG5cbmV4cG9ydCBjbGFzcyBXaW5kb3dTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlc2l6ZVN1YmplY3Q6IFN1YmplY3Q8V2luZG93PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX3Jlc2l6ZSQ7XG4gIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLl9yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHN0YXJ0V2l0aCh7dGFyZ2V0OiB7aW5uZXJXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIGlubmVySGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9fSksXG4gICAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNpemVTdWJqZWN0Lm5leHQoPFdpbmRvdz5ldmVudC50YXJnZXQpO1xuICAgICAgICAgIHRoaXMud2lkdGggPSAoZXZlbnQudGFyZ2V0IGFzIFdpbmRvdykuaW5uZXJXaWR0aDtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IChldmVudC50YXJnZXQgYXMgV2luZG93KS5pbm5lckhlaWdodDtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIHRoaXMuX3Jlc2l6ZSQuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXQgb25SZXNpemUoKTogT2JzZXJ2YWJsZTxXaW5kb3c+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNpemVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgaXNNb2JpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggPD0gTU9CSUxFX01BWF9XSURUSDtcbiAgfVxuXG4gIGlzVGFibGV0KCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoIDw9IFRBQkxFVF9NQVhfV0lEVEg7XG4gIH1cblxuICBpc0Rlc2t0b3AoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTW9iaWxlKCkgJiYgIXRoaXMuaXNUYWJsZXQoKTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGlzRWRnZSgpIHtcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcbiAgfVxuXG4gIGlzRmlyZWZveCgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuICB9XG59XG4iXX0=
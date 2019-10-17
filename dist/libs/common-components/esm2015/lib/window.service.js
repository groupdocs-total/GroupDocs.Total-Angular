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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztNQUU1RSxnQkFBZ0IsR0FBRyxHQUFHOztNQUN0QixnQkFBZ0IsR0FBRyxJQUFJO0FBRTdCLE1BQU0sT0FBTyxhQUFhO0lBT3hCO1FBTFEsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU1yRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsRUFBQyxDQUFDLEVBQ3JGLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG1CQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFVLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Y7Ozs7OztJQTlDQyxzQ0FBdUQ7Ozs7O0lBQ3ZELGlDQUFpQjs7Ozs7SUFDakIsOEJBQXNCOzs7OztJQUN0QiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Zyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHRhcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5jb25zdCBNT0JJTEVfTUFYX1dJRFRIID0gNDI1O1xyXG5jb25zdCBUQUJMRVRfTUFYX1dJRFRIID0gMTAyNDtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSByZXNpemVTdWJqZWN0OiBTdWJqZWN0PFdpbmRvdz4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX3Jlc2l6ZSQ7XHJcbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5fcmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIHN0YXJ0V2l0aCh7dGFyZ2V0OiB7aW5uZXJXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIGlubmVySGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9fSksXHJcbiAgICAgICAgdGFwKGV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMucmVzaXplU3ViamVjdC5uZXh0KDxXaW5kb3c+ZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgIHRoaXMud2lkdGggPSAoZXZlbnQudGFyZ2V0IGFzIFdpbmRvdykuaW5uZXJXaWR0aDtcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gKGV2ZW50LnRhcmdldCBhcyBXaW5kb3cpLmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gICAgdGhpcy5fcmVzaXplJC5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGdldCBvblJlc2l6ZSgpOiBPYnNlcnZhYmxlPFdpbmRvdz4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzaXplU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGlzTW9iaWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggPD0gTU9CSUxFX01BWF9XSURUSDtcclxuICB9XHJcblxyXG4gIGlzVGFibGV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGggPD0gVEFCTEVUX01BWF9XSURUSDtcclxuICB9XHJcblxyXG4gIGlzRGVza3RvcCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5pc01vYmlsZSgpICYmICF0aGlzLmlzVGFibGV0KCk7XHJcbiAgfVxyXG5cclxuICBpc0VkZ2UoKSB7XHJcbiAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcclxuICB9XHJcblxyXG4gIGlzRmlyZWZveCgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XHJcbiAgfVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { fromEvent, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, startWith, tap } from "rxjs/operators";
/** @type {?} */
var MOBILE_MAX_WIDTH = 425;
/** @type {?} */
var TABLET_MAX_WIDTH = 1024;
var WindowService = /** @class */ (function () {
    function WindowService() {
        var _this = this;
        this.resizeSubject = new Subject();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200), distinctUntilChanged(), startWith({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.resizeSubject.next((/** @type {?} */ (event.target)));
            _this.width = ((/** @type {?} */ (event.target))).innerWidth;
            _this.height = ((/** @type {?} */ (event.target))).innerHeight;
        })));
        this._resize$.subscribe();
    }
    Object.defineProperty(WindowService.prototype, "onResize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WindowService.prototype.isMobile = /**
     * @return {?}
     */
    function () {
        return this.width <= MOBILE_MAX_WIDTH;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.isTablet = /**
     * @return {?}
     */
    function () {
        return this.width <= TABLET_MAX_WIDTH;
    };
    /**
     * @return {?}
     */
    WindowService.prototype.isDesktop = /**
     * @return {?}
     */
    function () {
        return !this.isMobile() && !this.isTablet();
    };
    return WindowService;
}());
export { WindowService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2luZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOztJQUU1RSxnQkFBZ0IsR0FBRyxHQUFHOztJQUN0QixnQkFBZ0IsR0FBRyxJQUFJO0FBRTdCO0lBT0U7UUFBQSxpQkFnQkM7UUFyQk8sa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU1yRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsRUFDdEIsU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUMsRUFBQyxDQUFDLEVBQ3JGLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDUCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxtQkFBUSxLQUFLLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFVLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDckQsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLG1DQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDOzs7Ozs7O0lBdENDLHNDQUF1RDs7Ozs7SUFDdkQsaUNBQWlCOzs7OztJQUNqQiw4QkFBc0I7Ozs7O0lBQ3RCLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzdGFydFdpdGgsIHRhcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmNvbnN0IE1PQklMRV9NQVhfV0lEVEggPSA0MjU7XG5jb25zdCBUQUJMRVRfTUFYX1dJRFRIID0gMTAyNDtcblxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVzaXplU3ViamVjdDogU3ViamVjdDxXaW5kb3c+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfcmVzaXplJDtcbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMuX3Jlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgc3RhcnRXaXRoKHt0YXJnZXQ6IHtpbm5lcldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH19KSxcbiAgICAgICAgdGFwKGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZVN1YmplY3QubmV4dCg8V2luZG93PmV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgdGhpcy53aWR0aCA9IChldmVudC50YXJnZXQgYXMgV2luZG93KS5pbm5lcldpZHRoO1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gKGV2ZW50LnRhcmdldCBhcyBXaW5kb3cpLmlubmVySGVpZ2h0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgdGhpcy5fcmVzaXplJC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldCBvblJlc2l6ZSgpOiBPYnNlcnZhYmxlPFdpbmRvdz4ge1xuICAgIHJldHVybiB0aGlzLnJlc2l6ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpc01vYmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCA8PSBNT0JJTEVfTUFYX1dJRFRIO1xuICB9XG5cbiAgaXNUYWJsZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggPD0gVEFCTEVUX01BWF9XSURUSDtcbiAgfVxuXG4gIGlzRGVza3RvcCgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNNb2JpbGUoKSAmJiAhdGhpcy5pc1RhYmxldCgpO1xuICB9XG59XG4iXX0=
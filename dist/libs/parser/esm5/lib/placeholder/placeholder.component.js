/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlaceholderService } from '../placeholder.service';
var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent(placeholderService) {
        var _this = this;
        this._destroy = new Subject();
        this.progress = null;
        placeholderService.descriptionChanged
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            _this.description = d;
            _this.progress = null;
            _this.isVisible = true;
        }));
        /** @type {?} */
        var stateSubscription;
        placeholderService.stateChanged
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (stateSubscription) {
                stateSubscription.unsubscribe();
            }
            /** @type {?} */
            var observer = {
                next: (/**
                 * @param {?} progress
                 * @return {?}
                 */
                function (progress) { return _this.progress = progress; }),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return _this.isVisible = false; }),
                complete: (/**
                 * @return {?}
                 */
                function () { return _this.isVisible = false; })
            };
            stateSubscription = state.subscribe(observer);
        }));
    }
    /**
     * @return {?}
     */
    PlaceholderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PlaceholderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    PlaceholderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-placeholder',
                    template: "<div class=\"loading-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"loading-message\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n        <div>{{ description }}</div>\r\n    </div>\r\n</div>",
                    styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-message>fa-icon{margin-bottom:10px;font-size:25px;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    PlaceholderComponent.ctorParameters = function () { return [
        { type: PlaceholderService }
    ]; };
    return PlaceholderComponent;
}());
export { PlaceholderComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlaceholderComponent.prototype._destroy;
    /** @type {?} */
    PlaceholderComponent.prototype.description;
    /** @type {?} */
    PlaceholderComponent.prototype.progress;
    /** @type {?} */
    PlaceholderComponent.prototype.isVisible;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQVFFLDhCQUFZLGtCQUFzQztRQUFsRCxpQkF5QkM7UUEzQk8sYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUE4QmpDLGFBQVEsR0FBVyxJQUFJLENBQUM7UUEzQnRCLGtCQUFrQixDQUFDLGtCQUFrQjthQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1YsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7O1lBRUQsaUJBQStCO1FBQ25DLGtCQUFrQixDQUFDLFlBQVk7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNkLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2pDOztnQkFFSyxRQUFRLEdBQUc7Z0JBQ2YsSUFBSTs7OztnQkFBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFBO2dCQUMxQyxLQUFLOzs7O2dCQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQXRCLENBQXNCLENBQUE7Z0JBQ3BDLFFBQVE7OztnQkFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQXRCLENBQXNCLENBQUE7YUFDdkM7WUFFRCxpQkFBaUIsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQU1ELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix1UEFBMkM7O2lCQUU1Qzs7OztnQkFOUSxrQkFBa0I7O0lBaUQzQiwyQkFBQztDQUFBLEFBL0NELElBK0NDO1NBMUNZLG9CQUFvQjs7Ozs7O0lBQy9CLHdDQUFpQzs7SUE2QmpDLDJDQUFvQjs7SUFDcEIsd0NBQXdCOztJQUN4Qix5Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBsYWNlaG9sZGVyU2VydmljZSB9IGZyb20gJy4uL3BsYWNlaG9sZGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGxhY2Vob2xkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGFjZWhvbGRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGxhY2Vob2xkZXIuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlKSB7XHJcbiAgICBwbGFjZWhvbGRlclNlcnZpY2UuZGVzY3JpcHRpb25DaGFuZ2VkXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBzdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcGxhY2Vob2xkZXJTZXJ2aWNlLnN0YXRlQ2hhbmdlZFxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgbmV4dDogcHJvZ3Jlc3MgPT4gdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzLFxyXG4gICAgICAgICAgZXJyb3I6IGVyciA9PiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlLFxyXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdGF0ZVN1YnNjcmlwdGlvbiA9IHN0YXRlLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcm9ncmVzczogbnVtYmVyID0gbnVsbDtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
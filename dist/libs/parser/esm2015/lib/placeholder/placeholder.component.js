/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlaceholderService } from '../placeholder.service';
export class PlaceholderComponent {
    /**
     * @param {?} placeholderService
     */
    constructor(placeholderService) {
        this._destroy = new Subject();
        this.progress = null;
        placeholderService.descriptionChanged
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            this.description = d;
            this.progress = null;
            this.isVisible = true;
        }));
        /** @type {?} */
        let stateSubscription;
        placeholderService.stateChanged
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            if (stateSubscription) {
                stateSubscription.unsubscribe();
            }
            /** @type {?} */
            const observer = {
                next: (/**
                 * @param {?} progress
                 * @return {?}
                 */
                progress => this.progress = progress),
                error: (/**
                 * @param {?} err
                 * @return {?}
                 */
                err => this.isVisible = false),
                complete: (/**
                 * @return {?}
                 */
                () => this.isVisible = false)
            };
            stateSubscription = state.subscribe(observer);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
}
PlaceholderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-placeholder',
                template: "<div class=\"loading-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"loading-message\">\r\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\r\n        <div>{{ description }}</div>\r\n    </div>\r\n</div>",
                styles: [".loading-wrapper{background:rgba(0,0,0,.5);width:100%;height:100%;font-size:14px;color:#fff;position:fixed;top:0;left:0;z-index:99999}.loading-message{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-message>fa-icon{margin-bottom:10px;font-size:25px;text-align:center}"]
            }] }
];
/** @nocollapse */
PlaceholderComponent.ctorParameters = () => [
    { type: PlaceholderService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQVksa0JBQXNDO1FBRjFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBOEJqQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBM0J0QixrQkFBa0IsQ0FBQyxrQkFBa0I7YUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7O1lBRUQsaUJBQStCO1FBQ25DLGtCQUFrQixDQUFDLFlBQVk7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2pDOztrQkFFSyxRQUFRLEdBQUc7Z0JBQ2YsSUFBSTs7OztnQkFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO2dCQUMxQyxLQUFLOzs7O2dCQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQ3BDLFFBQVE7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTthQUN2QztZQUVELGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBTUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsdVBBQTJDOzthQUU1Qzs7OztZQU5RLGtCQUFrQjs7Ozs7OztJQVF6Qix3Q0FBaUM7O0lBNkJqQywyQ0FBb0I7O0lBQ3BCLHdDQUF3Qjs7SUFDeEIseUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcGxhY2Vob2xkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGFjZWhvbGRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGxhY2Vob2xkZXIuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlKSB7XHJcbiAgICBwbGFjZWhvbGRlclNlcnZpY2UuZGVzY3JpcHRpb25DaGFuZ2VkXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcclxuICAgICAgLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBzdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcGxhY2Vob2xkZXJTZXJ2aWNlLnN0YXRlQ2hhbmdlZFxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgbmV4dDogcHJvZ3Jlc3MgPT4gdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzLFxyXG4gICAgICAgICAgZXJyb3I6IGVyciA9PiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlLFxyXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdGF0ZVN1YnNjcmlwdGlvbiA9IHN0YXRlLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcm9ncmVzczogbnVtYmVyID0gbnVsbDtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcclxuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
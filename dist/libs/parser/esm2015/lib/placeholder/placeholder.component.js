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
                selector: 'app-placeholder',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQVksa0JBQXNDO1FBRjFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBOEJqQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBM0J0QixrQkFBa0IsQ0FBQyxrQkFBa0I7YUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7O1lBRUQsaUJBQStCO1FBQ25DLGtCQUFrQixDQUFDLFlBQVk7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2pDOztrQkFFSyxRQUFRLEdBQUc7Z0JBQ2YsSUFBSTs7OztnQkFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO2dCQUMxQyxLQUFLOzs7O2dCQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQ3BDLFFBQVE7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTthQUN2QztZQUVELGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBTUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsdVBBQTJDOzthQUU1Qzs7OztZQU5RLGtCQUFrQjs7Ozs7OztJQVF6Qix3Q0FBaUM7O0lBNkJqQywyQ0FBb0I7O0lBQ3BCLHdDQUF3Qjs7SUFDeEIseUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBsYWNlaG9sZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGxhY2Vob2xkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BsYWNlaG9sZGVyLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSkge1xyXG4gICAgcGxhY2Vob2xkZXJTZXJ2aWNlLmRlc2NyaXB0aW9uQ2hhbmdlZFxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZCA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGQ7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHBsYWNlaG9sZGVyU2VydmljZS5zdGF0ZUNoYW5nZWRcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxyXG4gICAgICAuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuICAgICAgICBpZiAoc3RhdGVTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgIHN0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IHtcclxuICAgICAgICAgIG5leHQ6IHByb2dyZXNzID0+IHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcyxcclxuICAgICAgICAgIGVycm9yOiBlcnIgPT4gdGhpcy5pc1Zpc2libGUgPSBmYWxzZSxcclxuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3RhdGVTdWJzY3JpcHRpb24gPSBzdGF0ZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlciA9IG51bGw7XHJcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XHJcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
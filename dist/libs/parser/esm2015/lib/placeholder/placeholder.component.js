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
                template: "<div class=\"loading-wrapper\" *ngIf=\"isVisible\">\n    <div class=\"loading-message\">\n        <fa-icon [icon]=\"['fas','circle-notch']\" [spin]=\"true\"></fa-icon>\n        <div>{{ description }}</div>\n    </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRy9CLFlBQVksa0JBQXNDO1FBRjFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBOEJqQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBM0J0QixrQkFBa0IsQ0FBQyxrQkFBa0I7YUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7O1lBRUQsaUJBQStCO1FBQ25DLGtCQUFrQixDQUFDLFlBQVk7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ2pDOztrQkFFSyxRQUFRLEdBQUc7Z0JBQ2YsSUFBSTs7OztnQkFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO2dCQUMxQyxLQUFLOzs7O2dCQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7Z0JBQ3BDLFFBQVE7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTthQUN2QztZQUVELGlCQUFpQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBTUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNk9BQTJDOzthQUU1Qzs7OztZQU5RLGtCQUFrQjs7Ozs7OztJQVF6Qix3Q0FBaUM7O0lBNkJqQywyQ0FBb0I7O0lBQ3BCLHdDQUF3Qjs7SUFDeEIseUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcGxhY2Vob2xkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxhY2Vob2xkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wbGFjZWhvbGRlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihwbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSkge1xuICAgIHBsYWNlaG9sZGVyU2VydmljZS5kZXNjcmlwdGlvbkNoYW5nZWRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoZCA9PiB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICBsZXQgc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwbGFjZWhvbGRlclNlcnZpY2Uuc3RhdGVDaGFuZ2VkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgICAgaWYgKHN0YXRlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0ge1xuICAgICAgICAgIG5leHQ6IHByb2dyZXNzID0+IHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcyxcbiAgICAgICAgICBlcnJvcjogZXJyID0+IHRoaXMuaXNWaXNpYmxlID0gZmFsc2UsXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBzdGF0ZVN1YnNjcmlwdGlvbiA9IHN0YXRlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByb2dyZXNzOiBudW1iZXIgPSBudWxsO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19
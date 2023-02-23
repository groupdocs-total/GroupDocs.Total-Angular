/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DifferencesService } from '../differences.service';
import { NavigateService } from '@groupdocs.examples.angular/common-components';
var DifferencesComponent = /** @class */ (function () {
    function DifferencesComponent(changeService, navigateService) {
        this.changes = [];
        this.changesService = changeService;
        this.navigateService = navigateService;
    }
    /**
     * @return {?}
     */
    DifferencesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    DifferencesComponent.prototype.newChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var changesIds = [];
        /** @type {?} */
        var sortedActions = [];
        for (var i = 0; i < changes.length; i++) {
            changesIds.push(changes[i].id);
        }
        for (var i = 0; i < changesIds.length; i++) {
            if (this.changesService.comparisonActionsMap.get(changesIds[i]) === undefined)
                sortedActions.push(3);
            else
                sortedActions.push(this.changesService.comparisonActionsMap.get(changesIds[i]));
        }
        this.changesService.comparisonActionsList = sortedActions;
        this.changesService.sendClickEvent();
    };
    /**
     * @param {?} id
     * @param {?} page
     * @param {?} event
     * @return {?}
     */
    DifferencesComponent.prototype.highlightDifference = /**
     * @param {?} id
     * @param {?} page
     * @param {?} event
     * @return {?}
     */
    function (id, page, event) {
        event.stopPropagation();
        this.changesService.setActiveChange(id);
        this.navigateService.navigateTo(page + 1);
    };
    DifferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-differences',
                    template: "<div *ngFor=\"let change of changes; let i = index\" data-id=\"{{i}}\" (click)=\"highlightDifference(change.id,change.pageInfo.pageNumber,$event)\">\n  <gd-comparison-difference [change]=\"change\"></gd-comparison-difference>\n</div>\n<gd-button [icon]=\"'play'\" [tooltip]=\"'Compare with new changes'\" (click)=\"newChanges(changes)\">\n</gd-button>\n\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DifferencesComponent.ctorParameters = function () { return [
        { type: DifferencesService },
        { type: NavigateService }
    ]; };
    DifferencesComponent.propDecorators = {
        changes: [{ type: Input }]
    };
    return DifferencesComponent;
}());
export { DifferencesComponent };
if (false) {
    /** @type {?} */
    DifferencesComponent.prototype.changes;
    /**
     * @type {?}
     * @private
     */
    DifferencesComponent.prototype.changesService;
    /**
     * @type {?}
     * @private
     */
    DifferencesComponent.prototype.navigateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZXMvZGlmZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFaEY7SUFXRSw4QkFBWSxhQUFrQyxFQUFFLGVBQWdDO1FBSnZFLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBS25DLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUViLHlDQUFVOzs7O0lBQVYsVUFBVyxPQUFPOztZQUNWLFVBQVUsR0FBRyxFQUFFOztZQUNmLGFBQWEsR0FBRyxFQUFFO1FBRXhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUN2QztZQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQzFDO1lBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTO2dCQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUNoRyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEY7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFRCxrREFBbUI7Ozs7OztJQUFuQixVQUFvQixFQUFVLEVBQUUsSUFBWSxFQUFFLEtBQWtCO1FBQzlELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwrV0FBMkM7O2lCQUU1Qzs7OztnQkFQUSxrQkFBa0I7Z0JBQ2xCLGVBQWU7OzswQkFTckIsS0FBSzs7SUFrQ1IsMkJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXBDWSxvQkFBb0I7OztJQUUvQix1Q0FBcUM7Ozs7O0lBQ3JDLDhDQUE0Qzs7Ozs7SUFDNUMsK0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFuZ2VJbmZvIH0gZnJvbSAnLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgRGlmZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi4vZGlmZmVyZW5jZXMuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kaWZmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWZmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpZmZlcmVuY2VzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNoYW5nZXMgOiBDaGFuZ2VJbmZvW10gPSBbXTtcbiAgcHJpdmF0ZSBjaGFuZ2VzU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZTtcbiAgcHJpdmF0ZSBuYXZpZ2F0ZVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoY2hhbmdlU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZSwgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsKSB7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZSA9IGNoYW5nZVNlcnZpY2U7XG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmV3Q2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgY29uc3QgY2hhbmdlc0lkcyA9IFtdXG4gICAgY29uc3Qgc29ydGVkQWN0aW9ucyA9IFtdXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGNoYW5nZXNJZHMucHVzaChjaGFuZ2VzW2ldLmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzSWRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGlmICh0aGlzLmNoYW5nZXNTZXJ2aWNlLmNvbXBhcmlzb25BY3Rpb25zTWFwLmdldChjaGFuZ2VzSWRzW2ldKSA9PT0gdW5kZWZpbmVkKSBzb3J0ZWRBY3Rpb25zLnB1c2goMyk7XG4gICAgICBlbHNlIHNvcnRlZEFjdGlvbnMucHVzaCh0aGlzLmNoYW5nZXNTZXJ2aWNlLmNvbXBhcmlzb25BY3Rpb25zTWFwLmdldChjaGFuZ2VzSWRzW2ldKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5jb21wYXJpc29uQWN0aW9uc0xpc3QgPSBzb3J0ZWRBY3Rpb25zOyAgIFxuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2VuZENsaWNrRXZlbnQoKTtcbiAgfVxuXG4gIGhpZ2hsaWdodERpZmZlcmVuY2UoaWQ6IHN0cmluZywgcGFnZTogbnVtYmVyLCBldmVudCA6IE1vdXNlRXZlbnQpe1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKGlkKTtcbiAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZVRvKHBhZ2UrMSk7XG4gIH1cbn1cbiJdfQ==
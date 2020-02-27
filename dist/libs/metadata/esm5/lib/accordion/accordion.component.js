/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    /**
     * @return {?}
     */
    AccordionComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.groups.toArray().forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            group.opened = true;
            group.toggle.subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                _this.openGroup(group);
            }));
        }));
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.openGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        group.opened = !group.opened;
    };
    AccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-accordion',
                    template: "\n    <ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    AccordionComponent.propDecorators = {
        groups: [{ type: ContentChildren, args: [AccordionGroupComponent,] }]
    };
    return AccordionComponent;
}());
export { AccordionComponent };
if (false) {
    /** @type {?} */
    AccordionComponent.prototype.groups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV0RjtJQUFBO0lBMkJBLENBQUM7Ozs7SUFmQywrQ0FBa0I7OztJQUFsQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ2xDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRXBCLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsTUFBTTtnQkFDNUIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsc0NBQVM7Ozs7SUFBVCxVQUFVLEtBQThCO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxtQ0FFWDs7aUJBRUE7Ozt5QkFHRSxlQUFlLFNBQUMsdUJBQXVCOztJQWtCMUMseUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQW5CWSxrQkFBa0I7OztJQUM3QixvQ0FDMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWdyb3VwL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50ICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KVxuICBncm91cHM6IFF1ZXJ5TGlzdDxBY2NvcmRpb25Hcm91cENvbXBvbmVudD47XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZ3JvdXBzLnRvQXJyYXkoKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgZ3JvdXAub3BlbmVkID0gdHJ1ZTtcblxuICAgICAgZ3JvdXAudG9nZ2xlLnN1YnNjcmliZSgoJGV2ZW50KSA9PiB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMub3Blbkdyb3VwKGdyb3VwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb3Blbkdyb3VwKGdyb3VwOiBBY2NvcmRpb25Hcm91cENvbXBvbmVudCkge1xuICAgIGdyb3VwLm9wZW5lZCA9ICFncm91cC5vcGVuZWQ7XG4gIH1cbn1cbiJdfQ==
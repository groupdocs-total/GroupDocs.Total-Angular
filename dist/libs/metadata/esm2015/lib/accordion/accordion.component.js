/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
export class AccordionComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.groups.toArray().forEach((/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            group.opened = true;
            group.toggle.subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            ($event) => {
                $event.preventDefault();
                $event.stopPropagation();
                this.openGroup(group);
            }));
        }));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    openGroup(group) {
        group.opened = !group.opened;
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-accordion',
                template: `
    <ng-content></ng-content>
`,
                styles: [""]
            }] }
];
AccordionComponent.propDecorators = {
    groups: [{ type: ContentChildren, args: [AccordionGroupComponent,] }]
};
if (false) {
    /** @type {?} */
    AccordionComponent.prototype.groups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9tZXRhZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQVV0RixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBSTdCLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRXBCLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2hDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUE4QjtRQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7O0NBRVg7O2FBRUE7OztxQkFHRSxlQUFlLFNBQUMsdUJBQXVCOzs7O0lBQXhDLG9DQUMyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAvYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYCxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQWNjb3JkaW9uR3JvdXBDb21wb25lbnQpXG4gIGdyb3VwczogUXVlcnlMaXN0PEFjY29yZGlvbkdyb3VwQ29tcG9uZW50PjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5ncm91cHMudG9BcnJheSgpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBncm91cC5vcGVuZWQgPSB0cnVlO1xuXG4gICAgICBncm91cC50b2dnbGUuc3Vic2NyaWJlKCgkZXZlbnQpID0+IHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5vcGVuR3JvdXAoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50KSB7XG4gICAgZ3JvdXAub3BlbmVkID0gIWdyb3VwLm9wZW5lZDtcbiAgfVxufVxuIl19
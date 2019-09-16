/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CommonModals, ModalService } from "@groupdocs.examples.angular/common-components";
var DndInitStateComponent = /** @class */ (function () {
    function DndInitStateComponent(_modalService) {
        this._modalService = _modalService;
    }
    /**
     * @return {?}
     */
    DndInitStateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DndInitStateComponent.prototype.dropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this._modalService.open(CommonModals.BrowseFiles);
        }
    };
    DndInitStateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-dnd-init-state',
                    template: "<div class=\"wrapper\" gdDnd (dropped)=\"dropped($event)\">\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"text\">Conversion queue is empty</span>\n  <span class=\"start\">Drag your document here or click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file</span>\n</div>\n",
                    styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}.active{background-color:#bababa}"]
                }] }
    ];
    /** @nocollapse */
    DndInitStateComponent.ctorParameters = function () { return [
        { type: ModalService }
    ]; };
    DndInitStateComponent.propDecorators = {
        icon: [{ type: Input }],
        text: [{ type: Input }]
    };
    return DndInitStateComponent;
}());
export { DndInitStateComponent };
if (false) {
    /** @type {?} */
    DndInitStateComponent.prototype.icon;
    /** @type {?} */
    DndInitStateComponent.prototype.text;
    /**
     * @type {?}
     * @private
     */
    DndInitStateComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWluaXQtc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvZG5kLWluaXQtc3RhdGUvZG5kLWluaXQtc3RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXpGO0lBU0UsK0JBQW9CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQy9DLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDJVQUE4Qzs7aUJBRS9DOzs7O2dCQU5xQixZQUFZOzs7dUJBUS9CLEtBQUs7dUJBQ0wsS0FBSzs7SUFjUiw0QkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLHFCQUFxQjs7O0lBQ2hDLHFDQUFzQjs7SUFDdEIscUNBQXNCOzs7OztJQUVWLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kYWxzLCBNb2RhbFNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZG5kLWluaXQtc3RhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG5kLWluaXQtc3RhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kbmQtaW5pdC1zdGF0ZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIERuZEluaXRTdGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGRyb3BwZWQoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzKTtcbiAgICB9XG4gIH1cblxufVxuIl19
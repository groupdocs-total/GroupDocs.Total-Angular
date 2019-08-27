/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
/**
 *  DropDownToggleComponent
 */
var DropDownToggleComponent = /** @class */ (function () {
    function DropDownToggleComponent(dropdown) {
        var _this = this;
        this.dropdown = dropdown;
        this.click = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.dropdown.toggle(event); });
    }
    DropDownToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-drop-down-toggle',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:160px;max-height:300px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;height:25px;display:flex;flex-direction:row;cursor:pointer}.show .drop-down-items .drop-down-item fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4;color:#fff}.show .drop-down-items .drop-down-item:hover .gd-type-warning fa-icon{color:#f2fa23}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownToggleComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownDirective; })),] }] }
    ]; };
    DropDownToggleComponent.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return DropDownToggleComponent;
}());
export { DropDownToggleComponent };
if (false) {
    /** @type {?} */
    DropDownToggleComponent.prototype.click;
    /** @type {?} */
    DropDownToggleComponent.prototype.dropdown;
}
/**
 *  DropDownItemsComponent
 */
var DropDownItemsComponent = /** @class */ (function () {
    function DropDownItemsComponent(dropdown) {
        this.dropdown = dropdown;
    }
    Object.defineProperty(DropDownItemsComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdown._open;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownItemsComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event['value'] === true) {
            this.dropdown.close();
        }
    };
    DropDownItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-drop-down-items',
                    template: '<div class="drop-down-items" gdOutside [clickOutsideEnabled]="isOpen" (clickOutside)="onClickOutside($event)"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:160px;max-height:300px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;height:25px;display:flex;flex-direction:row;cursor:pointer}.show .drop-down-items .drop-down-item fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4;color:#fff}.show .drop-down-items .drop-down-item:hover .gd-type-warning fa-icon{color:#f2fa23}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownDirective; })),] }] }
    ]; };
    return DropDownItemsComponent;
}());
export { DropDownItemsComponent };
if (false) {
    /** @type {?} */
    DropDownItemsComponent.prototype.dropdown;
}
/**
 *  DropDownItemComponent
 */
var DropDownItemComponent = /** @class */ (function () {
    function DropDownItemComponent(dropdown) {
        var _this = this;
        this.dropdown = dropdown;
        this.class = 'drop-down-item';
        this.select = new EventEmitter();
        this.click = (/**
         * @return {?}
         */
        function () { return _this.selectEntry(); });
    }
    /**
     * @return {?}
     */
    DropDownItemComponent.prototype.selectEntry = /**
     * @return {?}
     */
    function () {
        this.select.next();
        this.dropdown.close();
    };
    DropDownItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-drop-down-item',
                    template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:160px;max-height:300px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;height:25px;display:flex;flex-direction:row;cursor:pointer}.show .drop-down-items .drop-down-item fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4;color:#fff}.show .drop-down-items .drop-down-item:hover .gd-type-warning fa-icon{color:#f2fa23}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownDirective; })),] }] }
    ]; };
    DropDownItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class',] }],
        select: [{ type: Output }],
        click: [{ type: HostListener, args: ['click',] }]
    };
    return DropDownItemComponent;
}());
export { DropDownItemComponent };
if (false) {
    /** @type {?} */
    DropDownItemComponent.prototype.class;
    /** @type {?} */
    DropDownItemComponent.prototype.select;
    /** @type {?} */
    DropDownItemComponent.prototype.click;
    /** @type {?} */
    DropDownItemComponent.prototype.dropdown;
}
/**
 *  DropDownDirective
 */
var DropDownDirective = /** @class */ (function () {
    function DropDownDirective() {
        this._open = false;
        this.class = 'drop-down';
    }
    /**
     * @return {?}
     */
    DropDownDirective.prototype.close = /**
     * @return {?}
     */
    function () {
        this._open = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownDirective.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this._open = !this._open;
    };
    DropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdDropDown]'
                },] }
    ];
    DropDownDirective.propDecorators = {
        _open: [{ type: Input, args: ['open',] }, { type: HostBinding, args: ['class.show',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return DropDownDirective;
}());
export { DropDownDirective };
if (false) {
    /** @type {?} */
    DropDownDirective.prototype._open;
    /** @type {?} */
    DropDownDirective.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQU12QjtJQVNFLGlDQUFnRSxRQUFRO1FBQXhFLGlCQUE0RTtRQUFaLGFBQVEsR0FBUixRQUFRLENBQUE7UUFEeEUsVUFBSzs7OztRQUFHLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLEVBQUM7SUFDdUIsQ0FBQzs7Z0JBVDdFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxhQUFhLEVBQUcsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3ZDOzs7O2dEQUljLE1BQU0sU0FBQyxVQUFVOzs7d0JBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDOzs7d0JBRnRELFlBQVksU0FBQyxPQUFPLEVBQUMsQ0FBQyxRQUFRLENBQUM7O0lBR2xDLDhCQUFDO0NBQUEsQUFWRCxJQVVDO1NBSlksdUJBQXVCOzs7SUFDbEMsd0NBQ29EOztJQUN4QywyQ0FBNEQ7Ozs7O0FBTTFFO0lBWUUsZ0NBQWdFLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQUcsQ0FBQztJQUo1RSxzQkFBSSwwQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Ozs7SUFJRCwrQ0FBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwrSUFBK0k7b0JBRXpKLGFBQWEsRUFBRyxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdkM7Ozs7Z0RBT2MsTUFBTSxTQUFDLFVBQVU7Ozt3QkFBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLEVBQUM7O0lBT3pELDZCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FiWSxzQkFBc0I7OztJQU1yQiwwQ0FBNEQ7Ozs7O0FBWTFFO0lBZ0JFLCtCQUFnRSxRQUFRO1FBQXhFLGlCQUE0RTtRQUFaLGFBQVEsR0FBUixRQUFRLENBQUE7UUFSeEUsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBR3pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzVCLFVBQUs7OztRQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLEVBQUM7SUFFMEMsQ0FBQzs7OztJQUU1RSwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsNkRBQTZEO29CQUV2RSxhQUFhLEVBQUcsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3ZDOzs7O2dEQVdjLE1BQU0sU0FBQyxVQUFVOzs7d0JBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDOzs7d0JBVHRELFdBQVcsU0FBQyxPQUFPO3lCQUduQixNQUFNO3dCQUdOLFlBQVksU0FBQyxPQUFPOztJQVN2Qiw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBaEJZLHFCQUFxQjs7O0lBQ2hDLHNDQUN5Qjs7SUFFekIsdUNBQzRCOztJQUU1QixzQ0FDaUM7O0lBRXJCLHlDQUE0RDs7Ozs7QUFXMUU7SUFBQTtRQU9FLFVBQUssR0FBRyxLQUFLLENBQUM7UUFHZCxVQUFLLEdBQUcsV0FBVyxDQUFDO0lBVXRCLENBQUM7Ozs7SUFSQyxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxLQUFrQjtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozt3QkFHRSxLQUFLLFNBQUMsTUFBTSxjQUNaLFdBQVcsU0FBQyxZQUFZO3dCQUd4QixXQUFXLFNBQUMsT0FBTzs7SUFXdEIsd0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWpCWSxpQkFBaUI7OztJQUU1QixrQ0FFYzs7SUFFZCxrQ0FDb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKlxuICogIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi10b2dnbGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Ub2dnbGVDb21wb25lbnR7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbJyRldmVudCddKVxuICBjbGljayA9IChldmVudDogYW55KSA9PiB0aGlzLmRyb3Bkb3duLnRvZ2dsZShldmVudCk7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkRpcmVjdGl2ZSkpIHB1YmxpYyBkcm9wZG93bikge31cbn1cblxuLyoqXG4gKiAgRHJvcERvd25JdGVtc0NvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbXMnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd24taXRlbXNcIiBnZE91dHNpZGUgW2NsaWNrT3V0c2lkZUVuYWJsZWRdPVwiaXNPcGVuXCIgKGNsaWNrT3V0c2lkZSk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1zQ29tcG9uZW50e1xuXG4gIGdldCBpc09wZW4oKXtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5fb3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkRpcmVjdGl2ZSkpIHB1YmxpYyBkcm9wZG93bikge31cblxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50ICApe1xuICAgIGlmKGV2ZW50ICYmIGV2ZW50Wyd2YWx1ZSddID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogIERyb3BEb3duSXRlbUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbScsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1Db21wb25lbnR7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzcyA9ICdkcm9wLWRvd24taXRlbSc7XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RFbnRyeSgpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkRpcmVjdGl2ZSkpIHB1YmxpYyBkcm9wZG93bikge31cblxuICBzZWxlY3RFbnRyeSgpe1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoKTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiAgRHJvcERvd25EaXJlY3RpdmVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkRHJvcERvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkRpcmVjdGl2ZXtcblxuICBASW5wdXQoJ29wZW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBfb3BlbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzcyA9ICdkcm9wLWRvd24nO1xuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5fb3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50IDogTW91c2VFdmVudCl7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG59XG4iXX0=
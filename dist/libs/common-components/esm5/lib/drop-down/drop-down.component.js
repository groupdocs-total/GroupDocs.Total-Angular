/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
/** @type {?} */
var horizontalAlignment = {
    center: {
        right: 'auto'
    },
    left: {
        right: '100%'
    },
    right: {
        right: '-100%'
    }
};
/** @type {?} */
var verticalAlignment = {
    center: {
        top: '0px',
    },
    top: {
        top: '-100%',
        right: '100%'
    },
    bottom: {
        top: 'autos'
    }
};
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownToggleComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
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
    Object.defineProperty(DropDownItemsComponent.prototype, "horizontalAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return horizontalAlignment[this.dropdown.getPlacement().h].right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItemsComponent.prototype, "verticalAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return verticalAlignment[this.dropdown.getPlacement().v].top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownItemsComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dropdown.open;
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
        this.dropdown.close();
    };
    DropDownItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-drop-down-items',
                    template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
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
        this.selected = new EventEmitter();
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
        this.selected.next();
        this.dropdown.close();
    };
    DropDownItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-drop-down-item',
                    template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    /** @nocollapse */
    DropDownItemComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                         * @return {?}
                         */
                        function () { return DropDownComponent; })),] }] }
    ]; };
    DropDownItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class',] }],
        selected: [{ type: Output }],
        click: [{ type: HostListener, args: ['click',] }]
    };
    return DropDownItemComponent;
}());
export { DropDownItemComponent };
if (false) {
    /** @type {?} */
    DropDownItemComponent.prototype.class;
    /** @type {?} */
    DropDownItemComponent.prototype.selected;
    /** @type {?} */
    DropDownItemComponent.prototype.click;
    /** @type {?} */
    DropDownItemComponent.prototype.dropdown;
}
/**
 *  DropDownComponent
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.placement = {
            h: "center",
            v: "bottom"
        };
        this.open = false;
        this.class = 'drop-down';
    }
    /**
     * @return {?}
     */
    DropDownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DropDownComponent.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.open = !this.open;
        document.body.click();
    };
    /**
     * @return {?}
     */
    DropDownComponent.prototype.getPlacement = /**
     * @return {?}
     */
    function () {
        return this.placement;
    };
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-drop-down',
                    template: '<div class="drop-down"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    DropDownComponent.propDecorators = {
        placement: [{ type: Input }],
        open: [{ type: Input }, { type: HostBinding, args: ['class.show',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return DropDownComponent;
}());
export { DropDownComponent };
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.placement;
    /** @type {?} */
    DropDownComponent.prototype.open;
    /** @type {?} */
    DropDownComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztJQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7SUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBS0Q7SUFTRSxpQ0FBZ0UsUUFBUTtRQUF4RSxpQkFBNEU7UUFBWixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBRHhFLFVBQUs7Ozs7UUFBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFDO0lBQ3VCLENBQUM7O2dCQVQ3RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7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SSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHdEQUF3RDtvQkFFbEUsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7OzRCQUVFLEtBQUs7dUJBT0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxZQUFZO3dCQUd4QixXQUFXLFNBQUMsT0FBTzs7SUFnQnRCLHdCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E1QlksaUJBQWlCOzs7SUFDNUIsc0NBSUU7O0lBR0YsaUNBRWE7O0lBRWIsa0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgaG9yaXpvbnRhbEFsaWdubWVudCA9IHtcbiAgY2VudGVyIDoge1xuICAgIHJpZ2h0OiAnYXV0bydcbiAgfSxcbiAgbGVmdCA6IHtcbiAgICByaWdodDogJzEwMCUnXG4gIH0sXG4gIHJpZ2h0IDoge1xuICAgIHJpZ2h0OiAnLTEwMCUnXG4gIH1cbn07XG5cbmNvbnN0IHZlcnRpY2FsQWxpZ25tZW50ID0ge1xuICBjZW50ZXIgOiB7XG4gICAgdG9wIDogJzBweCcsXG4gIH0sXG4gIHRvcCA6IHtcbiAgICB0b3AgOiAnLTEwMCUnLFxuICAgIHJpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgYm90dG9tIDoge1xuICAgIHRvcDogJ2F1dG9zJ1xuICB9XG59O1xuXG4vKipcbiAqICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24tdG9nZ2xlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50e1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsWyckZXZlbnQnXSlcbiAgY2xpY2sgPSAoZXZlbnQ6IGFueSkgPT4gdGhpcy5kcm9wZG93bi50b2dnbGUoZXZlbnQpO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XG59XG5cbi8qKlxuICogIERyb3BEb3duSXRlbXNDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLWl0ZW1zJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHJvcC1kb3duLWl0ZW1zXCIgKGNsaWNrT3V0c2lkZSk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCIgW2NsaWNrT3V0c2lkZUVuYWJsZWRdPVwiaXNPcGVuXCIgW3N0eWxlLnJpZ2h0XT1cImhvcml6b250YWxBbGlnblwiIFtzdHlsZS50b3BdPVwidmVydGljYWxBbGlnblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25JdGVtc0NvbXBvbmVudHtcblxuICBnZXQgaG9yaXpvbnRhbEFsaWduKCl7XG4gICAgcmV0dXJuIGhvcml6b250YWxBbGlnbm1lbnRbdGhpcy5kcm9wZG93bi5nZXRQbGFjZW1lbnQoKS5oXS5yaWdodDtcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEFsaWduKCl7XG4gICAgcmV0dXJuIHZlcnRpY2FsQWxpZ25tZW50W3RoaXMuZHJvcGRvd24uZ2V0UGxhY2VtZW50KCkudl0udG9wO1xuICB9XG5cbiAgZ2V0IGlzT3Blbigpe1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLm9wZW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCAgKXtcbiAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqICBEcm9wRG93bkl0ZW1Db21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLWl0ZW0nLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd24taXRlbVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25JdGVtQ29tcG9uZW50e1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgY2xhc3MgPSAnZHJvcC1kb3duLWl0ZW0nO1xuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RFbnRyeSgpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cblxuICBzZWxlY3RFbnRyeSgpe1xuICAgIHRoaXMuc2VsZWN0ZWQubmV4dCgpO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqICBEcm9wRG93bkNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24nLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd25cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duQ29tcG9uZW50e1xuICBASW5wdXQoKVxuICBwbGFjZW1lbnQgPSB7XG4gICAgaDogXCJjZW50ZXJcIixcbiAgICB2OiBcImJvdHRvbVwiXG4gIH07XG5cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBvcGVuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGNsYXNzID0gJ2Ryb3AtZG93bic7XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudCA6IE1vdXNlRXZlbnQpe1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgZG9jdW1lbnQuYm9keS5jbGljaygpO1xuICB9XG5cbiAgZ2V0UGxhY2VtZW50KCl7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VtZW50O1xuICB9XG59XG4iXX0=
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text{width:100%}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
                    template: '<div class="drop-down-items" gdOutside [clickOutsideEnabled]="isOpen" (clickOutside)="onClickOutside($event)" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text{width:100%}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text{width:100%}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
 *  DropDownComponent
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.placement = {
            h: "center",
            v: "bottom"
        };
        this._open = false;
        this.class = 'drop-down';
    }
    /**
     * @return {?}
     */
    DropDownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._open = false;
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
        this._open = !this._open;
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text{width:100%}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
                }] }
    ];
    DropDownComponent.propDecorators = {
        placement: [{ type: Input }],
        _open: [{ type: Input, args: ['open',] }, { type: HostBinding, args: ['class.show',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return DropDownComponent;
}());
export { DropDownComponent };
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.placement;
    /** @type {?} */
    DropDownComponent.prototype._open;
    /** @type {?} */
    DropDownComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztJQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7SUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBS0Q7SUFTRSxpQ0FBZ0UsUUFBUTtRQUF4RSxpQkFBNEU7UUFBWixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBRHhFLFVBQUs7Ozs7UUFBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFDO0lBQ3VCLENBQUM7O2dCQVQ3RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7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O0lBQ3JCLENBQUM7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLEtBQWtCO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHdEQUF3RDtvQkFFbEUsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7OzRCQUVFLEtBQUs7d0JBT0wsS0FBSyxTQUFDLE1BQU0sY0FDWixXQUFXLFNBQUMsWUFBWTt3QkFHeEIsV0FBVyxTQUFDLE9BQU87O0lBZ0J0Qix3QkFBQztDQUFBLEFBbENELElBa0NDO1NBNUJZLGlCQUFpQjs7O0lBQzVCLHNDQUlFOztJQUdGLGtDQUVjOztJQUVkLGtDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmNvbnN0IGhvcml6b250YWxBbGlnbm1lbnQgPSB7XG4gIGNlbnRlciA6IHtcbiAgICByaWdodDogJ2F1dG8nXG4gIH0sXG4gIGxlZnQgOiB7XG4gICAgcmlnaHQ6ICcxMDAlJ1xuICB9LFxuICByaWdodCA6IHtcbiAgICByaWdodDogJy0xMDAlJ1xuICB9XG59O1xuXG5jb25zdCB2ZXJ0aWNhbEFsaWdubWVudCA9IHtcbiAgY2VudGVyIDoge1xuICAgIHRvcCA6ICcwcHgnLFxuICB9LFxuICB0b3AgOiB7XG4gICAgdG9wIDogJy0xMDAlJyxcbiAgICByaWdodDogJzEwMCUnXG4gIH0sXG4gIGJvdHRvbSA6IHtcbiAgICB0b3A6ICdhdXRvcydcbiAgfVxufTtcblxuLyoqXG4gKiAgRHJvcERvd25Ub2dnbGVDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLXRvZ2dsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93blRvZ2dsZUNvbXBvbmVudHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLFsnJGV2ZW50J10pXG4gIGNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHRoaXMuZHJvcGRvd24udG9nZ2xlKGV2ZW50KTtcbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxufVxuXG4vKipcbiAqICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi1pdGVtcycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtc1wiIGdkT3V0c2lkZSBbY2xpY2tPdXRzaWRlRW5hYmxlZF09XCJpc09wZW5cIiAoY2xpY2tPdXRzaWRlKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIiBbc3R5bGUucmlnaHRdPVwiaG9yaXpvbnRhbEFsaWduXCIgW3N0eWxlLnRvcF09XCJ2ZXJ0aWNhbEFsaWduXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1zQ29tcG9uZW50e1xuXG4gIGdldCBob3Jpem9udGFsQWxpZ24oKXtcbiAgICByZXR1cm4gaG9yaXpvbnRhbEFsaWdubWVudFt0aGlzLmRyb3Bkb3duLmdldFBsYWNlbWVudCgpLmhdLnJpZ2h0O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ24oKXtcbiAgICByZXR1cm4gdmVydGljYWxBbGlnbm1lbnRbdGhpcy5kcm9wZG93bi5nZXRQbGFjZW1lbnQoKS52XS50b3A7XG4gIH1cblxuICBnZXQgaXNPcGVuKCl7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24uX29wZW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XG5cbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCAgKXtcbiAgICBpZihldmVudCAmJiBldmVudFsndmFsdWUnXSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqICBEcm9wRG93bkl0ZW1Db21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLWl0ZW0nLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd24taXRlbVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25JdGVtQ29tcG9uZW50e1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgY2xhc3MgPSAnZHJvcC1kb3duLWl0ZW0nO1xuXG4gIEBPdXRwdXQoKVxuICBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBjbGljayA9ICgpID0+IHRoaXMuc2VsZWN0RW50cnkoKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XG5cbiAgc2VsZWN0RW50cnkoKXtcbiAgICB0aGlzLnNlbGVjdC5uZXh0KCk7XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKlxuICogIERyb3BEb3duQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93blwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnR7XG4gIEBJbnB1dCgpXG4gIHBsYWNlbWVudCA9IHtcbiAgICBoOiBcImNlbnRlclwiLFxuICAgIHY6IFwiYm90dG9tXCJcbiAgfTtcblxuXG4gIEBJbnB1dCgnb3BlbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIF9vcGVuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGNsYXNzID0gJ2Ryb3AtZG93bic7XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoZXZlbnQgOiBNb3VzZUV2ZW50KXtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9vcGVuID0gIXRoaXMuX29wZW47XG4gICAgZG9jdW1lbnQuYm9keS5jbGljaygpO1xuICB9XG5cbiAgZ2V0UGxhY2VtZW50KCl7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VtZW50O1xuICB9XG59XG4iXX0=
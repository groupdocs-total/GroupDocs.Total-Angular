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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztJQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7SUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBS0Q7SUFTRSxpQ0FBZ0UsUUFBUTtRQUF4RSxpQkFBNEU7UUFBWixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBRHhFLFVBQUs7Ozs7UUFBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFDO0lBQ3VCLENBQUM7O2dCQVQ3RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7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SSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHdEQUF3RDtvQkFFbEUsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7OzRCQUVFLEtBQUs7dUJBT0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxZQUFZO3dCQUd4QixXQUFXLFNBQUMsT0FBTzs7SUFnQnRCLHdCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E1QlksaUJBQWlCOzs7SUFDNUIsc0NBSUU7O0lBR0YsaUNBRWE7O0lBRWIsa0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5jb25zdCBob3Jpem9udGFsQWxpZ25tZW50ID0ge1xyXG4gIGNlbnRlciA6IHtcclxuICAgIHJpZ2h0OiAnYXV0bydcclxuICB9LFxyXG4gIGxlZnQgOiB7XHJcbiAgICByaWdodDogJzEwMCUnXHJcbiAgfSxcclxuICByaWdodCA6IHtcclxuICAgIHJpZ2h0OiAnLTEwMCUnXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSB7XHJcbiAgY2VudGVyIDoge1xyXG4gICAgdG9wIDogJzBweCcsXHJcbiAgfSxcclxuICB0b3AgOiB7XHJcbiAgICB0b3AgOiAnLTEwMCUnLFxyXG4gICAgcmlnaHQ6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgYm90dG9tIDoge1xyXG4gICAgdG9wOiAnYXV0b3MnXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24tdG9nZ2xlJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wRG93blRvZ2dsZUNvbXBvbmVudHtcclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsWyckZXZlbnQnXSlcclxuICBjbGljayA9IChldmVudDogYW55KSA9PiB0aGlzLmRyb3Bkb3duLnRvZ2dsZShldmVudCk7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxyXG59XHJcblxyXG4vKipcclxuICogIERyb3BEb3duSXRlbXNDb21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLWl0ZW1zJyxcclxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd24taXRlbXNcIiAoY2xpY2tPdXRzaWRlKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIiBbY2xpY2tPdXRzaWRlRW5hYmxlZF09XCJpc09wZW5cIiBbc3R5bGUucmlnaHRdPVwiaG9yaXpvbnRhbEFsaWduXCIgW3N0eWxlLnRvcF09XCJ2ZXJ0aWNhbEFsaWduXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BEb3duSXRlbXNDb21wb25lbnR7XHJcblxyXG4gIGdldCBob3Jpem9udGFsQWxpZ24oKXtcclxuICAgIHJldHVybiBob3Jpem9udGFsQWxpZ25tZW50W3RoaXMuZHJvcGRvd24uZ2V0UGxhY2VtZW50KCkuaF0ucmlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdmVydGljYWxBbGlnbigpe1xyXG4gICAgcmV0dXJuIHZlcnRpY2FsQWxpZ25tZW50W3RoaXMuZHJvcGRvd24uZ2V0UGxhY2VtZW50KCkudl0udG9wO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzT3Blbigpe1xyXG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub3BlbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQgOiBFdmVudCAgKXtcclxuICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqICBEcm9wRG93bkl0ZW1Db21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1Db21wb25lbnR7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgY2xhc3MgPSAnZHJvcC1kb3duLWl0ZW0nO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIGNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RFbnRyeSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XHJcblxyXG4gIHNlbGVjdEVudHJ5KCl7XHJcbiAgICB0aGlzLnNlbGVjdGVkLm5leHQoKTtcclxuICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgRHJvcERvd25Db21wb25lbnRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duJyxcclxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd25cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcclxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnR7XHJcbiAgQElucHV0KClcclxuICBwbGFjZW1lbnQgPSB7XHJcbiAgICBoOiBcImNlbnRlclwiLFxyXG4gICAgdjogXCJib3R0b21cIlxyXG4gIH07XHJcblxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXHJcbiAgb3BlbiA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBjbGFzcyA9ICdkcm9wLWRvd24nO1xyXG5cclxuICBjbG9zZSgpe1xyXG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoZXZlbnQgOiBNb3VzZUV2ZW50KXtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMucGxhY2VtZW50O1xyXG4gIH1cclxufVxyXG4iXX0=
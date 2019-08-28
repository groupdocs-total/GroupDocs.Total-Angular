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
                    styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztJQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7SUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBS0Q7SUFTRSxpQ0FBZ0UsUUFBUTtRQUF4RSxpQkFBNEU7UUFBWixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBRHhFLFVBQUs7Ozs7UUFBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixFQUFDO0lBQ3VCLENBQUM7O2dCQVQ3RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7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SyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHdEQUF3RDtvQkFFbEUsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2lCQUN2Qzs7OzRCQUVFLEtBQUs7d0JBT0wsS0FBSyxTQUFDLE1BQU0sY0FDWixXQUFXLFNBQUMsWUFBWTt3QkFHeEIsV0FBVyxTQUFDLE9BQU87O0lBZ0J0Qix3QkFBQztDQUFBLEFBbENELElBa0NDO1NBNUJZLGlCQUFpQjs7O0lBQzVCLHNDQUlFOztJQUdGLGtDQUVjOztJQUVkLGtDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmNvbnN0IGhvcml6b250YWxBbGlnbm1lbnQgPSB7XG4gIGNlbnRlciA6IHtcbiAgICByaWdodDogJ2F1dG8nXG4gIH0sXG4gIGxlZnQgOiB7XG4gICAgcmlnaHQ6ICcxMDAlJ1xuICB9LFxuICByaWdodCA6IHtcbiAgICByaWdodDogJy0xMDAlJ1xuICB9XG59O1xuXG5jb25zdCB2ZXJ0aWNhbEFsaWdubWVudCA9IHtcbiAgY2VudGVyIDoge1xuICAgIHRvcCA6ICcwcHgnLFxuICB9LFxuICB0b3AgOiB7XG4gICAgdG9wIDogJy0xMDAlJyxcbiAgICByaWdodDogJzEwMCUnXG4gIH0sXG4gIGJvdHRvbSA6IHtcbiAgICB0b3A6ICdhdXRvcydcbiAgfVxufTtcblxuLyoqXG4gKiAgRHJvcERvd25Ub2dnbGVDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLXRvZ2dsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93blRvZ2dsZUNvbXBvbmVudHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLFsnJGV2ZW50J10pXG4gIGNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHRoaXMuZHJvcGRvd24udG9nZ2xlKGV2ZW50KTtcbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxufVxuXG4vKipcbiAqICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi1pdGVtcycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtc1wiIChjbGlja091dHNpZGUpPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiIFtjbGlja091dHNpZGVFbmFibGVkXT1cImlzT3BlblwiIFtzdHlsZS5yaWdodF09XCJob3Jpem9udGFsQWxpZ25cIiBbc3R5bGUudG9wXT1cInZlcnRpY2FsQWxpZ25cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duSXRlbXNDb21wb25lbnR7XG5cbiAgZ2V0IGhvcml6b250YWxBbGlnbigpe1xuICAgIHJldHVybiBob3Jpem9udGFsQWxpZ25tZW50W3RoaXMuZHJvcGRvd24uZ2V0UGxhY2VtZW50KCkuaF0ucmlnaHQ7XG4gIH1cblxuICBnZXQgdmVydGljYWxBbGlnbigpe1xuICAgIHJldHVybiB2ZXJ0aWNhbEFsaWdubWVudFt0aGlzLmRyb3Bkb3duLmdldFBsYWNlbWVudCgpLnZdLnRvcDtcbiAgfVxuXG4gIGdldCBpc09wZW4oKXtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5fb3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cblxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50ICApe1xuICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKlxuICogIERyb3BEb3duSXRlbUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbScsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1Db21wb25lbnR7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzcyA9ICdkcm9wLWRvd24taXRlbSc7XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrID0gKCkgPT4gdGhpcy5zZWxlY3RFbnRyeSgpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cblxuICBzZWxlY3RFbnRyeSgpe1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoKTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiAgRHJvcERvd25Db21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHJvcC1kb3duXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkNvbXBvbmVudHtcbiAgQElucHV0KClcbiAgcGxhY2VtZW50ID0ge1xuICAgIGg6IFwiY2VudGVyXCIsXG4gICAgdjogXCJib3R0b21cIlxuICB9O1xuXG5cbiAgQElucHV0KCdvcGVuJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JylcbiAgX29wZW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgY2xhc3MgPSAnZHJvcC1kb3duJztcblxuICBjbG9zZSgpe1xuICAgIHRoaXMuX29wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudCA6IE1vdXNlRXZlbnQpe1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX29wZW4gPSAhdGhpcy5fb3BlbjtcbiAgICBkb2N1bWVudC5ib2R5LmNsaWNrKCk7XG4gIH1cblxuICBnZXRQbGFjZW1lbnQoKXtcbiAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQ7XG4gIH1cbn1cbiJdfQ==
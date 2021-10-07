/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
/** @type {?} */
const horizontalAlignment = {
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
const verticalAlignment = {
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
export class DropDownToggleComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.click = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.dropdown.toggle(event));
    }
}
DropDownToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-toggle',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownToggleComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
DropDownToggleComponent.propDecorators = {
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DropDownToggleComponent.prototype.click;
    /** @type {?} */
    DropDownToggleComponent.prototype.dropdown;
}
/**
 *  DropDownItemsComponent
 */
export class DropDownItemsComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @return {?}
     */
    get horizontalAlign() {
        return horizontalAlignment[this.dropdown.getPlacement().h].right;
    }
    /**
     * @return {?}
     */
    get verticalAlign() {
        return verticalAlignment[this.dropdown.getPlacement().v].top;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.dropdown.open;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        this.dropdown.close();
    }
}
DropDownItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-items',
                template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
if (false) {
    /** @type {?} */
    DropDownItemsComponent.prototype.dropdown;
}
/**
 *  DropDownItemComponent
 */
export class DropDownItemComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.class = 'drop-down-item';
        this.selected = new EventEmitter();
        this.click = (/**
         * @return {?}
         */
        () => this.selectEntry());
    }
    /**
     * @return {?}
     */
    selectEntry() {
        this.selected.next();
        this.dropdown.close();
    }
}
DropDownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-item',
                template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
DropDownItemComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class',] }],
    selected: [{ type: Output }],
    click: [{ type: HostListener, args: ['click',] }]
};
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
export class DropDownComponent {
    constructor() {
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
    close() {
        this.open = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.stopPropagation();
        this.open = !this.open;
        document.body.click();
    }
    /**
     * @return {?}
     */
    getPlacement() {
        return this.placement;
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down',
                template: '<div class="drop-down"><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
DropDownComponent.propDecorators = {
    placement: [{ type: Input }],
    open: [{ type: Input }, { type: HostBinding, args: ['class.show',] }],
    class: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.placement;
    /** @type {?} */
    DropDownComponent.prototype.open;
    /** @type {?} */
    DropDownComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztNQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7TUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBV0QsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUFnRSxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUR4RSxVQUFLOzs7O1FBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDO0lBQ3VCLENBQUM7OztZQVQ3RSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2FBQ3ZDOzs7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QVEsRUFBRSx3REFBd0Q7Z0JBRWxFLGFBQWEsRUFBRyxpQkFBaUIsQ0FBQyxJQUFJOzthQUN2Qzs7O3dCQUVFLEtBQUs7bUJBT0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxZQUFZO29CQUd4QixXQUFXLFNBQUMsT0FBTzs7OztJQVhwQixzQ0FJRTs7SUFHRixpQ0FFYTs7SUFFYixrQ0FDb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5jb25zdCBob3Jpem9udGFsQWxpZ25tZW50ID0ge1xuICBjZW50ZXIgOiB7XG4gICAgcmlnaHQ6ICdhdXRvJ1xuICB9LFxuICBsZWZ0IDoge1xuICAgIHJpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgcmlnaHQgOiB7XG4gICAgcmlnaHQ6ICctMTAwJSdcbiAgfVxufTtcblxuY29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSB7XG4gIGNlbnRlciA6IHtcbiAgICB0b3AgOiAnMHB4JyxcbiAgfSxcbiAgdG9wIDoge1xuICAgIHRvcCA6ICctMTAwJScsXG4gICAgcmlnaHQ6ICcxMDAlJ1xuICB9LFxuICBib3R0b20gOiB7XG4gICAgdG9wOiAnYXV0b3MnXG4gIH1cbn07XG5cbi8qKlxuICogIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi10b2dnbGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Ub2dnbGVDb21wb25lbnR7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbJyRldmVudCddKVxuICBjbGljayA9IChldmVudDogYW55KSA9PiB0aGlzLmRyb3Bkb3duLnRvZ2dsZShldmVudCk7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cbn1cblxuLyoqXG4gKiAgRHJvcERvd25JdGVtc0NvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbXMnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd24taXRlbXNcIiAoY2xpY2tPdXRzaWRlKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIiBbY2xpY2tPdXRzaWRlRW5hYmxlZF09XCJpc09wZW5cIiBbc3R5bGUucmlnaHRdPVwiaG9yaXpvbnRhbEFsaWduXCIgW3N0eWxlLnRvcF09XCJ2ZXJ0aWNhbEFsaWduXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1zQ29tcG9uZW50e1xuXG4gIGdldCBob3Jpem9udGFsQWxpZ24oKXtcbiAgICByZXR1cm4gaG9yaXpvbnRhbEFsaWdubWVudFt0aGlzLmRyb3Bkb3duLmdldFBsYWNlbWVudCgpLmhdLnJpZ2h0O1xuICB9XG5cbiAgZ2V0IHZlcnRpY2FsQWxpZ24oKXtcbiAgICByZXR1cm4gdmVydGljYWxBbGlnbm1lbnRbdGhpcy5kcm9wZG93bi5nZXRQbGFjZW1lbnQoKS52XS50b3A7XG4gIH1cblxuICBnZXQgaXNPcGVuKCl7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd24ub3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cblxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50ICApe1xuICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKlxuICogIERyb3BEb3duSXRlbUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbScsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkl0ZW1Db21wb25lbnR7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzcyA9ICdkcm9wLWRvd24taXRlbSc7XG5cbiAgQE91dHB1dCgpXG4gIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2sgPSAoKSA9PiB0aGlzLnNlbGVjdEVudHJ5KCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxuXG4gIHNlbGVjdEVudHJ5KCl7XG4gICAgdGhpcy5zZWxlY3RlZC5uZXh0KCk7XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKlxuICogIERyb3BEb3duQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93blwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnR7XG4gIEBJbnB1dCgpXG4gIHBsYWNlbWVudCA9IHtcbiAgICBoOiBcImNlbnRlclwiLFxuICAgIHY6IFwiYm90dG9tXCJcbiAgfTtcblxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIG9wZW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgY2xhc3MgPSAnZHJvcC1kb3duJztcblxuICBjbG9zZSgpe1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50IDogTW91c2VFdmVudCl7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICBkb2N1bWVudC5ib2R5LmNsaWNrKCk7XG4gIH1cblxuICBnZXRQbGFjZW1lbnQoKXtcbiAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQ7XG4gIH1cbn1cbiJdfQ==
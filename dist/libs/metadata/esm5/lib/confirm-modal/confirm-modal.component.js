/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ModalComponent, ButtonComponent } from "@groupdocs.examples.angular/common-components";
var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
        this.confirm = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ConfirmModalComponent.prototype.onConfirm = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.cleanUpAndClose($event);
        this.confirm.emit();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ConfirmModalComponent.prototype.onCancel = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.cleanUpAndClose($event);
        this.cancel.emit();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    ConfirmModalComponent.prototype.cleanUpAndClose = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        this.buttons.forEach((/**
         * @param {?} button
         * @return {?}
         */
        function (button) { return button.onUnhovering(); }));
        this.modal.close();
    };
    ConfirmModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-confirm-modal',
                    template: "<gd-modal [id]=\"id\" [title]=\"'Confirm action'\">\n    <section id=\"gd-confirm-section\">\n        <div class=\"gd-confirm-wrap\">\n          <span class=\"gd-confirm-text\">{{text}}</span>\n          <div class=\"gd-confirm-button-wrap\">\n            <gd-button id=\"cancel-button\" [icon]=\"'times'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onCancel($event)\">\n                Cancel\n            </gd-button>\n            <gd-button id=\"confirm-button\" [icon]=\"'check'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onConfirm($event)\">\n                Confirm\n            </gd-button>\n        </div>\n        </div>\n      </section>\n</gd-modal>",
                    styles: ["#gd-confirm-section{width:375px}.gd-confirm-wrap{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:24px}.gd-confirm-wrap ::ng-deep .button{height:37px;width:75px;padding:0;-webkit-box-pack:center;justify-content:center}.gd-confirm-wrap ::ng-deep .button ::ng-deep .text{font-size:10px!important}.gd-confirm-text{color:#000;padding:10px 0 45px;height:20px;font-size:16px}.gd-confirm-button-wrap{height:40px}.gd-confirm-button-wrap gd-button{float:right;padding-left:15px}@media (max-width:1037px){#gd-confirm-section{max-width:375px}}"]
                }] }
    ];
    ConfirmModalComponent.propDecorators = {
        id: [{ type: Input }],
        text: [{ type: Input }],
        confirm: [{ type: Output }],
        cancel: [{ type: Output }],
        modal: [{ type: ViewChild, args: [ModalComponent, { static: false },] }],
        buttons: [{ type: ViewChildren, args: [ButtonComponent,] }]
    };
    return ConfirmModalComponent;
}());
export { ConfirmModalComponent };
if (false) {
    /** @type {?} */
    ConfirmModalComponent.prototype.id;
    /** @type {?} */
    ConfirmModalComponent.prototype.text;
    /** @type {?} */
    ConfirmModalComponent.prototype.confirm;
    /** @type {?} */
    ConfirmModalComponent.prototype.cancel;
    /** @type {?} */
    ConfirmModalComponent.prototype.modal;
    /** @type {?} */
    ConfirmModalComponent.prototype.buttons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBR2hHO0lBQUE7UUFRYyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW1CeEMsQ0FBQzs7Ozs7SUFmQyx5Q0FBUzs7OztJQUFULFVBQVUsTUFBa0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE1BQWtCO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTywrQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsTUFBa0I7UUFDeEMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFyQixDQUFxQixFQUFFLENBQUE7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkEzQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLG9yQkFBNkM7O2lCQUU5Qzs7O3FCQUVFLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxNQUFNO3lCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7MEJBQ3pDLFlBQVksU0FBQyxlQUFlOztJQWlCL0IsNEJBQUM7Q0FBQSxBQTVCSCxJQTRCRztTQXZCWSxxQkFBcUI7OztJQUNoQyxtQ0FBb0I7O0lBQ3BCLHFDQUFzQjs7SUFDdEIsd0NBQXVDOztJQUN2Qyx1Q0FBc0M7O0lBQ3RDLHNDQUFrRTs7SUFDbEUsd0NBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdnZC1jb25maXJtLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1tb2RhbC5jb21wb25lbnQubGVzcyddXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBDb25maXJtTW9kYWxDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBjb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQFZpZXdDaGlsZChNb2RhbENvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSBtb2RhbDogTW9kYWxDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZHJlbihCdXR0b25Db21wb25lbnQpIGJ1dHRvbnM6IFF1ZXJ5TGlzdDxCdXR0b25Db21wb25lbnQ+O1xuXG4gICAgb25Db25maXJtKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy5jbGVhblVwQW5kQ2xvc2UoJGV2ZW50KTtcbiAgICAgIHRoaXMuY29uZmlybS5lbWl0KCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmNsZWFuVXBBbmRDbG9zZSgkZXZlbnQpO1xuICAgICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYW5VcEFuZENsb3NlKCRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5vblVuaG92ZXJpbmcoKSApXG4gICAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9Il19
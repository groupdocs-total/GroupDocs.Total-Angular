/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ModalComponent, ButtonComponent } from "@groupdocs.examples.angular/common-components";
export class ConfirmModalComponent {
    constructor() {
        this.confirm = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onConfirm($event) {
        this.cleanUpAndClose($event);
        this.confirm.emit();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCancel($event) {
        this.cleanUpAndClose($event);
        this.cancel.emit();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    cleanUpAndClose($event) {
        $event.stopPropagation();
        this.buttons.forEach((/**
         * @param {?} button
         * @return {?}
         */
        button => button.onUnhovering()));
        this.modal.close();
    }
}
ConfirmModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-confirm-modal',
                template: "<gd-modal [id]=\"id\" [title]=\"'Confirm action'\">\r\n    <section id=\"gd-confirm-section\">\r\n        <div class=\"gd-confirm-wrap\">\r\n          <span class=\"gd-confirm-text\">{{text}}</span>\r\n          <div class=\"gd-confirm-button-wrap\">\r\n            <gd-button id=\"cancel-button\" [icon]=\"'times'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onCancel($event)\">\r\n                Cancel\r\n            </gd-button>\r\n            <gd-button id=\"confirm-button\" [icon]=\"'check'\" [intent]=\"'brand'\" [iconOnly]=\"false\" (click)=\"onConfirm($event)\">\r\n                Confirm\r\n            </gd-button>\r\n        </div>\r\n        </div>\r\n      </section>\r\n</gd-modal>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBUTlGLE1BQU0sT0FBTyxxQkFBcUI7SUFMcEM7UUFRYyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW1CeEMsQ0FBQzs7Ozs7SUFmQyxTQUFTLENBQUMsTUFBa0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWtCO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxlQUFlLENBQUMsTUFBa0I7UUFDeEMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUE7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUEzQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGd0QkFBNkM7O2FBRTlDOzs7aUJBRUUsS0FBSzttQkFDTCxLQUFLO3NCQUNMLE1BQU07cUJBQ04sTUFBTTtvQkFDTixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztzQkFDekMsWUFBWSxTQUFDLGVBQWU7Ozs7SUFMN0IsbUNBQW9COztJQUNwQixxQ0FBc0I7O0lBQ3RCLHdDQUF1Qzs7SUFDdkMsdUNBQXNDOztJQUN0QyxzQ0FBa0U7O0lBQ2xFLHdDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dkLWNvbmZpcm0tbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgQ29uZmlybU1vZGFsQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgICBAT3V0cHV0KCkgY29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAVmlld0NoaWxkKE1vZGFsQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGRyZW4oQnV0dG9uQ29tcG9uZW50KSBidXR0b25zOiBRdWVyeUxpc3Q8QnV0dG9uQ29tcG9uZW50PjtcclxuXHJcbiAgICBvbkNvbmZpcm0oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgIHRoaXMuY2xlYW5VcEFuZENsb3NlKCRldmVudCk7XHJcbiAgICAgIHRoaXMuY29uZmlybS5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgIHRoaXMuY2xlYW5VcEFuZENsb3NlKCRldmVudCk7XHJcbiAgICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFuVXBBbmRDbG9zZSgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLm9uVW5ob3ZlcmluZygpIClcclxuICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH0iXX0=
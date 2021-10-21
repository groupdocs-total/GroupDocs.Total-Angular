/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";
export class RenameModalComponent {
    constructor() {
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
        this._error = null;
    }
    /**
     * @return {?}
     */
    get hasError() {
        return this.error != null;
    }
    /**
     * @return {?}
     */
    get error() {
        return this._error;
    }
    /**
     * @param {?} newError
     * @return {?}
     */
    set error(newError) {
        this._error = newError;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        this._value = newValue;
        if (this.hasError) {
            this._error = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.initialValue) {
            this.initialValue = "";
        }
        this.value = this.initialValue;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    refresh($event) {
        if ($event) {
            this._error = null;
            this._value = this.initialValue;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.inputBox.nativeElement.focus();
            }), 0);
        }
    }
    /**
     * @return {?}
     */
    acceptClick() {
        // Check if value is not empty
        if (this.value === null || this.value === "") {
            this._error = "A new value can't be empty";
        }
        if (!this.hasError) {
            this.acceptEvent.emit({ id: this.operationId, newValue: this.value });
        }
    }
    /**
     * @return {?}
     */
    cancelClick() {
        if (this.modalElement) {
            this.modalElement.cancelClose();
        }
    }
}
RenameModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-rename-modal',
                template: "<gd-modal #modal [id]=\"id\" [title]=\"title\" (visible)=\"refresh($event)\">\r\n  <div class=\"window\">\r\n    <div class=\"prompt\">{{ promptText }}</div>\r\n    <input #inputBox type=\"text\" [value]=\"value\" (input)=\"value=$event.target.value\" (keyup.enter)=\"acceptClick()\" (keyup.esc)=\"cancelClick()\"/>\r\n\r\n    <div class=\"error\" *ngIf=\"error\">{{ error }}</div>\r\n\r\n    <div class=\"buttons\">      \r\n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\r\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\r\n    </div>\r\n  </div>\r\n</gd-modal>",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}input{margin-top:20px;margin-bottom:20px;padding:5px}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:auto}.buttons>div{margin-left:10px}.error{color:red;padding-top:1px;padding-bottom:20px}"]
            }] }
];
/** @nocollapse */
RenameModalComponent.ctorParameters = () => [];
RenameModalComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    promptText: [{ type: Input }],
    acceptText: [{ type: Input }],
    operationId: [{ type: Input }],
    initialValue: [{ type: Input }],
    acceptEvent: [{ type: Output }],
    cancelEvent: [{ type: Output }],
    modalElement: [{ type: ViewChild, args: ['modal', { static: true },] }],
    inputBox: [{ type: ViewChild, args: ['inputBox', { static: true },] }],
    error: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RenameModalComponent.prototype.id;
    /** @type {?} */
    RenameModalComponent.prototype.title;
    /** @type {?} */
    RenameModalComponent.prototype.promptText;
    /** @type {?} */
    RenameModalComponent.prototype.acceptText;
    /** @type {?} */
    RenameModalComponent.prototype.operationId;
    /** @type {?} */
    RenameModalComponent.prototype.initialValue;
    /** @type {?} */
    RenameModalComponent.prototype.acceptEvent;
    /** @type {?} */
    RenameModalComponent.prototype.cancelEvent;
    /** @type {?} */
    RenameModalComponent.prototype.modalElement;
    /** @type {?} */
    RenameModalComponent.prototype.inputBox;
    /**
     * @type {?}
     * @private
     */
    RenameModalComponent.prototype._error;
    /**
     * @type {?}
     * @private
     */
    RenameModalComponent.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sK0NBQStDLENBQUM7QUFPdkQsTUFBTSxPQUFPLG9CQUFvQjtJQTBDL0I7UUFqQ1UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO0lBMkJkLENBQUM7Ozs7SUF4QmpCLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFnQjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJtQkFBNEM7O2FBRTdDOzs7OztpQkFFRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLEtBQUs7MkJBQ0wsS0FBSzswQkFFTCxNQUFNOzBCQUNOLE1BQU07MkJBRU4sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBQ25DLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQWF0QyxLQUFLOzs7O0lBekJOLGtDQUFvQjs7SUFDcEIscUNBQXVCOztJQUN2QiwwQ0FBNEI7O0lBQzVCLDBDQUE0Qjs7SUFFNUIsMkNBQTZCOztJQUM3Qiw0Q0FBOEI7O0lBRTlCLDJDQUEyQzs7SUFDM0MsMkNBQTJDOztJQUUzQyw0Q0FBbUU7O0lBQ25FLHdDQUE4RDs7Ozs7SUFFOUQsc0NBQThCOzs7OztJQUM5QixzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBNb2RhbENvbXBvbmVudFxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcmVuYW1lLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVuYW1lLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZW5hbWUtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVuYW1lTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlkOiBTdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IFN0cmluZztcclxuICBASW5wdXQoKSBwcm9tcHRUZXh0OiBTdHJpbmc7XHJcbiAgQElucHV0KCkgYWNjZXB0VGV4dDogU3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBvcGVyYXRpb25JZDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluaXRpYWxWYWx1ZTogU3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgYWNjZXB0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNhbmNlbEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdtb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsRWxlbWVudDogTW9kYWxDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRCb3gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEJveDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBfZXJyb3I6IFN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IFN0cmluZztcclxuXHJcbiAgZ2V0IGhhc0Vycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3IgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBlcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGVycm9yKG5ld0Vycm9yOiBTdHJpbmcpIHtcclxuICAgIHRoaXMuX2Vycm9yID0gbmV3RXJyb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUobmV3VmFsdWU6IFN0cmluZykge1xyXG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxWYWx1ZSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmlucHV0Qm94Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY2NlcHRDbGljaygpIHtcclxuICAgIC8vIENoZWNrIGlmIHZhbHVlIGlzIG5vdCBlbXB0eVxyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IG51bGwgfHwgdGhpcy52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLl9lcnJvciA9IFwiQSBuZXcgdmFsdWUgY2FuJ3QgYmUgZW1wdHlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzRXJyb3IpIHtcclxuICAgICAgdGhpcy5hY2NlcHRFdmVudC5lbWl0KHsgaWQ6IHRoaXMub3BlcmF0aW9uSWQsIG5ld1ZhbHVlOiB0aGlzLnZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsQ2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQuY2FuY2VsQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
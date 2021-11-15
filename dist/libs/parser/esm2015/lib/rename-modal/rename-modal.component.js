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
                template: "<gd-modal #modal [id]=\"id\" [title]=\"title\" (visible)=\"refresh($event)\">\n  <div class=\"window\">\n    <div class=\"prompt\">{{ promptText }}</div>\n    <input #inputBox type=\"text\" [value]=\"value\" (input)=\"value=$event.target.value\" (keyup.enter)=\"acceptClick()\" (keyup.esc)=\"cancelClick()\"/>\n\n    <div class=\"error\" *ngIf=\"error\">{{ error }}</div>\n\n    <div class=\"buttons\">      \n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\n    </div>\n  </div>\n</gd-modal>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sK0NBQStDLENBQUM7QUFPdkQsTUFBTSxPQUFPLG9CQUFvQjtJQTBDL0I7UUFqQ1UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO0lBMkJkLENBQUM7Ozs7SUF4QmpCLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFnQjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG1sQkFBNEM7O2FBRTdDOzs7OztpQkFFRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLEtBQUs7MkJBQ0wsS0FBSzswQkFFTCxNQUFNOzBCQUNOLE1BQU07MkJBRU4sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBQ25DLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQWF0QyxLQUFLOzs7O0lBekJOLGtDQUFvQjs7SUFDcEIscUNBQXVCOztJQUN2QiwwQ0FBNEI7O0lBQzVCLDBDQUE0Qjs7SUFFNUIsMkNBQTZCOztJQUM3Qiw0Q0FBOEI7O0lBRTlCLDJDQUEyQzs7SUFDM0MsMkNBQTJDOztJQUUzQyw0Q0FBbUU7O0lBQ25FLHdDQUE4RDs7Ozs7SUFFOUQsc0NBQThCOzs7OztJQUM5QixzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1vZGFsQ29tcG9uZW50XG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcmVuYW1lLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlbmFtZS1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlbmFtZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ6IFN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IFN0cmluZztcbiAgQElucHV0KCkgcHJvbXB0VGV4dDogU3RyaW5nO1xuICBASW5wdXQoKSBhY2NlcHRUZXh0OiBTdHJpbmc7XG5cbiAgQElucHV0KCkgb3BlcmF0aW9uSWQ6IFN0cmluZztcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlOiBTdHJpbmc7XG5cbiAgQE91dHB1dCgpIGFjY2VwdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnbW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbEVsZW1lbnQ6IE1vZGFsQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdpbnB1dEJveCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0Qm94OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX2Vycm9yOiBTdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIF92YWx1ZTogU3RyaW5nO1xuXG4gIGdldCBoYXNFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvciAhPSBudWxsO1xuICB9XG5cbiAgZ2V0IGVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlcnJvcihuZXdFcnJvcjogU3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBuZXdFcnJvcjtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUobmV3VmFsdWU6IFN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWU7XG4gIH1cblxuICByZWZyZXNoKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEJveC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBhY2NlcHRDbGljaygpIHtcbiAgICAvLyBDaGVjayBpZiB2YWx1ZSBpcyBub3QgZW1wdHlcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCB8fCB0aGlzLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IFwiQSBuZXcgdmFsdWUgY2FuJ3QgYmUgZW1wdHlcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGFzRXJyb3IpIHtcbiAgICAgIHRoaXMuYWNjZXB0RXZlbnQuZW1pdCh7IGlkOiB0aGlzLm9wZXJhdGlvbklkLCBuZXdWYWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWxDbGljaygpIHtcbiAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50LmNhbmNlbENsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
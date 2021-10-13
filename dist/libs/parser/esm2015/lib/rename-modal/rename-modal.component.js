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
        if (this.value == null || this.value == "") {
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
                selector: 'app-rename-modal',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sK0NBQStDLENBQUM7QUFPdkQsTUFBTSxPQUFPLG9CQUFvQjtJQTBDL0I7UUFqQ1UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO0lBMkJkLENBQUM7Ozs7SUF4QmpCLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFnQjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDJtQkFBNEM7O2FBRTdDOzs7OztpQkFFRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUVMLEtBQUs7MkJBQ0wsS0FBSzswQkFFTCxNQUFNOzBCQUNOLE1BQU07MkJBRU4sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBQ25DLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQWF0QyxLQUFLOzs7O0lBekJOLGtDQUFvQjs7SUFDcEIscUNBQXVCOztJQUN2QiwwQ0FBNEI7O0lBQzVCLDBDQUE0Qjs7SUFFNUIsMkNBQTZCOztJQUM3Qiw0Q0FBOEI7O0lBRTlCLDJDQUEyQzs7SUFDM0MsMkNBQTJDOztJQUUzQyw0Q0FBbUU7O0lBQ25FLHdDQUE4RDs7Ozs7SUFFOUQsc0NBQThCOzs7OztJQUM5QixzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBNb2RhbENvbXBvbmVudFxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJlbmFtZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVuYW1lLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbmFtZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvbXB0VGV4dDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY2VwdFRleHQ6IFN0cmluZztcclxuXHJcbiAgQElucHV0KCkgb3BlcmF0aW9uSWQ6IFN0cmluZztcclxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IFN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGFjY2VwdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbEVsZW1lbnQ6IE1vZGFsQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0Qm94JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgX2Vycm9yOiBTdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBTdHJpbmc7XHJcblxyXG4gIGdldCBoYXNFcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBlcnJvcihuZXdFcnJvcjogU3RyaW5nKSB7XHJcbiAgICB0aGlzLl9lcnJvciA9IG5ld0Vycm9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBTdHJpbmcpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICBpZiAodGhpcy5oYXNFcnJvcikge1xyXG4gICAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5pbml0aWFsVmFsdWUpIHtcclxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcclxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEJveC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWNjZXB0Q2xpY2soKSB7XHJcbiAgICAvLyBDaGVjayBpZiB2YWx1ZSBpcyBub3QgZW1wdHlcclxuICAgIGlmICh0aGlzLnZhbHVlID09IG51bGwgfHwgdGhpcy52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yID0gXCJBIG5ldyB2YWx1ZSBjYW4ndCBiZSBlbXB0eVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5oYXNFcnJvcikge1xyXG4gICAgICB0aGlzLmFjY2VwdEV2ZW50LmVtaXQoeyBpZDogdGhpcy5vcGVyYXRpb25JZCwgbmV3VmFsdWU6IHRoaXMudmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWxDbGljaygpIHtcclxuICAgIGlmICh0aGlzLm1vZGFsRWxlbWVudCkge1xyXG4gICAgICB0aGlzLm1vZGFsRWxlbWVudC5jYW5jZWxDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
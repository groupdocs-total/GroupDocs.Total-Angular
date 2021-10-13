/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from "@groupdocs.examples.angular/common-components";
var RenameModalComponent = /** @class */ (function () {
    function RenameModalComponent() {
        this.acceptEvent = new EventEmitter();
        this.cancelEvent = new EventEmitter();
        this._error = null;
    }
    Object.defineProperty(RenameModalComponent.prototype, "hasError", {
        get: /**
         * @return {?}
         */
        function () {
            return this.error != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenameModalComponent.prototype, "error", {
        get: /**
         * @return {?}
         */
        function () {
            return this._error;
        },
        set: /**
         * @param {?} newError
         * @return {?}
         */
        function (newError) {
            this._error = newError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenameModalComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = newValue;
            if (this.hasError) {
                this._error = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RenameModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.initialValue) {
            this.initialValue = "";
        }
        this.value = this.initialValue;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    RenameModalComponent.prototype.refresh = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if ($event) {
            this._error = null;
            this._value = this.initialValue;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.inputBox.nativeElement.focus();
            }), 0);
        }
    };
    /**
     * @return {?}
     */
    RenameModalComponent.prototype.acceptClick = /**
     * @return {?}
     */
    function () {
        // Check if value is not empty
        if (this.value == null || this.value == "") {
            this._error = "A new value can't be empty";
        }
        if (!this.hasError) {
            this.acceptEvent.emit({ id: this.operationId, newValue: this.value });
        }
    };
    /**
     * @return {?}
     */
    RenameModalComponent.prototype.cancelClick = /**
     * @return {?}
     */
    function () {
        if (this.modalElement) {
            this.modalElement.cancelClose();
        }
    };
    RenameModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-rename-modal',
                    template: "<gd-modal #modal [id]=\"id\" [title]=\"title\" (visible)=\"refresh($event)\">\r\n  <div class=\"window\">\r\n    <div class=\"prompt\">{{ promptText }}</div>\r\n    <input #inputBox type=\"text\" [value]=\"value\" (input)=\"value=$event.target.value\" (keyup.enter)=\"acceptClick()\" (keyup.esc)=\"cancelClick()\"/>\r\n\r\n    <div class=\"error\" *ngIf=\"error\">{{ error }}</div>\r\n\r\n    <div class=\"buttons\">      \r\n      <div class=\"btn\" (click)=\"acceptClick()\">{{ acceptText }}</div>\r\n      <div class=\"btn\" (click)=\"cancelClick()\">Cancel</div>\r\n    </div>\r\n  </div>\r\n</gd-modal>",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}input{margin-top:20px;margin-bottom:20px;padding:5px}.window{min-width:400px;min-height:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:24px}.buttons{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-top:auto}.buttons>div{margin-left:10px}.error{color:red;padding-top:1px;padding-bottom:20px}"]
                }] }
    ];
    /** @nocollapse */
    RenameModalComponent.ctorParameters = function () { return []; };
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
    return RenameModalComponent;
}());
export { RenameModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sK0NBQStDLENBQUM7QUFFdkQ7SUErQ0U7UUFqQ1UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO0lBMkJkLENBQUM7SUF4QmpCLHNCQUFJLDBDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQ1UsUUFBZ0I7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BTEE7SUFPRCxzQkFBSSx1Q0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBRUQsVUFBVSxRQUFnQjtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQzs7O09BUEE7Ozs7SUFXRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQWQsaUJBUUM7UUFQQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQyxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDJtQkFBNEM7O2lCQUU3Qzs7Ozs7cUJBRUUsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFFTCxLQUFLOytCQUNMLEtBQUs7OEJBRUwsTUFBTTs4QkFDTixNQUFNOytCQUVOLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUNuQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFhdEMsS0FBSzs7SUFvRFIsMkJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQTlFWSxvQkFBb0I7OztJQUMvQixrQ0FBb0I7O0lBQ3BCLHFDQUF1Qjs7SUFDdkIsMENBQTRCOztJQUM1QiwwQ0FBNEI7O0lBRTVCLDJDQUE2Qjs7SUFDN0IsNENBQThCOztJQUU5QiwyQ0FBMkM7O0lBQzNDLDJDQUEyQzs7SUFFM0MsNENBQW1FOztJQUNuRSx3Q0FBOEQ7Ozs7O0lBRTlELHNDQUE4Qjs7Ozs7SUFDOUIsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWxDb21wb25lbnRcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yZW5hbWUtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZW5hbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlbmFtZS1tb2RhbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW5hbWVNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWQ6IFN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIHByb21wdFRleHQ6IFN0cmluZztcclxuICBASW5wdXQoKSBhY2NlcHRUZXh0OiBTdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIG9wZXJhdGlvbklkOiBTdHJpbmc7XHJcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlOiBTdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBhY2NlcHRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJywgeyBzdGF0aWM6IHRydWUgfSkgbW9kYWxFbGVtZW50OiBNb2RhbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdpbnB1dEJveCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0Qm94OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIF9lcnJvcjogU3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIF92YWx1ZTogU3RyaW5nO1xyXG5cclxuICBnZXQgaGFzRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lcnJvciAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZXJyb3IobmV3RXJyb3I6IFN0cmluZykge1xyXG4gICAgdGhpcy5fZXJyb3IgPSBuZXdFcnJvcjtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZShuZXdWYWx1ZTogU3RyaW5nKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcclxuICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWU7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5wdXRCb3gubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjY2VwdENsaWNrKCkge1xyXG4gICAgLy8gQ2hlY2sgaWYgdmFsdWUgaXMgbm90IGVtcHR5XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PSBudWxsIHx8IHRoaXMudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICB0aGlzLl9lcnJvciA9IFwiQSBuZXcgdmFsdWUgY2FuJ3QgYmUgZW1wdHlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaGFzRXJyb3IpIHtcclxuICAgICAgdGhpcy5hY2NlcHRFdmVudC5lbWl0KHsgaWQ6IHRoaXMub3BlcmF0aW9uSWQsIG5ld1ZhbHVlOiB0aGlzLnZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsQ2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQuY2FuY2VsQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
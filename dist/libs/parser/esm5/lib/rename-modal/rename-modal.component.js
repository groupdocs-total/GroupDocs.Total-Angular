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
        if (this.value === null || this.value === "") {
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
                    selector: 'gd-rename-modal',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuYW1lLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sK0NBQStDLENBQUM7QUFFdkQ7SUErQ0U7UUFqQ1UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtuQyxXQUFNLEdBQVcsSUFBSSxDQUFDO0lBMkJkLENBQUM7SUF4QmpCLHNCQUFJLDBDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQ1UsUUFBZ0I7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BTEE7SUFPRCxzQkFBSSx1Q0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBRUQsVUFBVSxRQUFnQjtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQzs7O09BUEE7Ozs7SUFXRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQWQsaUJBUUM7UUFQQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQyxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNILENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDJtQkFBNEM7O2lCQUU3Qzs7Ozs7cUJBRUUsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFFTCxLQUFLOytCQUNMLEtBQUs7OEJBRUwsTUFBTTs4QkFDTixNQUFNOytCQUVOLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUNuQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFhdEMsS0FBSzs7SUFvRFIsMkJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQTlFWSxvQkFBb0I7OztJQUMvQixrQ0FBb0I7O0lBQ3BCLHFDQUF1Qjs7SUFDdkIsMENBQTRCOztJQUM1QiwwQ0FBNEI7O0lBRTVCLDJDQUE2Qjs7SUFDN0IsNENBQThCOztJQUU5QiwyQ0FBMkM7O0lBQzNDLDJDQUEyQzs7SUFFM0MsNENBQW1FOztJQUNuRSx3Q0FBOEQ7Ozs7O0lBRTlELHNDQUE4Qjs7Ozs7SUFDOUIsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTW9kYWxDb21wb25lbnRcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXJlbmFtZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlbmFtZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVuYW1lLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbmFtZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBTdHJpbmc7XHJcbiAgQElucHV0KCkgcHJvbXB0VGV4dDogU3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjY2VwdFRleHQ6IFN0cmluZztcclxuXHJcbiAgQElucHV0KCkgb3BlcmF0aW9uSWQ6IFN0cmluZztcclxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IFN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGFjY2VwdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbEVsZW1lbnQ6IE1vZGFsQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0Qm94JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRCb3g6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgX2Vycm9yOiBTdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBTdHJpbmc7XHJcblxyXG4gIGdldCBoYXNFcnJvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXJyb3I7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBlcnJvcihuZXdFcnJvcjogU3RyaW5nKSB7XHJcbiAgICB0aGlzLl9lcnJvciA9IG5ld0Vycm9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBTdHJpbmcpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICBpZiAodGhpcy5oYXNFcnJvcikge1xyXG4gICAgICB0aGlzLl9lcnJvciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5pbml0aWFsVmFsdWUpIHtcclxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuX2Vycm9yID0gbnVsbDtcclxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEJveC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWNjZXB0Q2xpY2soKSB7XHJcbiAgICAvLyBDaGVjayBpZiB2YWx1ZSBpcyBub3QgZW1wdHlcclxuICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsIHx8IHRoaXMudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5fZXJyb3IgPSBcIkEgbmV3IHZhbHVlIGNhbid0IGJlIGVtcHR5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmhhc0Vycm9yKSB7XHJcbiAgICAgIHRoaXMuYWNjZXB0RXZlbnQuZW1pdCh7IGlkOiB0aGlzLm9wZXJhdGlvbklkLCBuZXdWYWx1ZTogdGhpcy52YWx1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbENsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMubW9kYWxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50LmNhbmNlbENsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
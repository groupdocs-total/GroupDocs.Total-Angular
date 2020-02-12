/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as jquery from 'jquery';
import { FormattingService } from "../formatting.service";
import { OnCloseService } from "../on-close.service";
/** @type {?} */
var $ = jquery;
var TextMenuComponent = /** @class */ (function () {
    function TextMenuComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.decoration = true;
        this.showTooltips = true;
        this.outFontSize = new EventEmitter();
        this.outFont = new EventEmitter();
        this.outBold = new EventEmitter();
        this.outItalic = new EventEmitter();
        this.outUnderline = new EventEmitter();
        this.outColor = new EventEmitter();
        this.fontSizeOptions = FormattingService.getFontSizeOptions();
        this.fontOptions = FormattingService.getFontOptions();
        this.colorPickerShow = false;
        _onCloseService.onClose.subscribe((/**
         * @return {?}
         */
        function () {
            _this.colorPickerShow = false;
        }));
    }
    /**
     * @return {?}
     */
    TextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.selectFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $(".gd-wrapper").off("keyup");
        this.outFontSize.emit($event.value);
        $(".gd-wrapper").on("keyup", (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fontElements = document.getElementsByTagName("font");
            for (var i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        }));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.selectFont = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        event.preventDefault();
        event.stopPropagation();
        this.outFont.emit($event.value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleColorPicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.selectColor = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerShow = false;
        this.outColor.emit($event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleBold = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outBold.emit(!this.bold);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleItalic = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outItalic.emit(!this.italic);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TextMenuComponent.prototype.toggleUnderline = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.outUnderline.emit(!this.underline);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TextMenuComponent.prototype.closePicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerShow = !$event;
    };
    TextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-text-menu',
                    template: "<div class=\"gd-text-menu\">\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\n             (selected)=\"selectFont($event)\"\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\n             (selected)=\"selectFontSize($event)\"\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"showTooltips ? 'Bold' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleBold($event)\" (touchstart)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"showTooltips ? 'Italic' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleItalic($event)\" (touchstart)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"showTooltips ? 'Underline' : null\" *ngIf=\"decoration\"\n             (click)=\"toggleUnderline($event)\" (touchstart)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"showTooltips ? 'Color' : null\"\n             (click)=\"toggleColorPicker($event)\" (touchstart)=\"toggleColorPicker($event)\">\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\n  </gd-button>\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                   [className]=\"'palette'\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.gd-text-menu .format-select{height:37px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;bottom:0;left:0;right:0;width:100%;height:60px;-webkit-box-align:center;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-200px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .button{margin:3px!important}}"]
                }] }
    ];
    /** @nocollapse */
    TextMenuComponent.ctorParameters = function () { return [
        { type: OnCloseService }
    ]; };
    TextMenuComponent.propDecorators = {
        blur: [{ type: Input }],
        fontSize: [{ type: Input }],
        font: [{ type: Input }],
        bold: [{ type: Input }],
        italic: [{ type: Input }],
        underline: [{ type: Input }],
        color: [{ type: Input }],
        decoration: [{ type: Input }],
        showTooltips: [{ type: Input }],
        outFontSize: [{ type: Output }],
        outFont: [{ type: Output }],
        outBold: [{ type: Output }],
        outItalic: [{ type: Output }],
        outUnderline: [{ type: Output }],
        outColor: [{ type: Output }]
    };
    return TextMenuComponent;
}());
export { TextMenuComponent };
if (false) {
    /** @type {?} */
    TextMenuComponent.prototype.blur;
    /** @type {?} */
    TextMenuComponent.prototype.fontSize;
    /** @type {?} */
    TextMenuComponent.prototype.font;
    /** @type {?} */
    TextMenuComponent.prototype.bold;
    /** @type {?} */
    TextMenuComponent.prototype.italic;
    /** @type {?} */
    TextMenuComponent.prototype.underline;
    /** @type {?} */
    TextMenuComponent.prototype.color;
    /** @type {?} */
    TextMenuComponent.prototype.decoration;
    /** @type {?} */
    TextMenuComponent.prototype.showTooltips;
    /** @type {?} */
    TextMenuComponent.prototype.outFontSize;
    /** @type {?} */
    TextMenuComponent.prototype.outFont;
    /** @type {?} */
    TextMenuComponent.prototype.outBold;
    /** @type {?} */
    TextMenuComponent.prototype.outItalic;
    /** @type {?} */
    TextMenuComponent.prototype.outUnderline;
    /** @type {?} */
    TextMenuComponent.prototype.outColor;
    /** @type {?} */
    TextMenuComponent.prototype.fontSizeOptions;
    /** @type {?} */
    TextMenuComponent.prototype.fontOptions;
    /** @type {?} */
    TextMenuComponent.prototype.colorPickerShow;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._onCloseService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7O0lBRzdDLENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBNEJFLDJCQUFvQixlQUErQjtRQUFuRCxpQkFJQztRQUptQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFmMUMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVuQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDckMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDeEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWhELG9CQUFlLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxnQkFBVyxHQUFHLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBSXRCLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUM7WUFD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QUF5Qzs7aUJBRTFDOzs7O2dCQVRPLGNBQWM7Ozt1QkFXbkIsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBRUwsTUFBTTswQkFDTixNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNOzJCQUNOLE1BQU07O0lBb0VULHdCQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0FwRlksaUJBQWlCOzs7SUFDNUIsaUNBQXVCOztJQUN2QixxQ0FBMEI7O0lBQzFCLGlDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2QixtQ0FBeUI7O0lBQ3pCLHNDQUE0Qjs7SUFDNUIsa0NBQXVCOztJQUN2Qix1Q0FBMkI7O0lBQzNCLHlDQUE2Qjs7SUFFN0Isd0NBQW1EOztJQUNuRCxvQ0FBK0M7O0lBQy9DLG9DQUFnRDs7SUFDaEQsc0NBQWtEOztJQUNsRCx5Q0FBcUQ7O0lBQ3JELHFDQUFnRDs7SUFFaEQsNENBQXlEOztJQUN6RCx3Q0FBaUQ7O0lBQ2pELDRDQUF3Qjs7Ozs7SUFHWiw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi4vb24tY2xvc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtPcHRpb259IGZyb20gXCIuLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudFwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1tZW51LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBibHVyOiBib29sZWFuO1xuICBASW5wdXQoKSBmb250U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBmb250OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvbGQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGl0YWxpYzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5kZXJsaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBkZWNvcmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXBzID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgb3V0Rm9udFNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG91dEZvbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG91dEJvbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvdXRJdGFsaWMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvdXRVbmRlcmxpbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvdXRDb2xvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGZvbnRTaXplT3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRTaXplT3B0aW9ucygpO1xuICBmb250T3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRPcHRpb25zKCk7XG4gIGNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlKSB7XG4gICAgX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdEZvbnRTaXplKCRldmVudDogT3B0aW9uKSB7XG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9mZihcImtleXVwXCIpO1xuICAgIHRoaXMub3V0Rm9udFNpemUuZW1pdCgkZXZlbnQudmFsdWUpO1xuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vbihcImtleXVwXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGZvbnRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9udFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBmb250RWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGZvbnRFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ3NpemUnKSA9PT0gXCI3XCIpIHtcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0ucmVtb3ZlQXR0cmlidXRlKFwic2l6ZVwiKTtcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0uc3R5bGUuZm9udFNpemUgPSAkZXZlbnQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBPcHRpb24pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3V0Rm9udC5lbWl0KCRldmVudC52YWx1ZSk7XG4gIH1cblxuICB0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhdGhpcy5jb2xvclBpY2tlclNob3c7XG4gIH1cblxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5vdXRDb2xvci5lbWl0KCRldmVudCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm91dEJvbGQuZW1pdCghdGhpcy5ib2xkKTtcbiAgfVxuXG4gIHRvZ2dsZUl0YWxpYyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vdXRJdGFsaWMuZW1pdCghdGhpcy5pdGFsaWMpO1xuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm91dFVuZGVybGluZS5lbWl0KCF0aGlzLnVuZGVybGluZSk7XG4gIH1cblxuICBjbG9zZVBpY2tlcigkZXZlbnQpIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICEkZXZlbnQ7XG4gIH1cbn1cbiJdfQ==
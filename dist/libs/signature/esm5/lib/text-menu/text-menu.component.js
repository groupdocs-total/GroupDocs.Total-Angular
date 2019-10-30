/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormattingService, OnCloseService } from "@groupdocs.examples.angular/common-components";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var TextMenuComponent = /** @class */ (function () {
    function TextMenuComponent(_onCloseService) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this.decoration = true;
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
                    template: "<div class=\"gd-text-menu\">\n  <gd-select class=\"format-select\" [options]=\"fontOptions\"\n             (selected)=\"selectFont($event)\"\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\n             (selected)=\"selectFontSize($event)\"\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"'Bold'\" *ngIf=\"decoration\"\n             (click)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"'Italic'\" *ngIf=\"decoration\"\n             (click)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"'Underline'\" *ngIf=\"decoration\"\n             (click)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\n  <gd-button name=\"button\" [icon]=\"'font'\" [tooltip]=\"'Color'\" (click)=\"toggleColorPicker($event)\">\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\n  </gd-button>\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                   [className]=\"'palette'\"\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:flex;flex-direction:row}.gd-text-menu .format-select{margin:7px 15px;max-width:80px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;bottom:0;left:0;right:0;width:100%;height:60px;align-items:center;padding:0;margin:0;background-color:#fff;border:2px solid #707070}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{width:286px!important;position:unset!important}.gd-text-menu ::ng-deep .bcPicker-palette .bcPicker-color{width:42px!important;height:24px!important}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvdGV4dC1tZW51L3RleHQtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBUyxNQUFNLCtDQUErQyxDQUFDO0FBQ3hHLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUUzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTJCRSwyQkFBb0IsZUFBK0I7UUFBbkQsaUJBSUM7UUFKbUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBZDFDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFakIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3JDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRCxvQkFBZSxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekQsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUl0QixlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDO1lBQ2hDLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJ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TCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBRUwsTUFBTTswQkFDTixNQUFNOzBCQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNOzJCQUNOLE1BQU07O0lBb0VULHdCQUFDO0NBQUEsQUF4RkQsSUF3RkM7U0FuRlksaUJBQWlCOzs7SUFDNUIsaUNBQXVCOztJQUN2QixxQ0FBMEI7O0lBQzFCLGlDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2QixtQ0FBeUI7O0lBQ3pCLHNDQUE0Qjs7SUFDNUIsa0NBQXVCOztJQUN2Qix1Q0FBMkI7O0lBRTNCLHdDQUFtRDs7SUFDbkQsb0NBQStDOztJQUMvQyxvQ0FBZ0Q7O0lBQ2hELHNDQUFrRDs7SUFDbEQseUNBQXFEOztJQUNyRCxxQ0FBZ0Q7O0lBRWhELDRDQUF5RDs7SUFDekQsd0NBQWlEOztJQUNqRCw0Q0FBd0I7Ozs7O0lBR1osNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2UsIE9uQ2xvc2VTZXJ2aWNlLCBPcHRpb259IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC10ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1tZW51LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBibHVyOiBib29sZWFuO1xuICBASW5wdXQoKSBmb250U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBmb250OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvbGQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGl0YWxpYzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5kZXJsaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBkZWNvcmF0aW9uID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgb3V0Rm9udFNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG91dEZvbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG91dEJvbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvdXRJdGFsaWMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvdXRVbmRlcmxpbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvdXRDb2xvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGZvbnRTaXplT3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRTaXplT3B0aW9ucygpO1xuICBmb250T3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRPcHRpb25zKCk7XG4gIGNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlKSB7XG4gICAgX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdEZvbnRTaXplKCRldmVudDogT3B0aW9uKSB7XG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9mZihcImtleXVwXCIpO1xuICAgIHRoaXMub3V0Rm9udFNpemUuZW1pdCgkZXZlbnQudmFsdWUpO1xuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vbihcImtleXVwXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGZvbnRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9udFwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBmb250RWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGZvbnRFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ3NpemUnKSA9PT0gXCI3XCIpIHtcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0ucmVtb3ZlQXR0cmlidXRlKFwic2l6ZVwiKTtcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0uc3R5bGUuZm9udFNpemUgPSAkZXZlbnQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBPcHRpb24pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3V0Rm9udC5lbWl0KCRldmVudC52YWx1ZSk7XG4gIH1cblxuICB0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhdGhpcy5jb2xvclBpY2tlclNob3c7XG4gIH1cblxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5vdXRDb2xvci5lbWl0KCRldmVudCk7XG4gIH1cblxuICB0b2dnbGVCb2xkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm91dEJvbGQuZW1pdCghdGhpcy5ib2xkKTtcbiAgfVxuXG4gIHRvZ2dsZUl0YWxpYyhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vdXRJdGFsaWMuZW1pdCghdGhpcy5pdGFsaWMpO1xuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm91dFVuZGVybGluZS5lbWl0KCF0aGlzLnVuZGVybGluZSk7XG4gIH1cblxuICBjbG9zZVBpY2tlcigkZXZlbnQpIHtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICEkZXZlbnQ7XG4gIH1cbn1cbiJdfQ==
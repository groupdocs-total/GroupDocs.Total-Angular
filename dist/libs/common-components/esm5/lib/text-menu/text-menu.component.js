/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import * as jquery from 'jquery';
import { FormattingService } from "../formatting.service";
import { OnCloseService } from "../on-close.service";
import { ZoomService } from '../zoom.service';
import { WindowService } from '../window.service';
/** @type {?} */
var $ = jquery;
var TextMenuComponent = /** @class */ (function () {
    function TextMenuComponent(_onCloseService, _zoomService, _windowService, _elementRef, renderer) {
        var _this = this;
        this._onCloseService = _onCloseService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._elementRef = _elementRef;
        this.renderer = renderer;
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
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (_this.isMobile) {
                _this.changePosition(val);
            }
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
     * @param {?} val
     * @return {?}
     */
    TextMenuComponent.prototype.changePosition = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var top = (window.innerHeight - 24 - this._elementRef.nativeElement.parentElement.getBoundingClientRect().top - this._elementRef.nativeElement.parentElement.getBoundingClientRect().height);
        /** @type {?} */
        var left = this._elementRef.nativeElement.parentElement.getBoundingClientRect().left;
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'width', window.innerWidth + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'top', top + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'left', -left + 'px');
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
                    template: "<div class=\"gd-text-menu\">\r\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\r\n             (selected)=\"selectFont($event)\"\r\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\r\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\r\n             (selected)=\"selectFontSize($event)\"\r\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\r\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"showTooltips ? 'Bold' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleBold($event)\" (touchstart)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\r\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"showTooltips ? 'Italic' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleItalic($event)\" (touchstart)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\r\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"showTooltips ? 'Underline' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleUnderline($event)\" (touchstart)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\r\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"showTooltips ? 'Color' : null\"\r\n             (click)=\"toggleColorPicker($event)\" (touchstart)=\"toggleColorPicker($event)\">\r\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\r\n  </gd-button>\r\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\r\n                   [className]=\"'palette'\"\r\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:flex;flex-direction:row}.gd-text-menu .format-select{height:37px;display:flex;justify-content:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;left:0;right:0;width:inherit;height:60px;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070;transform-origin:top left;z-index:1000}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-185px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .first-component ::ng-deep .dropdown-menu{left:0}.gd-text-menu ::ng-deep .button{margin:3px!important}}"]
                }] }
    ];
    /** @nocollapse */
    TextMenuComponent.ctorParameters = function () { return [
        { type: OnCloseService },
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef },
        { type: Renderer2 }
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
    /** @type {?} */
    TextMenuComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._onCloseService;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype._windowService;
    /**
     * @type {?}
     * @protected
     */
    TextMenuComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TextMenuComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQUU1QyxDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQTZCRSwyQkFBb0IsZUFBK0IsRUFDL0IsWUFBeUIsRUFDekIsY0FBNkIsRUFDM0IsV0FBb0MsRUFDdEMsUUFBbUI7UUFKdkMsaUJBcUJDO1FBckJtQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFwQjlCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFbkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3JDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FB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LHdDQUFpRDs7SUFDakQsNENBQXdCOztJQUV4QixxQ0FBa0I7Ozs7O0lBRU4sNENBQXVDOzs7OztJQUN2Qyx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQzs7Ozs7SUFDckMsd0NBQThDOzs7OztJQUM5QyxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T3B0aW9ufSBmcm9tIFwiLi4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICcuLi96b29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtdGV4dC1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZXh0LW1lbnUuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGJsdXI6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZm9udFNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBmb250OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm9sZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpdGFsaWM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdW5kZXJsaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVjb3JhdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1Rvb2x0aXBzID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIG91dEZvbnRTaXplID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIG91dEZvbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgb3V0Qm9sZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb3V0SXRhbGljID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBvdXRVbmRlcmxpbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIG91dENvbG9yID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGZvbnRTaXplT3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRTaXplT3B0aW9ucygpO1xyXG4gIGZvbnRPcHRpb25zID0gRm9ybWF0dGluZ1NlcnZpY2UuZ2V0Rm9udE9wdGlvbnMoKTtcclxuICBjb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuXHJcbiAgaXNNb2JpbGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgXHJcbiAgICAgX29uQ2xvc2VTZXJ2aWNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pc01vYmlsZSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb24odmFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBvc2l0aW9uKHZhbDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0b3AgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xyXG4gICAgY29uc3QgbGVmdCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2QtdGV4dC1tZW51JyksICd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2QtdGV4dC1tZW51JyksICd0b3AnLCB0b3AgKyAncHgnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC10ZXh0LW1lbnUnKSwgJ2xlZnQnLCAtbGVmdCArICdweCcpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBPcHRpb24pIHtcclxuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vZmYoXCJrZXl1cFwiKTtcclxuICAgIHRoaXMub3V0Rm9udFNpemUuZW1pdCgkZXZlbnQudmFsdWUpO1xyXG4gICAgJChcIi5nZC13cmFwcGVyXCIpLm9uKFwia2V5dXBcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmb250RWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvbnRcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBmb250RWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICBpZiAoZm9udEVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnc2l6ZScpID09PSBcIjdcIikge1xyXG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnJlbW92ZUF0dHJpYnV0ZShcInNpemVcIik7XHJcbiAgICAgICAgICBmb250RWxlbWVudHNbaV0uc3R5bGUuZm9udFNpemUgPSAkZXZlbnQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBPcHRpb24pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMub3V0Rm9udC5lbWl0KCRldmVudC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb2xvclBpY2tlcigkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhdGhpcy5jb2xvclBpY2tlclNob3c7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMub3V0Q29sb3IuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9sZChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vdXRCb2xkLmVtaXQoIXRoaXMuYm9sZCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJdGFsaWMoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMub3V0SXRhbGljLmVtaXQoIXRoaXMuaXRhbGljKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVVuZGVybGluZShldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vdXRVbmRlcmxpbmUuZW1pdCghdGhpcy51bmRlcmxpbmUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQaWNrZXIoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICEkZXZlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
const $ = jquery;
export class TextMenuComponent {
    /**
     * @param {?} _onCloseService
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _elementRef
     * @param {?} renderer
     */
    constructor(_onCloseService, _zoomService, _windowService, _elementRef, renderer) {
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
        () => {
            this.colorPickerShow = false;
        }));
        this.isMobile = _windowService.isMobile();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (this.isMobile) {
                this.changePosition(val);
            }
        }));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    changePosition(val) {
        /** @type {?} */
        const top = (window.innerHeight - 25 - this._elementRef.nativeElement.parentElement.getBoundingClientRect().top - this._elementRef.nativeElement.parentElement.getBoundingClientRect().height);
        /** @type {?} */
        const left = this._elementRef.nativeElement.parentElement.getBoundingClientRect().left;
        this.renderer.setStyle(this._elementRef.nativeElement.parentElement, 'transform', 'scale(' + 1 / (val / 100) + ')');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'width', window.innerWidth + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'top', top + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-text-menu'), 'left', -left + 'px');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFontSize($event) {
        $(".gd-wrapper").off("keyup");
        this.outFontSize.emit($event.value);
        $(".gd-wrapper").on("keyup", (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const fontElements = document.getElementsByTagName("font");
            for (let i = 0, len = fontElements.length; i < len; ++i) {
                if (fontElements[i].getAttribute('size') === "7") {
                    fontElements[i].removeAttribute("size");
                    fontElements[i].style.fontSize = $event + "px";
                }
            }
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFont($event) {
        event.preventDefault();
        event.stopPropagation();
        this.outFont.emit($event.value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleColorPicker($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectColor($event) {
        this.colorPickerShow = false;
        this.outColor.emit($event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleBold(event) {
        event.preventDefault();
        event.stopPropagation();
        this.outBold.emit(!this.bold);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleItalic(event) {
        event.preventDefault();
        event.stopPropagation();
        this.outItalic.emit(!this.italic);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleUnderline(event) {
        event.preventDefault();
        event.stopPropagation();
        this.outUnderline.emit(!this.underline);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closePicker($event) {
        this.colorPickerShow = !$event;
    }
}
TextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-text-menu',
                template: "<div class=\"gd-text-menu\">\r\n  <gd-select class=\"format-select first-component\" [options]=\"fontOptions\"\r\n             (selected)=\"selectFont($event)\"\r\n             [showSelected]=\"{name : font, value : font}\"></gd-select>\r\n  <gd-select class=\"format-select\" [options]=\"fontSizeOptions\"\r\n             (selected)=\"selectFontSize($event)\"\r\n             [showSelected]=\"{name : fontSize + 'px', value : fontSize}\"></gd-select>\r\n  <gd-button [icon]=\"'bold'\" [tooltip]=\"showTooltips ? 'Bold' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleBold($event)\" (touchstart)=\"toggleBold($event)\" [toggle]=\"bold\"></gd-button>\r\n  <gd-button [icon]=\"'italic'\" [tooltip]=\"showTooltips ? 'Italic' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleItalic($event)\" (touchstart)=\"toggleItalic($event)\" [toggle]=\"italic\"></gd-button>\r\n  <gd-button [icon]=\"'underline'\" [tooltip]=\"showTooltips ? 'Underline' : null\" *ngIf=\"decoration\"\r\n             (click)=\"toggleUnderline($event)\" (touchstart)=\"toggleUnderline($event)\" [toggle]=\"underline\"></gd-button>\r\n  <gd-button name=\"button\" class=\"color-for-text\" [icon]=\"'font'\" [tooltip]=\"showTooltips ? 'Color' : null\"\r\n             (click)=\"toggleColorPicker($event)\" (touchstart)=\"toggleColorPicker($event)\">\r\n    <div class=\"bg-color-pic\" [style.background-color]=\"color\"></div>\r\n  </gd-button>\r\n  <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\r\n                   [className]=\"'palette'\"\r\n                   (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: ["::ng-deep .active{background-color:#e7e7e7}.gd-text-menu{display:flex;flex-direction:row}.gd-text-menu .format-select{height:37px;display:flex;justify-content:center;align-items:center;max-width:80px;margin:0 3px}.gd-text-menu .first-component{margin-left:8px}.gd-text-menu ::ng-deep .dropdown-menu{top:40px!important;height:120px;overflow-y:auto}.gd-text-menu ::ng-deep .icon-button{margin:0!important}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}.palette{position:relative;top:40px;left:-55px;z-index:100}@media (max-width:1037px){.gd-text-menu{position:fixed;left:0;right:0;width:inherit;height:60px;align-items:center;padding:0;margin:0;background-color:#fff;border-top:2px solid #707070;transform-origin:top left}.gd-text-menu ::ng-deep .selected-value{white-space:normal!important;word-wrap:break-word}.gd-text-menu .icon{color:#fff;margin:0 9px}.gd-text-menu ::ng-deep .bcPicker-palette{left:-200px;top:-200px}.gd-text-menu .palette{top:unset;bottom:40px;left:unset;right:5px}.gd-text-menu ::ng-deep .dropdown-menu{bottom:40px;top:unset!important}.gd-text-menu ::ng-deep .button{margin:3px!important}}"]
            }] }
];
/** @nocollapse */
TextMenuComponent.ctorParameters = () => [
    { type: OnCloseService },
    { type: ZoomService },
    { type: WindowService },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztNQUU1QyxDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQXdCNUIsWUFBb0IsZUFBK0IsRUFDL0IsWUFBeUIsRUFDekIsY0FBNkIsRUFDM0IsV0FBb0MsRUFDdEMsUUFBbUI7UUFKbkIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBcEI5QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVB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SUFDaEQsc0NBQWtEOztJQUNsRCx5Q0FBcUQ7O0lBQ3JELHFDQUFnRDs7SUFFaEQsNENBQXlEOztJQUN6RCx3Q0FBaUQ7O0lBQ2pELDRDQUF3Qjs7SUFFeEIscUNBQWtCOzs7OztJQUVOLDRDQUF1Qzs7Ozs7SUFDdkMseUNBQWlDOzs7OztJQUNqQywyQ0FBcUM7Ozs7O0lBQ3JDLHdDQUE4Qzs7Ozs7SUFDOUMscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4uL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi4vb24tY2xvc2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge09wdGlvbn0gZnJvbSBcIi4uL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFpvb21TZXJ2aWNlIH0gZnJvbSAnLi4vem9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uL3dpbmRvdy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXRleHQtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1tZW51LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBibHVyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZm9udDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJvbGQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXRhbGljOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHVuZGVybGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlY29yYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwcyA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKSBvdXRGb250U2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBvdXRGb250ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIG91dEJvbGQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIG91dEl0YWxpYyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb3V0VW5kZXJsaW5lID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBvdXRDb2xvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBmb250U2l6ZU9wdGlvbnMgPSBGb3JtYXR0aW5nU2VydmljZS5nZXRGb250U2l6ZU9wdGlvbnMoKTtcclxuICBmb250T3B0aW9ucyA9IEZvcm1hdHRpbmdTZXJ2aWNlLmdldEZvbnRPcHRpb25zKCk7XHJcbiAgY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcblxyXG4gIGlzTW9iaWxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIFxyXG4gICAgIF9vbkNsb3NlU2VydmljZS5vbkNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uKHZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUG9zaXRpb24odmFsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNSAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XHJcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIDEvKHZhbC8xMDApICsgJyknKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC10ZXh0LW1lbnUnKSwgJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGggKyAncHgnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC10ZXh0LW1lbnUnKSwgJ3RvcCcsIHRvcCArICdweCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdkLXRleHQtbWVudScpLCAnbGVmdCcsIC1sZWZ0ICsgJ3B4Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZvbnRTaXplKCRldmVudDogT3B0aW9uKSB7XHJcbiAgICAkKFwiLmdkLXdyYXBwZXJcIikub2ZmKFwia2V5dXBcIik7XHJcbiAgICB0aGlzLm91dEZvbnRTaXplLmVtaXQoJGV2ZW50LnZhbHVlKTtcclxuICAgICQoXCIuZ2Qtd3JhcHBlclwiKS5vbihcImtleXVwXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgZm9udEVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZm9udEVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgaWYgKGZvbnRFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ3NpemUnKSA9PT0gXCI3XCIpIHtcclxuICAgICAgICAgIGZvbnRFbGVtZW50c1tpXS5yZW1vdmVBdHRyaWJ1dGUoXCJzaXplXCIpO1xyXG4gICAgICAgICAgZm9udEVsZW1lbnRzW2ldLnN0eWxlLmZvbnRTaXplID0gJGV2ZW50ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250KCRldmVudDogT3B0aW9uKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm91dEZvbnQuZW1pdCgkZXZlbnQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gIXRoaXMuY29sb3JQaWNrZXJTaG93O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLm91dENvbG9yLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvbGQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMub3V0Qm9sZC5lbWl0KCF0aGlzLmJvbGQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSXRhbGljKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm91dEl0YWxpYy5lbWl0KCF0aGlzLml0YWxpYyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVVbmRlcmxpbmUoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMub3V0VW5kZXJsaW5lLmVtaXQoIXRoaXMudW5kZXJsaW5lKTtcclxuICB9XHJcblxyXG4gIGNsb3NlUGlja2VyKCRldmVudCkge1xyXG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhJGV2ZW50O1xyXG4gIH1cclxufVxyXG4iXX0=
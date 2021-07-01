/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, Renderer2, ElementRef } from '@angular/core';
import { Formatting } from "../formatting.service";
import { WindowService } from "../window.service";
import { ZoomService } from '../zoom.service';
var MenuType = /** @class */ (function () {
    function MenuType() {
    }
    MenuType.FOR_SIGNATURE = "signature";
    MenuType.FOR_ANNOTATION = "annotation";
    return MenuType;
}());
export { MenuType };
if (false) {
    /** @type {?} */
    MenuType.FOR_SIGNATURE;
    /** @type {?} */
    MenuType.FOR_ANNOTATION;
}
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(_windowService, _zoomService, _elementRef, renderer) {
        var _this = this;
        this._windowService = _windowService;
        this._zoomService = _zoomService;
        this._elementRef = _elementRef;
        this.renderer = renderer;
        this.formatting = Formatting.default();
        this.lock = false;
        this.translation = 0;
        this.changeFormatting = new EventEmitter();
        this.removeItem = new EventEmitter();
        this.copySign = new EventEmitter();
        this.lockOut = new EventEmitter();
        this.comment = new EventEmitter();
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
            _this.changeScale(val);
        }));
    }
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ContextMenuComponent.prototype.changeScale = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-context-menu'), 'transform', 'scale(' + 1 / (val / 100) + ')');
        if (!this.isMobile && val && val !== 100) {
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-context-menu'), 'left', this.translation + 'px');
        }
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.saveChanges = /**
     * @return {?}
     */
    function () {
        this.changeFormatting.emit(this.formatting);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.selectFontSize = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.fontSize = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.selectFont = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.font = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.selectColor = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.color = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleBold = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.bold = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleItalic = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.italic = $event;
        this.saveChanges();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleUnderline = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.formatting.underline = $event;
        this.saveChanges();
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.deleteItem = /**
     * @return {?}
     */
    function () {
        this.removeItem.emit(true);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.toggleLock = /**
     * @return {?}
     */
    function () {
        this.lock = !this.lock;
        this.lockOut.emit(this.lock);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.onCopySign = /**
     * @return {?}
     */
    function () {
        this.copySign.emit(true);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.isSignature = /**
     * @return {?}
     */
    function () {
        return this.menuType === MenuType.FOR_SIGNATURE;
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.isAnnotation = /**
     * @return {?}
     */
    function () {
        return this.menuType === MenuType.FOR_ANNOTATION;
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.addComment = /**
     * @return {?}
     */
    function () {
        this.comment.emit(true);
    };
    ContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-context-menu',
                    template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\r\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\r\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\r\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && isSignature()\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\r\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\r\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\r\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\r\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\r\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature()\"></gd-text-menu>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\r\n             (click)=\"toggleLock()\"></gd-button>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\r\n             (touchstart)=\"onCopySign()\"></gd-button>\r\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" (click)=\"deleteItem()\"\r\n             (touchstart)=\"deleteItem()\"></gd-button>\r\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\r\n             (touchstart)=\"addComment()\"></gd-button>\r\n</div>\r\n",
                    styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-42px;-webkit-transform-origin:bottom center;transform-origin:bottom center}}"]
                }] }
    ];
    /** @nocollapse */
    ContextMenuComponent.ctorParameters = function () { return [
        { type: WindowService },
        { type: ZoomService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ContextMenuComponent.propDecorators = {
        formatting: [{ type: Input }],
        textMenu: [{ type: Input }],
        topPosition: [{ type: Input }],
        lock: [{ type: Input }],
        translation: [{ type: Input }],
        menuType: [{ type: Input }],
        changeFormatting: [{ type: Output }],
        removeItem: [{ type: Output }],
        copySign: [{ type: Output }],
        lockOut: [{ type: Output }],
        comment: [{ type: Output }]
    };
    return ContextMenuComponent;
}());
export { ContextMenuComponent };
if (false) {
    /** @type {?} */
    ContextMenuComponent.prototype.formatting;
    /** @type {?} */
    ContextMenuComponent.prototype.textMenu;
    /** @type {?} */
    ContextMenuComponent.prototype.topPosition;
    /** @type {?} */
    ContextMenuComponent.prototype.lock;
    /** @type {?} */
    ContextMenuComponent.prototype.translation;
    /** @type {?} */
    ContextMenuComponent.prototype.menuType;
    /** @type {?} */
    ContextMenuComponent.prototype.changeFormatting;
    /** @type {?} */
    ContextMenuComponent.prototype.removeItem;
    /** @type {?} */
    ContextMenuComponent.prototype.copySign;
    /** @type {?} */
    ContextMenuComponent.prototype.lockOut;
    /** @type {?} */
    ContextMenuComponent.prototype.comment;
    /** @type {?} */
    ContextMenuComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype._zoomService;
    /**
     * @type {?}
     * @protected
     */
    ContextMenuComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDO0lBQUE7SUFHQSxDQUFDO0lBRmUsc0JBQWEsR0FBRyxXQUFXLENBQUM7SUFDNUIsdUJBQWMsR0FBRyxZQUFZLENBQUM7SUFDOUMsZUFBQztDQUFBLEFBSEQsSUFHQztTQUhZLFFBQVE7OztJQUNuQix1QkFBMEM7O0lBQzFDLHdCQUE0Qzs7QUFHOUM7SUFvQkUsOEJBQW9CLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3ZCLFdBQW9DLEVBQ3RDLFFBQW1CO1FBSHZDLGlCQVlDO1FBWm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakI5QixlQUFVLEdBQWUsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRzlDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVmLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFX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O0lBQ3JDLDRDQUFpQzs7Ozs7SUFDakMsMkNBQThDOzs7OztJQUM5Qyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybWF0dGluZ30gZnJvbSBcIi4uL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuLi93aW5kb3cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gJy4uL3pvb20uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgRk9SX1NJR05BVFVSRSA9IFwic2lnbmF0dXJlXCI7XHJcbiAgcHVibGljIHN0YXRpYyBGT1JfQU5OT1RBVElPTiA9IFwiYW5ub3RhdGlvblwiO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNvbnRleHQtbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmb3JtYXR0aW5nOiBGb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XHJcbiAgQElucHV0KCkgdGV4dE1lbnU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdG9wUG9zaXRpb246IG51bWJlcjtcclxuICBASW5wdXQoKSBsb2NrID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHJhbnNsYXRpb24gPSAwO1xyXG4gIEBJbnB1dCgpIG1lbnVUeXBlOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGNoYW5nZUZvcm1hdHRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1hdHRpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlbW92ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGNvcHlTaWduID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBsb2NrT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBjb21tZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBpc01vYmlsZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZVNjYWxlKHZhbCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NhbGUodmFsOiBudW1iZXIpe1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdkLWNvbnRleHQtbWVudScpLCAndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyAxLyh2YWwvMTAwKSArICcpJyk7XHJcbiAgICBpZiAoIXRoaXMuaXNNb2JpbGUgJiYgdmFsICYmIHZhbCAhPT0gMTAwKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC1jb250ZXh0LW1lbnUnKSwgJ2xlZnQnLCB0aGlzLnRyYW5zbGF0aW9uICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuY2hhbmdlRm9ybWF0dGluZy5lbWl0KHRoaXMuZm9ybWF0dGluZyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9sZCgkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSXRhbGljKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLml0YWxpYyA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVVuZGVybGluZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVJdGVtKCkge1xyXG4gICAgdGhpcy5yZW1vdmVJdGVtLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVMb2NrKCkge1xyXG4gICAgdGhpcy5sb2NrID0gIXRoaXMubG9jaztcclxuICAgIHRoaXMubG9ja091dC5lbWl0KHRoaXMubG9jayk7XHJcbiAgfVxyXG5cclxuICBvbkNvcHlTaWduKCkge1xyXG4gICAgdGhpcy5jb3B5U2lnbi5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaXNTaWduYXR1cmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZW51VHlwZSA9PT0gTWVudVR5cGUuRk9SX1NJR05BVFVSRTtcclxuICB9XHJcblxyXG4gIGlzQW5ub3RhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfQU5OT1RBVElPTjtcclxuICB9XHJcblxyXG4gIGFkZENvbW1lbnQoKSB7XHJcbiAgICB0aGlzLmNvbW1lbnQuZW1pdCh0cnVlKTtcclxuICB9XHJcbn1cclxuIl19
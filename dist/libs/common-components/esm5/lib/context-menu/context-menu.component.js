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
            if (_this.isMobile) {
                _this.changeScale(val);
            }
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
                    template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\r\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\r\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\r\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && isSignature()\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\r\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\r\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\r\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\r\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\r\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature()\"></gd-text-menu>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\r\n             (click)=\"toggleLock()\" (touchstart)=\"toggleLock()\"></gd-button>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\r\n             (touchstart)=\"onCopySign()\"></gd-button>\r\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" (click)=\"deleteItem()\"\r\n             (touchstart)=\"deleteItem()\"></gd-button>\r\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\r\n             (touchstart)=\"addComment()\"></gd-button>\r\n</div>\r\n",
                    styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:flex;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-37px;transform-origin:bottom center}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDO0lBQUE7SUFHQSxDQUFDO0lBRmUsc0JBQWEsR0FBRyxXQUFXLENBQUM7SUFDNUIsdUJBQWMsR0FBRyxZQUFZLENBQUM7SUFDOUMsZUFBQztDQUFBLEFBSEQsSUFHQztTQUhZLFFBQVE7OztJQUNuQix1QkFBMEM7O0lBQzFDLHdCQUE0Qzs7QUFHOUM7SUFvQkUsOEJBQW9CLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3ZCLFdBQW9DLEVBQ3RDLFFBQW1CO1FBSHZDLGlCQWVDO1FBZm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakI5QixlQUFVLEdBQWUsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRzlDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVmLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDbEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFX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QztJQUMzQixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELDJDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsY0FBYyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOztnQkFyR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGtuREFBNEM7O2lCQUU3Qzs7OztnQkFaTyxhQUFhO2dCQUNaLFdBQVc7Z0JBSCtDLFVBQVU7Z0JBQXJCLFNBQVM7Ozs2QkFnQjlELEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO21DQUNMLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNOzBCQUNOLE1BQU07MEJBQ04sTUFBTTs7SUFzRlQsMkJBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQWpHWSxvQkFBb0I7OztJQUMvQiwwQ0FBdUQ7O0lBQ3ZELHdDQUEyQjs7SUFDM0IsMkNBQTZCOztJQUM3QixvQ0FBc0I7O0lBQ3RCLDJDQUF5Qjs7SUFDekIsd0NBQTBCOztJQUMxQixnREFBNEQ7O0lBQzVELDBDQUFtRDs7SUFDbkQsd0NBQWlEOztJQUNqRCx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFFaEQsd0NBQWtCOzs7OztJQUVOLDhDQUFxQzs7Ozs7SUFDckMsNENBQWlDOzs7OztJQUNqQywyQ0FBOEM7Ozs7O0lBQzlDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtYXR0aW5nfSBmcm9tIFwiLi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4uL3dpbmRvdy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFpvb21TZXJ2aWNlIH0gZnJvbSAnLi4vem9vbS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51VHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBGT1JfU0lHTkFUVVJFID0gXCJzaWduYXR1cmVcIjtcclxuICBwdWJsaWMgc3RhdGljIEZPUl9BTk5PVEFUSU9OID0gXCJhbm5vdGF0aW9uXCI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtY29udGV4dC1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb250ZXh0LW1lbnUuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcclxuICBASW5wdXQoKSB0ZXh0TWVudTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b3BQb3NpdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxvY2sgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0cmFuc2xhdGlvbiA9IDA7XHJcbiAgQElucHV0KCkgbWVudVR5cGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY2hhbmdlRm9ybWF0dGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybWF0dGluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgY29weVNpZ24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGxvY2tPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGNvbW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGlzTW9iaWxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlzTW9iaWxlKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSh2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NhbGUodmFsOiBudW1iZXIpe1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdkLWNvbnRleHQtbWVudScpLCAndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyAxLyh2YWwvMTAwKSArICcpJyk7XHJcbiAgfVxyXG5cclxuICBzYXZlQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuY2hhbmdlRm9ybWF0dGluZy5lbWl0KHRoaXMuZm9ybWF0dGluZyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnRTaXplID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9sZCgkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy5ib2xkID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSXRhbGljKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLml0YWxpYyA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVVuZGVybGluZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVJdGVtKCkge1xyXG4gICAgdGhpcy5yZW1vdmVJdGVtLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVMb2NrKCkge1xyXG4gICAgdGhpcy5sb2NrID0gIXRoaXMubG9jaztcclxuICAgIHRoaXMubG9ja091dC5lbWl0KHRoaXMubG9jayk7XHJcbiAgfVxyXG5cclxuICBvbkNvcHlTaWduKCkge1xyXG4gICAgdGhpcy5jb3B5U2lnbi5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaXNTaWduYXR1cmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZW51VHlwZSA9PT0gTWVudVR5cGUuRk9SX1NJR05BVFVSRTtcclxuICB9XHJcblxyXG4gIGlzQW5ub3RhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfQU5OT1RBVElPTjtcclxuICB9XHJcblxyXG4gIGFkZENvbW1lbnQoKSB7XHJcbiAgICB0aGlzLmNvbW1lbnQuZW1pdCh0cnVlKTtcclxuICB9XHJcbn1cclxuIl19
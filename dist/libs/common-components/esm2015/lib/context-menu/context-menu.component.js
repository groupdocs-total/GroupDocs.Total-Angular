/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, Renderer2, ElementRef } from '@angular/core';
import { Formatting } from "../formatting.service";
import { WindowService } from "../window.service";
import { ZoomService } from '../zoom.service';
export class MenuType {
}
MenuType.FOR_SIGNATURE = "signature";
MenuType.FOR_ANNOTATION = "annotation";
if (false) {
    /** @type {?} */
    MenuType.FOR_SIGNATURE;
    /** @type {?} */
    MenuType.FOR_ANNOTATION;
}
export class ContextMenuComponent {
    /**
     * @param {?} _windowService
     * @param {?} _zoomService
     * @param {?} _elementRef
     * @param {?} renderer
     */
    constructor(_windowService, _zoomService, _elementRef, renderer) {
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
        (w) => {
            this.isMobile = _windowService.isMobile();
        }));
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            this.changeScale(val);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    changeScale(val) {
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-context-menu'), 'transform', 'scale(' + 1 / (val / 100) + ')');
        if (!this.isMobile && val && val !== 100) {
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.gd-context-menu'), 'left', this.translation + 'px');
        }
    }
    /**
     * @return {?}
     */
    saveChanges() {
        this.changeFormatting.emit(this.formatting);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFontSize($event) {
        this.formatting.fontSize = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectFont($event) {
        this.formatting.font = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectColor($event) {
        this.formatting.color = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleBold($event) {
        this.formatting.bold = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleItalic($event) {
        this.formatting.italic = $event;
        this.saveChanges();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleUnderline($event) {
        this.formatting.underline = $event;
        this.saveChanges();
    }
    /**
     * @return {?}
     */
    deleteItem() {
        this.removeItem.emit(true);
    }
    /**
     * @return {?}
     */
    toggleLock() {
        this.lock = !this.lock;
        this.lockOut.emit(this.lock);
    }
    /**
     * @return {?}
     */
    onCopySign() {
        this.copySign.emit(true);
    }
    /**
     * @return {?}
     */
    isSignature() {
        return this.menuType === MenuType.FOR_SIGNATURE;
    }
    /**
     * @return {?}
     */
    isAnnotation() {
        return this.menuType === MenuType.FOR_ANNOTATION;
    }
    /**
     * @return {?}
     */
    addComment() {
        this.comment.emit(true);
    }
}
ContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-context-menu',
                template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\r\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\r\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\r\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && isSignature()\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\r\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\r\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\r\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\r\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\r\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature()\"></gd-text-menu>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\r\n             (click)=\"toggleLock()\"></gd-button>\r\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\r\n             (touchstart)=\"onCopySign()\"></gd-button>\r\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" (click)=\"deleteItem()\"\r\n             (touchstart)=\"deleteItem()\"></gd-button>\r\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\r\n             (touchstart)=\"addComment()\"></gd-button>\r\n</div>\r\n",
                styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-42px;-webkit-transform-origin:bottom center;transform-origin:bottom center}}"]
            }] }
];
/** @nocollapse */
ContextMenuComponent.ctorParameters = () => [
    { type: WindowService },
    { type: ZoomService },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxRQUFROztBQUNMLHNCQUFhLEdBQUcsV0FBVyxDQUFDO0FBQzVCLHVCQUFjLEdBQUcsWUFBWSxDQUFDOzs7SUFENUMsdUJBQTBDOztJQUMxQyx3QkFBNEM7O0FBUTlDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFlL0IsWUFBb0IsY0FBNkIsRUFDN0IsWUFBeUIsRUFDdkIsV0FBb0MsRUFDdEMsUUFBbUI7UUFIbkIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQjlCLGVBQVUsR0FBZSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHOUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWYscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6QyxhQUFRLEdBQUcsSUFB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Qzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFyR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9sREFBNEM7O2FBRTdDOzs7O1lBWk8sYUFBYTtZQUNaLFdBQVc7WUFIK0MsVUFBVTtZQUFyQixTQUFTOzs7eUJBZ0I5RCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxNQUFNO3lCQUNOLE1BQU07dUJBQ04sTUFBTTtzQkFDTixNQUFNO3NCQUNOLE1BQU07Ozs7SUFWUCwwQ0FBdUQ7O0lBQ3ZELHdDQUEyQjs7SUFDM0IsMkNBQTZCOztJQUM3QixvQ0FBc0I7O0lBQ3RCLDJDQUF5Qjs7SUFDekIsd0NBQTBCOztJQUMxQixnREFBNEQ7O0lBQzVELDBDQUFtRDs7SUFDbkQsd0NBQWlEOztJQUNqRCx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFFaEQsd0NBQWtCOzs7OztJQUVOLDhDQUFxQzs7Ozs7SUFDckMsNENBQWlDOzs7OztJQUNqQywyQ0FBOEM7Ozs7O0lBQzlDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtYXR0aW5nfSBmcm9tIFwiLi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4uL3dpbmRvdy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFpvb21TZXJ2aWNlIH0gZnJvbSAnLi4vem9vbS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51VHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBGT1JfU0lHTkFUVVJFID0gXCJzaWduYXR1cmVcIjtcclxuICBwdWJsaWMgc3RhdGljIEZPUl9BTk5PVEFUSU9OID0gXCJhbm5vdGF0aW9uXCI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtY29udGV4dC1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb250ZXh0LW1lbnUuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZvcm1hdHRpbmc6IEZvcm1hdHRpbmcgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcclxuICBASW5wdXQoKSB0ZXh0TWVudTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0b3BQb3NpdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGxvY2sgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0cmFuc2xhdGlvbiA9IDA7XHJcbiAgQElucHV0KCkgbWVudVR5cGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY2hhbmdlRm9ybWF0dGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybWF0dGluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgY29weVNpZ24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGxvY2tPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGNvbW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGlzTW9iaWxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhbmdlU2NhbGUodmFsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTY2FsZSh2YWw6IG51bWJlcil7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2QtY29udGV4dC1tZW51JyksICd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIDEvKHZhbC8xMDApICsgJyknKTtcclxuICAgIGlmICghdGhpcy5pc01vYmlsZSAmJiB2YWwgJiYgdmFsICE9PSAxMDApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdkLWNvbnRleHQtbWVudScpLCAnbGVmdCcsIHRoaXMudHJhbnNsYXRpb24gKyAncHgnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VGb3JtYXR0aW5nLmVtaXQodGhpcy5mb3JtYXR0aW5nKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZvbnRTaXplKCRldmVudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGb250KCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udCA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcuY29sb3IgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCb2xkKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLmJvbGQgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJdGFsaWMoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcuaXRhbGljID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVW5kZXJsaW5lKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUl0ZW0oKSB7XHJcbiAgICB0aGlzLnJlbW92ZUl0ZW0uZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUxvY2soKSB7XHJcbiAgICB0aGlzLmxvY2sgPSAhdGhpcy5sb2NrO1xyXG4gICAgdGhpcy5sb2NrT3V0LmVtaXQodGhpcy5sb2NrKTtcclxuICB9XHJcblxyXG4gIG9uQ29weVNpZ24oKSB7XHJcbiAgICB0aGlzLmNvcHlTaWduLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpc1NpZ25hdHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfU0lHTkFUVVJFO1xyXG4gIH1cclxuXHJcbiAgaXNBbm5vdGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVudVR5cGUgPT09IE1lbnVUeXBlLkZPUl9BTk5PVEFUSU9OO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29tbWVudCgpIHtcclxuICAgIHRoaXMuY29tbWVudC5lbWl0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=
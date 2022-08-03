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
MenuType.FOR_TEXT_SIGNATURE = "text_signature";
MenuType.FOR_ANNOTATION = "annotation";
if (false) {
    /** @type {?} */
    MenuType.FOR_SIGNATURE;
    /** @type {?} */
    MenuType.FOR_TEXT_SIGNATURE;
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
        this.saveItemEmitter = new EventEmitter();
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
            if (this.isMobile) {
                this.changeScale(val);
            }
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
     * @param {?} $event
     * @return {?}
     */
    saveItem($event) {
        this.saveItemEmitter.emit(true);
        $event.preventDefault();
        $event.stopPropagation();
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
    isTextSignature() {
        return this.menuType === MenuType.FOR_TEXT_SIGNATURE;
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
                template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\r\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\r\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\r\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && (isSignature() || isTextSignature())\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\r\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\r\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\r\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\r\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\r\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature() || isTextSignature()\"></gd-text-menu>\r\n  <gd-button *ngIf=\"isSignature() || isTextSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\r\n             (click)=\"toggleLock()\"></gd-button>\r\n  <gd-button *ngIf=\"isSignature() || isTextSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\r\n             (touchstart)=\"onCopySign()\"></gd-button>\r\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon remove'\" (click)=\"deleteItem()\"\r\n             (touchstart)=\"deleteItem()\"></gd-button>\r\n  <gd-button *ngIf=\"isTextSignature()\" [icon]=\"'check'\" [class]=\"'ng-fa-icon icon save'\" (click)=\"saveItem($event)\"\r\n             (touchstart)=\"saveItem($event)\"></gd-button>\r\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\r\n             (touchstart)=\"addComment()\"></gd-button>\r\n</div>\r\n",
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
    saveItemEmitter: [{ type: Output }],
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
    ContextMenuComponent.prototype.saveItemEmitter;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxRQUFROztBQUNMLHNCQUFhLEdBQUcsV0FBVyxDQUFDO0FBQzVCLDJCQUFrQixHQUFHLGdCQUFnQixDQUFDO0FBQ3RDLHVCQUFjLEdBQUcsWUFBWSxDQUFDOzs7SUFGNUMsdUJBQTBDOztJQUMxQyw0QkFBb0Q7O0lBQ3BELHdCQUE0Qzs7QUFROUMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQWdCL0IsWUFBb0IsY0FBNkIsRUFDN0IsWUFBeUIsRUFDdkIsV0FBb0MsRUFDdEMsUUFBbUI7UUFIbkIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFsQjlCLGVBQVUsR0FBZSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHOUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWYscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNsRCxlQUFV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LDJDQUE4Qzs7Ozs7SUFDOUMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1hdHRpbmd9IGZyb20gXCIuLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi4vd2luZG93LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICcuLi96b29tLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVUeXBlIHtcclxuICBwdWJsaWMgc3RhdGljIEZPUl9TSUdOQVRVUkUgPSBcInNpZ25hdHVyZVwiO1xyXG4gIHB1YmxpYyBzdGF0aWMgRk9SX1RFWFRfU0lHTkFUVVJFID0gXCJ0ZXh0X3NpZ25hdHVyZVwiO1xyXG4gIHB1YmxpYyBzdGF0aWMgRk9SX0FOTk9UQVRJT04gPSBcImFubm90YXRpb25cIjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jb250ZXh0LW1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZXh0LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtbWVudS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybWF0dGluZzogRm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xyXG4gIEBJbnB1dCgpIHRleHRNZW51OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRvcFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbG9jayA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRyYW5zbGF0aW9uID0gMDtcclxuICBASW5wdXQoKSBtZW51VHlwZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2VGb3JtYXR0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtYXR0aW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBzYXZlSXRlbUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGNvcHlTaWduID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBsb2NrT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBjb21tZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBpc01vYmlsZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pc01vYmlsZSlcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU2NhbGUodmFsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNjYWxlKHZhbDogbnVtYmVyKXtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC1jb250ZXh0LW1lbnUnKSwgJ3RyYW5zZm9ybScsICdzY2FsZSgnICsgMS8odmFsLzEwMCkgKyAnKScpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNoYW5nZUZvcm1hdHRpbmcuZW1pdCh0aGlzLmZvcm1hdHRpbmcpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZvbnQoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy5jb2xvciA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvbGQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9ICRldmVudDtcclxuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUl0YWxpYygkZXZlbnQpIHtcclxuICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVVbmRlcmxpbmUoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZvcm1hdHRpbmcudW5kZXJsaW5lID0gJGV2ZW50O1xyXG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlSXRlbSgpIHtcclxuICAgIHRoaXMucmVtb3ZlSXRlbS5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUl0ZW0oJGV2ZW50KSB7XHJcbiAgICB0aGlzLnNhdmVJdGVtRW1pdHRlci5lbWl0KHRydWUpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVMb2NrKCkge1xyXG4gICAgdGhpcy5sb2NrID0gIXRoaXMubG9jaztcclxuICAgIHRoaXMubG9ja091dC5lbWl0KHRoaXMubG9jayk7XHJcbiAgfVxyXG5cclxuICBvbkNvcHlTaWduKCkge1xyXG4gICAgdGhpcy5jb3B5U2lnbi5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaXNTaWduYXR1cmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZW51VHlwZSA9PT0gTWVudVR5cGUuRk9SX1NJR05BVFVSRTtcclxuICB9XHJcblxyXG4gIGlzVGV4dFNpZ25hdHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfVEVYVF9TSUdOQVRVUkU7XHJcbiAgfVxyXG5cclxuICBpc0Fubm90YXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZW51VHlwZSA9PT0gTWVudVR5cGUuRk9SX0FOTk9UQVRJT047XHJcbiAgfVxyXG5cclxuICBhZGRDb21tZW50KCkge1xyXG4gICAgdGhpcy5jb21tZW50LmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
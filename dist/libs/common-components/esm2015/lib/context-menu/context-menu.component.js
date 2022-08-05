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
                template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && (isSignature() || isTextSignature())\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature() || isTextSignature()\"></gd-text-menu>\n  <gd-button *ngIf=\"isSignature() || isTextSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\n             (click)=\"toggleLock()\"></gd-button>\n  <gd-button *ngIf=\"isSignature() || isTextSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\n             (touchstart)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon remove'\" (click)=\"deleteItem()\"\n             (touchstart)=\"deleteItem()\"></gd-button>\n  <gd-button *ngIf=\"isTextSignature()\" [icon]=\"'check'\" [class]=\"'ng-fa-icon icon save'\" (click)=\"saveItem($event)\"\n             (touchstart)=\"saveItem($event)\"></gd-button>\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\n             (touchstart)=\"addComment()\"></gd-button>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxRQUFROztBQUNMLHNCQUFhLEdBQUcsV0FBVyxDQUFDO0FBQzVCLDJCQUFrQixHQUFHLGdCQUFnQixDQUFDO0FBQ3RDLHVCQUFjLEdBQUcsWUFBWSxDQUFDOzs7SUFGNUMsdUJBQTBDOztJQUMxQyw0QkFBb0Q7O0lBQ3BELHdCQUE0Qzs7QUFROUMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQWdCL0IsWUFBb0IsY0FBNkIsRUFDN0IsWUFBeUIsRUFDdkIsV0FBb0MsRUFDdEMsUUFBbUI7UUFIbkIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFsQjlCLGVBQVUsR0FBZSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHOUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWYscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNsRCxlQUFV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LDJDQUE4Qzs7Ozs7SUFDOUMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtYXR0aW5nfSBmcm9tIFwiLi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICcuLi96b29tLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTWVudVR5cGUge1xuICBwdWJsaWMgc3RhdGljIEZPUl9TSUdOQVRVUkUgPSBcInNpZ25hdHVyZVwiO1xuICBwdWJsaWMgc3RhdGljIEZPUl9URVhUX1NJR05BVFVSRSA9IFwidGV4dF9zaWduYXR1cmVcIjtcbiAgcHVibGljIHN0YXRpYyBGT1JfQU5OT1RBVElPTiA9IFwiYW5ub3RhdGlvblwiO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtYXR0aW5nOiBGb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gIEBJbnB1dCgpIHRleHRNZW51OiBib29sZWFuO1xuICBASW5wdXQoKSB0b3BQb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NrID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRyYW5zbGF0aW9uID0gMDtcbiAgQElucHV0KCkgbWVudVR5cGU6IHN0cmluZztcbiAgQE91dHB1dCgpIGNoYW5nZUZvcm1hdHRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1hdHRpbmc+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgc2F2ZUl0ZW1FbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgY29weVNpZ24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBsb2NrT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgY29tbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBpc01vYmlsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgfSk7XG5cbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc01vYmlsZSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZSh2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjaGFuZ2VTY2FsZSh2YWw6IG51bWJlcil7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdkLWNvbnRleHQtbWVudScpLCAndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyAxLyh2YWwvMTAwKSArICcpJyk7XG4gIH1cblxuICBzYXZlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNoYW5nZUZvcm1hdHRpbmcuZW1pdCh0aGlzLmZvcm1hdHRpbmcpO1xuICB9XG5cbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gJGV2ZW50O1xuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIHNlbGVjdENvbG9yKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gJGV2ZW50O1xuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZUJvbGQoJGV2ZW50KSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmJvbGQgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlSXRhbGljKCRldmVudCkge1xuICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKCRldmVudCkge1xuICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgZGVsZXRlSXRlbSgpIHtcbiAgICB0aGlzLnJlbW92ZUl0ZW0uZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHNhdmVJdGVtKCRldmVudCkge1xuICAgIHRoaXMuc2F2ZUl0ZW1FbWl0dGVyLmVtaXQodHJ1ZSk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdG9nZ2xlTG9jaygpIHtcbiAgICB0aGlzLmxvY2sgPSAhdGhpcy5sb2NrO1xuICAgIHRoaXMubG9ja091dC5lbWl0KHRoaXMubG9jayk7XG4gIH1cblxuICBvbkNvcHlTaWduKCkge1xuICAgIHRoaXMuY29weVNpZ24uZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGlzU2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfU0lHTkFUVVJFO1xuICB9XG5cbiAgaXNUZXh0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfVEVYVF9TSUdOQVRVUkU7XG4gIH1cblxuICBpc0Fubm90YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVR5cGUgPT09IE1lbnVUeXBlLkZPUl9BTk5PVEFUSU9OO1xuICB9XG5cbiAgYWRkQ29tbWVudCgpIHtcbiAgICB0aGlzLmNvbW1lbnQuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19
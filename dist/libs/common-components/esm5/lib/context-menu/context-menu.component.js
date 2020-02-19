/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Formatting } from "../formatting.service";
import { WindowService } from "../window.service";
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
    function ContextMenuComponent(_windowService) {
        var _this = this;
        this._windowService = _windowService;
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
                    template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile && isSignature()\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\" [decoration]=\"isSignature()\"></gd-text-menu>\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\"\n             (click)=\"toggleLock()\" (touchstart)=\"toggleLock()\"></gd-button>\n  <gd-button *ngIf=\"isSignature()\" [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"\n             (touchstart)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" (click)=\"deleteItem()\"\n             (touchstart)=\"deleteItem()\"></gd-button>\n  <gd-button *ngIf=\"isAnnotation()\" [icon]=\"'comment'\" [class]=\"'ng-fa-icon icon'\" (click)=\"addComment()\"\n             (touchstart)=\"addComment()\"></gd-button>\n</div>\n",
                    styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-34px}}"]
                }] }
    ];
    /** @nocollapse */
    ContextMenuComponent.ctorParameters = function () { return [
        { type: WindowService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWhEO0lBQUE7SUFHQSxDQUFDO0lBRmUsc0JBQWEsR0FBRyxXQUFXLENBQUM7SUFDNUIsdUJBQWMsR0FBRyxZQUFZLENBQUM7SUFDOUMsZUFBQztDQUFBLEFBSEQsSUFHQztTQUhZLFFBQVE7OztJQUNuQix1QkFBMEM7O0lBQzFDLHdCQUE0Qzs7QUFHOUM7SUFvQkUsOEJBQW9CLGNBQTZCO1FBQWpELGlCQUtDO1FBTG1CLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBZHhDLGVBQVUsR0FBZSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHOUMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWYscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNsRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN2QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUs5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxjQUFjLENBQUMs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MkNBQTZCOztJQUM3QixvQ0FBc0I7O0lBQ3RCLDJDQUF5Qjs7SUFDekIsd0NBQTBCOztJQUMxQixnREFBNEQ7O0lBQzVELDBDQUFtRDs7SUFDbkQsd0NBQWlEOztJQUNqRCx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFFaEQsd0NBQWtCOzs7OztJQUVOLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1hdHRpbmd9IGZyb20gXCIuLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4uL3dpbmRvdy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW51VHlwZSB7XG4gIHB1YmxpYyBzdGF0aWMgRk9SX1NJR05BVFVSRSA9IFwic2lnbmF0dXJlXCI7XG4gIHB1YmxpYyBzdGF0aWMgRk9SX0FOTk9UQVRJT04gPSBcImFubm90YXRpb25cIjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29udGV4dC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRleHQtbWVudS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9ybWF0dGluZzogRm9ybWF0dGluZyA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICBASW5wdXQoKSB0ZXh0TWVudTogYm9vbGVhbjtcbiAgQElucHV0KCkgdG9wUG9zaXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgbG9jayA9IGZhbHNlO1xuICBASW5wdXQoKSB0cmFuc2xhdGlvbiA9IDA7XG4gIEBJbnB1dCgpIG1lbnVUeXBlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjaGFuZ2VGb3JtYXR0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtYXR0aW5nPigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNvcHlTaWduID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgbG9ja091dCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNvbW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgaXNNb2JpbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNhdmVDaGFuZ2VzKCkge1xuICAgIHRoaXMuY2hhbmdlRm9ybWF0dGluZy5lbWl0KHRoaXMuZm9ybWF0dGluZyk7XG4gIH1cblxuICBzZWxlY3RGb250U2l6ZSgkZXZlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250U2l6ZSA9ICRldmVudDtcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XG4gIH1cblxuICBzZWxlY3RGb250KCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmZvbnQgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgc2VsZWN0Q29sb3IoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm1hdHRpbmcuY29sb3IgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlQm9sZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZvcm1hdHRpbmcuYm9sZCA9ICRldmVudDtcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGVJdGFsaWMoJGV2ZW50KSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLml0YWxpYyA9ICRldmVudDtcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XG4gIH1cblxuICB0b2dnbGVVbmRlcmxpbmUoJGV2ZW50KSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLnVuZGVybGluZSA9ICRldmVudDtcbiAgICB0aGlzLnNhdmVDaGFuZ2VzKCk7XG4gIH1cblxuICBkZWxldGVJdGVtKCkge1xuICAgIHRoaXMucmVtb3ZlSXRlbS5lbWl0KHRydWUpO1xuICB9XG5cbiAgdG9nZ2xlTG9jaygpIHtcbiAgICB0aGlzLmxvY2sgPSAhdGhpcy5sb2NrO1xuICAgIHRoaXMubG9ja091dC5lbWl0KHRoaXMubG9jayk7XG4gIH1cblxuICBvbkNvcHlTaWduKCkge1xuICAgIHRoaXMuY29weVNpZ24uZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGlzU2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfU0lHTkFUVVJFO1xuICB9XG5cbiAgaXNBbm5vdGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVUeXBlID09PSBNZW51VHlwZS5GT1JfQU5OT1RBVElPTjtcbiAgfVxuXG4gIGFkZENvbW1lbnQoKSB7XG4gICAgdGhpcy5jb21tZW50LmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Formatting, WindowService } from "@groupdocs.examples.angular/common-components";
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(_windowService) {
        var _this = this;
        this._windowService = _windowService;
        this.formatting = Formatting.default();
        this.lock = false;
        this.translation = 0;
        this.changeFormatting = new EventEmitter();
        this.removeSign = new EventEmitter();
        this.copySign = new EventEmitter();
        this.lockOut = new EventEmitter();
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
    ContextMenuComponent.prototype.deleteSign = /**
     * @return {?}
     */
    function () {
        this.removeSign.emit(true);
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
    ContextMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-context-menu',
                    template: "<div class=\"gd-context-menu\" [ngStyle]=\"isMobile ? null : {transform: 'translateX(' + translation + 'px)'}\"\n     [ngClass]=\"topPosition > 10 ? 'gd-context-menu-top' : 'gd-context-menu-bottom'\">\n  <gd-button [icon]=\"'arrows-alt'\" [class]=\"'ng-fa-icon icon arrows'\" [iconSize]=\"'sm'\"></gd-button>\n  <gd-text-menu *ngIf=\"textMenu\" [blur]=\"isMobile\" [color]=\"formatting.color\" [bold]=\"formatting.bold\"\n                [font]=\"formatting.font\" [fontSize]=\"formatting.fontSize\" [italic]=\"formatting.italic\"\n                [underline]=\"formatting.underline\" (outBold)=\"toggleBold($event)\"\n                (outUnderline)=\"toggleUnderline($event)\" (outItalic)=\"toggleItalic($event)\"\n                (outColor)=\"selectColor($event)\" (outFont)=\"selectFont($event)\"\n                (outFontSize)=\"selectFontSize($event)\"></gd-text-menu>\n  <gd-button [icon]=\"lock ? 'lock' : 'unlock'\" [class]=\"'ng-fa-icon icon'\" (click)=\"toggleLock()\"></gd-button>\n  <gd-button [icon]=\"'copy'\" [class]=\"'ng-fa-icon icon'\" (click)=\"onCopySign()\"></gd-button>\n  <gd-button [icon]=\"'trash'\" [class]=\"'ng-fa-icon icon'\" [iconSize]=\"'sm'\" (click)=\"deleteSign()\"></gd-button>\n</div>\n",
                    styles: [".gd-context-menu-top{top:-44px}.gd-context-menu-bottom{bottom:-40px}.gd-context-menu{box-shadow:rgba(0,0,0,.52) 0 0 5px;background-color:#fff;position:absolute;left:0;right:0;margin:auto;cursor:default;width:max-content;width:-moz-max-content;width:-webkit-max-content;display:flex;flex-direction:row;z-index:999}.gd-context-menu .arrows{cursor:move}.gd-context-menu ::ng-deep .active{background-color:#e7e7e7}.gd-context-menu ::ng-deep .icon-button{margin:0!important}@media (max-width:1037px){.gd-context-menu-top{top:-34px}}"]
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
        changeFormatting: [{ type: Output }],
        removeSign: [{ type: Output }],
        copySign: [{ type: Output }],
        lockOut: [{ type: Output }]
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
    ContextMenuComponent.prototype.changeFormatting;
    /** @type {?} */
    ContextMenuComponent.prototype.removeSign;
    /** @type {?} */
    ContextMenuComponent.prototype.copySign;
    /** @type {?} */
    ContextMenuComponent.prototype.lockOut;
    /** @type {?} */
    ContextMenuComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    ContextMenuComponent.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUNMLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RDtJQWtCRSw4QkFBb0IsY0FBNkI7UUFBakQsaUJBS0M7UUFMbUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFaeEMsZUFBVSxHQUFlLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUc5QyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDZixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ2xELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3ZDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBSzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCw2Q0FBYzs7OztJQUFkLFVBQWUsTUFBYztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxNQUFjO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCx5Q0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCwyQ0FBWTs7OztJQUFaLFVBQWEsTUFBTTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixNQUFNO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isa3RDQUE0Qzs7aUJBRTdDOzs7O2dCQVBDLGFBQWE7Ozs2QkFTWixLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsTUFBTTs2QkFDTixNQUFNOzJCQUNOLE1BQU07MEJBQ04sTUFBTTs7SUE0RFQsMkJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXJFWSxvQkFBb0I7OztJQUMvQiwwQ0FBdUQ7O0lBQ3ZELHdDQUEyQjs7SUFDM0IsMkNBQTZCOztJQUM3QixvQ0FBc0I7O0lBQ3RCLDJDQUF5Qjs7SUFDekIsZ0RBQTREOztJQUM1RCwwQ0FBbUQ7O0lBQ25ELHdDQUFpRDs7SUFDakQsdUNBQWdEOztJQUVoRCx3Q0FBa0I7Ozs7O0lBRU4sOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1hdHRpbmcsXG4gIFdpbmRvd1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jb250ZXh0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGV4dC1tZW51LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtYXR0aW5nOiBGb3JtYXR0aW5nID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XG4gIEBJbnB1dCgpIHRleHRNZW51OiBib29sZWFuO1xuICBASW5wdXQoKSB0b3BQb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NrID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRyYW5zbGF0aW9uID0gMDtcbiAgQE91dHB1dCgpIGNoYW5nZUZvcm1hdHRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1hdHRpbmc+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVTaWduID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgY29weVNpZ24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBsb2NrT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGlzTW9iaWxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzYXZlQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNoYW5nZUZvcm1hdHRpbmcuZW1pdCh0aGlzLmZvcm1hdHRpbmcpO1xuICB9XG5cbiAgc2VsZWN0Rm9udFNpemUoJGV2ZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmZvcm1hdHRpbmcuZm9udFNpemUgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgc2VsZWN0Rm9udCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybWF0dGluZy5mb250ID0gJGV2ZW50O1xuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIHNlbGVjdENvbG9yKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmNvbG9yID0gJGV2ZW50O1xuICAgIHRoaXMuc2F2ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZUJvbGQoJGV2ZW50KSB7XG4gICAgdGhpcy5mb3JtYXR0aW5nLmJvbGQgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlSXRhbGljKCRldmVudCkge1xuICAgIHRoaXMuZm9ybWF0dGluZy5pdGFsaWMgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgdG9nZ2xlVW5kZXJsaW5lKCRldmVudCkge1xuICAgIHRoaXMuZm9ybWF0dGluZy51bmRlcmxpbmUgPSAkZXZlbnQ7XG4gICAgdGhpcy5zYXZlQ2hhbmdlcygpO1xuICB9XG5cbiAgZGVsZXRlU2lnbigpIHtcbiAgICB0aGlzLnJlbW92ZVNpZ24uZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHRvZ2dsZUxvY2soKSB7XG4gICAgdGhpcy5sb2NrID0gIXRoaXMubG9jaztcbiAgICB0aGlzLmxvY2tPdXQuZW1pdCh0aGlzLmxvY2spO1xuICB9XG5cbiAgb25Db3B5U2lnbigpIHtcbiAgICB0aGlzLmNvcHlTaWduLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==
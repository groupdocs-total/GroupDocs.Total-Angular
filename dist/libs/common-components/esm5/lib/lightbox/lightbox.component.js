/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WindowService } from "../window.service";
import { Utils } from "../file.service";
import * as jquery from 'jquery';
/** @type {?} */
var $ = jquery;
var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_windowService) {
        var _this = this;
        this._windowService = _windowService;
        this.opening = new EventEmitter();
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
    LightboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    LightboxComponent.prototype.close = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        /** @type {?} */
        var element = document.elementFromPoint(position.x, position.y);
        if (element && $(element).hasClass('fade')) {
            this.opening.emit(false);
        }
    };
    LightboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-lightbox',
                    template: "<div class=\"gd-modal-lightbox fade\" (click)=\"close($event);\">\n  <div class=\"gd-modal-dialog-lightbox\">\n    <div class=\"gd-modal-content\">\n      <div class=\"gd-modal-header-lightbox\">\n        <div class=\"gd-modal-header-title\">\n          <div class=\"gd-lightbox-close\" (click)=\"close($event)\">\n            <fa-icon *ngIf=\"isMobile\" [icon]=\"['fas','arrow-left']\"></fa-icon>\n            <span *ngIf=\"!isMobile\">&times;</span>\n          </div>\n          <h4 class=\"gd-modal-title-lightbox\">{{title}}</h4>\n        </div>\n        <div class=\"gd-lightbox-header\">\n          <ng-content select=\"[header]\"></ng-content>\n        </div>\n      </div>\n      <div class=\"gd-lightbox-body\">\n        <ng-content select=\"[body]\"></ng-content>\n      </div>\n      <div class=\"gd-modal-footer\">\n        <ng-content select=\"[footer]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-mobile-portrait\">\n    <div class=\"gd-mobile-turn-image\"></div>\n  </div>\n</div>\n",
                    styles: [".gd-modal-lightbox{overflow:hidden;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center}.gd-modal-lightbox.fade{transition:transform .3s ease-out}.gd-modal-lightbox.in{transform:translate(0,0)}.gd-modal-dialog-lightbox{width:1079px;height:590px;margin:auto;box-shadow:#0005 0 0 10px}.gd-modal-content{background-color:#fff;height:100%;width:inherit}.gd-modal-header-lightbox{display:flex;flex-direction:row;height:50px;justify-content:space-between;background-color:#3e4e5a}.gd-modal-header-title{display:flex;flex-direction:row}.gd-lightbox-close{font-size:21px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#959da5;margin:13px 16px 0;cursor:pointer}.gd-modal-title-lightbox{font-size:16px;font-weight:400;line-height:52px;color:#fff;margin:0}.gd-lightbox-body{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.gd-modal-footer{height:25px}@media (max-width:1037px){.gd-modal-lightbox{padding-left:0;padding-top:0}.gd-modal-dialog-lightbox{width:100%!important;height:100%!important;left:0;top:0}.gd-lightbox-close{background-color:#00c4d7;width:50px;height:50px;color:#fff;text-align:center;margin:0;line-height:60px}.gd-lightbox-close span{color:#fff}.gd-modal-title-lightbox{font-size:14px;line-height:50px;padding:0 0 0 10px}.gd-lightbox-body{max-height:calc(100% - 53px);min-height:100%}}@media screen and (max-width:1024px) and (orientation:landscape){.gd-modal-dialog-lightbox{position:fixed;display:block;width:100%!important;height:100%!important;left:0;top:0}.gd-mobile-portrait{display:none}}@media screen and (max-width:1024px) and (orientation:portrait){.gd-modal-dialog-lightbox{display:none}.gd-mobile-portrait{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center}.gd-mobile-turn-image{background-image:url(../../styles/images/noun_landscape_orientation.png)!important;width:215px;height:215px}}"]
                }] }
    ];
    /** @nocollapse */
    LightboxComponent.ctorParameters = function () { return [
        { type: WindowService }
    ]; };
    LightboxComponent.propDecorators = {
        opening: [{ type: Output }],
        title: [{ type: Input }]
    };
    return LightboxComponent;
}());
export { LightboxComponent };
if (false) {
    /** @type {?} */
    LightboxComponent.prototype.opening;
    /** @type {?} */
    LightboxComponent.prototype.title;
    /** @type {?} */
    LightboxComponent.prototype.isMobile;
    /**
     * @type {?}
     * @private
     */
    LightboxComponent.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2xpZ2h0Ym94L2xpZ2h0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUUzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLDJCQUFvQixjQUE2QjtRQUFqRCxpQkFLQztRQUxtQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUp2QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUs5QyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxpQ0FBSzs7OztJQUFMLFVBQU0sTUFBTTs7WUFDSixRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7WUFDekMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJnQ0FBd0M7O2lCQUV6Qzs7OztnQkFWTyxhQUFhOzs7MEJBWWxCLE1BQU07d0JBQ04sS0FBSzs7SUFvQlIsd0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQXRCWSxpQkFBaUI7OztJQUM1QixvQ0FBZ0Q7O0lBQ2hELGtDQUF1Qjs7SUFDdkIscUNBQWtCOzs7OztJQUVOLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWxpZ2h0Ym94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpZ2h0Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlnaHRib3guY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBvcGVuaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBpc01vYmlsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc01vYmlsZSA9IF93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2xvc2UoJGV2ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgaWYgKGVsZW1lbnQgJiYgJChlbGVtZW50KS5oYXNDbGFzcygnZmFkZScpKSB7XG4gICAgICB0aGlzLm9wZW5pbmcuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iXX0=
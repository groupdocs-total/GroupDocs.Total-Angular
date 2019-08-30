/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WindowService } from "../window.service";
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
     * @return {?}
     */
    LightboxComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.opening.emit(false);
    };
    LightboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-lightbox',
                    template: "<div class=\"gd-modal-lightbox fade\"><!--(click)=\"close()\"-->\n  <div class=\"gd-modal-dialog-lightbox\">\n    <div class=\"gd-modal-content\">\n      <div class=\"gd-modal-header-lightbox\">\n        <div class=\"gd-modal-header-title\">\n          <div class=\"gd-lightbox-close\" (click)=\"close()\">\n            <fa-icon *ngIf=\"isMobile\" [icon]=\"['fas','arrow-left']\"></fa-icon>\n            <span *ngIf=\"!isMobile\">&times;</span>\n          </div>\n          <h4 class=\"gd-modal-title-lightbox\">{{title}}</h4>\n        </div>\n        <div class=\"gd-lightbox-header\">\n          <ng-content select=\"[header]\"></ng-content>\n        </div>\n      </div>\n      <div class=\"gd-lightbox-body\">\n        <ng-content select=\"[body]\"></ng-content>\n      </div>\n      <div class=\"gd-modal-footer\">\n        <ng-content select=\"[footer]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-mobile-portrait\">\n    <div class=\"gd-mobile-turn-image\"></div>\n  </div>\n</div>\n",
                    styles: [".gd-modal-lightbox{overflow:hidden;z-index:1050;-webkit-overflow-scrolling:touch;outline:0;background-color:rgba(0,0,0,.5);position:fixed;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center}.gd-modal-lightbox.fade{transition:transform .3s ease-out}.gd-modal-lightbox.in{transform:translate(0,0)}.gd-modal-dialog-lightbox{width:1079px;height:590px;margin:auto;box-shadow:#0005 0 0 10px}.gd-modal-content{background-color:#fff;height:100%;width:inherit}.gd-modal-header-lightbox{display:flex;flex-direction:row;height:50px;justify-content:space-between;background-color:#3e4e5a}.gd-modal-header-title{display:flex;flex-direction:row}.gd-lightbox-close{font-size:21px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#959da5;margin:13px 16px 0;cursor:pointer}.gd-modal-title-lightbox{font-size:16px;font-weight:400;line-height:52px;color:#fff;margin:0}.gd-lightbox-body{background-image:url(../../styles/images/stampBackground.png)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.gd-modal-footer{height:25px}@media (max-width:480px),screen and (max-width:1024px) and (orientation:landscape){.gd-modal-lightbox{padding-left:0;padding-top:0}.gd-modal-dialog-lightbox{width:100%!important;height:100%!important;left:0;top:0}.gd-lightbox-close{background-color:#00c4d7;width:50px;height:50px;color:#fff;text-align:center;margin:0;line-height:60px}.gd-lightbox-close span{color:#fff}.gd-modal-title-lightbox{font-size:14px;line-height:50px;padding:0 0 0 10px}.gd-lightbox-body{max-height:calc(100% - 53px);min-height:100%}}@media screen and (max-width:1024px) and (orientation:landscape){.gd-modal-dialog-lightbox{position:fixed;display:block;width:100%!important;height:100%!important;left:0;top:0}.gd-mobile-portrait{display:none}}@media screen and (max-width:1024px) and (orientation:portrait){.gd-modal-dialog-lightbox{display:none}.gd-mobile-portrait{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center}.gd-mobile-turn-image{background-image:url(../../styles/images/noun_landscape_orientation.png)!important;width:215px;height:215px}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2xpZ2h0Ym94L2xpZ2h0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQ7SUFVRSwyQkFBb0IsY0FBNkI7UUFBakQsaUJBS0M7UUFMbUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFKdkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFLOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixvZ0NBQXdDOztpQkFFekM7Ozs7Z0JBTk8sYUFBYTs7OzBCQVFsQixNQUFNO3dCQUNOLEtBQUs7O0lBZ0JSLHdCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksaUJBQWlCOzs7SUFDNUIsb0NBQWdEOztJQUNoRCxrQ0FBdUI7O0lBQ3ZCLHFDQUFrQjs7Ozs7SUFFTiwyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi4vd2luZG93LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtbGlnaHRib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlnaHRib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWdodGJveC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIG9wZW5pbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIGlzTW9iaWxlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UpIHtcbiAgICB0aGlzLmlzTW9iaWxlID0gX3dpbmRvd1NlcnZpY2UuaXNNb2JpbGUoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSBfd2luZG93U2VydmljZS5pc01vYmlsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9wZW5pbmcuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==
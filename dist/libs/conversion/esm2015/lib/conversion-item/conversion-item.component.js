/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ConversionItemModel } from '../models';
import { ConversionService } from "../conversion.service";
export class ConversionItemComponent {
    /**
     * @param {?} _conversionService
     */
    constructor(_conversionService) {
        this._conversionService = _conversionService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    convert($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this._conversionService.selectedItemToConvert(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    downloadFile(item) {
        window.location.assign(this._conversionService.getDownloadUrl(item.destinationFileName));
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    removeItemFromQueue($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this._conversionService.selectedItemToRemove(item);
    }
}
ConversionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-conversion-item',
                template: "<div *ngIf=\"item\" class=\"gd-convert-item\">\r\n  <div class=\"gd-convert-remove\" [ngClass]=\"{'disabled': item.converting}\" (click)=\"removeItemFromQueue($event, item)\">\r\n    <span>&times;</span>\r\n  </div>\r\n  <div class=\"gd-filequeue-name disabled\">\r\n    <fa-icon [icon]=\"['fas', item.sourceIcon]\" [class]=\"'ng-fa-icon'\"></fa-icon>\r\n    <div class=\"gd-file-name gd-queue-name\">{{item.name}}\r\n      <div class=\"gd-file-format\">{{item.sourceFormatName}}</div>\r\n      <div class=\"gd-file-format mobile\">\r\n        <fa-icon [icon]=\"['fas','arrow-right']\"></fa-icon> \r\n        <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + item.destinationIcon]\"></fa-icon>{{item.destinationFileName}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"gd-file-size gd-queue-size\">{{item.sizeString}}</div>\r\n  <div class=\"gd-convert-status\">\r\n      <fa-icon class=\"gd-conversion-pending\" [icon]=\"['far','clock']\" [hidden]=\"item.converted || item.converting\"></fa-icon>\r\n      <fa-icon class=\"gd-conversion-progress\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" [hidden]=\"!item.converting\"></fa-icon>\r\n      <fa-icon class=\"gd-conversion-complete\" [icon]=\"['fas','check']\" [hidden]=\"!item.converted || item.converting\"></fa-icon>\r\n  </div>\r\n  <div class=\"gd-filequeue-name disabled gd-destination-file\">\r\n      <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"[item.converted ? 'fa-' + item.destinationIcon : '']\"></fa-icon>\r\n    <div class=\"gd-file-name gd-queue-name\">{{item.destinationFileName}}<div class=\"gd-file-format\">{{item.destinationFormatName}}</div></div>\r\n  </div>\r\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single\" \r\n      [ngClass]=\"{'disabled': item.converting}\" [hidden]=\"item.converted\">\r\n      <fa-icon [icon]=\"['fas','play']\"></fa-icon>\r\n  </div>\r\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single mobile\" \r\n    [ngClass]=\"{'disabled': item.converting}\" *ngIf=\"!item.converted && !item.converting\">\r\n    <fa-icon [icon]=\"['fas','play']\"></fa-icon>\r\n  </div>\r\n  <fa-icon class=\"gd-conversion-progress mobile\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" *ngIf=\"item.converting\"></fa-icon>\r\n  <div (click)=\"downloadFile(item)\" class=\"gd-download-single\" [hidden]=\"!item.converted\">\r\n    <fa-icon [icon]=\"['fas','download']\"></fa-icon>\r\n  </div>\r\n</div>",
                styles: [".gd-convert-item{display:-webkit-box;display:flex;width:100%;height:98px;border-bottom:1px solid #e7e7e7;background-color:#fff;-webkit-box-align:center;align-items:center}.gd-convert-remove{font-size:24px;color:#6e6e6e;margin:0 24px;cursor:pointer}.gd-convert-remove span{width:37px;height:37px;display:block;line-height:37px;text-align:center;font-weight:700}.gd-convert-remove.disabled{color:#959da5;opacity:.4}.gd-filequeue-name{display:-webkit-box;display:flex;width:671px}.gd-filequeue-name.disabled fa-icon{color:#6e6e6e}.gd-queue-name{text-align:left;cursor:default}.gd-queue-size{text-align:left;font-size:14px}.gd-destination-file{cursor:not-allowed}.gd-destination-file .gd-queue-name{cursor:inherit}.gd-convert-status{font-size:32px;color:#dbdbdb;margin:0 162px 0 111px}.gd-conversion-complete{color:#62a529;margin-left:5px}.gd-conversion-progress{position:inherit;width:32px;height:32px;font-size:32px!important;line-height:32px;color:#007aff}.gd-conversion-progress.mobile{display:none}.gd-convert-single,.gd-download-single{font-size:16px;color:grey;margin:41px 36px 42px 11px;cursor:pointer}.gd-convert-single.mobile,.gd-download-single.mobile{display:none}.gd-convert-single.disabled,.gd-download-single.disabled{color:#959da5;opacity:.4}.gd-file-format{font-size:10px;color:#acacac;padding-top:4px}.gd-file-format.mobile{display:none}.gd-file-size{width:112px;color:#777}.disabled{cursor:not-allowed!important}.gd-convert-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-convert-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-convert-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-convert-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-convert-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-convert-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-convert-status .ng-fa-icon,.gd-destination-file .ng-fa-icon,.gd-filequeue-name .ng-fa-icon{font-size:33px}.gd-filequeue-name fa-icon{font-size:32px;margin:0 11px 0 0}@media (max-width:1037px){.gd-convert-status,.gd-destination-file,.gd-file-size{display:none}.gd-conversion-progress.mobile{display:block;margin:26px 24px 25px 11px}.gd-convert-single.mobile{display:block;margin:31px 24px 30px 0;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:37px;height:37px}.gd-convert-single:not(.mobile){display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:10px;margin-right:2.1px}.gd-file-format.mobile fa-icon:nth-child(1){margin-right:6px}.gd-file-format{font-size:11px}.gd-file-format:not(.mobile){display:none}.gd-filequeue-name{white-space:nowrap;overflow:hidden}.gd-convert-remove{margin:0 16px 0 15px}}"]
            }] }
];
/** @nocollapse */
ConversionItemComponent.ctorParameters = () => [
    { type: ConversionService }
];
ConversionItemComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ConversionItemComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    ConversionItemComponent.prototype._conversionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb252ZXJzaW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnZlcnNpb24taXRlbS9jb252ZXJzaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFReEQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUN6RCxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBeUI7UUFDdkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBeUI7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUF5QjtRQUNuRCxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHcrRUFBK0M7O2FBRWhEOzs7O1lBTk8saUJBQWlCOzs7bUJBU3RCLEtBQUs7Ozs7SUFBTix1Q0FBbUM7Ozs7O0lBRXZCLHFEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb252ZXJzaW9uSXRlbU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHtDb252ZXJzaW9uU2VydmljZX0gZnJvbSBcIi4uL2NvbnZlcnNpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jb252ZXJzaW9uLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24taXRlbS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSkge1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGNvbnZlcnQoJGV2ZW50LCBpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbVRvQ29udmVydChpdGVtKTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkRmlsZShpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLmdldERvd25sb2FkVXJsKGl0ZW0uZGVzdGluYXRpb25GaWxlTmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUZyb21RdWV1ZSgkZXZlbnQsIGl0ZW06IENvbnZlcnNpb25JdGVtTW9kZWwpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5fY29udmVyc2lvblNlcnZpY2Uuc2VsZWN0ZWRJdGVtVG9SZW1vdmUoaXRlbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
                template: "<div class=\"gd-convert-item\">\n  <div class=\"gd-convert-remove\" (click)=\"removeItemFromQueue($event, item)\">\n    <span>&times;</span>\n  </div>\n  <div class=\"gd-filequeue-name disabled\">\n    <fa-icon [icon]=\"['far', item.sourceIcon]\" [class]=\"'ng-fa-icon'\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.name}}\n      <div class=\"gd-file-format\">{{item.sourceFormatName}}</div>\n      <div class=\"gd-file-format mobile\">\n        <fa-icon [icon]=\"['fas','arrow-right']\"></fa-icon> \n        <fa-icon [icon]=\"['fas', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"['fa-' + item.destinationIcon]\"></fa-icon>{{item.destinationFileName}}\n      </div>\n    </div>\n  </div>\n  <div class=\"gd-file-size gd-queue-size\">{{item.sizeString}}</div>\n  <div class=\"gd-convert-status\">\n      <fa-icon class=\"gd-conversion-pending\" [icon]=\"['far','clock']\" [hidden]=\"item.converted || item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-progress\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" [hidden]=\"!item.converting\"></fa-icon>\n      <fa-icon class=\"gd-conversion-complete\" [icon]=\"['fas','check']\" [hidden]=\"!item.converted || item.converting\"></fa-icon>\n  </div>\n  <div class=\"gd-filequeue-name disabled gd-destination-file\">\n      <fa-icon [icon]=\"['far', item.destinationIcon]\" [class]=\"'ng-fa-icon'\" [ngClass]=\"[item.converted ? 'fa-' + item.destinationIcon : '']\"></fa-icon>\n    <div class=\"gd-file-name gd-queue-name\">{{item.destinationFileName}}<div class=\"gd-file-format\">{{item.destinationFormatName}}</div></div>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single\" \n      [ngClass]=\"{'disabled': item.converting}\" [hidden]=\"item.converted\">\n      <fa-icon [icon]=\"['fas','exchange-alt']\"></fa-icon>\n  </div>\n  <div (click)=\"convert($event, item)\" class=\"gd-convert-single mobile\" \n    [ngClass]=\"{'disabled': item.converting}\" *ngIf=\"!item.converted && !item.converting\">\n    <fa-icon [icon]=\"['fas','exchange-alt']\"></fa-icon>\n  </div>\n  <fa-icon class=\"gd-conversion-progress mobile\" [icon]=\"['fas','circle-notch']\" [spin]=\"true\" *ngIf=\"item.converting\"></fa-icon>\n  <div (click)=\"downloadFile(item)\" class=\"gd-download-single\" [hidden]=\"!item.converted\">\n    <fa-icon [icon]=\"['fas','download']\"></fa-icon>\n  </div>\n</div>",
                styles: [".gd-convert-item{display:flex;width:100%;height:72px;border-bottom:1px solid #ccc}.gd-convert-remove{font-size:21px;color:#6e6e6e;margin:23px 27px 0 21px;cursor:pointer}.gd-filequeue-name{display:flex;width:671px}.gd-filequeue-name.disabled fa-icon{color:#6e6e6e}.gd-queue-name{text-align:left;margin-top:16px;cursor:default}.gd-queue-size{text-align:left;font-size:14px;margin-top:23px}.gd-destination-file{cursor:not-allowed}.gd-destination-file .gd-queue-name{cursor:inherit}.gd-convert-status{font-size:32px;color:#dbdbdb;margin:16px 122px 0 111px}.gd-conversion-complete{color:#62a529;margin-left:5px}.gd-conversion-progress{position:inherit;width:32px;height:32px;font-size:32px!important;margin-top:-5px;color:#007aff}.gd-conversion-progress.mobile{display:none}.gd-convert-single,.gd-download-single{font-size:16px;color:grey;margin:29px 52px;cursor:pointer}.gd-convert-single.mobile,.gd-download-single.mobile{display:none}.gd-file-format{font-size:11px}.gd-file-format.mobile{display:none}.gd-file-size{width:112px;color:#777}.disabled{cursor:not-allowed!important}.gd-convert-item .ng-fa-icon.fa-file-pdf{color:#e21717}.gd-convert-item .ng-fa-icon.fa-file-word{color:#6979b9}.gd-convert-item .ng-fa-icon.fa-file-powerpoint{color:#e29417}.gd-convert-item .ng-fa-icon.fa-file-excel{color:#3fa300}.gd-convert-item .ng-fa-icon.fa-file-image{color:#e217da}.gd-convert-item .ng-fa-icon.fa-file-text .fa-folder{color:#5d6a75}.gd-convert-status .ng-fa-icon,.gd-destination-file .ng-fa-icon,.gd-filequeue-name .ng-fa-icon{font-size:32px}.gd-filequeue-name fa-icon{font-size:32px;margin:16px 21px 0 0}@media (max-width:480px){.gd-convert-status,.gd-destination-file,.gd-file-size{display:none}.gd-conversion-progress.mobile{display:block;margin:16px 45px}.gd-convert-single.mobile{display:block}.gd-convert-single:not(.mobile){display:none}.gd-file-format.mobile{display:block}.gd-file-format.mobile>fa-icon{color:#bebebe}.gd-file-format.mobile fa-icon{font-size:11px;margin-right:6px}.gd-file-format{font-size:11px}.gd-file-format:not(.mobile){display:none}.gd-filequeue-name{white-space:nowrap;overflow:hidden}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb252ZXJzaW9uLyIsInNvdXJjZXMiOlsibGliL2NvbnZlcnNpb24taXRlbS9jb252ZXJzaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBUXhELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFDekQsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTSxFQUFFLElBQXlCO1FBQ3ZDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQXlCO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBeUI7UUFDbkQsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixxM0VBQStDOzthQUVoRDs7OztZQU5PLGlCQUFpQjs7O21CQVN0QixLQUFLOzs7O0lBQU4sdUNBQW1DOzs7OztJQUV2QixxREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb252ZXJzaW9uSXRlbU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuLi9jb252ZXJzaW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29udmVyc2lvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNpb24taXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNpb24taXRlbS5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnZlcnNpb25TZXJ2aWNlOiBDb252ZXJzaW9uU2VydmljZSkge1xuICB9XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGNvbnZlcnQoJGV2ZW50LCBpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbVRvQ29udmVydChpdGVtKTtcbiAgfVxuXG4gIGRvd25sb2FkRmlsZShpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9jb252ZXJzaW9uU2VydmljZS5nZXREb3dubG9hZFVybChpdGVtLmRlc3RpbmF0aW9uRmlsZU5hbWUpKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW1Gcm9tUXVldWUoJGV2ZW50LCBpdGVtOiBDb252ZXJzaW9uSXRlbU1vZGVsKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2NvbnZlcnNpb25TZXJ2aWNlLnNlbGVjdGVkSXRlbVRvUmVtb3ZlKGl0ZW0pO1xuICB9XG59XG4iXX0=
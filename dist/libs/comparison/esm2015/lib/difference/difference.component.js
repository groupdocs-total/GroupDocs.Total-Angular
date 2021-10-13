/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ChangeInfo } from '../models';
import { DifferencesService } from '../differences.service';
export class DifferenceComponent {
    /**
     * @param {?} changeService
     */
    constructor(changeService) {
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changesService.activeChange.subscribe((/**
         * @param {?} activeID
         * @return {?}
         */
        activeID => this.active = this.change.id === activeID));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getRgbaColor(value) {
        return `rgba(${value.red},${value.green},${value.blue},${value.alpha})`;
    }
}
DifferenceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-comparison-difference',
                template: "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\r\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\r\n    <ng-container *ngSwitchCase='1'>\r\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text edited</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='2'>\r\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text added</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='3'>\r\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text deleted</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='4'>\r\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Text added</div>\r\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase='6'>\r\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\r\n      <div class=\"gd-difference-body\">\r\n        <div class=\"gd-difference-title\">Style changed</div>\r\n        <div class=\"gd-differentce-comment\">\r\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\r\n            <div *ngSwitchCase=\"'HighlightColor'\">\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\r\n              &rarr;\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\r\n              <span class=\"property\">Highlight Color</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Color'\">\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\r\n              &rarr;\r\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\r\n              <span class=\"property\">Color</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Size'\">\r\n              {{style.oldValue}} &rarr; {{style.newValue}}\r\n              <span class=\"property\">Font size</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Bold'\">\r\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\r\n              <span class=\"property\">Bold</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'Italic'\">\r\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\r\n              <span class=\"property\">Italic</span>\r\n            </div>\r\n            <div *ngSwitchCase=\"'cS'\">\r\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\r\n              <span class=\"property\">Underline</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.pageNumber + 1}}</div>\r\n  </div>\r\n</div>\r\n",
                styles: [".gd-difference{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;border-bottom:1px solid #eee;cursor:pointer}.gd-difference.active{background-color:#f2f2f2}.gd-difference:hover{background-color:#e5e5e5}.gd-difference .gd-difference-title-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;align-content:stretch;padding:14px 21px 17px 24px}.gd-difference .gd-difference-title-wrapper fa-icon{font-size:14px}.gd-difference .gd-difference-title-wrapper .fa-arrow-right{color:#16b901}.gd-difference .gd-difference-title-wrapper .fa-pencil-alt{color:#ced600}.gd-difference .gd-difference-title-wrapper .fa-times{color:#b96401}.gd-difference .gd-difference-title-wrapper .gd-difference-body{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:24.6px}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title{color:#222e35;font-size:13px;font-weight:700}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment{color:#959da5;font-size:13px;padding-top:10px;overflow:hidden;text-overflow:ellipsis}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color{vertical-align:text-bottom;width:14px;height:14px;display:inline-block;border:1px solid #ccc;border-radius:100%}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property{padding-left:1em}.gd-difference .gd-difference-title-wrapper .gd-difference-page{color:rgba(149,157,165,.48);font-size:11px;white-space:nowrap}"]
            }] }
];
/** @nocollapse */
DifferenceComponent.ctorParameters = () => [
    { type: DifferencesService }
];
DifferenceComponent.propDecorators = {
    change: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DifferenceComponent.prototype.change;
    /** @type {?} */
    DifferenceComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DifferenceComponent.prototype.changesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9kaWZmZXJlbmNlL2RpZmZlcmVuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTzVELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFNOUIsWUFBWSxhQUFrQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUFDLENBQUE7SUFDbkcsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixPQUFPLFFBQVEsS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQzFFLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsMDdIQUEwQzs7YUFFM0M7Ozs7WUFOUSxrQkFBa0I7OztxQkFReEIsS0FBSzs7OztJQUFOLHFDQUE0Qjs7SUFDNUIscUNBQWdCOzs7OztJQUVoQiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlSW5mbywgU3R5bGVDaGFuZ2UgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtY29tcGFyaXNvbi1kaWZmZXJlbmNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlmZmVyZW5jZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlmZmVyZW5jZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjaGFuZ2U6IENoYW5nZUluZm87XHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIGNoYW5nZXNTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjaGFuZ2VTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlID0gY2hhbmdlU2VydmljZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKGFjdGl2ZUlEID0+IHRoaXMuYWN0aXZlID0gdGhpcy5jaGFuZ2UuaWQgPT09IGFjdGl2ZUlEKVxyXG4gIH1cclxuXHJcbiAgZ2V0UmdiYUNvbG9yKHZhbHVlKXtcclxuICAgIHJldHVybiBgcmdiYSgke3ZhbHVlLnJlZH0sJHt2YWx1ZS5ncmVlbn0sJHt2YWx1ZS5ibHVlfSwke3ZhbHVlLmFscGhhfSlgO1xyXG4gIH1cclxufVxyXG4iXX0=
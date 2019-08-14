/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ChangeInfo } from '../models';
import { DifferencesService } from '../differences.service';
var DifferenceComponent = /** @class */ (function () {
    function DifferenceComponent(changeService) {
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    DifferenceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changesService.activeChange.subscribe((/**
         * @param {?} activeID
         * @return {?}
         */
        function (activeID) { return _this.active = _this.change.id === activeID; }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DifferenceComponent.prototype.getRgbaColor = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return "rgba(" + value.red + "," + value.green + "," + value.blue + "," + value.alpha + ")";
    };
    DifferenceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-comparison-difference',
                    template: "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\n    <ng-container *ngSwitchCase='1'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text edited</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='2'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='3'>\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text deleted</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='4'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='6'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Style changed</div>\n        <div class=\"gd-differentce-comment\">\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\n            <div *ngSwitchCase=\"'HighlightColor'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Highlight Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Color'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Size'\">\n              {{style.oldValue}} &rarr; {{style.newValue}}\n              <span class=\"property\">Font size</span>\n            </div>\n            <div *ngSwitchCase=\"'Bold'\">\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\n              <span class=\"property\">Bold</span>\n            </div>\n            <div *ngSwitchCase=\"'Italic'\">\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\n              <span class=\"property\">Italic</span>\n            </div>\n            <div *ngSwitchCase=\"'cS'\">\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\n              <span class=\"property\">Underline</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.id + 1}}</div>\n  </div>\n</div>\n",
                    styles: [".gd-difference{flex-flow:row wrap;border-bottom:1px solid #eee;cursor:pointer}.gd-difference.active{background-color:#f2f2f2}.gd-difference:hover{background-color:#e5e5e5}.gd-difference .gd-difference-title-wrapper{display:flex;flex-direction:row;align-content:stretch;padding:15px 15px 20px 20px}.gd-difference .gd-difference-title-wrapper fa-icon{font-size:14px}.gd-difference .gd-difference-title-wrapper .fa-arrow-right{color:#16b901}.gd-difference .gd-difference-title-wrapper .fa-pencil-alt{color:#ced600}.gd-difference .gd-difference-title-wrapper .fa-times{color:#b96401}.gd-difference .gd-difference-title-wrapper .gd-difference-body{width:100%;display:flex;flex-direction:column;padding-left:15px}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title{color:#222e35;font-size:13px;font-weight:700}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment{color:#959da5;font-size:13px;padding-top:10px;overflow:hidden;text-overflow:ellipsis}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color{vertical-align:text-bottom;width:14px;height:14px;display:inline-block;border:1px solid #ccc;border-radius:100%}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property{padding-left:1em}.gd-difference .gd-difference-title-wrapper .gd-difference-page{color:rgba(149,157,165,.48);font-size:11px;white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    DifferenceComponent.ctorParameters = function () { return [
        { type: DifferencesService }
    ]; };
    DifferenceComponent.propDecorators = {
        change: [{ type: Input }]
    };
    return DifferenceComponent;
}());
export { DifferenceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9kaWZmZXJlbmNlL2RpZmZlcmVuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBV0UsNkJBQVksYUFBa0M7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQXpDLENBQXlDLEVBQUMsQ0FBQTtJQUNuRyxDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLE9BQU8sVUFBUSxLQUFLLENBQUMsR0FBRyxTQUFJLEtBQUssQ0FBQyxLQUFLLFNBQUksS0FBSyxDQUFDLElBQUksU0FBSSxLQUFLLENBQUMsS0FBSyxNQUFHLENBQUM7SUFDMUUsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxveUhBQTBDOztpQkFFM0M7Ozs7Z0JBTlEsa0JBQWtCOzs7eUJBUXhCLEtBQUs7O0lBZ0JSLDBCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksbUJBQW1COzs7SUFDOUIscUNBQTRCOztJQUM1QixxQ0FBZ0I7Ozs7O0lBRWhCLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhbmdlSW5mbywgU3R5bGVDaGFuZ2UgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgRGlmZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi4vZGlmZmVyZW5jZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWNvbXBhcmlzb24tZGlmZmVyZW5jZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWZmZXJlbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlmZmVyZW5jZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGFuZ2U6IENoYW5nZUluZm87XG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICBwcml2YXRlIGNoYW5nZXNTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5nZVNlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2UpIHtcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlID0gY2hhbmdlU2VydmljZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZShhY3RpdmVJRCA9PiB0aGlzLmFjdGl2ZSA9IHRoaXMuY2hhbmdlLmlkID09PSBhY3RpdmVJRClcbiAgfVxuXG4gIGdldFJnYmFDb2xvcih2YWx1ZSl7XG4gICAgcmV0dXJuIGByZ2JhKCR7dmFsdWUucmVkfSwke3ZhbHVlLmdyZWVufSwke3ZhbHVlLmJsdWV9LCR7dmFsdWUuYWxwaGF9KWA7XG4gIH1cbn1cbiJdfQ==
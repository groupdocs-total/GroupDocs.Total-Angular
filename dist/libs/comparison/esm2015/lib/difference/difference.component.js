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
        this.actions = [
            { value: 1, id: "Accept" },
            { value: 2, id: "Reject" },
            { value: 3, id: "None" },
        ];
        this.changesService = changeService;
    }
    /**
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    addAction(id, action) {
        this.changesService.addToComparisonActions(id, action);
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
                template: "<div  class=\"gd-difference\" [ngClass]=\"{'active': active}\">\n  <div [ngSwitch]=\"change.type\" class=\"gd-difference-title-wrapper\">\n    <ng-container *ngSwitchCase='1'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text edited</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n\n        <form>\n          <div *ngFor=\"let action of actions\">\n            <div class=\"gd-difference-action\">\n              \n                <input\n                  type=\"radio\"\n                  name=\"action\"\n                  id=\"action-{{ change.id }}\"\n                  (input)=\"addAction(change.id, $event.target.value)\"\n                  [value]=\"action.value\"\n                />\n                <label for=\"action-{{ change.id }}\"> {{ action.id }} </label>\n              \n            </div>\n          </div>\n        </form>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='2'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n        \n        <form>\n          <div *ngFor=\"let action of actions\">\n            <div class=\"gd-difference-action\">\n              \n                <input\n                  type=\"radio\"\n                  name=\"action\"\n                  id=\"action-{{ change.id }}\"\n                  (input)=\"addAction(change.id, $event.target.value)\"\n                  [value]=\"action.value\"\n                />\n                <label for=\"action-{{ change.id }}\"> {{ action.id }} </label>\n              \n            </div>\n          </div>\n        </form>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='3'>\n      <fa-icon class=\"fas fa-times\" [icon]=\"['fas','trash']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text deleted</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n        \n        <form>\n          <div *ngFor=\"let action of actions\">\n            <div class=\"gd-difference-action\">\n              \n                <input\n                  type=\"radio\"\n                  name=\"action\"\n                  id=\"action-{{ change.id }}\"\n                  (input)=\"addAction(change.id, $event.target.value)\"\n                  [value]=\"action.value\"\n                />\n                <label for=\"action-{{ change.id }}\"> {{ action.id }} </label>\n              \n            </div>\n          </div>\n        </form>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='4'>\n      <fa-icon class=\"fas fa-arrow-right\" [icon]=\"['fas','arrow-right']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Text added</div>\n        <div class=\"gd-differentce-comment\">{{change.text}}</div>\n        \n        <form>\n          <div *ngFor=\"let action of actions\">\n            <div class=\"gd-difference-action\">\n              \n                <input\n                  type=\"radio\"\n                  name=\"action\"\n                  id=\"action-{{ change.id }}\"\n                  (input)=\"addAction(change.id, $event.target.value)\"\n                  [value]=\"action.value\"\n                />\n                <label for=\"action-{{ change.id }}\"> {{ action.id }} </label>\n              \n            </div>\n          </div>\n        </form>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase='6'>\n      <fa-icon class=\"fas fa-pencil-alt\" [icon]=\"['fas','pencil-alt']\"></fa-icon>\n      <div class=\"gd-difference-body\">\n        <div class=\"gd-difference-title\">Style changed</div>\n        <div class=\"gd-differentce-comment\">\n          <ng-container *ngFor=\"let style of change.styleChanges\" [ngSwitch]=\"style.changedProperty\">\n            <div *ngSwitchCase=\"'HighlightColor'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Highlight Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Color'\">\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.oldValue)\"></span>\n              &rarr;\n              <span class=\"color\" [style.backgroundColor]=\"getRgbaColor(style.newValue)\"></span>\n              <span class=\"property\">Color</span>\n            </div>\n            <div *ngSwitchCase=\"'Size'\">\n              {{style.oldValue}} &rarr; {{style.newValue}}\n              <span class=\"property\">Font size</span>\n            </div>\n            <div *ngSwitchCase=\"'Bold'\">\n              <span [style.fontWeight]=\"style.oldValue ? 'bold' : ''\">{{change.text}}</span> &rarr; <span [style.fontWeight]=\"style.newValue ? 'bold' : ''\">{{change.text}}</span>\n              <span class=\"property\">Bold</span>\n            </div>\n            <div *ngSwitchCase=\"'Italic'\">\n              <span [style.fontStyle]=\"style.oldValue ? 'italic' : ''\">{{change.text}}</span> &rarr; <span [style.fontStyle]=\"style.newValue ? 'italic' : ''\">{{change.text}}</span>\n              <span class=\"property\">Italic</span>\n            </div>\n            <div *ngSwitchCase=\"'cS'\">\n              <span [style.textDecoration]=\"style.oldValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span> &rarr; <span [style.textDecoration]=\"style.newValue === 'SINGLE' ? 'underline' : ''\">{{change.text}}</span>\n              <span class=\"property\">Underline</span>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      \n      <form>\n          <div *ngFor=\"let action of actions\">\n            <div class=\"gd-difference-action\">\n              \n                <input\n                  type=\"radio\"\n                  name=\"action\"\n                  id=\"action-{{ change.id }}\"\n                  (input)=\"addAction(change.id, $event.target.value)\"\n                  [value]=\"action.value\"\n                />\n                <label for=\"action-{{ change.id }}\"> {{ action.id }} </label>\n              \n            </div>\n          </div>\n        </form>\n    </ng-container>\n    <div class=\"gd-difference-page\">Page {{change.pageInfo.pageNumber + 1}}</div>\n  </div>\n</div>\n",
                styles: [".gd-difference{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;border-bottom:1px solid #eee;cursor:pointer}.gd-difference.active{background-color:#f2f2f2}.gd-difference:hover{background-color:#e5e5e5}.gd-difference .gd-difference-action{white-space:nowrap;color:#222e35;font-size:13px;font-weight:700;padding-top:5px}.gd-difference .gd-difference-title-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;align-content:stretch;padding:14px 21px 17px 24px}.gd-difference .gd-difference-title-wrapper fa-icon{font-size:14px}.gd-difference .gd-difference-title-wrapper .fa-arrow-right{color:#16b901}.gd-difference .gd-difference-title-wrapper .fa-pencil-alt{color:#ced600}.gd-difference .gd-difference-title-wrapper .fa-times{color:#b96401}.gd-difference .gd-difference-title-wrapper .gd-difference-body{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding-left:24.6px}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-difference-title{color:#222e35;font-size:13px;font-weight:700}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment{color:#959da5;font-size:13px;padding-top:10px;overflow:hidden;text-overflow:ellipsis}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .color{vertical-align:text-bottom;width:14px;height:14px;display:inline-block;border:1px solid #ccc;border-radius:100%}.gd-difference .gd-difference-title-wrapper .gd-difference-body .gd-differentce-comment .property{padding-left:1em}.gd-difference .gd-difference-title-wrapper .gd-difference-page{color:rgba(149,157,165,.48);font-size:11px;white-space:nowrap}"]
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
    /** @type {?} */
    DifferenceComponent.prototype.actions;
    /** @type {?} */
    DifferenceComponent.prototype.changeAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9kaWZmZXJlbmNlL2RpZmZlcmVuY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTzVELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFhOUIsWUFBWSxhQUFrQztRQVB2QyxZQUFPLEdBQUc7WUFDZixFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBQztZQUN2QixFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLFFBQVEsRUFBQztZQUN2QixFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBQztTQUN0QixDQUFBO1FBSUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQUUsRUFBRSxNQUFNO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3hELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUMsQ0FBQTtJQUNuRyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sUUFBUSxLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDMUUsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxpbE5BQTBDOzthQUUzQzs7OztZQU5RLGtCQUFrQjs7O3FCQVF4QixLQUFLOzs7O0lBQU4scUNBQTRCOztJQUM1QixxQ0FBZ0I7Ozs7O0lBRWhCLDZDQUE0Qzs7SUFFNUMsc0NBSUM7O0lBQ0QsMkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFuZ2VJbmZvLCBTdHlsZUNoYW5nZSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtY29tcGFyaXNvbi1kaWZmZXJlbmNlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpZmZlcmVuY2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWZmZXJlbmNlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNoYW5nZTogQ2hhbmdlSW5mbztcbiAgYWN0aXZlOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY2hhbmdlc1NlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2U7XG5cbiAgcHVibGljIGFjdGlvbnMgPSBbXG4gICAge3ZhbHVlOiAxLCBpZDpcIkFjY2VwdFwifSxcbiAgICB7dmFsdWU6IDIsIGlkOlwiUmVqZWN0XCJ9LFxuICAgIHt2YWx1ZTogMywgaWQ6XCJOb25lXCJ9LFxuICBdXG4gIHB1YmxpYyBjaGFuZ2VBY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihjaGFuZ2VTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZSA9IGNoYW5nZVNlcnZpY2U7XG4gIH1cblxuICBhZGRBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2UuYWRkVG9Db21wYXJpc29uQWN0aW9ucyhpZCwgYWN0aW9uKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKGFjdGl2ZUlEID0+IHRoaXMuYWN0aXZlID0gdGhpcy5jaGFuZ2UuaWQgPT09IGFjdGl2ZUlEKVxuICB9XG5cbiAgZ2V0UmdiYUNvbG9yKHZhbHVlKXtcbiAgICByZXR1cm4gYHJnYmEoJHt2YWx1ZS5yZWR9LCR7dmFsdWUuZ3JlZW59LCR7dmFsdWUuYmx1ZX0sJHt2YWx1ZS5hbHBoYX0pYDtcbiAgfVxufVxuIl19
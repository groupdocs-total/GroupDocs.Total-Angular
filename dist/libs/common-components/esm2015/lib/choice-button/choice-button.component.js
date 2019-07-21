/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ChoiceButtonComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.open = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    openChoices() {
        this.open = !this.open;
    }
    /**
     * @param {?} choice
     * @return {?}
     */
    select(choice) {
        this.selected.emit(choice);
        this.open = false;
    }
}
ChoiceButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-choice-button',
                template: "<div class=\"choice-button\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <fa-icon [icon]=\"['fas','angle-down']\" (click)=\"openChoices()\"></fa-icon>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n        <fa-icon [icon]=\"['fas',choice.icon]\"></fa-icon>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
                styles: [".choice-button{color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:12px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
            }] }
];
/** @nocollapse */
ChoiceButtonComponent.ctorParameters = () => [];
ChoiceButtonComponent.propDecorators = {
    name: [{ type: Input }],
    icon: [{ type: Input }],
    choices: [{ type: Input }],
    selected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ChoiceButtonComponent.prototype.name;
    /** @type {?} */
    ChoiceButtonComponent.prototype.icon;
    /** @type {?} */
    ChoiceButtonComponent.prototype.choices;
    /** @type {?} */
    ChoiceButtonComponent.prototype.selected;
    /** @type {?} */
    ChoiceButtonComponent.prototype.open;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY2hvaWNlLWJ1dHRvbi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU83RSxNQUFNLE9BQU8scUJBQXFCO0lBT2hDO1FBSFUsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RFLFNBQUksR0FBRyxLQUFLLENBQUM7SUFFRyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix5aUJBQTZDOzthQUU5Qzs7Ozs7bUJBRUUsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsTUFBTTs7OztJQUhQLHFDQUFzQjs7SUFDdEIscUNBQXNCOztJQUN0Qix3Q0FBaUI7O0lBQ2pCLHlDQUFzRTs7SUFDdEUscUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jaG9pY2UtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nob2ljZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hvaWNlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNob2ljZXM7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgb3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuQ2hvaWNlcygpIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG5cbiAgc2VsZWN0KGNob2ljZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KGNob2ljZSk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
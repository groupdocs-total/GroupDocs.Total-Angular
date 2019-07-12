/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ChoiceButtonComponent = /** @class */ (function () {
    function ChoiceButtonComponent() {
        this.selected = new EventEmitter();
        this.open = false;
    }
    /**
     * @return {?}
     */
    ChoiceButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ChoiceButtonComponent.prototype.openChoices = /**
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    /**
     * @param {?} choice
     * @return {?}
     */
    ChoiceButtonComponent.prototype.select = /**
     * @param {?} choice
     * @return {?}
     */
    function (choice) {
        this.selected.emit(choice);
        this.open = false;
    };
    ChoiceButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-choice-button',
                    template: "<div class=\"choice-button\">\n  <fa-icon [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <fa-icon [icon]=\"['fas','angle-down']\" (click)=\"openChoices()\"></fa-icon>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n        <fa-icon [icon]=\"['fas',choice.icon]\"></fa-icon>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n",
                    styles: [".choice-button{width:137px;height:31px;color:#fff;background-color:#25c2d4;display:flex}.choice-button .ng-fa-icon{padding:8px;font-size:15px}.down{cursor:pointer;background-color:#1fa5b4;width:31px;font-size:10px;display:flex;justify-content:center}.button-name{font-size:10px;padding-top:11px;padding-right:27px}.choices{color:#b2b8bd;top:33px;left:109px;position:absolute;padding:5px;margin:0;background-color:#fff;width:80px;border:0;border-radius:0;box-shadow:0 0 6px #ccc}.choice{cursor:pointer;font-size:12px;padding:3px}.choice i{color:#959da5}.upload-from{font-size:7px}"]
                }] }
    ];
    /** @nocollapse */
    ChoiceButtonComponent.ctorParameters = function () { return []; };
    ChoiceButtonComponent.propDecorators = {
        name: [{ type: Input }],
        icon: [{ type: Input }],
        choices: [{ type: Input }],
        selected: [{ type: Output }]
    };
    return ChoiceButtonComponent;
}());
export { ChoiceButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY2hvaWNlLWJ1dHRvbi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RTtJQVlFO1FBSFUsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RFLFNBQUksR0FBRyxLQUFLLENBQUM7SUFFRyxDQUFDOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHNDQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIseWlCQUE2Qzs7aUJBRTlDOzs7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxNQUFNOztJQWdCVCw0QkFBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLHFCQUFxQjs7O0lBQ2hDLHFDQUFzQjs7SUFDdEIscUNBQXNCOztJQUN0Qix3Q0FBaUI7O0lBQ2pCLHlDQUFzRTs7SUFDdEUscUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1jaG9pY2UtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nob2ljZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hvaWNlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNob2ljZXM7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgb3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuQ2hvaWNlcygpIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG5cbiAgc2VsZWN0KGNob2ljZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KGNob2ljZSk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
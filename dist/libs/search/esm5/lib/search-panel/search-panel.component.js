/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
var SearchPanelComponent = /** @class */ (function () {
    function SearchPanelComponent() {
        this.text = "";
        this.searchText = new EventEmitter();
        this.clearQuery = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SearchPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SearchPanelComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.searchText.emit(this.text);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchPanelComponent.prototype.setText = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.text = value;
        if (value === "") {
            this.clearQueryString();
        }
    };
    /**
     * @return {?}
     */
    SearchPanelComponent.prototype.clearQueryString = /**
     * @return {?}
     */
    function () {
        this.text = "";
        this.textElement.nativeElement.value = '';
        this.clearQuery.emit("");
    };
    SearchPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-search-panel',
                    template: "<div class=\"gd-search-panel\">\r\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"search()\" #text (input)=\"setText(text.value)\" placeholder=\"Search query\"/>\r\n  <gd-button class=\"gd-clear-btn\" [icon]=\"'times'\" [tooltip]=\"'Clear search query'\" (click)=\"clearQueryString()\" *ngIf=\"text.value\"></gd-button>\r\n  <gd-button class=\"gd-search-btn\" [icon]=\"'search'\" (click)=\"search()\" [iconOnly]=\"false\"></gd-button>\r\n</div>\r\n",
                    styles: [".gd-search-panel{position:absolute;display:-webkit-box;display:flex;left:0;top:60px;width:100%;background-color:#e7e7e7;-webkit-box-align:center;align-items:center;height:60px}.gd-search-panel .gd-search-input{float:left;height:37px;width:100%;font-size:14px;border:1px solid #6e6e6e;box-sizing:border-box;padding:6px 0 5px 9px;margin-left:20px}.gd-search-panel .gd-search-btn{background-color:#3e4e5a;margin-right:20px;width:37px;height:37px;padding:0!important}.gd-search-panel .gd-search-btn ::ng-deep .button{padding:0!important}.gd-search-panel .gd-clear-btn{position:absolute;right:50px}"]
                }] }
    ];
    /** @nocollapse */
    SearchPanelComponent.ctorParameters = function () { return []; };
    SearchPanelComponent.propDecorators = {
        textElement: [{ type: ViewChild, args: ['text', {
                        static: true
                    },] }],
        searchText: [{ type: Output }],
        clearQuery: [{ type: Output }]
    };
    return SearchPanelComponent;
}());
export { SearchPanelComponent };
if (false) {
    /** @type {?} */
    SearchPanelComponent.prototype.textElement;
    /**
     * @type {?}
     * @private
     */
    SearchPanelComponent.prototype.text;
    /** @type {?} */
    SearchPanelComponent.prototype.searchText;
    /** @type {?} */
    SearchPanelComponent.prototype.clearQuery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBZUU7UUFKUSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHMUMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLEtBQUssS0FBSyxFQUFFLEVBQ2hCO1lBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixnZUFBNEM7O2lCQUU3Qzs7Ozs7OEJBR0UsU0FBUyxTQUFDLE1BQU0sRUFBQzt3QkFDaEIsTUFBTSxFQUFHLElBQUk7cUJBQ2Q7NkJBR0EsTUFBTTs2QkFDTixNQUFNOztJQXlCVCwyQkFBQztDQUFBLEFBdENELElBc0NDO1NBakNZLG9CQUFvQjs7O0lBRS9CLDJDQUUyQjs7Ozs7SUFFM0Isb0NBQWtCOztJQUNsQiwwQ0FBMEM7O0lBQzFDLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RleHQnLHtcclxuICAgIHN0YXRpYyA6IHRydWVcclxuICB9KSB0ZXh0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0ID0gXCJcIjtcclxuICBAT3V0cHV0KCkgc2VhcmNoVGV4dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2xlYXJRdWVyeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNlYXJjaCgpIHtcclxuICAgIHRoaXMuc2VhcmNoVGV4dC5lbWl0KHRoaXMudGV4dCk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGV4dCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmNsZWFyUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyUXVlcnlTdHJpbmcoKSB7XHJcbiAgICB0aGlzLnRleHQgPSBcIlwiXHJcbiAgICB0aGlzLnRleHRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuY2xlYXJRdWVyeS5lbWl0KFwiXCIpO1xyXG4gIH1cclxufVxyXG4iXX0=
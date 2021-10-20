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
                    template: "<div class=\"gd-search-panel\">\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"search()\" #text (input)=\"setText(text.value)\" placeholder=\"Search query\"/>\n  <gd-button class=\"gd-clear-btn\" [icon]=\"'times'\" [tooltip]=\"'Clear search query'\" (click)=\"clearQueryString()\" *ngIf=\"text.value\"></gd-button>\n  <gd-button class=\"gd-search-btn\" [icon]=\"'search'\" (click)=\"search()\" [iconOnly]=\"false\"></gd-button>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBZUU7UUFKUSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHMUMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxzQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLEtBQUssS0FBSyxFQUFFLEVBQ2hCO1lBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzZEFBNEM7O2lCQUU3Qzs7Ozs7OEJBR0UsU0FBUyxTQUFDLE1BQU0sRUFBQzt3QkFDaEIsTUFBTSxFQUFHLElBQUk7cUJBQ2Q7NkJBR0EsTUFBTTs2QkFDTixNQUFNOztJQXlCVCwyQkFBQztDQUFBLEFBdENELElBc0NDO1NBakNZLG9CQUFvQjs7O0lBRS9CLDJDQUUyQjs7Ozs7SUFFM0Isb0NBQWtCOztJQUNsQiwwQ0FBMEM7O0lBQzFDLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ3RleHQnLHtcbiAgICBzdGF0aWMgOiB0cnVlXG4gIH0pIHRleHRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgdGV4dCA9IFwiXCI7XG4gIEBPdXRwdXQoKSBzZWFyY2hUZXh0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xlYXJRdWVyeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoVGV4dC5lbWl0KHRoaXMudGV4dCk7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IFwiXCIpXG4gICAge1xuICAgICAgdGhpcy5jbGVhclF1ZXJ5U3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJRdWVyeVN0cmluZygpIHtcbiAgICB0aGlzLnRleHQgPSBcIlwiXG4gICAgdGhpcy50ZXh0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5jbGVhclF1ZXJ5LmVtaXQoXCJcIik7XG4gIH1cbn1cbiJdfQ==
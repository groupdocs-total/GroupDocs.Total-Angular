/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
export class SearchPanelComponent {
    constructor() {
        this.text = "";
        this.searchText = new EventEmitter();
        this.clearQuery = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    search() {
        this.searchText.emit(this.text);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setText(value) {
        this.text = value;
        if (value === "") {
            this.clearQueryString();
        }
    }
    /**
     * @return {?}
     */
    clearQueryString() {
        this.text = "";
        this.textElement.nativeElement.value = '';
        this.clearQuery.emit("");
    }
}
SearchPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-search-panel',
                template: "<div class=\"gd-search-panel\">\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"search()\" #text (input)=\"setText(text.value)\" placeholder=\"Search query\"/>\n  <gd-button class=\"gd-clear-btn\" [icon]=\"'times'\" [tooltip]=\"'Clear search query'\" (click)=\"clearQueryString()\" *ngIf=\"text.value\"></gd-button>\n  <gd-button class=\"gd-search-btn\" [icon]=\"'search'\" (click)=\"search()\" [iconOnly]=\"false\"></gd-button>\n</div>\n",
                styles: [".gd-search-panel{position:absolute;display:-webkit-box;display:flex;left:0;top:60px;width:100%;background-color:#e7e7e7;-webkit-box-align:center;align-items:center;height:60px}.gd-search-panel .gd-search-input{float:left;height:37px;width:100%;font-size:14px;border:1px solid #6e6e6e;box-sizing:border-box;padding:6px 0 5px 9px;margin-left:20px}.gd-search-panel .gd-search-btn{background-color:#3e4e5a;margin-right:20px;width:37px;height:37px;padding:0!important}.gd-search-panel .gd-search-btn ::ng-deep .button{padding:0!important}.gd-search-panel .gd-clear-btn{position:absolute;right:50px}"]
            }] }
];
/** @nocollapse */
SearchPanelComponent.ctorParameters = () => [];
SearchPanelComponent.propDecorators = {
    textElement: [{ type: ViewChild, args: ['text', {
                    static: true
                },] }],
    searchText: [{ type: Output }],
    clearQuery: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdGLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0I7UUFKUSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHMUMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFDaEI7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzZEFBNEM7O2FBRTdDOzs7OzswQkFHRSxTQUFTLFNBQUMsTUFBTSxFQUFDO29CQUNoQixNQUFNLEVBQUcsSUFBSTtpQkFDZDt5QkFHQSxNQUFNO3lCQUNOLE1BQU07Ozs7SUFOUCwyQ0FFMkI7Ozs7O0lBRTNCLG9DQUFrQjs7SUFDbEIsMENBQTBDOztJQUMxQywwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCd0ZXh0Jyx7XG4gICAgc3RhdGljIDogdHJ1ZVxuICB9KSB0ZXh0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIHRleHQgPSBcIlwiO1xuICBAT3V0cHV0KCkgc2VhcmNoVGV4dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsZWFyUXVlcnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlYXJjaCgpIHtcbiAgICB0aGlzLnNlYXJjaFRleHQuZW1pdCh0aGlzLnRleHQpO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiKVxuICAgIHtcbiAgICAgIHRoaXMuY2xlYXJRdWVyeVN0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUXVlcnlTdHJpbmcoKSB7XG4gICAgdGhpcy50ZXh0ID0gXCJcIlxuICAgIHRoaXMudGV4dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMuY2xlYXJRdWVyeS5lbWl0KFwiXCIpO1xuICB9XG59XG4iXX0=
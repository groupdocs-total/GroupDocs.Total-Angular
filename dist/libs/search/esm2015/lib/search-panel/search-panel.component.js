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
                template: "<div class=\"gd-search-panel\">\r\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"search()\" #text (input)=\"setText(text.value)\" placeholder=\"Search query\"/>\r\n  <gd-button class=\"gd-clear-btn\" [icon]=\"'times'\" [tooltip]=\"'Clear search query'\" (click)=\"clearQueryString()\" *ngIf=\"text.value\"></gd-button>\r\n  <gd-button class=\"gd-search-btn\" [icon]=\"'search'\" (click)=\"search()\" [iconOnly]=\"false\"></gd-button>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdGLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0I7UUFKUSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHMUMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFDaEI7WUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixnZUFBNEM7O2FBRTdDOzs7OzswQkFHRSxTQUFTLFNBQUMsTUFBTSxFQUFDO29CQUNoQixNQUFNLEVBQUcsSUFBSTtpQkFDZDt5QkFHQSxNQUFNO3lCQUNOLE1BQU07Ozs7SUFOUCwyQ0FFMkI7Ozs7O0lBRTNCLG9DQUFrQjs7SUFDbEIsMENBQTBDOztJQUMxQywwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKCd0ZXh0Jyx7XHJcbiAgICBzdGF0aWMgOiB0cnVlXHJcbiAgfSkgdGV4dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgdGV4dCA9IFwiXCI7XHJcbiAgQE91dHB1dCgpIHNlYXJjaFRleHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNsZWFyUXVlcnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICB0aGlzLnNlYXJjaFRleHQuZW1pdCh0aGlzLnRleHQpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRleHQgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIilcclxuICAgIHtcclxuICAgICAgdGhpcy5jbGVhclF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhclF1ZXJ5U3RyaW5nKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gXCJcIlxyXG4gICAgdGhpcy50ZXh0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmNsZWFyUXVlcnkuZW1pdChcIlwiKTtcclxuICB9XHJcbn1cclxuIl19
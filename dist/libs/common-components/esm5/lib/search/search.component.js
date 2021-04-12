/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SearchService } from "../search.service";
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService) {
        var _this = this;
        this._searchService = _searchService;
        this.hidePanel = new EventEmitter(false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe((/**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            _this.total = total;
            if (total !== 0) {
                _this.current = 1;
            }
            else {
                _this.current = 0;
            }
            _this._searchService.setCurrent(_this.current);
        }));
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SearchComponent.prototype.setText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this._searchService.setText(text);
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.setText('');
        this.hidePanel.emit(true);
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.textElement.nativeElement.focus();
    };
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-search',
                    template: "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" (keydown.enter)=\"next()\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-left'\" [disabled]=\"total == 0 || current == 1\" (click)=\"prev()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn\" [icon]=\"'chevron-right'\" [disabled]=\"total == 0 || current == total\" (click)=\"next()\">\n  </gd-button>\n  <gd-button class=\"gd-nav-search-btn gd-nav-search-cancel\" [icon]=\"'times'\" (click)=\"hide()\">\n  </gd-button>\n</div>\n",
                    styles: [".gd-nav-search-btn{margin:3px 0 4px}.gd-nav-search-cancel{color:#fff;font-size:14px;width:37px}.gd-search-count{color:#959da5;font-size:12px;position:absolute;right:148px;top:14px}.gd-nav-search-container{background-color:#3e4e5a;width:410px;position:fixed;left:50%;top:60px;z-index:2;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);display:-webkit-box;display:flex}.gd-search-input{float:left;height:30px;width:267px;font-size:14px;color:#6e6e6e;border:1px solid #25c2d4;margin:7px 0 7px 7px;box-sizing:border-box;padding:6px 0 5px 9px}input[type=text]::-ms-clear{display:none}@media (max-width:1037px){.gd-search-input{width:231px;height:30px;margin:7px 0 7px 5px}.gd-search-count{position:absolute;left:193px;top:15px}.gd-nav-search-container{width:100%}}"]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: SearchService }
    ]; };
    SearchComponent.propDecorators = {
        hidePanel: [{ type: Output }],
        textElement: [{ type: ViewChild, args: ['text', {
                        static: true
                    },] }]
    };
    return SearchComponent;
}());
export { SearchComponent };
if (false) {
    /** @type {?} */
    SearchComponent.prototype.hidePanel;
    /** @type {?} */
    SearchComponent.prototype.current;
    /** @type {?} */
    SearchComponent.prototype.total;
    /** @type {?} */
    SearchComponent.prototype.textElement;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype._searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQWdCRSx5QkFBb0IsY0FBNkI7UUFBakQsaUJBVUM7UUFWbUIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFUdkMsY0FBUyxHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXZELFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBT1IsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ2pELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUNELEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELGlDQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7SUFFRCw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs7O0lBRUQseUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsa3BCQUFzQzs7aUJBRXZDOzs7O2dCQU5PLGFBQWE7Ozs0QkFTbEIsTUFBTTs4QkFLTixTQUFTLFNBQUMsTUFBTSxFQUFDO3dCQUNoQixNQUFNLEVBQUcsSUFBSTtxQkFDZDs7SUEyQ0gsc0JBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXBEWSxlQUFlOzs7SUFFMUIsb0NBQXVEOztJQUV2RCxrQ0FBWTs7SUFDWixnQ0FBVTs7SUFFVixzQ0FFMkI7Ozs7O0lBRWYseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuLi9zZWFyY2guc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBAT3V0cHV0KCkgaGlkZVBhbmVsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgY3VycmVudCA9IDA7XG4gIHRvdGFsID0gMDtcblxuICBAVmlld0NoaWxkKCd0ZXh0Jyx7XG4gICAgc3RhdGljIDogdHJ1ZVxuICB9KSB0ZXh0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlKSB7XG4gICAgX3NlYXJjaFNlcnZpY2UudG90YWxDaGFuZ2Uuc3Vic2NyaWJlKCh0b3RhbDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICBpZiAodG90YWwgIT09IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNldEN1cnJlbnQodGhpcy5jdXJyZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNldFRleHQodGV4dCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuc2V0VGV4dCgnJyk7XG4gICAgdGhpcy5oaWRlUGFuZWwuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA+IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudC0tO1xuICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5zZXRDdXJyZW50KHRoaXMuY3VycmVudCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50IDwgdGhpcy50b3RhbCkge1xuICAgICAgdGhpcy5jdXJyZW50Kys7XG4gICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnNldEN1cnJlbnQodGhpcy5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==
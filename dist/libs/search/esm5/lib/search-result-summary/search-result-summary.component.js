/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SearchResult } from '../search-models';
var SearchResultSummaryComponent = /** @class */ (function () {
    function SearchResultSummaryComponent() {
    }
    /**
     * @return {?}
     */
    SearchResultSummaryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SearchResultSummaryComponent.prototype.getTotalOccurrencesMessage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var message = "Nothing found";
        if (this.searchResult) {
            if (this.searchResult.totalOccurences === 0) {
                return message;
            }
            return "Found <b>" + this.searchResult.totalOccurences + "</b> occurrences <b>" + this.searchResult.totalFiles + "</b> files";
        }
        return message;
    };
    /**
     * @return {?}
     */
    SearchResultSummaryComponent.prototype.getIndexedFilesMessage = /**
     * @return {?}
     */
    function () {
        if (this.searchResult) {
            return "<b>" + this.searchResult.indexedFiles + "</b> files indexed";
        }
    };
    /**
     * @return {?}
     */
    SearchResultSummaryComponent.prototype.getSearchDuration = /**
     * @return {?}
     */
    function () {
        if (this.searchResult) {
            return this.searchResult.searchDuration;
        }
    };
    SearchResultSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-search-result-summary',
                    template: "<div id=\"gd-search-result-summary\">\n  <div class=\"gd-search-result-summary-status\">\n    <fa-icon [icon]=\"['fas','search']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-total-occurrences\" [innerHTML]=\"getTotalOccurrencesMessage()\"></div>\n    <fa-icon [icon]=\"['fas','clock']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-search-duration\">{{getSearchDuration()}} sec</div>\n    <div class=\"gd-indexed-files\" [innerHTML]=\"getIndexedFilesMessage()\"></div>\n  </div>\n  <div *ngIf=\"searchResult?.totalOccurences > 0\" class=\"gd-search-result-summary-header\">\n    <div>File</div>\n    <div>Occurrences</div>\n    <div>Size</div>\n  </div>\n  <div *ngIf=\"searchResult?.foundFiles\" class=\"gd-search-result-summary-body\">\n    <div *ngFor=\"let item of searchResult.foundFiles\">\n        <gd-search-result-item [item]=\"item\"></gd-search-result-item>\n    </div>\n  </div>\n</div>",
                    styles: ["#gd-search-result-summary{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7;top:120px;position:absolute;width:100%}.gd-search-result-summary-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-search-result-summary-status{display:-webkit-box;display:flex;font-size:12px;color:#fff;width:100%;height:30px;background-color:#25c2d4;-webkit-box-align:center;align-items:center;padding-left:17px}.gd-total-occurrences{padding-left:8px;padding-right:17px}.gd-search-duration{padding-left:8px}.gd-indexed-files{right:18px;position:absolute}.gd-search-result-summary-header div:nth-child(1){width:253px;text-align:left;display:-webkit-box;display:flex;padding-left:17px}.gd-search-result-summary-header div:nth-child(2){text-align:left;display:-webkit-box;display:flex}.gd-search-result-summary-header div:nth-child(3){width:30px;position:fixed;right:111px;text-align:left}.gd-search-result-summary-body{overflow-y:scroll;height:calc(100% - 210px)}.gd-search-result-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-indexed-files,.gd-search-result-header,.gd-search-result-summary-header div:nth-child(3){display:none}.gd-search-result-summary-header div:nth-child(2){position:absolute;right:18px}}"]
                }] }
    ];
    /** @nocollapse */
    SearchResultSummaryComponent.ctorParameters = function () { return []; };
    SearchResultSummaryComponent.propDecorators = {
        searchResult: [{ type: Input }]
    };
    return SearchResultSummaryComponent;
}());
export { SearchResultSummaryComponent };
if (false) {
    /** @type {?} */
    SearchResultSummaryComponent.prototype.searchResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXJlc3VsdC1zdW1tYXJ5L3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF5QixZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV2RTtJQVNFO0lBQ0EsQ0FBQzs7OztJQUVELCtDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxpRUFBMEI7OztJQUExQjs7WUFDUSxPQUFPLEdBQUcsZUFBZTtRQUUvQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQzNDO2dCQUNFLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBQy9IO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELDZEQUFzQjs7O0lBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7OztJQUVELHdEQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLGs3QkFBcUQ7O2lCQUV0RDs7Ozs7K0JBR0UsS0FBSzs7SUFrQ1IsbUNBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQW5DWSw0QkFBNEI7OztJQUN2QyxvREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRJdGVtTW9kZWwsIFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL3NlYXJjaC1tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gtcmVzdWx0LXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXJlc3VsdC1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLXJlc3VsdC1zdW1tYXJ5LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0VG90YWxPY2N1cnJlbmNlc01lc3NhZ2UoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IFwiTm90aGluZyBmb3VuZFwiO1xuXG4gICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0KSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHQudG90YWxPY2N1cmVuY2VzID09PSAwKVxuICAgICAge1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiRm91bmQgPGI+XCIgKyB0aGlzLnNlYXJjaFJlc3VsdC50b3RhbE9jY3VyZW5jZXMgKyBcIjwvYj4gb2NjdXJyZW5jZXMgPGI+XCIgKyB0aGlzLnNlYXJjaFJlc3VsdC50b3RhbEZpbGVzICsgXCI8L2I+IGZpbGVzXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH1cblxuICBnZXRJbmRleGVkRmlsZXNNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIFwiPGI+XCIgKyB0aGlzLnNlYXJjaFJlc3VsdC5pbmRleGVkRmlsZXMgKyBcIjwvYj4gZmlsZXMgaW5kZXhlZFwiO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlYXJjaER1cmF0aW9uKCkge1xuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoUmVzdWx0LnNlYXJjaER1cmF0aW9uO1xuICAgIH1cbiAgfVxufVxuIl19